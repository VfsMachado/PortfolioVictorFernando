import React from 'react';
import { FaMoon, FaSun, FaBars } from 'react-icons/fa';
import './Navbar.css';

interface NavbarProps {
  menuOpen: boolean;
  toggleMenu: () => void;
  toggleDarkMode: () => void;
  darkMode: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ 
    
  toggleMenu, 
  toggleDarkMode, 
  darkMode
}) => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo ou nome do site (opcional) */}
        <div className="logo">Victor Fernando</div>
        
        {/* Links de navegação */}
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        
        {/* Botão de dark mode */}
        <button onClick={toggleDarkMode} className="dark-mode-toggle">
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
        
        {/* Botão de menu para mobile (opcional) */}
       <button className="menu-toggle" onClick={toggleMenu}>
          <FaBars />
        </button>
        
      </div>
    </nav>
  );
};

export default Navbar;