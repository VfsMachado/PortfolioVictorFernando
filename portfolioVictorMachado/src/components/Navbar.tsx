import React from 'react';
import { FaBars, FaMoon, FaSun } from 'react-icons/fa';

interface NavbarProps {
  menuOpen: boolean;
  toggleMenu: () => void;
  toggleDarkMode: () => void;
  darkMode: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ 
  menuOpen, 
  toggleMenu, 
  toggleDarkMode, 
  darkMode 
}) => {
  return (
    <nav>
      <div className="menu-toggle" onClick={toggleMenu}>
        <FaBars />
      </div>
      <ul className={`menu-list ${menuOpen ? 'show' : ''}`}>
        <li><a href="#sobre">Sobre</a></li>
        <li><a href="#projetos">Projetos</a></li>
        <li><a href="#contato">Contato</a></li>
        <li>
          <button onClick={toggleDarkMode} className="dark-mode-toggle">
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;