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

  useEffect(() => {
    // Verificação mais segura do tema
    const savedTheme = localStorage.getItem("theme");
    setDarkMode(savedTheme ? savedTheme === 'dark' : false);
    
    // Aplicar classe ao body para melhor suporte a modal
    document.body.className = darkMode ? 'dark-mode' : '';
  }, [darkMode]);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('theme', newDarkMode ? 'dark' : 'light');
  };

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      {/* Navbar simplificado - controle interno do menu */}
      <Navbar
        toggleDarkMode={toggleDarkMode}
        darkMode={darkMode}
      />

      <main role="main" className="main-content">
        {/* Seção Hero com scroll suave */}
        <section 
          id="home" 
          className="section hero-section" 
          aria-label="Introdução"
          tabIndex={-1} // Para gerenciamento de foco
        >
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

        {/* Demais seções com IDs para navegação */}
        {['about', 'projects', 'skills', 'contact'].map((section) => (
          <section
            key={section}
            id={section}
            className="section"
            aria-label={
              section === 'about' ? 'Sobre mim' :
              section === 'projects' ? 'Meus projetos' :
              section === 'skills' ? 'Habilidades' : 'Contato'
            }
          >
            <div className="container">
              {section === 'about' && <About />}
              {section === 'projects' && <Projects />}
              {section === 'skills' && <Skills />}
              {section === 'contact' && <Contact />}
            </div>
          </section>
        ))}
      </main>

      <Footer />
    </div>
  );
};

export default App;