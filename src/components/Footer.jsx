import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  FaPhone, 
  FaWhatsapp, 
  FaMapMarkerAlt, 
  FaClock,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaHeart
} from 'react-icons/fa';

const Footer = () => {
  const { t } = useTranslation();

  const navItems = [
    { name: t('home'), path: '/' },
    { name: t('doctor'), path: '/doctor' },
    { name: t('services'), path: '/services' },
    { name: t('gallery'), path: '/gallery' },
    { name: t('contact'), path: '/contact' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Hospital Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">माँ</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">{t('hospitalName')}</h3>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              {t('aboutText')}
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-orange-500 transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-orange-500 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-orange-500 transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-orange-500 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-bold text-orange-500">{t('quickLinks')}</h3>
            <ul className="space-y-2">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className="text-gray-300 hover:text-orange-500 transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-bold text-orange-500">{t('contactTitle')}</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <FaPhone className="w-4 h-4 text-orange-500" />
                <div>
                  <a
                    href="tel:9128231000"
                    className="text-gray-300 hover:text-orange-500 transition-colors text-sm"
                  >
                    9128231000
                  </a>
                  <br />
                  <a
                    href="tel:9525552675"
                    className="text-gray-300 hover:text-orange-500 transition-colors text-sm"
                  >
                    9525552675
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <FaWhatsapp className="w-4 h-4 text-green-500" />
                <a
                  href="https://wa.me/919128231000"
                  className="text-gray-300 hover:text-green-500 transition-colors text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  9128231000
                </a>
              </div>
              
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="w-4 h-4 text-orange-500 mt-1" />
                <div>
                  <p className="text-gray-300 text-sm">{t('addressText')}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <FaClock className="w-4 h-4 text-orange-500" />
                <p className="text-gray-300 text-sm">{t('emergencyText')}</p>
              </div>
            </div>
          </motion.div>

          {/* Emergency Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-bold text-orange-500">{t('emergencyHelp')}</h3>
            <div className="bg-gradient-to-r from-red-600 to-red-700 p-4 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-2 h-2 bg-red-300 rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold">24x7 Available</span>
              </div>
              <p className="text-xs text-red-100 mb-3">
                {t('emergencyText')}
              </p>
              <div className="space-y-2">
                <a
                  href="tel:9128231000"
                  className="block bg-white text-red-600 px-3 py-2 rounded text-center text-sm font-semibold hover:bg-red-50 transition-colors"
                >
                  {t('callNow')}
                </a>
                <a
                  href="https://wa.me/919128231000"
                  className="block bg-green-600 text-white px-3 py-2 rounded text-center text-sm font-semibold hover:bg-green-700 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('whatsapp')}
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              {t('footerText')}
            </p>
            <div className="flex items-center space-x-1 text-gray-400 text-sm">
              <span>Made with</span>
              <FaHeart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>for children's health</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
