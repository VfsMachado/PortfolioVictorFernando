import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    setDarkMode(savedTheme !== "light"); // Se não for light, ativa dark
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('theme', newDarkMode ? 'dark' : 'light');
  };

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      <Navbar
        menuOpen={menuOpen}
        toggleMenu={toggleMenu}
        toggleDarkMode={toggleDarkMode}
        darkMode={darkMode}
      />

      <main role="main">
        {/* Seção Hero */}
        <section id="home" className="section hero-section" aria-label="Introdução">
          <div className="container">
            <div className="hero-content">
              <p className="greeting">Olá, tudo bem? 👋</p>
              <h1 className="name">Eu sou Victor Fernando</h1>
              <p className="tagline">
                Desenvolvedor Front-end | Estágio/Trainee em Tecnologia
              </p>
            </div>
          </div>
        </section>

        {/* Sobre Mim */}
        <section id="about" className="section" aria-label="Sobre mim">
          <div className="container">
            <About />
          </div>
        </section>

        {/* Projetos */}
        <section id="projects" className="section" aria-label="Meus projetos">
          <div className="container">
            <Projects />
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="section" aria-label="Skills">
          <div className="container">
            <Skills />
          </div>
        </section>

        {/* Contato */}
        <section id="contact" className="section" aria-label="Contato">
          <div className="container">
            <Contact />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
