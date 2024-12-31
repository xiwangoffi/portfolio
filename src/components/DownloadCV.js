import React from 'react';
import CV_Fr from '../assets/CV BOISSEAU Romain.pdf'
import CV_En from '../assets/CV BOISSEAU Romain - English.pdf'
import { useLanguage } from '../contexts/LanguageContext';

const DownloadCVButton = () => {
  const { language } = useLanguage();
  const cvLink = language === 'en' ? CV_En : CV_Fr;

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