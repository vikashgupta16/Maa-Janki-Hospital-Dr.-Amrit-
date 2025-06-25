import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  FaUserMd, 
  FaGraduationCap, 
  FaAward, 
  FaClock,
  FaStar,
  FaQuoteLeft,
  FaPhoneAlt,
  FaCalendarAlt,
  FaHeart,
  FaStethoscope,
  FaCertificate,
  FaUsers
} from 'react-icons/fa';
import DoctorProfile from '../assets/Dr.Amrit-Gupta.jpg';

const Doctor = () => {
  const { t } = useTranslation();

  const qualifications = [
    { 
      degree: t('bamsQualification') || 'BAMS', 
      year: t('bamsYear') || '2020', 
      institution: t('bamsInstitution') || 'KSDSU (Darbhanga)' 
    },
    { 
      degree: t('pediatricCertification') || 'Pediatric Certification', 
      year: t('pediatricYear') || '2018', 
      institution: t('pediatricInstitution') || 'Bihar Medical Council' 
    },
    { 
      degree: t('emergencyCertification') || 'Emergency Care Training', 
      year: t('emergencyYear') || '2019', 
      institution: t('emergencyInstitution') || 'Child Health Institute' 
    }
  ];

  const achievements = [
    { icon: <FaUsers />, number: '5000+', label: t('patientsLabel') || 'Patients Treated' },
    { icon: <FaAward />, number: '10+', label: t('experienceLabel') || 'Years Experience' },
    { icon: <FaCertificate />, number: '5+', label: t('certificationsLabel') || 'Certifications' },
    { icon: <FaHeart />, number: '99%', label: t('successRateLabel') || 'Success Rate' }
  ];

  const specializations = [
    t('newbornCare') || 'Newborn Care & NICU',
    t('immunization') || 'Childhood Immunization',
    t('growthDevelopment') || 'Growth & Development',
    t('respiratoryDisorders') || 'Respiratory Disorders',
    t('nutritionFeeding') || 'Nutrition & Feeding',
    t('emergencyPediatrics') || 'Emergency Pediatrics'
  ];

  const testimonials = [
    {
      name: 'Mrs. Priya Sharma',
      text: 'डॉ. अमृत कुमार ने मेरे बच्चे की जान बचाई। वे बहुत ही दयालु और अनुभवी हैं।',
      rating: 5
    },
    {
      name: 'Mr. Rajesh Kumar',
      text: 'Excellent doctor with great expertise in child care. Highly recommended!',
      rating: 5
    },
    {
      name: 'Mrs. Sunita Devi',
      text: 'हमारे बच्चे का इलाज बहुत अच्छा हुआ। डॉक्टर साहब बहुत समझदार हैं।',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-cream-50 to-babyBlue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Doctor Image & Basic Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-white rounded-3xl p-8 shadow-2xl">
                {/* Placeholder for doctor image */}
                <div className="relative mb-6">
                  <div className="w-64 h-64 mx-auto bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center shadow-lg overflow-hidden">
  <img 
    src={DoctorProfile} 
    alt="Dr. Amrit Gupta" 
    className="w-full h-full object-cover object-center rounded-full"
  />
</div>

                  <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-green-500 to-green-600 p-3 rounded-full shadow-lg">
                    <FaStethoscope className="w-6 h-6 text-white" />
                  </div>
                </div>

                <div className="text-center space-y-4">
                  <h1 className="text-3xl font-bold text-gray-900">{t('doctorName')}</h1>
                  <p className="text-xl text-orange-600 font-semibold">{t('doctorQualification')}</p>
                  <p className="text-lg text-gray-600">{t('doctorSpecialty')}</p>
                  
                  <div className="flex justify-center items-center space-x-2 mt-4">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="w-5 h-5 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-gray-600 ml-2">{t('reviewsCount') || '5.0 (50+ reviews)'}</span>
                  </div>

                  <div className="flex justify-center space-x-4 mt-6">
                    <a
                      href="tel:9128231000"
                      className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
                    >
                      <FaPhoneAlt className="w-4 h-4" />
                      <span>{t('callNow')}</span>
                    </a>
                    <button className="bg-gradient-to-r from-babyBlue-500 to-babyBlue-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
                      <FaCalendarAlt className="w-4 h-4" />
                      <span>{t('bookAppointment')}</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Floating Achievement Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-400 to-yellow-500 p-4 rounded-full shadow-lg"
              >
                <FaAward className="w-6 h-6 text-white" />
              </motion.div>
            </motion.div>

            {/* Doctor Details */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('doctorTitle')}</h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-6">
                  {t('doctorDescription')}
                </p>
                
                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <FaClock className="w-5 h-5 text-orange-500" />
                    <span className="font-semibold text-gray-700">{t('doctorExperience')}</span>
                  </div>
                  <div className="w-1 h-6 bg-gray-300"></div>
                  <div className="flex items-center space-x-2">
                    <FaHeart className="w-5 h-5 text-red-500" />
                    <span className="font-semibold text-gray-700">{t('childCareSpecialist') || 'Child Care Specialist'}</span>
                  </div>
                </div>
              </div>

              {/* Specializations */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('specializations')}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {specializations.map((spec, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-2 bg-white p-3 rounded-lg shadow-sm border border-orange-100"
                    >
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span className="text-gray-700">{spec}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Quick Info */}
              <div className="bg-gradient-to-r from-orange-50 to-cream-50 p-6 rounded-2xl border border-orange-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{t('quickInformation')}</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">{t('consultationFee')}:</span>
                    <span className="font-semibold text-gray-900">{t('rupees')}200</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">{t('availableDays')}:</span>
                    <span className="font-semibold text-gray-900">{t('mondayToSunday')}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">{t('timing')}:</span>
                    <span className="font-semibold text-gray-900">{t('emergency24x7')}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">{t('languages')}:</span>
                    <span className="font-semibold text-gray-900">{t('hindiEnglish')}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Qualifications Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('qualificationsTitle')}</h2>
            <p className="text-xl text-gray-600">{t('qualificationsSubtitle')}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {qualifications.map((qual, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-cream-50 to-orange-50 p-6 rounded-2xl border border-orange-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                    <FaGraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{qual.degree}</h3>
                    <p className="text-orange-600 font-semibold">{qual.year}</p>
                  </div>
                </div>
                <p className="text-gray-600">{qual.institution}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-gradient-to-br from-babyBlue-50 to-cream-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('achievementsTitle')}</h2>
            <p className="text-xl text-gray-600">{t('achievementsSubtitle')}</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-16 h-16 mx-auto bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white text-2xl mb-4 group-hover:scale-110 transition-transform">
                  {achievement.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{achievement.number}</div>
                <div className="text-gray-600 font-medium">{achievement.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('patientsReviews')}</h2>
            <p className="text-xl text-gray-600">{t('reviewsSubtitle')}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-cream-50 to-orange-50 p-6 rounded-2xl border border-orange-200 relative"
              >
                <FaQuoteLeft className="w-8 h-8 text-orange-400 mb-4" />
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  </div>
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="w-4 h-4 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
              {t('consultReady')}
            </h2>
            <p className="text-xl text-orange-100 max-w-2xl mx-auto">
              {t('consultSubtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:9128231000"
                className="bg-white text-orange-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-orange-50 transition-colors transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <FaPhoneAlt className="w-5 h-5" />
                <span>{t('callNow')}: 9128231000</span>
              </a>
              <button className="bg-babyBlue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-babyBlue-700 transition-colors transform hover:scale-105 flex items-center justify-center space-x-2">
                <FaCalendarAlt className="w-5 h-5" />
                <span>{t('bookAppointment')}</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Doctor;
