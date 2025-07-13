import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  FaPhone, 
  FaWhatsapp, 
  FaMapMarkerAlt, 
  FaClock,
  FaEnvelope,
  FaHeart,
  FaAmbulance,
  FaUserMd,
  FaCalendarAlt,
  FaPaperPlane,
  FaCheckCircle,
  FaExclamationTriangle
} from 'react-icons/fa';
import { apiConfig, apiRequest } from '../config/api';

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    childAge: '',
    message: '',
    urgency: 'normal'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      const result = await apiRequest(apiConfig.endpoints.contact, {
        method: 'POST',
        body: JSON.stringify(formData),
      });

      if (result.success) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          phone: '',
          email: '',
          childAge: '',
          message: '',
          urgency: 'normal'
        });
        
        // Reset success message after 8 seconds
        setTimeout(() => setSubmitStatus(null), 8000);
      } else {
        setSubmitStatus('error');
        console.error('Form submission failed:', result);
        
        // Reset error message after 5 seconds
        setTimeout(() => setSubmitStatus(null), 5000);
      }
    } catch (error) {
      console.error('Network error:', error);
      setSubmitStatus('error');
      
      // Reset error message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: <FaPhone className="w-6 h-6" />,
      title: t('phone'),
      subtitle: 'Primary Contact',
      value: '9128231000',
      action: 'tel:9128231000',
      color: 'from-blue-500 to-blue-600',
      available: '24x7 Available'
    },
    {
      icon: <FaPhone className="w-6 h-6" />,
      title: t('phone'),
      subtitle: 'Secondary Contact',
      value: '9525552675',
      action: 'tel:9525552675',
      color: 'from-green-500 to-green-600',
      available: '24x7 Available'
    },
    {
      icon: <FaWhatsapp className="w-6 h-6" />,
      title: t('whatsapp'),
      subtitle: 'Quick Messaging',
      value: '9128231000',
      action: 'https://wa.me/919128231000',
      color: 'from-green-500 to-green-600',
      available: 'Instant Response'
    },
    {
      icon: <FaMapMarkerAlt className="w-6 h-6" />,
      title: t('address'),
      subtitle: 'Hospital Location',
      value: t('addressText'),
      action: 'https://maps.app.goo.gl/HXhDW5t9f49KRBc98',
      color: 'from-red-500 to-red-600',
      available: 'Visit Us'
    }
  ];

  const emergencyServices = [
    {
      icon: <FaAmbulance />,
      title: 'Emergency Ambulance',
      description: 'Immediate ambulance service available 24x7',
      phone: '9128231000'
    },
    {
      icon: <FaUserMd />,
      title: 'Doctor on Call',
      description: 'Speak directly with our pediatrician',
      phone: '9128231000'
    },
    {
      icon: <FaHeart />,
      title: 'NICU Emergency',
      description: 'Critical care for newborns and infants',
      phone: '9128231000'
    }
  ];

  const hospitalInfo = [
    { label: 'Opening Hours', value: '24 Hours Open', icon: <FaClock /> },
    { label: 'Emergency Service', value: 'Always Available', icon: <FaAmbulance /> },
    { label: 'OPD Timing', value: '9:00 AM - 9:00 PM', icon: <FaCalendarAlt /> },
    { label: 'Languages', value: 'Hindi, English', icon: <FaUserMd /> }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-cream-50 to-orange-50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold text-gray-900 mb-6">{t('contactTitle')}</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              {t('contactSubtitle')}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold animate-pulse">
                🚨 {t('emergencyText')}
              </span>
              <span className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                📞 Instant Response
              </span>
              <span className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                🏥 Professional Care
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Emergency Quick Actions */}
      <section className="py-8 bg-red-600">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {emergencyServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-white text-center hover:bg-opacity-20 transition-all duration-300"
              >
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                <p className="text-red-100 text-sm mb-4">{service.description}</p>
                <a
                  href={`tel:${service.phone}`}
                  className="bg-white text-red-600 px-4 py-2 rounded-lg font-semibold hover:bg-red-50 transition-colors inline-block"
                >
                  Call Now: {service.phone}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-600">Multiple ways to reach us for your convenience</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="group"
              >
                <a
                  href={method.action}
                  target={method.action.startsWith('http') ? '_blank' : '_self'}
                  rel={method.action.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="block bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-200 h-full"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${method.color} rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                    {method.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{method.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{method.subtitle}</p>
                  <p className="text-orange-600 font-semibold mb-3">{method.value}</p>
                  <div className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full inline-block">
                    {method.available}
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-gradient-to-br from-cream-50 to-babyBlue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h3>
                
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6"
                  >
                    <div className="flex items-center space-x-2">
                      <FaCheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-green-800 font-semibold">Message sent successfully!</span>
                    </div>
                    <p className="text-green-700 text-sm mt-1">We'll get back to you within 2 hours.</p>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6"
                  >
                    <div className="flex items-center space-x-2">
                      <FaExclamationTriangle className="w-5 h-5 text-red-600" />
                      <span className="text-red-800 font-semibold">Failed to send message</span>
                    </div>
                    <p className="text-red-700 text-sm mt-1">
                      Please try again or call us directly at{' '}
                      <a href="tel:9128231000" className="font-semibold underline">9128231000</a>
                    </p>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Child's Age</label>
                      <input
                        type="text"
                        name="childAge"
                        value={formData.childAge}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                        placeholder="e.g., 2 years, 6 months"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Urgency Level</label>
                    <select
                      name="urgency"
                      value={formData.urgency}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                    >
                      <option value="normal">Normal Consultation</option>
                      <option value="urgent">Urgent - Within 24 hours</option>
                      <option value="emergency">Emergency - Immediate</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors resize-none"
                      placeholder="Describe your concern or query"
                    ></textarea>
                  </div>

                  {formData.urgency === 'emergency' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-red-50 border border-red-200 rounded-lg p-4"
                    >
                      <div className="flex items-center space-x-2">
                        <FaExclamationTriangle className="w-5 h-5 text-red-600" />
                        <span className="text-red-800 font-semibold">Emergency Alert</span>
                      </div>
                      <p className="text-red-700 text-sm mt-1">
                        For immediate emergency, please call us directly at{' '}
                        <a href="tel:9128231000" className="font-semibold underline">9128231000</a>
                      </p>
                    </motion.div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 ${
                      isSubmitting
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:shadow-lg'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <FaPaperPlane className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Hospital Info & Map */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Hospital Information */}
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Hospital Information</h3>
                <div className="space-y-4">
                  {hospitalInfo.map((info, index) => (
                    <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                      <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center text-white">
                        {info.icon}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{info.label}</p>
                        <p className="text-gray-600">{info.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map */}
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Find Us</h3>
                <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.234567890123!2d84.1479123!3d26.2634567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed8b4c1a5b2bb5%3A0x123456789abcdef0!2sMairwa%2C%20West%20Champaran%2C%20Bihar%20845302!5e0!3m2!1sen!2sin!4v1698765432100!5m2!1sen!2sin"
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="माँ जानकी हॉस्पिटल एंड चाइल्ड केयर - Maa Janki Hospital Location, Mairwa, Bihar"
                  ></iframe>
                </div>
                <div className="mt-6 p-4 bg-gradient-to-r from-orange-50 to-cream-50 rounded-xl">
                  <div className="flex items-center space-x-3 mb-3">
                    <FaMapMarkerAlt className="w-5 h-5 text-orange-500" />
                    <h4 className="font-bold text-gray-900">Hospital Address</h4>
                  </div>
                  <p className="text-gray-700 mb-4">{t('addressText')}</p>
                  <a
                    href="https://maps.app.goo.gl/HXhDW5t9f49KRBc98"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 inline-block"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Contact Banner */}
      <section className="py-12 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-white">Need Immediate Assistance?</h2>
            <p className="text-xl text-orange-100">
              Our medical team is available 24x7 for emergency consultations and urgent care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:9128231000"
                className="bg-white text-orange-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-orange-50 transition-colors transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <FaPhone className="w-5 h-5" />
                <span>Call: 9128231000</span>
              </a>
              <a
                href="https://wa.me/919128231000"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-green-700 transition-colors transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <FaWhatsapp className="w-5 h-5" />
                <span>WhatsApp: 9128231000</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
