import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'it' | 'en' | 'en-us' | 'de' | 'fr' | 'es' | 'zh' | 'ar';

interface Translations {
  companyName: string;
  tagline: string;
  description: string;
  phone: string;
  email: string;
  location: string;
  phoneLabel: string;
  emailLabel: string;
  locationLabel: string;
}

const translations: Record<Language, Translations> = {
  it: {
    companyName: "Azienda NCC",
    tagline: "Noleggio Con Conducente",
    description: "Servizio di trasporto privato di lusso con sede a Venezia. Operiamo in Veneto, Trentino e in tutta Italia, con possibilità di spostamenti in Europa.",
    phone: "+39 XXX XXX XXXX",
    email: "info@example.com",
    location: "Venezia, Italia",
    phoneLabel: "Telefono",
    emailLabel: "Email",
    locationLabel: "Sede",
  },
  en: {
    companyName: "Azienda NCC",
    tagline: "Private Chauffeur Service",
    description: "Luxury private transport service based in Venice. We operate in Veneto, Trentino and throughout Italy, with travel options across Europe.",
    phone: "+39 XXX XXX XXXX",
    email: "info@example.com",
    location: "Venice, Italy",
    phoneLabel: "Phone",
    emailLabel: "Email",
    locationLabel: "Location",
  },
  'en-us': {
    companyName: "Azienda NCC",
    tagline: "Private Chauffeur Service",
    description: "Luxury private transport service based in Venice. We operate in Veneto, Trentino and throughout Italy, with travel options across Europe.",
    phone: "+39 XXX XXX XXXX",
    email: "info@example.com",
    location: "Venice, Italy",
    phoneLabel: "Phone",
    emailLabel: "Email",
    locationLabel: "Location",
  },
  de: {
    companyName: "Azienda NCC",
    tagline: "Privater Chauffeurservice",
    description: "Luxuriöser privater Transportservice mit Sitz in Venedig. Wir sind in Venetien, Trentino und ganz Italien tätig, mit Reisemöglichkeiten in ganz Europa.",
    phone: "+39 XXX XXX XXXX",
    email: "info@example.com",
    location: "Venedig, Italien",
    phoneLabel: "Telefon",
    emailLabel: "E-Mail",
    locationLabel: "Standort",
  },
  fr: {
    companyName: "Azienda NCC",
    tagline: "Service de Chauffeur Privé",
    description: "Service de transport privé de luxe basé à Venise. Nous opérons en Vénétie, Trentin et dans toute l'Italie, avec des possibilités de déplacements en Europe.",
    phone: "+39 XXX XXX XXXX",
    email: "info@example.com",
    location: "Venise, Italie",
    phoneLabel: "Téléphone",
    emailLabel: "Email",
    locationLabel: "Siège",
  },
  es: {
    companyName: "Azienda NCC",
    tagline: "Servicio de Chófer Privado",
    description: "Servicio de transporte privado de lujo con sede en Venecia. Operamos en Véneto, Trentino y en toda Italia, con posibilidades de desplazamientos por Europa.",
    phone: "+39 XXX XXX XXXX",
    email: "info@example.com",
    location: "Venecia, Italia",
    phoneLabel: "Teléfono",
    emailLabel: "Correo",
    locationLabel: "Sede",
  },
  zh: {
    companyName: "Azienda NCC",
    tagline: "私人司机服务",
    description: "总部位于威尼斯的豪华私人交通服务。我们在威尼托、特伦蒂诺和意大利全境运营，并可前往欧洲各地。",
    phone: "+39 XXX XXX XXXX",
    email: "info@example.com",
    location: "威尼斯，意大利",
    phoneLabel: "电话",
    emailLabel: "邮箱",
    locationLabel: "地址",
  },
  ar: {
    companyName: "Azienda NCC",
    tagline: "خدمة السائق الخاص",
    description: "خدمة نقل خاصة فاخرة مقرها البندقية. نعمل في فينيتو وترينتينو وفي جميع أنحاء إيطاليا، مع إمكانية السفر عبر أوروبا.",
    phone: "+39 XXX XXX XXXX",
    email: "info@example.com",
    location: "البندقية، إيطاليا",
    phoneLabel: "الهاتف",
    emailLabel: "البريد الإلكتروني",
    locationLabel: "المقر",
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('it');

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
