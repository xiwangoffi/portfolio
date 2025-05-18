import React from 'react';
import Slider from 'react-slick';
import Uneven from '../assets/Uneven.png'
import Moteur from '../assets/Moteur.png'
import Encapsulation from '../assets/Encapsulation.jpg'
import Malartre from '../assets/musee-malartre.png'
import Riwa from '../assets/Riwa.png'
import { useLanguage } from '../contexts/LanguageContext';

const ProjectCarousel = () => {
  const { language } = useLanguage();

  const texts = {
    fr: [
      {
        image: Riwa,
        title: 'Riwa',
        description: "<b>Riwa</b> est un jeu d'égnime et d'exploration développé sur Unity en 3D dans le cadre du Grand Projet Commun pour la dernière année de bachelor au Gaming Campus. En équipe de 24 avec des Artistes, Business, TVs, Musiciens et Développeurs, en 1 mois l'objectif était de créer un jeu mobile commercialisable. Dans ce jeu nous exploitons le changement de temporalité entre passé et présent, diversifiant ainsi les environnements, l'ambiance et les mécaniques. De plus pour cette démo jouable sur téléphone nous avons voulu montrer un maximum de mécanique pouvant à terme être disponible dans la version complète du jeu, tel qu'un damier procédurale, contrôler une âme pouvant agir sur la nature environnante et plus encore.<br></br><b>Prix décerné: <u>Meilleur Gameplay</u></b> <br></br>APK du projet: <a href='https://drive.google.com/file/d/1ucN383EKrow2JyUT32c1oeF5p6MnI7EJ/view?usp=drive_link' target='_blank' rel='noopener noreferrer' style='color: blue; text-decoration: underline;'>Téléchargez ici (lien GDrive)</a>"
      },
      {
        image: Malartre,
        title: 'Mystère dans les Halls',
        description: "Mystère dans les Halls est un jeu mobile 'serious game' pour le musée de l'automobile Henri Malartre à Lyon, réalisé sur Unity dans le cadre d'un projet en bénévolat. L'objectif du projet était de réaliser en équipe une reconstitution au plus proche de la réalité des hangars dans l'environnement 3D d'Unity, ainsi que 3 mini-jeux permettant de faire découvrir aux joueurs le musée et potentiellement donc amener de nouveau visiteur pour le musée. <br /><br /><b>Github du projet privé</b><br /><b>Application disponible sur les stores Apple & Android fin Avril 2025.</b>"
      },
      {
        image: Uneven,
        title: 'Uneven',
        description: "Uneven est un jeu réalisé dans le cadre d'un stage de 2ème année au Gaming Campus de Lyon sur une durée de 4 mois que nous avons décidé de prolonger. Uneven est un jeu d'aventure basé sur les assemblages de couleurs ayant chacune leur <b>monde et mécanique respective</b>, réalisé sur Unity 3D. Disponible en 2025 sur Steam, déjà actuellement en Wishlist. <br /><u>Caractéristique de ce projet</u>, nous sommes une équipe de 6 développeurs à plusieurs casquette et d'un Marketing Manager. <br /><b><u>Chef de projet, Développeur, Marketing & Communication:</u></b> Victor MARTINAN <br /><b><u>Développeur & Narrative Designer:</u></b> Lilian LAFIN & Enzo PHILIPPE <br /><b><u>Développeur CC & Environnement:</u></b> Benjamin TURCAT <br /><b><u>Développeur Système & UI | 2D Artist:</u></b> Benjamin ARHANCET <br /><b><u>Développeur IA, VFX & Shader Artist, Bossfight:</u></b> Romain BOISSEAU <br /><b><u>Communication & Marketing:</u></b> Anisse SI LOUIS <br /><b>Linkedin:</b> <a href='https://www.linkedin.com/company/nesaku-games/posts/?feedView=all' target='_blank' rel='noopener noreferrer' style='color: blue; text-decoration: underline;'>https://www.linkedin.com/Nesaku-Games</a>"
      },
      {
        image: Moteur,
        title: 'Moteur 3D - DX12',
        description: "Le moteur 3D avec DirectX12 (C++) a été réalisé dans le cadre d'un projet de 2ème année au Gaming Campus de Lyon, l'objectif de ce dernier était en équipe de 4 de: <br /><br /><b>Concevoir un moteur avec DX12</b> <br /><b>Créer ses propres formes 3D grâce aux Vertex</b> <br /><b>Réaliser des effets de particules</b> <br /><b>Réaliser un space shooter en utilisant notre moteur 3D</b> <br /><b>Comprendre le principe de fonctionnement d'un moteur 3D</b><br /><br />Ce projet avait pour but d'être une introduction aux moteurs 3D que nous allions utiliser par la suite comme Unity & Unreal Engine qui sont plus complet afin que nous comprenions leur fonctionnement afin de ne pas être perdu d'autant plus que nous allons devoir utiliser d'autres logiciels 3D pour réaliser des effets complexes à l'avenir, tel que Blender qui utilise certaines des notions vues lors de ce projet."
      },
      {
        image: Encapsulation,
        title: 'Encapsulation',
        description: "Le projet d'encapsulation C++ a été réalisé dans le cadre d'un projet avancé en 3ème année visant à exploiter directives du préprocesseur et les principes d'encapsulation en programmation orientée objet. L'objectif principal était de développer une application unique compatible avec deux technologies distinces: <b>SFML</b> et <b>Windows API</b>, tout en garantissant leur coexistence au sein d'un même projet. <br /><br/><b>Objectifs spécifiques:</b> <br /><b>- Implémenter les directives C++ (#ifdef) pour gérer les différences de compilation</b> <br /><b>- Encapsuler rigoureusement les classes pour éviter tout conflit entre SFML et Windows API</b> <br /><b>- Faire rebondir des balles dans une fenêtre graphique</b> <br /><b>- Comparer les performances (FPS) entre SFML et Windows API</b> <br /><br />Ce projet constituait un défi technique intéressant, une encapsulation inadéquate aurait provoqué des conflits et des crashs, mettant en évidence l'importance de structurer et isoler les dépendances dans le code."
      },
    ],
    en: [
      {
        image: Riwa,
        title: 'Riwa',
        description: "<b>Riwa</b> is a puzzle and exploration game developed in 3D using Unity as part of the Grand Projet Commun for the final year of the Bachelor's program at Gaming Campus. Our team of 24 members, including Artists, Business students, Technical designers, Musicians and Developers, had one month to create a commercially viable mobile game. In this game, we explore the concept of shifting between past and present timelines, which adds variety to the environments, atmosphere, and gameplay mechanics. For this mobile demo, we aimed to showcase as many mechanics as possible that could eventually be included in the full version of the game, such as a procedural checkerboard, controlling a soul that can interact with the surrounding nature, and more.<br></br><b>Award Received: <u>Best Gameplay</u></b> <br></br>APK of the project: <a href='https://drive.google.com/file/d/1ucN383EKrow2JyUT32c1oeF5p6MnI7EJ/view?usp=drive_link' target='_blank' rel='noopener noreferrer' style='color: blue; text-decoration: underline;'>Download here (GDrive link)</a>"
      },
      {
        image: Malartre,
        title: 'Mystère dans les Halls',
        description: "Mystère dans les Halls is a mobile 'serious game' for the Henri Malartre Automobile Museum in Lyon, developed in Unity as part of a volunteer project. The goal of the project was to work as a team to create a 3D environment in Unity that closely replicates the museum's hangars, as well as three mini-games designed to introduce players to the museum, potentially encouraing new visitors to come. <br /><br /><b>Private Github repository</b> <br /><b>App available on the Apple & Android stores by the end of April 2025</b>"
      },
      {
        image: Uneven,
        title: 'Uneven',
        description: "Uneven is a game developed during a second-year internship at the Gaming Campus in Lyon over a period of 4 months, which we decided to extend. Uneven is an adventure game based on color combinations, each having its own <b>world and respective mechanics</b>, created on Unity 3D. Available in 2025 on Steam, currently on Wishlist. <br /><u>Project characteristics</u>, we are a team of 6 developers with multiple roles and a Marketing Manager. <br /><b><u>Project Manager, Developer, Marketing & Communication:</u></b> Victor MARTINAN <br /><b><u>Developer & Narrative Designer:</u></b> Lilian LAFIN & Enzo PHILIPPE <br /><b><u>CC Developer & Environment:</u></b> Benjamin TURCAT <br /><b><u>System & UI Developer | 2D Artist:</u></b> Benjamin ARHANCET <br /><b><u>AI Developer, VFX & Shader Artist, Bossfight:</u></b> Romain BOISSEAU <br /><b><u>Communication & Marketing:</u></b> Anisse SI LOUIS <br /><b>Linkedin:</b> <a href='https://www.linkedin.com/company/nesaku-games/posts/?feedView=all' target='_blank' rel='noopener noreferrer' style='color: blue; text-decoration: underline;'>https://www.linkedin.com/Nesaku-Games</a>"
      },
      {
        image: Moteur,
        title: '3D Engine - DX12',
        description: "The 3D engine with DirectX12 (C++) was developed as part of a second-year project at the Gaming Campus in Lyon. The objective of this project was for a team of 4 to: <br /><br /><b>Design an engine with DX12</b> <br /><b>Create their own 3D shapes using Vertex</b> <br /><b>Create particle effects</b> <br /><b>Create a space shooter using our 3D engine</b> <br /><b>Understand the principle of a 3D engine</b><br /><br />This project aimed to introduce 3D engines that we would use later like Unity & Unreal Engine, which are more complete, so that we understand their functioning to not be lost. Moreover, we will have to use other 3D software to create complex effects in the future, such as Blender, which uses some of the concepts seen during this project."
      },
      {
        image: Encapsulation,
        title: 'Encapsulation',
        description: "The C++ encapsulation project was carried out as part of an advanced third-year project aimed at exploiting preprocessor directives and encapsulation principles in object-oriented programming. The main objective was to develop a unique application compatible with two distinct technologies: <b>SFML</b> and <b>Windows API</b>, while ensuring their coexistence within the same project. <br /><br/><b>Specific objectives:</b> <br /><b>- Implement C++ directives (#ifdef) to manage compilation differences</b> <br /><b>- Rigorously encapsulate classes to avoid conflicts between SFML and Windows API</b> <br /><b>- Make balls bounce in a graphical window</b> <br /><b>- Compare performance (FPS) between SFML and Windows API</b> <br /><br />This project was an interesting technical challenge, as inadequate encapsulation would have caused conflicts and crashes, highlighting the importance of structuring and isolating dependencies in the code."
      },
    ]
  };

  const projects = texts[language];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Slider {...settings}>
        {projects.map((project, index) => (
          <div key={index} className="p-4">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg mx-auto max-w-full lg:max-w-3xl xl:max-w-4xl">
              <img src={project.image} alt={`${project.title} - BOISSEAU Romain`} className="w-full h-48 md:h-64 lg:h-80 xl:h-96 object-cover" />
              <div className="p-4 flex flex-col">
                <h3 className="text-black text-xl xl:text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-justify text-gray-700 overflow-hidden" dangerouslySetInnerHTML={{ __html: project.description }}></p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProjectCarousel;