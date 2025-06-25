import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaLungs, 
  FaBaby, 
  FaHeartbeat,
  FaSun,
  FaTint,
  FaStethoscope,
  FaWind,
  FaHospital,
  FaShieldAlt,
  FaUserMd,
  FaClock,
  FaPhone,
  FaWhatsapp,
  FaCheckCircle,
  FaStar,
  FaHeart
} from 'react-icons/fa';

const Services = () => {
  const { t } = useTranslation();
  const [selectedService, setSelectedService] = useState(null);
  const [showAllServices, setShowAllServices] = useState(false);

  const services = [
    {
      icon: <FaLungs className="w-8 h-8" />,
      title: t('oxygen'),
      description: 'Advanced oxygen therapy systems for respiratory support in newborns and children',
      features: ['24x7 Availability', 'Medical Grade Oxygen', 'Continuous Monitoring'],
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-50 to-blue-100'
    },
    {
      icon: <FaBaby className="w-8 h-8" />,
      title: t('babyWarmer'),
      description: 'State-of-the-art baby warmers to maintain optimal temperature for newborns',
      features: ['Temperature Control', 'Safe Environment', 'Easy Access'],
      color: 'from-pink-500 to-pink-600',
      bgColor: 'from-pink-50 to-pink-100'
    },
    {
      icon: <FaHospital className="w-8 h-8" />,
      title: t('incubator'),
      description: 'Modern incubators providing controlled environment for premature babies',
      features: ['Humidity Control', 'Temperature Regulation', 'Infection Prevention'],
      color: 'from-green-500 to-green-600',
      bgColor: 'from-green-50 to-green-100'
    },
    {
      icon: <FaSun className="w-8 h-8" />,
      title: t('phototherapy'),
      description: 'LED phototherapy units for treating neonatal jaundice effectively',
      features: ['LED Technology', 'Eye Protection', 'Effective Treatment'],
      color: 'from-yellow-500 to-yellow-600',
      bgColor: 'from-yellow-50 to-yellow-100'
    },
    {
      icon: <FaTint className="w-8 h-8" />,
      title: t('infusionPump'),
      description: 'Precision infusion pumps for accurate medication delivery',
      features: ['Accurate Dosing', 'Safety Alarms', 'User Friendly'],
      color: 'from-purple-500 to-purple-600',
      bgColor: 'from-purple-50 to-purple-100'
    },
    {
      icon: <FaHeartbeat className="w-8 h-8" />,
      title: t('pulseOximeter'),
      description: 'Continuous monitoring of oxygen saturation and pulse rate',
      features: ['Real-time Monitoring', 'Non-invasive', 'Alarm System'],
      color: 'from-red-500 to-red-600',
      bgColor: 'from-red-50 to-red-100'
    },
    {
      icon: <FaWind className="w-8 h-8" />,
      title: t('nebulizer'),
      description: 'Nebulization therapy for respiratory conditions in children',
      features: ['Respiratory Relief', 'Child-friendly', 'Effective Delivery'],
      color: 'from-cyan-500 to-cyan-600',
      bgColor: 'from-cyan-50 to-cyan-100'
    },
    {
      icon: <FaShieldAlt className="w-8 h-8" />,
      title: t('nicu'),
      description: 'Comprehensive Neonatal Intensive Care Unit with 24x7 monitoring',
      features: ['24x7 Care', 'Specialized Staff', 'Advanced Equipment'],
      color: 'from-orange-500 to-orange-600',
      bgColor: 'from-orange-50 to-orange-100'
    }
  ];

  const additionalServices = [
    'Childhood Vaccination',
    'Growth Monitoring',
    'Nutritional Counseling',
    'Emergency Care',
    'Outpatient Consultation',
    'Health Check-ups',
    'Laboratory Services',
    'Pharmacy Services'
  ];

  const whyChooseUs = [
    {
      icon: <FaUserMd />,
      title: 'Expert Pediatricians',
      description: 'Experienced doctors specialized in child healthcare'
    },
    {
      icon: <FaClock />,
      title: '24x7 Emergency',
      description: 'Round-the-clock emergency services available'
    },
    {
      icon: <FaStethoscope />,
      title: 'Modern Equipment',
      description: 'State-of-the-art medical equipment and technology'
    },
    {
      icon: <FaHeart />,
      title: 'Compassionate Care',
      description: 'Child-friendly environment with caring staff'
    }
  ];

  const displayedServices = showAllServices ? services : services.slice(0, 6);

  const ServiceModal = ({ service, onClose }) => {
    if (!service) return null;
    
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          className="bg-white rounded-2xl p-8 max-w-md w-full"
          onClick={(e) => e.stopPropagation()}
        >
          <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center text-white mb-6`}>
            {service.icon}
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
          <p className="text-gray-600 mb-6">{service.description}</p>
          <div className="space-y-3 mb-6">
            {service.features.map((feature, idx) => (
              <div key={idx} className="flex items-center space-x-3">
                <FaCheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
          <div className="flex gap-3">
            <button
              onClick={onClose}
              className="flex-1 bg-gray-200 text-gray-800 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
            >
              Close
            </button>
            <a
              href="tel:9128231000"
              className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 rounded-lg font-semibold text-center hover:shadow-lg transition-all"
            >
              Book Now
            </a>
          </div>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-cream-50 to-babyBlue-50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold text-gray-900 mb-6">{t('servicesTitle')}</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              {t('servicesSubtitle')}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                🏥 Advanced NICU
              </span>
              <span className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                👨‍⚕️ Expert Doctors
              </span>
              <span className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                🕒 24x7 Emergency
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Medical Services</h2>
            <p className="text-xl text-gray-600">Comprehensive healthcare solutions for your child</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
                onClick={() => setSelectedService(service)}
              >
                <div className={`bg-gradient-to-br ${service.bgColor} rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 h-full border border-opacity-20 border-gray-200`}>
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
                    {service.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <FaCheckCircle className="w-3 h-3 text-green-500" />
                        <span className="text-xs text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="w-3 h-3 text-yellow-400" />
                      ))}
                      <span className="text-xs text-gray-500 ml-2">Available 24x7</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {!showAllServices && services.length > 6 && (
            <div className="text-center mt-12">
              <button
                onClick={() => setShowAllServices(true)}
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                View All Services ({services.length - 6} more)
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-cream-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Additional Services</h2>
            <p className="text-xl text-gray-600">Complete healthcare services under one roof</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center border border-orange-200"
              >
                <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <FaCheckCircle className="w-4 h-4 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 text-sm">{service}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Services</h2>
            <p className="text-xl text-gray-600">Excellence in pediatric healthcare with compassionate care</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Services Banner */}
      <section className="py-12 bg-gradient-to-r from-red-500 to-red-600">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-4 h-4 bg-white rounded-full animate-pulse"></div>
              <h2 className="text-3xl font-bold">Emergency Services Available 24x7</h2>
              <div className="w-4 h-4 bg-white rounded-full animate-pulse"></div>
            </div>
            <p className="text-xl text-red-100 mb-6">
              Don't wait in case of emergency. Our medical team is always ready to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:9128231000"
                className="bg-white text-red-600 px-8 py-3 rounded-xl font-semibold hover:bg-red-50 transition-colors transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <FaPhone className="w-5 h-5" />
                <span>Call: 9128231000</span>
              </a>
              <a
                href="https://wa.me/919128231000"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <FaWhatsapp className="w-5 h-5" />
                <span>WhatsApp Emergency</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Hours */}
      <section className="py-16 bg-gradient-to-br from-babyBlue-50 to-cream-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold text-gray-900">Service Hours & Availability</h2>
              <p className="text-xl text-gray-600">
                Our comprehensive services are available when you need them most.
              </p>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-md border border-green-200">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Emergency Services</h3>
                      <p className="text-gray-600">24 Hours • 7 Days a Week</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-md border border-blue-200">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <div>
                      <h3 className="font-semibold text-gray-900">OPD Consultation</h3>
                      <p className="text-gray-600">9:00 AM - 9:00 PM • Daily</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-md border border-orange-200">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                    <div>
                      <h3 className="font-semibold text-gray-900">NICU Services</h3>
                      <p className="text-gray-600">24 Hours • Continuous Monitoring</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-2xl"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Book Your Service</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 text-sm">
                    Emergency Care
                  </button>
                  <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 text-sm">
                    OPD Booking
                  </button>
                  <button className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 text-sm">
                    NICU Admission
                  </button>
                  <button className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-4 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 text-sm">
                    Health Checkup
                  </button>
                </div>
                
                <div className="border-t pt-4">
                  <p className="text-center text-gray-600 mb-4">For immediate assistance</p>
                  <div className="space-y-2">
                    <a
                      href="tel:9128231000"
                      className="block bg-orange-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
                    >
                      📞 Call: 9128231000
                    </a>
                    <a
                      href="https://wa.me/919128231000"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block bg-green-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                    >
                      💬 WhatsApp: 9128231000
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {selectedService && (
        <ServiceModal 
          service={selectedService} 
          onClose={() => setSelectedService(null)} 
        />
      )}
    </div>
  );
};

export default Services;
