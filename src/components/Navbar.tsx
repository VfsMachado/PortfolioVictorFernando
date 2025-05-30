import React, { useState, useEffect } from 'react';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Fechar menu ao redimensionar para desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
      }
    };

    // Verificar scroll para efeito de navbar
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'Sobre' },
    { id: 'projects', label: 'Projetos' },
    { id: 'skills', label: 'Habilidades' },
    { id: 'contact', label: 'Contato' }
  ];

  return (
    <nav 
      className={`navbar ${isScrolled ? 'scrolled' : ''}`}
      aria-label="Navegação principal"
    >
      <div className="nav-container">
        {/* Logo com link para home */}
        <a 
          href="#home" 
          className="logo"
          aria-label="Voltar para o início"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Victor Fernando
        </a>

        {/* Menu para desktop */}
        <ul className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a 
                href={`#${link.id}`}
                onClick={() => setIsMobileMenuOpen(false)}
                aria-current={window.location.hash === `#${link.id}` ? 'page' : undefined}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Controles */}
        <div className="nav-controls">
          <button 
            onClick={toggleDarkMode}
            className="dark-mode-toggle"
            aria-label={`Alternar para modo ${darkMode ? 'claro' : 'escuro'}`}
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>

          <button 
            className="menu-toggle"
            onClick={toggleMobileMenu}
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;