import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaTimes, 
  FaArrowLeft, 
  FaArrowRight,
  FaHospital,
  FaUserMd,
  FaBaby,
  FaStethoscope,
  FaHeart,
  FaShieldAlt,
  FaImage,
  FaSearchPlus
} from 'react-icons/fa';

// Import actual hospital images
import NICU1 from '../assets/NICU.jpg';
import NICU2 from '../assets/NICU2.jpg';
import NICU4 from '../assets/NICU4.jpg';
import NICU5 from '../assets/NICU5.jpg';
import NICU6 from '../assets/NICU6.jpg';
import NICU7 from '../assets/NICU7.jpg';
import NICURoom from '../assets/NICU Room.jpg';
import Reception from '../assets/Reception.jpg';
import WaitingRoom1 from '../assets/Waiting Room-Main1.jpg';
import WaitingRoom2 from '../assets/Wating Room 2.jpg';
import WaitingHall from '../assets/Wating Hall.jpg';
import EmergencyRoom from '../assets/Emergency Room.jpg';
import EmergencyWard from '../assets/Emergency Ward.jpg';
import MedicalShop from '../assets/Medical Shop.jpg';
import MainMedicalShop from '../assets/MainMedicalShop.jpg';
import Outside from '../assets/Outside.jpg';
import NearbyView from '../assets/NearbyView.jpg';
import DoctorProfile from '../assets/Dr.Amrit-Gupta.jpg';
import DoctorConsultation from '../assets/Consultation.jpg';
import DoctorGeneral from '../assets/doctor.png';

const Gallery = () => {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState('all');

  // Real hospital gallery data with actual images
  const galleryData = [
    {
      id: 1,
      category: 'nicu',
      title: t('nicuFacility') || 'NICU Facility',
      description: t('nicuDescription') || 'Modern NICU with advanced monitoring systems',
      image: NICU1,
      icon: <FaBaby className="w-16 h-16" />,
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 2,
      category: 'nicu',
      title: t('nicuRoom') || 'NICU Room',
      description: t('nicuRoomDescription') || 'Specialized NICU room with life support systems',
      image: NICURoom,
      icon: <FaShieldAlt className="w-16 h-16" />,
      color: 'from-green-500 to-green-600'
    },
    {
      id: 3,
      category: 'nicu',
      title: t('nicuEquipment') || 'NICU Equipment',
      description: t('nicuEquipmentDescription') || 'Advanced medical equipment for newborn care',
      image: NICU2,
      icon: <FaStethoscope className="w-16 h-16" />,
      color: 'from-red-500 to-red-600'
    },
    {
      id: 4,
      category: 'nicu',
      title: t('nicuMonitoring') || 'NICU Monitoring',
      description: t('nicuMonitoringDescription') || 'Continuous monitoring systems',
      image: NICU4,
      icon: <FaBaby className="w-16 h-16" />,
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 5,
      category: 'nicu',
      title: t('nicuCare') || 'NICU Care',
      description: t('nicuCareDescription') || 'Intensive care for premature babies',
      image: NICU5,
      icon: <FaHeart className="w-16 h-16" />,
      color: 'from-pink-500 to-pink-600'
    },
    {
      id: 6,
      category: 'nicu',
      title: t('nicuAdvanced') || 'Advanced NICU',
      description: t('nicuAdvancedDescription') || 'State-of-the-art NICU facility',
      image: NICU6,
      icon: <FaShieldAlt className="w-16 h-16" />,
      color: 'from-cyan-500 to-cyan-600'
    },
    {
      id: 7,
      category: 'nicu',
      title: t('nicuSpecialized') || 'Specialized NICU',
      description: t('nicuSpecializedDescription') || 'Specialized care for critical cases',
      image: NICU7,
      icon: <FaBaby className="w-16 h-16" />,
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      id: 8,
      category: 'doctor',
      title: t('doctorProfile') || 'Dr. Amrit Kumar',
      description: t('doctorProfileDescription') || 'Our experienced pediatric specialist',
      image: DoctorProfile,
      icon: <FaUserMd className="w-16 h-16" />,
      color: 'from-orange-500 to-orange-600'
    },
    {
      id: 9,
      category: 'doctor',
      title: t('consultationRoom') || 'Consultation Room',
      description: t('consultationRoomDescription') || 'Private consultation with doctor',
      image: DoctorConsultation,
      icon: <FaStethoscope className="w-16 h-16" />,
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 10,
      category: 'doctor',
      title: t('medicalTeam') || 'Medical Team',
      description: t('medicalTeamDescription') || 'Expert medical professionals',
      image: DoctorGeneral,
      icon: <FaUserMd className="w-16 h-16" />,
      color: 'from-green-500 to-green-600'
    },
    {
      id: 11,
      category: 'reception',
      title: t('receptionArea') || 'Reception Area',
      description: t('receptionDescription') || 'Welcoming and comfortable reception',
      image: Reception,
      icon: <FaHospital className="w-16 h-16" />,
      color: 'from-orange-500 to-orange-600'
    },
    {
      id: 12,
      category: 'reception',
      title: t('waitingRoom') || 'Waiting Room',
      description: t('waitingRoomDescription') || 'Comfortable family waiting space',
      image: WaitingRoom1,
      icon: <FaHeart className="w-16 h-16" />,
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      id: 13,
      category: 'reception',
      title: t('waitingArea') || 'Waiting Area',
      description: t('waitingAreaDescription') || 'Spacious waiting area for families',
      image: WaitingRoom2,
      icon: <FaHospital className="w-16 h-16" />,
      color: 'from-teal-500 to-teal-600'
    },
    {
      id: 14,
      category: 'reception',
      title: t('waitingHall') || 'Waiting Hall',
      description: t('waitingHallDescription') || 'Large waiting hall with seating',
      image: WaitingHall,
      icon: <FaHeart className="w-16 h-16" />,
      color: 'from-rose-500 to-rose-600'
    },
    {
      id: 15,
      category: 'emergency',
      title: t('emergencyRoom') || 'Emergency Room',
      description: t('emergencyRoomDescription') || '24x7 emergency medical care',
      image: EmergencyRoom,
      icon: <FaStethoscope className="w-16 h-16" />,
      color: 'from-red-500 to-red-600'
    },
    {
      id: 16,
      category: 'emergency',
      title: t('emergencyWard') || 'Emergency Ward',
      description: t('emergencyWardDescription') || 'Emergency treatment facility',
      image: EmergencyWard,
      icon: <FaShieldAlt className="w-16 h-16" />,
      color: 'from-orange-500 to-orange-600'
    },
    {
      id: 17,
      category: 'facility',
      title: t('medicalShop') || 'Medical Shop',
      description: t('medicalShopDescription') || 'In-house pharmacy for medicines',
      image: MedicalShop,
      icon: <FaHospital className="w-16 h-16" />,
      color: 'from-green-500 to-green-600'
    },
    {
      id: 18,
      category: 'facility',
      title: t('mainMedicalShop') || 'Main Medical Shop',
      description: t('mainMedicalShopDescription') || 'Main pharmacy with all medicines',
      image: MainMedicalShop,
      icon: <FaStethoscope className="w-16 h-16" />,
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 19,
      category: 'facility',
      title: t('hospitalOutside') || 'Hospital Exterior',
      description: t('hospitalOutsideDescription') || 'Hospital building exterior view',
      image: Outside,
      icon: <FaHospital className="w-16 h-16" />,
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 20,
      category: 'facility',
      title: t('nearbyView') || 'Nearby View',
      description: t('nearbyViewDescription') || 'Hospital location and surroundings',
      image: NearbyView,
      icon: <FaHeart className="w-16 h-16" />,
      color: 'from-cyan-500 to-cyan-600'
    }
  ];

  const categories = [
    { id: 'all', name: t('allPhotos') || 'All Photos', icon: <FaImage /> },
    { id: 'nicu', name: t('nicuGallery'), icon: <FaBaby /> },
    { id: 'doctor', name: t('doctorGallery'), icon: <FaUserMd /> },
    { id: 'reception', name: t('receptionGallery'), icon: <FaHospital /> },
    { id: 'emergency', name: t('emergencyGallery') || 'Emergency', icon: <FaStethoscope /> },
    { id: 'facility', name: t('facilityGallery') || 'Facilities', icon: <FaHeart /> }
  ];

  const filteredImages = activeCategory === 'all' 
    ? galleryData 
    : galleryData.filter(img => img.category === activeCategory);

  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    setCurrentIndex(0);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(filteredImages[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
    setSelectedImage(filteredImages[prevIndex]);
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
            <h1 className="text-5xl font-bold text-gray-900 mb-6">{t('galleryTitle')}</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              {t('gallerySubtitle')}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                🏥 Modern Facilities
              </span>
              <span className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                👶 NICU Care
              </span>
              <span className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                👨‍⚕️ Expert Team
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-8 bg-white sticky top-20 z-40 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span className="text-lg">{category.icon}</span>
                <span>{category.name}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            <AnimatePresence>
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                  className="group cursor-pointer"
                  onClick={() => openLightbox(image, index)}
                >
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden border border-gray-200">
                    {/* Actual Image */}
                    <div className="h-48 relative overflow-hidden">
                      <img 
                        src={image.image} 
                        alt={image.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                        <FaSearchPlus className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100" />
                      </div>
                      {/* Photo indicator */}
                      <div className="absolute top-4 right-4 bg-white bg-opacity-90 rounded-full p-2">
                        <FaImage className="w-4 h-4 text-gray-600" />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{image.title}</h3>
                      <p className="text-gray-600 text-sm mb-3">{image.description}</p>
                      <div className="text-xs text-orange-600 font-semibold bg-orange-50 px-3 py-1 rounded-full inline-block">
                        {image.category.charAt(0).toUpperCase() + image.category.slice(1)}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* No Results */}
          {filteredImages.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <FaImage className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No images found</h3>
              <p className="text-gray-500">Try selecting a different category</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-full bg-white rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all duration-300"
              >
                <FaTimes className="w-5 h-5" />
              </button>

              {/* Navigation arrows */}
              {filteredImages.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition-all duration-300"
                  >
                    <FaArrowLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition-all duration-300"
                  >
                    <FaArrowRight className="w-5 h-5" />
                  </button>
                </>
              )}

              {/* Image */}
              <div className="h-96 relative overflow-hidden">
                <img 
                  src={selectedImage.image} 
                  alt={selectedImage.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 text-white px-4 py-2 rounded-lg">
                  <p className="text-sm">{selectedImage.title}</p>
                </div>
              </div>

              {/* Image Info */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedImage.title}</h3>
                <p className="text-gray-600 mb-4">{selectedImage.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-orange-600 font-semibold bg-orange-50 px-3 py-1 rounded-full">
                    {selectedImage.category.charAt(0).toUpperCase() + selectedImage.category.slice(1)}
                  </span>
                  <span className="text-sm text-gray-500">
                    {currentIndex + 1} of {filteredImages.length}
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hospital Information */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-cream-50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 shadow-lg border border-orange-200"
          >
            <FaImage className="w-16 h-16 text-orange-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t('realPhotosTitle') || 'Real Hospital Photos'}
            </h2>
            <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
              {t('realPhotosDescription') || 'Explore our actual hospital facilities, advanced NICU equipment, and comfortable patient areas. These real photos showcase the quality care environment we provide.'}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-orange-50 px-4 py-2 rounded-full border border-orange-200">
                <span className="text-orange-700 font-semibold">📸 {t('nicuFacilities') || 'NICU Facilities'}</span>
              </div>
              <div className="bg-blue-50 px-4 py-2 rounded-full border border-blue-200">
                <span className="text-blue-700 font-semibold">🏥 {t('hospitalAreas') || 'Hospital Areas'}</span>
              </div>
              <div className="bg-green-50 px-4 py-2 rounded-full border border-green-200">
                <span className="text-green-700 font-semibold">🚨 {t('emergencyFacilities') || 'Emergency Facilities'}</span>
              </div>
              <div className="bg-purple-50 px-4 py-2 rounded-full border border-purple-200">
                <span className="text-purple-700 font-semibold">💊 {t('medicalServices') || 'Medical Services'}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-bold text-white">
              Visit Our Facilities
            </h2>
            <p className="text-xl text-orange-100 max-w-2xl mx-auto">
              Schedule a visit to see our state-of-the-art facilities and meet our experienced medical team in person.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:9128231000"
                className="bg-white text-orange-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-orange-50 transition-colors transform hover:scale-105"
              >
                📞 Call for Visit: 9128231000
              </a>
              <a
                href="https://maps.app.goo.gl/HXhDW5t9f49KRBc98"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-colors transform hover:scale-105"
              >
                🗺️ View Location
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
