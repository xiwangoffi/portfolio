import React from 'react';
import me from '../assets/me.jpg';
import { useLanguage } from '../contexts/LanguageContext';

const About = () => {
  const { language } = useLanguage();

  const texts = {
    fr: {
      title: 'Romain BOISSEAU',
      description: `Je suis passionné par le développement informatique, en particulier dans le domaine du jeu vidéo.
                    Avec de l'expérience en Unity et en C++, mon objectif est de devenir développeur d'un jeu à succès ou de contribuer
                    à des projets déjà établis dans l'industrie.`,
      skills: ['Unity', 'Unreal Engine', 'C++', 'Organisation', "Travail d'équipe"],
    },
    en: {
      title: 'Romain BOISSEAU',
      description: `I am passionate about software development, particularly in the field of video games.
                    With experience in Unity and C++, my goal is to become a successful game developer or contribute to already
                    established projects in the industry.`,
      skills: ['Unity', 'Unreal Engine', 'C++', 'Organization', 'Teamwork'],
    }
  };

  const { title, description, skills } = texts[language];

  return (
    <div className="relative max-w-4xl mx-auto p-4 md:p-8 bg-gray-900 bg-opacity-80 rounded-lg shadow-md transform transition duration-500 hover:scale-105 hover:shadow-xl overflow-hidden group">
      <div className="flex flex-col md:flex-row items-center md:items-start relative z-20">
        <div className="md:w-1/2 p-4 md:p-12">
          <div className="text-center md:text-left mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">{title}</h2>
            <p className="text-lg text-justify text-gray-100">
              {description}
            </p>
          </div>
          <div className="flex flex-wrap justify-center md:justify-start gap-2">
            {skills.map((skill, index) => (
              <span key={index} className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center md:justify-end p-4 md:p-12">
          <div className="w-full h-64 md:h-full bg-gray-300 rounded-lg overflow-hidden">
            <img
              src={me}
              alt={title}
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;