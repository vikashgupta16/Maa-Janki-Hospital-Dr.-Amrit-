import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  FaPhone, 
  FaWhatsapp, 
  FaCalendarAlt,
  FaHeart,
  FaShieldAlt,
  FaClock,
  FaUserMd,
  FaBaby,
  FaStethoscope,
  FaStar,
  FaCheckCircle
} from 'react-icons/fa';
import DoctorProfile from '../assets/Dr.Amrit-Gupta.jpg';
import AOS from 'aos';

const Home = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.refresh();
  }, []);

  const features = [
    {
      icon: <FaClock className="w-8 h-8" />,
      title: t('feature1Title'),
      description: t('feature1Text'),
      color: 'from-red-500 to-red-600'
    },
    {
      icon: <FaBaby className="w-8 h-8" />,
      title: t('feature2Title'),
      description: t('feature2Text'),
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <FaHeart className="w-8 h-8" />,
      title: t('feature3Title'),
      description: t('feature3Text'),
      color: 'from-pink-500 to-pink-600'
    }
  ];

  const stats = [
    { number: '5000+', label: 'Happy Families', icon: <FaHeart /> },
    { number: '10+', label: 'Years Experience', icon: <FaStar /> },
    { number: '24/7', label: 'Emergency Service', icon: <FaClock /> },
    { number: '100%', label: 'Dedicated Care', icon: <FaCheckCircle /> }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-cream-50 via-cream-100 to-orange-100 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-20 h-20 bg-orange-500 rounded-full"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-babyBlue-500 rounded-full"></div>
          <div className="absolute bottom-20 left-20 w-12 h-12 bg-pink-500 rounded-full"></div>
          <div className="absolute bottom-40 right-10 w-24 h-24 bg-green-500 rounded-full"></div>
        </div>

        <div className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="inline-block"
                >
                  <span className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    🏥 {t('hospitalName')}
                  </span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
                >
                  {t('heroTitle')}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="text-xl text-gray-600 leading-relaxed"
                >
                  {t('heroSubtitle')}
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="text-2xl font-semibold text-orange-600"
                >
                  {t('tagline')}
                </motion.p>
              </div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <a
                  href="tel:9128231000"
                  className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <FaPhone className="w-5 h-5 group-hover:animate-bounce" />
                  <span>{t('callNow')}</span>
                </a>

                <a
                  href="https://wa.me/919128231000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <FaWhatsapp className="w-5 h-5 group-hover:animate-bounce" />
                  <span>{t('emergencyHelp')}</span>
                </a>

                <button className="group bg-gradient-to-r from-babyBlue-500 to-babyBlue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                  <FaCalendarAlt className="w-5 h-5 group-hover:animate-bounce" />
                  <span>{t('bookAppointment')}</span>
                </button>
              </motion.div>

              {/* Quick Contact */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-orange-200 shadow-lg"
              >
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-green-600 font-semibold">24x7 Available</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <a
                      href="tel:9128231000"
                      className="text-orange-600 hover:text-orange-700 font-semibold"
                    >
                      📞 9128231000
                    </a>
                    <span>|</span>
                    <a
                      href="tel:9525552675"
                      className="text-orange-600 hover:text-orange-700 font-semibold"
                    >
                      📞 9525552675
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Content - Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10">
                {/* Placeholder for baby + doctor image */}
                <div className="bg-gradient-to-br from-babyBlue-100 to-orange-100 rounded-3xl p-8 shadow-2xl">
                  <div className="bg-white rounded-2xl p-8 text-center">
                    <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-md mb-6">
  <img
    src={DoctorProfile}
    alt="Dr. Amrit Gupta"
    className="w-full h-full object-cover object-center"
  />
</div>

                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-gray-800">{t('doctorName')}</h3>
                      <p className="text-orange-600 font-semibold">{t('doctorSpecialty')}</p>
                      <p className="text-gray-600">{t('doctorExperience')}</p>
                    </div>
                    <div className="mt-6 flex justify-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="w-5 h-5 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-gradient-to-r from-pink-500 to-pink-600 p-4 rounded-full shadow-lg"
              >
                <FaHeart className="w-6 h-6 text-white" />
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2.5, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 bg-gradient-to-r from-green-500 to-green-600 p-4 rounded-full shadow-lg"
              >
                <FaShieldAlt className="w-6 h-6 text-white" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="text-orange-600 text-2xl mb-2 group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-cream-50 to-orange-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('featuresTitle')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('aboutText')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 h-full">
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold text-gray-900">{t('aboutTitle')}</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                {t('aboutText')}
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <FaCheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Specialized NICU Care</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaCheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Experienced Pediatricians</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaCheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Modern Equipment</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaCheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">24x7 Emergency Services</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Placeholder for hospital image */}
              <div className="bg-gradient-to-br from-babyBlue-100 to-cream-100 rounded-3xl p-8">
                <div className="bg-white rounded-2xl p-8 text-center">
                  <FaStethoscope className="w-24 h-24 mx-auto text-orange-500 mb-4" />
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Modern Healthcare</h3>
                  <p className="text-gray-600">State-of-the-art medical equipment and facilities for comprehensive child care</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-bold text-white">
              Need Immediate Medical Attention?
            </h2>
            <p className="text-xl text-orange-100 max-w-2xl mx-auto">
              Our medical team is available 24/7 for emergency services. Don't hesitate to reach out when your child needs care.
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
                <span>WhatsApp Now</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
