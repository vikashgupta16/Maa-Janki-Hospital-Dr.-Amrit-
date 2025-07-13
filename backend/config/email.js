import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

// Create reusable transporter object using SMTP transport
const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS, // App password from Google
    },
    tls: {
      rejectUnauthorized: false
    }
  });
};

// Send email to hospital admin
export const sendContactEmail = async (contactData) => {
  const transporter = createTransporter();
  
  const { name, phone, email, childAge, message, urgency } = contactData;
  
  // Email to hospital admin
  const adminMailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER, // Hospital email
    subject: `🏥 New Contact Form Submission - ${urgency.toUpperCase()} ${urgency === 'emergency' ? '🚨' : ''}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f8f9fa; padding: 20px;">
        <div style="background: linear-gradient(135deg, #ff5722, #ff8a65); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 24px;">🏥 माँ जानकी हॉस्पिटल</h1>
          <p style="color: #fff3e0; margin: 10px 0 0 0;">New Contact Form Submission</p>
        </div>
        
        <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
          <div style="margin-bottom: 20px; padding: 15px; background-color: ${urgency === 'emergency' ? '#ffebee' : urgency === 'urgent' ? '#fff3e0' : '#f3e5f5'}; border-radius: 8px; border-left: 4px solid ${urgency === 'emergency' ? '#f44336' : urgency === 'urgent' ? '#ff9800' : '#9c27b0'};">
            <h3 style="margin: 0; color: ${urgency === 'emergency' ? '#c62828' : urgency === 'urgent' ? '#ef6c00' : '#7b1fa2'};">
              ${urgency === 'emergency' ? '🚨 EMERGENCY REQUEST' : urgency === 'urgent' ? '⚡ URGENT REQUEST' : '📝 NORMAL REQUEST'}
            </h3>
            <p style="margin: 5px 0 0 0; color: #666; font-size: 14px;">Priority Level: ${urgency.toUpperCase()}</p>
          </div>
          
          <h2 style="color: #333; margin-bottom: 20px;">Patient Information</h2>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px; background-color: #f5f5f5; border: 1px solid #ddd; font-weight: bold; width: 30%;">👤 Full Name:</td>
              <td style="padding: 12px; border: 1px solid #ddd;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 12px; background-color: #f5f5f5; border: 1px solid #ddd; font-weight: bold;">📞 Phone Number:</td>
              <td style="padding: 12px; border: 1px solid #ddd;"><a href="tel:${phone}" style="color: #ff5722; text-decoration: none;">${phone}</a></td>
            </tr>
            <tr>
              <td style="padding: 12px; background-color: #f5f5f5; border: 1px solid #ddd; font-weight: bold;">✉️ Email:</td>
              <td style="padding: 12px; border: 1px solid #ddd;"><a href="mailto:${email}" style="color: #ff5722; text-decoration: none;">${email || 'Not provided'}</a></td>
            </tr>
            <tr>
              <td style="padding: 12px; background-color: #f5f5f5; border: 1px solid #ddd; font-weight: bold;">👶 Child's Age:</td>
              <td style="padding: 12px; border: 1px solid #ddd;">${childAge || 'Not specified'}</td>
            </tr>
          </table>
          
          <h3 style="color: #333; margin-top: 25px; margin-bottom: 15px;">💬 Message:</h3>
          <div style="background-color: #f8f9fa; padding: 15px; border-radius: 8px; border-left: 4px solid #ff5722;">
            <p style="margin: 0; line-height: 1.6; color: #333;">${message}</p>
          </div>
          
          <div style="margin-top: 30px; padding: 20px; background-color: #e3f2fd; border-radius: 8px; text-align: center;">
            <h4 style="margin: 0 0 10px 0; color: #1976d2;">Quick Actions</h4>
            <a href="tel:${phone}" style="display: inline-block; background-color: #4caf50; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; margin: 5px;">📞 Call Patient</a>
            <a href="mailto:${email}" style="display: inline-block; background-color: #2196f3; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; margin: 5px;">✉️ Reply Email</a>
            <a href="https://wa.me/91${phone}" style="display: inline-block; background-color: #25d366; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; margin: 5px;">💬 WhatsApp</a>
          </div>
          
          <div style="margin-top: 20px; text-align: center; color: #666; font-size: 12px;">
            <p>Received on: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
            <p>माँ जानकी हॉस्पिटल एंड चाइल्ड केयर | Mairwa, Bihar | 9128231000</p>
          </div>
        </div>
      </div>
    `
  };

  // Confirmation email to patient
  const patientMailOptions = email ? {
    from: process.env.EMAIL_USER,
    to: email,
    subject: `✅ आपका संदेश प्राप्त हुआ - Message Received at Maa Janki Hospital`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f8f9fa; padding: 20px;">
        <div style="background: linear-gradient(135deg, #ff5722, #ff8a65); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 24px;">🏥 माँ जानकी हॉस्पिटल</h1>
          <p style="color: #fff3e0; margin: 10px 0 0 0;">Maa Janki Hospital & Child Care</p>
        </div>
        
        <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
          <h2 style="color: #333; text-align: center; margin-bottom: 20px;">✅ आपका संदेश सफलतापूर्वक प्राप्त हुआ</h2>
          <h3 style="color: #ff5722; text-align: center; margin-bottom: 30px;">Your Message Has Been Received Successfully</h3>
          
          <p style="color: #333; line-height: 1.6; margin-bottom: 20px;">
            नमस्ते <strong>${name}</strong>,<br><br>
            आपका संदेश हमें मिल गया है। हमारी मेडिकल टीम जल्द ही आपसे संपर्क करेगी।
          </p>
          
          <p style="color: #333; line-height: 1.6; margin-bottom: 20px;">
            Dear <strong>${name}</strong>,<br><br>
            Thank you for contacting Maa Janki Hospital & Child Care. We have received your message and our medical team will contact you soon.
          </p>
          
          <div style="background-color: ${urgency === 'emergency' ? '#ffebee' : '#e8f5e8'}; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid ${urgency === 'emergency' ? '#f44336' : '#4caf50'};">
            <h4 style="margin: 0 0 10px 0; color: ${urgency === 'emergency' ? '#c62828' : '#2e7d32'};">
              ${urgency === 'emergency' ? '🚨 आपातकालीन संदेश / Emergency Message' : '📝 आपका संदेश / Your Message'}
            </h4>
            <p style="margin: 0; color: #333;">
              ${urgency === 'emergency' 
                ? 'आपातकाल के लिए तुरंत कॉल करें: <a href="tel:9128231000" style="color: #f44336;">9128231000</a><br>For emergency, call immediately: <a href="tel:9128231000" style="color: #f44336;">9128231000</a>' 
                : 'हम 2 घंटे के भीतर आपसे संपर्क करेंगे।<br>We will contact you within 2 hours.'
              }
            </p>
          </div>
          
          <div style="background-color: #f0f7ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h4 style="margin: 0 0 15px 0; color: #1976d2;">🏥 हमसे संपर्क करें / Contact Us</h4>
            <p style="margin: 5px 0; color: #333;"><strong>📞 Phone:</strong> <a href="tel:9128231000" style="color: #ff5722;">9128231000</a>, <a href="tel:9525552675" style="color: #ff5722;">9525552675</a></p>
            <p style="margin: 5px 0; color: #333;"><strong>💬 WhatsApp:</strong> <a href="https://wa.me/919128231000" style="color: #25d366;">9128231000</a></p>
            <p style="margin: 5px 0; color: #333;"><strong>📍 Address:</strong> Mairwa, West Champaran, Bihar</p>
            <p style="margin: 5px 0; color: #333;"><strong>🕐 Hours:</strong> 24x7 Emergency Services Available</p>
          </div>
          
          <div style="text-align: center; margin-top: 30px;">
            <a href="tel:9128231000" style="display: inline-block; background-color: #ff5722; color: white; padding: 12px 25px; text-decoration: none; border-radius: 5px; margin: 5px;">📞 Call Now</a>
            <a href="https://wa.me/919128231000" style="display: inline-block; background-color: #25d366; color: white; padding: 12px 25px; text-decoration: none; border-radius: 5px; margin: 5px;">💬 WhatsApp</a>
          </div>
          
          <div style="margin-top: 30px; text-align: center; color: #666; font-size: 12px; border-top: 1px solid #eee; padding-top: 20px;">
            <p><strong>Dr. Amrit Kumar</strong> - Pediatric Specialist (BAMS, KSDSU Darbhanga)</p>
            <p>माँ जानकी हॉस्पिटल एंड चाइल्ड केयर | Mairwa, Bihar</p>
            <p>विशेषज्ञ बाल चिकित्सा देखभाल | Expert Pediatric Care</p>
          </div>
        </div>
      </div>
    `
  } : null;

  try {
    // Send admin email
    await transporter.sendMail(adminMailOptions);
    console.log('✅ Admin email sent successfully');

    // Send patient confirmation email if email provided
    if (patientMailOptions) {
      await transporter.sendMail(patientMailOptions);
      console.log('✅ Patient confirmation email sent successfully');
    }

    return {
      success: true,
      message: 'Emails sent successfully'
    };
  } catch (error) {
    console.error('❌ Email sending error:', error);
    return {
      success: false,
      message: 'Failed to send email',
      error: error.message
    };
  }
};

// Test email configuration
export const testEmailConfig = async () => {
  try {
    const transporter = createTransporter();
    await transporter.verify();
    console.log('✅ Email configuration is valid');
    return true;
  } catch (error) {
    console.error('❌ Email configuration error:', error);
    return false;
  }
};
