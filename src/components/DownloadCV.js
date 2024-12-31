import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const DownloadCVButton = () => {
  const { language } = useLanguage();
  const cvLink = language === 'en' ? '/CV BOISSEAU Romain - English.pdf' : '/CV BOISSEAU Romain.pdf';

  return (
    <a 
      href={cvLink}
      download 
      className="fixed bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-full flex items-center shadow-lg hover:bg-blue-600 transition duration-300"
    >
      <i className="fas fa-download mr-2"></i>
      CV
    </a>
  );
};

export default DownloadCVButton;