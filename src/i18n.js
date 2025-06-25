import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  hi: {
    translation: {
      // Navigation
      home: "होम",
      doctor: "डॉक्टर",
      services: "सेवाएं",
      gallery: "गैलरी",
      contact: "संपर्क",
      
      // Language Toggle
      language: "भाषा",
      hindi: "हिंदी",
      english: "English",
      
      // Home Page
      hospitalName: "माँ जानकी हॉस्पिटल एंड चाइल्ड केयर",
      tagline: "स्वस्थ जीवन की ओर एक कदम।",
      callNow: "अभी कॉल करें",
      emergencyHelp: "आपातकालीन सहायता",
      bookAppointment: "अपॉइंटमेंट बुक करें",
      heroTitle: "आपके बच्चे के स्वास्थ्य की देखभाल हमारी प्राथमिकता है",
      heroSubtitle: "२४×७ बाल चिकित्सा सेवा • उन्नत नवजात गहन चिकित्सा इकाई • अनुभवी डॉक्टर",
      
      // About Section
      aboutTitle: "हमारे बारे में",
      aboutText: "माँ जानकी हॉस्पिटल एंड चाइल्ड केयर मैरवा में स्थित एक प्रमुख बाल चिकित्सा अस्पताल है। हम २४×७ आपातकालीन सेवाएं, उन्नत नवजात गहन चिकित्सा इकाई सुविधाएं और विशेषज्ञ बाल चिकित्सा देखभाल प्रदान करते हैं।",
      
      // Features
      featuresTitle: "हमारी विशेषताएं",
      feature1Title: "२४×७ आपातकालीन सेवा",
      feature1Text: "हमारे अनुभवी डॉक्टर और स्टाफ 24 घंटे उपलब्ध हैं",
      feature2Title: "उन्नत NICU",
      feature2Text: "नवीनतम तकनीक से सुसज्जित NICU सुविधा",
      feature3Title: "विशेषज्ञ देखभाल",
      feature3Text: "बच्चों के लिए विशेष डिज़ाइन की गई चिकित्सा सेवाएं",
      
      // Doctor Page
      doctorTitle: "हमारे डॉक्टर",
      doctorName: "डॉ. अमृत कुमार",
      doctorQualification: "बी.ए.एम.एस, के.एस.डी.एस.यू (दरभंगा)",
      doctorExperience: "१०+ वर्षों का अनुभव",
      doctorSpecialty: "बाल चिकित्सा विशेषज्ञ",
      doctorDescription: "डॉ. अमृत कुमार एक अनुभवी बाल चिकित्सक हैं जो बच्चों के स्वास्थ्य में विशेषज्ञता रखते हैं। उन्होंने हजारों बच्चों का सफल इलाज किया है।",
      
      // Doctor Qualifications
      bamsQualification: "बी.ए.एम.एस",
      bamsYear: "२०२०",
      bamsInstitution: "के.एस.डी.एस.यू (दरभंगा)",
      pediatricCertification: "बाल चिकित्सा प्रमाणन",
      pediatricYear: "२०१८",
      pediatricInstitution: "बिहार मेडिकल काउंसिल",
      emergencyCertification: "आपातकालीन देखभाल प्रशिक्षण",
      emergencyYear: "२०१९",
      emergencyInstitution: "बाल स्वास्थ्य संस्थान",
      
      // Doctor Page Terms
      qualificationsTitle: "शिक्षा और योग्यताएं",
      qualificationsSubtitle: "पेशेवर चिकित्सा शिक्षा और प्रशिक्षण",
      achievementsTitle: "पेशेवर उपलब्धियां",
      achievementsSubtitle: "बाल स्वास्थ्य सेवा के समर्पित वर्ष",
      patientsReviews: "मरीजों की समीक्षा",
      reviewsSubtitle: "परिवार डॉ. अमृत कुमार के बारे में क्या कहते हैं",
      consultReady: "डॉ. अमृत कुमार से परामर्श के लिए तैयार हैं?",
      consultSubtitle: "मैरवा में सर्वोत्तम बाल चिकित्सा देखभाल के लिए आज ही अपनी अपॉइंटमेंट बुक करें। आपातकालीन परामर्श के लिए २४×७ उपलब्ध।",
      callNow: "अभी कॉल करें",
      bookAppointment: "अपॉइंटमेंट बुक करें",
      specializations: "विशेषज्ञता",
      quickInformation: "त्वरित जानकारी",
      consultationFee: "परामर्श शुल्क",
      availableDays: "उपलब्ध दिन",
      timing: "समय",
      languages: "भाषाएं",
      
      // Common terms in Hindi
      phoneCall: "फोन कॉल",
      whatsappCall: "व्हाट्सऐप कॉल",
      emergency24x7: "२४×७ आपातकालीन",
      mondayToSunday: "सोमवार से रविवार",
      hindiEnglish: "हिंदी, अंग्रेजी",
      rupees: "रुपये",
      
      // Services Page
      servicesTitle: "हमारी सेवाएं",
      servicesSubtitle: "हम आपके बच्चे के लिए सभी आवश्यक चिकित्सा सुविधाएं प्रदान करते हैं",
      oxygen: "ऑक्सीजन",
      babyWarmer: "बेबी वार्मर",
      incubator: "इनक्यूबेटर",
      phototherapy: "फोटोथेरेपी",
      infusionPump: "इन्फ्यूजन पंप",
      pulseOximeter: "पल्स ऑक्सीमीटर",
      nebulizer: "नेब्युलाइजर",
      nicu: "NICU",
      
      // Gallery Page
      galleryTitle: "गैलरी",
      gallerySubtitle: "हमारी अत्याधुनिक सुविधाओं की झलक",
      nicuGallery: "NICU सुविधा",
      doctorGallery: "डॉक्टर",
      receptionGallery: "रिसेप्शन क्षेत्र",
      
      // Contact Page
      contactTitle: "संपर्क करें",
      contactSubtitle: "हमसे जुड़ें और अपने बच्चे के लिए बेहतरीन चिकित्सा सेवा प्राप्त करें",
      phone: "फोन",
      address: "पता",
      addressText: "मैरवा, बिहार",
      emergencyText: "२४×७ आपातकालीन सेवा उपलब्ध",
      whatsapp: "व्हाट्सऐप",
      call: "कॉल करें",
      
      // Footer
      footerText: "© 2025 माँ जानकी हॉस्पिटल एंड चाइल्ड केयर। सभी अधिकार सुरक्षित।",
      quickLinks: "त्वरित लिंक",
      followUs: "हमें फॉलो करें",
      
      // Achievement labels
      patientsLabel: "उपचारित मरीज",
      experienceLabel: "वर्षों का अनुभव",
      certificationsLabel: "प्रमाणपत्र",
      successRateLabel: "सफलता दर",
      
      // Specialization areas
      newbornCare: "नवजात देखभाल और नीकू",
      immunization: "बचपन के टीकाकरण",
      growthDevelopment: "वृद्धि और विकास",
      respiratoryDisorders: "श्वसन संबंधी विकार",
      nutritionFeeding: "पोषण और आहार",
      emergencyPediatrics: "आपातकालीन बाल चिकित्सा",
      
      // Additional terms
      reviewsCount: "५.० (५०+ समीक्षाएं)",
      childCareSpecialist: "बाल देखभाल विशेषज्ञ",
      
      // Gallery translations
      allPhotos: "सभी फोटो",
      emergencyGallery: "आपातकालीन",
      facilityGallery: "सुविधाएं",
      
      // NICU Gallery items
      nicuFacility: "नीकू सुविधा",
      nicuDescription: "उन्नत निगरानी प्रणाली के साथ आधुनिक नीकू",
      nicuRoom: "नीकू कक्ष",
      nicuRoomDescription: "जीवन सहायता प्रणाली के साथ विशेष नीकू कक्ष",
      nicuEquipment: "नीकू उपकरण",
      nicuEquipmentDescription: "नवजात देखभाल के लिए उन्नत चिकित्सा उपकरण",
      nicuMonitoring: "नीकू निगरानी",
      nicuMonitoringDescription: "निरंतर निगरानी प्रणालियां",
      nicuCare: "नीकू देखभाल",
      nicuCareDescription: "समय से पहले जन्मे बच्चों के लिए गहन देखभाल",
      nicuAdvanced: "उन्नत नीकू",
      nicuAdvancedDescription: "अत्याधुनिक नीकू सुविधा",
      nicuSpecialized: "विशेष नीकू",
      nicuSpecializedDescription: "गंभीर मामलों के लिए विशेष देखभाल",
      
      // Reception Gallery items
      receptionArea: "रिसेप्शन क्षेत्र",
      receptionDescription: "स्वागत करने वाला और आरामदायक रिसेप्शन",
      waitingRoom: "प्रतीक्षा कक्ष",
      waitingRoomDescription: "परिवारों के लिए आरामदायक प्रतीक्षा स्थान",
      waitingArea: "प्रतीक्षा क्षेत्र",
      waitingAreaDescription: "परिवारों के लिए विशाल प्रतीक्षा क्षेत्र",
      waitingHall: "प्रतीक्षा हॉल",
      waitingHallDescription: "बैठने की व्यवस्था के साथ बड़ा प्रतीक्षा हॉल",
      
      // Emergency Gallery items
      emergencyRoom: "आपातकालीन कक्ष",
      emergencyRoomDescription: "२४×७ आपातकालीन चिकित्सा देखभाल",
      emergencyWard: "आपातकालीन वार्ड",
      emergencyWardDescription: "आपातकालीन उपचार सुविधा",
      
      // Facility Gallery items
      medicalShop: "मेडिकल शॉप",
      medicalShopDescription: "दवाओं के लिए इन-हाउस फार्मेसी",
      mainMedicalShop: "मुख्य मेडिकल शॉप",
      mainMedicalShopDescription: "सभी दवाओं के साथ मुख्य फार्मेसी",
      hospitalOutside: "अस्पताल बाहरी दृश्य",
      hospitalOutsideDescription: "अस्पताल भवन का बाहरी दृश्य",
      nearbyView: "आसपास का दृश्य",
      nearbyViewDescription: "अस्पताल का स्थान और आसपास का क्षेत्र",
      
      // Gallery footer
      realPhotosTitle: "वास्तविक अस्पताल फोटो",
      realPhotosDescription: "हमारी वास्तविक अस्पताल सुविधाओं, उन्नत नीकू उपकरण और आरामदायक रोगी क्षेत्रों का अन्वेषण करें। ये वास्तविक फोटो हमारे द्वारा प्रदान किए जाने वाले गुणवत्तापूर्ण देखभाल वातावरण को दर्शाते हैं।",
      nicuFacilities: "नीकू सुविधाएं",
      hospitalAreas: "अस्पताल क्षेत्र",
      emergencyFacilities: "आपातकालीन सुविधाएं",
      medicalServices: "चिकित्सा सेवाएं",
      
      // Doctor Gallery items
      doctorProfile: "डॉ. अमृत कुमार",
      doctorProfileDescription: "हमारे अनुभवी बाल चिकित्सा विशेषज्ञ",
      consultationRoom: "परामर्श कक्ष",
      consultationRoomDescription: "डॉक्टर के साथ निजी परामर्श",
      medicalTeam: "चिकित्सा टीम",
      medicalTeamDescription: "विशेषज्ञ चिकित्सा पेशेवर",
    }
  },
  en: {
    translation: {
      // Navigation
      home: "Home",
      doctor: "Doctor",
      services: "Services",
      gallery: "Gallery",
      contact: "Contact",
      
      // Language Toggle
      language: "Language",
      hindi: "हिंदी",
      english: "English",
      
      // Home Page
      hospitalName: "Maa Janki Hospital & Child Care",
      tagline: "A Step Toward a Healthier Life.",
      callNow: "Call Now",
      emergencyHelp: "Emergency Help",
      bookAppointment: "Book Appointment",
      heroTitle: "Your Child's Health is Our Priority",
      heroSubtitle: "24x7 Pediatric Care • Advanced NICU Facility • Experienced Doctors",
      
      // About Section
      aboutTitle: "About Us",
      aboutText: "Maa Janki Hospital & Child Care is a leading pediatric hospital located in Mairwa. We provide 24x7 emergency services, advanced NICU facilities, and specialized pediatric care.",
      
      // Features
      featuresTitle: "Our Features",
      feature1Title: "24x7 Emergency Service",
      feature1Text: "Our experienced doctors and staff are available 24 hours",
      feature2Title: "Advanced NICU",
      feature2Text: "State-of-the-art NICU facility equipped with latest technology",
      feature3Title: "Specialized Care",
      feature3Text: "Medical services specially designed for children",
      
      // Doctor Page
      doctorTitle: "Our Doctor",
      doctorName: "Dr. Amrit Kumar",
      doctorQualification: "BAMS, KSDSU (Darbhanga)",
      doctorExperience: "10+ Years Experience",
      doctorSpecialty: "Pediatric Specialist",
      doctorDescription: "Dr. Amrit Kumar is an experienced pediatrician who specializes in children's health. He has successfully treated thousands of children.",
      
      // Doctor Qualifications
      bamsQualification: "BAMS",
      bamsYear: "2020",
      bamsInstitution: "KSDSU (Darbhanga)",
      pediatricCertification: "Pediatric Certification",
      pediatricYear: "2018",
      pediatricInstitution: "Bihar Medical Council",
      emergencyCertification: "Emergency Care Training",
      emergencyYear: "2019",
      emergencyInstitution: "Child Health Institute",
      
      // Doctor Page Terms
      qualificationsTitle: "Education & Qualifications",
      qualificationsSubtitle: "Professional medical education and training",
      achievementsTitle: "Professional Achievements",
      achievementsSubtitle: "Years of dedicated service to child healthcare",
      patientsReviews: "Patient Reviews",
      reviewsSubtitle: "What families say about Dr. Amrit Kumar",
      consultReady: "Ready to Consult Dr. Amrit Kumar?",
      consultSubtitle: "Book your appointment today for the best pediatric care in Mairwa. Available 24x7 for emergency consultations.",
      callNow: "Call Now",
      bookAppointment: "Book Appointment",
      specializations: "Specializations",
      quickInformation: "Quick Information",
      consultationFee: "Consultation Fee",
      availableDays: "Available Days",
      timing: "Timing",
      languages: "Languages",
      
      // Common terms in English
      phoneCall: "Phone Call",
      whatsappCall: "WhatsApp Call",
      emergency24x7: "24x7 Emergency",
      mondayToSunday: "Mon - Sun",
      hindiEnglish: "Hindi, English",
      rupees: "₹",
      
      // Services Page
      servicesTitle: "Our Services",
      servicesSubtitle: "We provide all essential medical facilities for your child",
      oxygen: "Oxygen",
      babyWarmer: "Baby Warmer",
      incubator: "Incubator",
      phototherapy: "Phototherapy",
      infusionPump: "Infusion Pump",
      pulseOximeter: "Pulse Oximeter",
      nebulizer: "Nebulizer",
      nicu: "NICU",
      
      // Gallery Page
      galleryTitle: "Gallery",
      gallerySubtitle: "A glimpse of our state-of-the-art facilities",
      nicuGallery: "NICU Facility",
      doctorGallery: "Doctor",
      receptionGallery: "Reception Area",
      
      // Contact Page
      contactTitle: "Contact Us",
      contactSubtitle: "Get in touch with us and receive the best medical care for your child",
      phone: "Phone",
      address: "Address",
      addressText: "Mairwa, Bihar",
      emergencyText: "24x7 Emergency Service Available",
      whatsapp: "WhatsApp",
      call: "Call",
      
      // Footer
      footerText: "© 2025 Maa Janki Hospital & Child Care. All rights reserved.",
      quickLinks: "Quick Links",
      followUs: "Follow Us",
      
      // Achievement labels
      patientsLabel: "Patients Treated",
      experienceLabel: "Years Experience",
      certificationsLabel: "Certifications",
      successRateLabel: "Success Rate",
      
      // Specialization areas
      newbornCare: "Newborn Care & NICU",
      immunization: "Childhood Immunization",
      growthDevelopment: "Growth & Development",
      respiratoryDisorders: "Respiratory Disorders",
      nutritionFeeding: "Nutrition & Feeding",
      emergencyPediatrics: "Emergency Pediatrics",
      
      // Additional terms
      reviewsCount: "5.0 (50+ reviews)",
      childCareSpecialist: "Child Care Specialist",
      
      // Gallery translations
      allPhotos: "All Photos",
      emergencyGallery: "Emergency",
      facilityGallery: "Facilities",
      
      // NICU Gallery items
      nicuFacility: "NICU Facility",
      nicuDescription: "Modern NICU with advanced monitoring systems",
      nicuRoom: "NICU Room",
      nicuRoomDescription: "Specialized NICU room with life support systems",
      nicuEquipment: "NICU Equipment",
      nicuEquipmentDescription: "Advanced medical equipment for newborn care",
      nicuMonitoring: "NICU Monitoring",
      nicuMonitoringDescription: "Continuous monitoring systems",
      nicuCare: "NICU Care",
      nicuCareDescription: "Intensive care for premature babies",
      nicuAdvanced: "Advanced NICU",
      nicuAdvancedDescription: "State-of-the-art NICU facility",
      nicuSpecialized: "Specialized NICU",
      nicuSpecializedDescription: "Specialized care for critical cases",
      
      // Reception Gallery items
      receptionArea: "Reception Area",
      receptionDescription: "Welcoming and comfortable reception",
      waitingRoom: "Waiting Room",
      waitingRoomDescription: "Comfortable family waiting space",
      waitingArea: "Waiting Area",
      waitingAreaDescription: "Spacious waiting area for families",
      waitingHall: "Waiting Hall",
      waitingHallDescription: "Large waiting hall with seating",
      
      // Emergency Gallery items
      emergencyRoom: "Emergency Room",
      emergencyRoomDescription: "24x7 emergency medical care",
      emergencyWard: "Emergency Ward",
      emergencyWardDescription: "Emergency treatment facility",
      
      // Facility Gallery items
      medicalShop: "Medical Shop",
      medicalShopDescription: "In-house pharmacy for medicines",
      mainMedicalShop: "Main Medical Shop",
      mainMedicalShopDescription: "Main pharmacy with all medicines",
      hospitalOutside: "Hospital Exterior",
      hospitalOutsideDescription: "Hospital building exterior view",
      nearbyView: "Nearby View",
      nearbyViewDescription: "Hospital location and surroundings",
      
      // Gallery footer
      realPhotosTitle: "Real Hospital Photos",
      realPhotosDescription: "Explore our actual hospital facilities, advanced NICU equipment, and comfortable patient areas. These real photos showcase the quality care environment we provide.",
      nicuFacilities: "NICU Facilities",
      hospitalAreas: "Hospital Areas",
      emergencyFacilities: "Emergency Facilities",
      medicalServices: "Medical Services",
      
      // Doctor Gallery items
      doctorProfile: "Dr. Amrit Kumar",
      doctorProfileDescription: "Our experienced pediatric specialist",
      consultationRoom: "Consultation Room",
      consultationRoomDescription: "Private consultation with doctor",
      medicalTeam: "Medical Team",
      medicalTeamDescription: "Expert medical professionals",
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'hi', // Default language is Hindi
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
