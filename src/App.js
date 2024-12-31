import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Project from './components/Project';
import DownloadCVButton from './components/DownloadCV';
import { LanguageProvider } from './contexts/LanguageContext';

function App() {
  useEffect(() => {
    window.particlesJS('particles-js', {
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            value_area: 800,
          },
        },
        color: {
          value: "#ffffff",
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#000000",
          },
          polygon: {
            nb_sides: 5,
          },
          image: {
            src: "img/github.svg",
            width: 100,
            height: 100,
          },
        },
        opacity: {
          value: 0.3,
          random: false,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false,
          },
        },
        size: {
          value: 5,
          random: true,
          anim: {
            enable: false,
            speed: 40,
            size_min: 0.1,
            sync: false,
          },
        },
        line_linked: {
          enable: false,
          distance: 150,
          color: "#ffffff",
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 2,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200,
          },
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: false,
            mode: "repulse",
          },
          onclick: {
            enable: false,
            mode: "push",
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 400,
            line_linked: {
              opacity: 1,
            },
          },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
          push: {
            particles_nb: 4,
          },
          remove: {
            particles_nb: 2,
          },
        },
      },
      retina_detect: true,
    });
  }, []);

  return (
    <LanguageProvider>
    <div className="relative bg-gradient-to-b from-purple-800 to-blue-500 min-h-screen scroll-smooth overflow-hidden">
      <div id="particles-js" className="absolute inset-0"></div>
      <Navbar />
      <div className="pt-20 md:pt-15">
        <section id="about" className="min-h-screen flex items-center justify-center text-white">
          <About />
        </section>
        <section id="project" className="min-h-screen flex items-center justify-center text-white">
          <Project />
        </section>
        <section id="contact" className="min-h-screen flex flex-col items-center justify-center text-white">
          <div className="w-full max-w-screen-lg">
            <Contact />
          </div>
        </section>
      </div>
      <DownloadCVButton />
      <a
        href="https://www.linkedin.com/in/romain-boisseau-26b294253/" // Remplacez par votre propre URL LinkedIn
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-16 right-4 bg-blue-800 text-white px-4 py-2 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-600 transition duration-300"
      >
        <i className="fab fa-linkedin-in text-2xl"></i>
      </a>
    </div>
    </LanguageProvider>
  );
}

export default App;
