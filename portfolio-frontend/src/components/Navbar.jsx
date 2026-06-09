import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (e, targetId, path) => {
    e.preventDefault();
    setIsMenuOpen(false);

    // If we're on the home page, scroll to element
    if (location.pathname === "/" && targetId) {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <Link to="/">
            <span className="logo-icon">{"</"}</span>
            <span className="logo-text">Portfolio</span>
            <span className="logo-icon">{">"}</span>
          </Link>
        </div>

        {/* Hamburger Menu Icon */}
        <div className="hamburger" onClick={toggleMenu}>
          <span className={`bar ${isMenuOpen ? "active" : ""}`}></span>
          <span className={`bar ${isMenuOpen ? "active" : ""}`}></span>
          <span className={`bar ${isMenuOpen ? "active" : ""}`}></span>
        </div>

        {/* Navigation Links */}
        <ul className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
          <li className="nav-item">
            <Link
              to="/"
              className="nav-link"
              onClick={(e) => handleNavClick(e, null, "/")}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/about"
              className="nav-link"
              onClick={(e) => handleNavClick(e, "about", "/about")}
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/"
              className="nav-link"
              onClick={(e) => handleNavClick(e, "skills", "/")}
            >
              Skills
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/projects"
              className="nav-link"
              onClick={(e) => handleNavClick(e, "projects", "/projects")}
            >
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact"
              className="nav-link"
              onClick={(e) => handleNavClick(e, "contact", "/contact")}
            >
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/admin"
              className="nav-link admin-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Admin
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
