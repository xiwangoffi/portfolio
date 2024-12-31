import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import franceFlag from '../assets/france.png';
import ukFlag from '../assets/uk.png';

const Navbar = () => {
  const { language, toggleLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const texts = {
    fr: {
      about: 'À propos',
      project: 'Projets',
      contact: 'Contact',
    },
    en: {
      about: 'About',
      project: 'Project',
      contact: 'Contact',
    },
  };

  return (
    <nav className="bg-transparent fixed w-full top-0 z-50 pt-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex space-x-4 items-center hidden lg:flex">
            <a
              href="#about"
              className="text-white hover:bg-blue-700 bg-opacity-50 px-4 py-2 rounded-full text-sm font-medium"
            >
              {texts[language].about}
            </a>
            <a
              href="#project"
              className="text-white hover:bg-blue-700 bg-opacity-50 px-4 py-2 rounded-full text-sm font-medium"
            >
              {texts[language].project}
            </a>
            <a
              href="#contact"
              className="text-white hover:bg-blue-700 bg-opacity-50 px-4 py-2 rounded-full text-sm font-medium"
            >
              {texts[language].contact}
            </a>
          </div>

          <button
            className="text-white lg:hidden z-60"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>

          <div className="flex items-center space-x-2 ml-4">
            <div className="relative inline-block w-20 align-middle select-none transition duration-200 ease-in">
              <input
                type="checkbox"
                name="toggle"
                id="toggle"
                checked={language === 'fr'}
                onChange={toggleLanguage}
                className="toggle-checkbox absolute block w-10 h-10 rounded-full bg-white border-4 appearance-none cursor-pointer"
              />
              <label
                htmlFor="toggle"
                className="toggle-label block overflow-hidden h-10 rounded-full bg-gray-900 cursor-pointer"
              >
                <span className="absolute left-1 top-1 w-8 h-8 flex items-center justify-center">
                  <img src={ukFlag} alt="UK Flag" className="w-6 h-6" />
                </span>
                <span className="absolute right-1 top-1 w-8 h-8 flex items-center justify-center">
                  <img src={franceFlag} alt="France Flag" className="w-6 h-6" />
                </span>
              </label>
            </div>
          </div>
        </div>

        <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-gray-800 bg-opacity-90 absolute w-full top-0 left-0 p-6 z-50`}>
          <a
            href="#about"
            className="block text-white hover:bg-blue-700 bg-opacity-50 px-4 py-2 rounded-full text-sm font-medium mb-4 text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            {texts[language].about}
          </a>
          <a
            href="#project"
            className="block text-white hover:bg-blue-700 bg-opacity-50 px-4 py-2 rounded-full text-sm font-medium mb-4 text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            {texts[language].project}
          </a>
          <a
            href="#contact"
            className="block text-white hover:bg-blue-700 bg-opacity-50 px-4 py-2 rounded-full text-sm font-medium mb-4 text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            {texts[language].contact}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
