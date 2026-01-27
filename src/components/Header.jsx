import { useState } from 'react';
import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1 className="font-old-english">
            LEGACY
            <br />
            Lab Digital
          </h1>
          <p className="logo-tagline">Where culture meets code</p>
        </div>
        <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
          <button onClick={() => scrollToSection('hero')} className="nav-link">
            Home
          </button>
          <button onClick={() => scrollToSection('about')} className="nav-link">
            About
          </button>
          <button
            onClick={() => scrollToSection('skills')}
            className="nav-link"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="nav-link"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="nav-link"
          >
            Contact
          </button>
        </nav>
        <button
          className={`hamburger ${menuOpen ? 'hamburger-open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}

export default Header;
