import React, { useState } from "react";
import { NavLink } from "react-router-dom";  
import { HashLink } from "react-router-hash-link";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* Overlay for sidebar */}
      <div 
        className={`overlay ${menuOpen ? "show" : ""}`} 
        onClick={closeMenu} 
        aria-hidden={!menuOpen}
      ></div>

      <header className="header">
        <div className="container header-container">
          <div className="logo">
            <img
              src="https://cdn-icons-png.flaticon.com/256/6347/6347595.png"
              alt="EduJunction Logo"
              className="logo-img"
            />
            EDUJUNCTION
          </div>

          {/* Sidebar nav */}
          <nav className={`nav ${menuOpen ? "nav-open" : ""}`}>
            <HashLink smooth to="/#home" className="nav-link" onClick={closeMenu}>
              HOME
            </HashLink>
            <HashLink smooth to="/#about" className="nav-link" onClick={closeMenu}>
              ABOUT
            </HashLink>
            <HashLink smooth to="/#services" className="nav-link" onClick={closeMenu}>
              SERVICES
            </HashLink>
            <NavLink to="/courses" className={({ isActive }) => (isActive ? "active" : "")} onClick={closeMenu}>
              YOUTUBE COURSES
            </NavLink>
            <NavLink to="/platform" className={({ isActive }) => (isActive ? "active" : "")} onClick={closeMenu}>
              PLATFORMS
            </NavLink>
          </nav>

          {/* Hamburger button */}
          <button
            className="menu-toggle"
            onClick={toggleMenu}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span className="hamburger"></span>
            <span className="hamburger"></span>
            <span className="hamburger"></span>
          </button>
        </div>
      </header>
    </>
  );
}

export default Header;
