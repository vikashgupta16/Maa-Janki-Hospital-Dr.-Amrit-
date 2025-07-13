import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    maxlength: [100, 'Name cannot exceed 100 characters']
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
    trim: true,
    match: [/^[6-9]\d{9}$/, 'Please enter a valid Indian phone number']
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
  },
  childAge: {
    type: String,
    trim: true,
    maxlength: [50, 'Child age cannot exceed 50 characters']
  },
  message: {
    type: String,
    required: [true, 'Message is required'],
    trim: true,
    maxlength: [1000, 'Message cannot exceed 1000 characters']
  },
  urgency: {
    type: String,
    enum: ['normal', 'urgent', 'emergency'],
    default: 'normal'
  },
  status: {
    type: String,
    enum: ['new', 'contacted', 'resolved', 'closed'],
    default: 'new'
  },
  ipAddress: {
    type: String,
    trim: true
  },
  emailSent: {
    type: Boolean,
    default: false
  },
  emailSentAt: {
    type: Date
  },
  contactedAt: {
    type: Date
  },
  resolvedAt: {
    type: Date
  },
  notes: [{
    note: String,
    addedBy: String,
    addedAt: {
      type: Date,
      default: Date.now
    }
  }]
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Virtual for formatted creation date
contactSchema.virtual('formattedDate').get(function() {
  return this.createdAt.toLocaleString('en-IN', { 
    timeZone: 'Asia/Kolkata',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
});

// Virtual for urgency color
contactSchema.virtual('urgencyColor').get(function() {
  switch(this.urgency) {
    case 'emergency': return '#f44336';
    case 'urgent': return '#ff9800';
    default: return '#4caf50';
  }
});

// Index for better performance
contactSchema.index({ createdAt: -1 });
contactSchema.index({ urgency: 1 });
contactSchema.index({ status: 1 });
contactSchema.index({ phone: 1 });

// Pre-save middleware
contactSchema.pre('save', function(next) {
  if (this.isModified('status')) {
    switch(this.status) {
      case 'contacted':
        this.contactedAt = new Date();
        break;
      case 'resolved':
        this.resolvedAt = new Date();
        break;
    }
  }
  next();
});

// Static method to get dashboard stats
contactSchema.statics.getDashboardStats = async function() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  const stats = await this.aggregate([
    {
      $facet: {
        total: [{ $count: 'count' }],
        today: [
          { $match: { createdAt: { $gte: today } } },
          { $count: 'count' }
        ],
        byUrgency: [
          { $group: { _id: '$urgency', count: { $sum: 1 } } }
        ],
        byStatus: [
          { $group: { _id: '$status', count: { $sum: 1 } } }
        ],
        recentContacts: [
          { $sort: { createdAt: -1 } },
          { $limit: 5 },
          { $project: { name: 1, phone: 1, urgency: 1, createdAt: 1 } }
        ]
      }
    }
  ]);
  
  return stats[0];
};

// Static method to get emergency contacts
contactSchema.statics.getEmergencyContacts = async function() {
  return this.find({ 
    urgency: 'emergency',
    status: { $in: ['new', 'contacted'] }
  }).sort({ createdAt: -1 });
};

export default mongoose.model('Contact', contactSchema);
