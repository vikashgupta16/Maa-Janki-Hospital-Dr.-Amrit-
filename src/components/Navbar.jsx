import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaBars, FaTimes, FaPhone, FaWhatsapp } from 'react-icons/fa';
import { MdLanguage } from 'react-icons/md';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleLanguage = () => setIsLangOpen(!isLangOpen);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsLangOpen(false);
  };

  const navItems = [
    { name: t('home'), path: '/' },
    { name: t('doctor'), path: '/doctor' },
    { name: t('services'), path: '/services' },
    { name: t('gallery'), path: '/gallery' },
    { name: t('contact'), path: '/contact' },
  ];

  const isActivePath = (path) => location.pathname === path;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-lg sticky top-0 z-50"
    >
      {/* Top bar with emergency contacts */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <a
              href="tel:9128231000"
              className="flex items-center space-x-1 hover:text-orange-200 transition-colors"
            >
              <FaPhone className="w-3 h-3" />
              <span>9128231000</span>
            </a>
            <span className="hidden sm:inline">|</span>
            <a
              href="https://wa.me/919128231000"
              className="flex items-center space-x-1 hover:text-orange-200 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="w-3 h-3" />
              <span>{t('emergencyText')}</span>
            </a>
          </div>
          
          {/* Language Toggle */}
          <div className="relative z-[10000]">
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 hover:text-orange-200 transition-colors"
            >
              <MdLanguage className="w-4 h-4" />
              <span>{i18n.language === 'hi' ? '🇮🇳' : '🇺🇸'}</span>
              <span className="text-xs">
                {i18n.language === 'hi' ? 'हिं' : 'EN'}
              </span>
            </button>
            
            {isLangOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute right-0 mt-2 bg-white rounded-lg shadow-xl py-2 min-w-[120px] z-[10001] border border-gray-200"
              >
                <button
                  onClick={() => changeLanguage('hi')}
                  className="block px-4 py-2 text-gray-800 hover:bg-orange-50 w-full text-left transition-colors"
                >
                  🇮🇳 {t('hindi')}
                </button>
                <button
                  onClick={() => changeLanguage('en')}
                  className="block px-4 py-2 text-gray-800 hover:bg-orange-50 w-full text-left transition-colors"
                >
                  🇺🇸 {t('english')}
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">माँ</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">
                {t('hospitalName')}
              </h1>
              <p className="text-sm text-orange-600">{t('tagline')}</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className={`relative py-2 px-1 font-medium transition-colors duration-300 ${
                  isActivePath(item.path)
                    ? 'text-orange-600'
                    : 'text-gray-700 hover:text-orange-600'
                }`}
              >
                {item.name}
                {isActivePath(item.path) && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-600"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:9128231000"
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              {t('callNow')}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isOpen ? (
              <FaTimes className="w-6 h-6 text-gray-700" />
            ) : (
              <FaBars className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden mt-4 border-t pt-4"
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`py-2 px-4 rounded-lg font-medium transition-colors ${
                    isActivePath(item.path)
                      ? 'text-orange-600 bg-orange-50'
                      : 'text-gray-700 hover:text-orange-600 hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-4 border-t">
                <a
                  href="tel:9128231000"
                  className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-lg font-semibold text-center"
                >
                  {t('callNow')}
                </a>
                <a
                  href="https://wa.me/919128231000"
                  className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-lg font-semibold text-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('whatsapp')}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
