import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import './Header.css';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
  return (
    <header className="header">
      {/* Barra de Navegação */}
      <nav className="navbar">
        <div className="nav-container">
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Crafts</a></li>
            <li><a href="#blog">Blogs</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          
          <button onClick={toggleDarkMode} className="dark-mode-toggle">
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
          
        </div>
      </nav>

      {/* Introdução */}
      <div className="hero">
        <div className="hero-container">
          <p className="greeting">Hi there</p>
          <h1 className="name">I'm Victor Fernando</h1>
          <p className="tagline">I believe in JavaScript</p>
        </div>
      </div>
    </header>
  );
};

export default Header;