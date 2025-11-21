// Updated Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <Link to="/"><img
            src="./karatelogo.png"
            alt="Karate Logo"
            className="logo-image"
            width="45px"
            height="45px"
          />
          </Link>
          <Link to="/" className="logo-link">
            <span className="logo-text">Goju-ryu Karate</span>
          </Link>
        </div>

        {/* Hamburger Menu Button */}
        <div
          className={`hamburger-menu ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        {/* Desktop Navigation */}
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/gallery" className="nav-link">
              Gallery
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Dropdown Menu */}
        <div className={`dropdown-menu ${isMenuOpen ? "active" : ""}`}>
          <Link to="/" className="dropdown-link" onClick={closeMenu}>
            Home
          </Link>
          <Link to="/about" className="dropdown-link" onClick={closeMenu}>
            About
          </Link>
          <Link to="/gallery" className="dropdown-link" onClick={closeMenu}>
            Gallery
          </Link>
          <Link to="/contact" className="dropdown-link" onClick={closeMenu}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
