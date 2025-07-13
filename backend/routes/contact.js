import express from 'express';
import Joi from 'joi';
import Contact from '../models/Contact.js';
import { sendContactEmail } from '../config/email.js';
import rateLimit from 'express-rate-limit';

const router = express.Router();

// Rate limiting for contact form submissions
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 requests per windowMs
  message: {
    success: false,
    message: 'Too many contact form submissions. Please try again after 15 minutes.',
    retryAfter: 15 * 60 * 1000
  },
  standardHeaders: true,
  legacyHeaders: false,
});

// Validation schema
const contactSchema = Joi.object({
  name: Joi.string().trim().min(2).max(100).required()
    .messages({
      'string.empty': 'Name is required',
      'string.min': 'Name must be at least 2 characters long',
      'string.max': 'Name cannot exceed 100 characters'
    }),
  phone: Joi.string().trim().pattern(/^[6-9]\d{9}$/).required()
    .messages({
      'string.empty': 'Phone number is required',
      'string.pattern.base': 'Please enter a valid 10-digit Indian phone number'
    }),
  email: Joi.string().trim().email().allow('').optional()
    .messages({
      'string.email': 'Please enter a valid email address'
    }),
  childAge: Joi.string().trim().max(50).allow('').optional()
    .messages({
      'string.max': 'Child age cannot exceed 50 characters'
    }),
  message: Joi.string().trim().min(10).max(1000).required()
    .messages({
      'string.empty': 'Message is required',
      'string.min': 'Message must be at least 10 characters long',
      'string.max': 'Message cannot exceed 1000 characters'
    }),
  urgency: Joi.string().valid('normal', 'urgent', 'emergency').default('normal')
});

// @route   POST /api/contact
// @desc    Submit contact form
// @access  Public
router.post('/', contactLimiter, async (req, res) => {
  try {
    // Validate request body
    const { error, value } = contactSchema.validate(req.body);
    
    if (error) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: error.details.map(detail => ({
          field: detail.path[0],
          message: detail.message
        }))
      });
    }

    // Get client IP address
    const ipAddress = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || 
                     (req.connection.socket ? req.connection.socket.remoteAddress : null);

    // Create contact record
    const contactData = {
      ...value,
      ipAddress
    };

    const contact = new Contact(contactData);
    await contact.save();

    console.log(`📝 New contact form submission: ${contact.name} (${contact.urgency})`);

    // Send emails
    let emailResult = { success: false };
    try {
      emailResult = await sendContactEmail(value);
      
      if (emailResult.success) {
        contact.emailSent = true;
        contact.emailSentAt = new Date();
        await contact.save();
      }
    } catch (emailError) {
      console.error('❌ Email sending failed:', emailError);
    }

    // Respond with success
    res.status(201).json({
      success: true,
      message: 'आपका संदेश सफलतापूर्वक भेजा गया है। हम जल्द ही आपसे संपर्क करेंगे। / Your message has been sent successfully. We will contact you soon.',
      data: {
        id: contact._id,
        name: contact.name,
        phone: contact.phone,
        urgency: contact.urgency,
        submittedAt: contact.createdAt,
        emailSent: contact.emailSent
      },
      emailStatus: emailResult.success ? 'sent' : 'failed'
    });

    // Log emergency submissions
    if (contact.urgency === 'emergency') {
      console.log(`🚨 EMERGENCY CONTACT: ${contact.name} - ${contact.phone}`);
    }

  } catch (error) {
    console.error('❌ Contact form submission error:', error);
    
    res.status(500).json({
      success: false,
      message: 'तकनीकी समस्या के कारण आपका संदेश नहीं भेजा जा सका। कृपया सीधे कॉल करें: 9128231000 / Technical error occurred. Please call directly: 9128231000',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    });
  }
});

// @route   GET /api/contact/dashboard
// @desc    Get dashboard statistics (for admin)
// @access  Public (should be protected in production)
router.get('/dashboard', async (req, res) => {
  try {
    const stats = await Contact.getDashboardStats();
    
    res.json({
      success: true,
      data: {
        total: stats.total[0]?.count || 0,
        today: stats.today[0]?.count || 0,
        byUrgency: stats.byUrgency,
        byStatus: stats.byStatus,
        recentContacts: stats.recentContacts
      }
    });
  } catch (error) {
    console.error('❌ Dashboard stats error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch dashboard statistics'
    });
  }
});

// @route   GET /api/contact/emergency
// @desc    Get emergency contacts
// @access  Public (should be protected in production)
router.get('/emergency', async (req, res) => {
  try {
    const emergencyContacts = await Contact.getEmergencyContacts();
    
    res.json({
      success: true,
      data: emergencyContacts
    });
  } catch (error) {
    console.error('❌ Emergency contacts error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch emergency contacts'
    });
  }
});

// @route   GET /api/contact
// @desc    Get all contacts with pagination
// @access  Public (should be protected in production)
router.get('/', async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const sort = req.query.sort || '-createdAt';
    const status = req.query.status;
    const urgency = req.query.urgency;

    // Build filter
    const filter = {};
    if (status) filter.status = status;
    if (urgency) filter.urgency = urgency;

    const skip = (page - 1) * limit;

    const contacts = await Contact.find(filter)
      .sort(sort)
      .skip(skip)
      .limit(limit)
      .select('-notes -ipAddress');

    const total = await Contact.countDocuments(filter);
    const totalPages = Math.ceil(total / limit);

    res.json({
      success: true,
      data: {
        contacts,
        pagination: {
          currentPage: page,
          totalPages,
          total,
          hasNext: page < totalPages,
          hasPrev: page > 1
        }
      }
    });
  } catch (error) {
    console.error('❌ Get contacts error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch contacts'
    });
  }
});

// @route   PUT /api/contact/:id/status
// @desc    Update contact status
// @access  Public (should be protected in production)
router.put('/:id/status', async (req, res) => {
  try {
    const { status, note } = req.body;
    
    if (!['new', 'contacted', 'resolved', 'closed'].includes(status)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid status'
      });
    }

    const contact = await Contact.findById(req.params.id);
    
    if (!contact) {
      return res.status(404).json({
        success: false,
        message: 'Contact not found'
      });
    }

    contact.status = status;
    
    if (note) {
      contact.notes.push({
        note,
        addedBy: 'Admin', // Should be actual user in production
        addedAt: new Date()
      });
    }

    await contact.save();

    res.json({
      success: true,
      message: 'Contact status updated successfully',
      data: contact
    });
  } catch (error) {
    console.error('❌ Update contact status error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to update contact status'
    });
  }
});

export default router;
