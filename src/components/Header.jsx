import React, { useState, useEffect } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { scroller } from "react-scroll";
import "./Header.css";
import { FiMenu, FiX } from "react-icons/fi"; // Fi = Feather Icons


function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  // Load dark mode preference from localStorage
  useEffect(() => {
    const darkPref = localStorage.getItem("darkMode") === "true";
    setIsDarkMode(darkPref);
    document.body.classList.toggle("dark-mode", darkPref);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const handleScroll = (target) => {
    if (location.pathname !== "/") {
      navigate("/", { replace: false });
      setTimeout(() => {
        scroller.scrollTo(target, {
          duration: 500,
          delay: 0,
          smooth: "easeInOutQuart",
          offset: -60,
        });
      }, 100);
    } else {
      scroller.scrollTo(target, {
        duration: 500,
        delay: 0,
        smooth: "easeInOutQuart",
        offset: -60,
      });
    }
    closeMenu();
  };

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem("darkMode", newMode);
    document.body.classList.toggle("dark-mode", newMode);
  };

  return (
    <>
      <div className={`overlay ${menuOpen ? "show" : ""}`} onClick={closeMenu} />

      <header className="header">
        <div className="container header-container">
         <a href="/"> <div className="logo">
            <img
              src="https://cdn-icons-png.flaticon.com/256/6347/6347595.png"
              alt="EduJunction Logo"
              className="logo-img"
            />
            EDUJUNCTION
          </div></a>

          <nav className={`nav ${menuOpen ? "nav-open" : ""}`}>
            <a className="nav-link" onClick={() => handleScroll("home")}>
              HOME
            </a>
            <a className="nav-link" onClick={() => handleScroll("about")}>
              ABOUT
            </a>
            <a className="nav-link" onClick={() => handleScroll("services")}>
              SERVICES
            </a>

            <NavLink
              to="/courses"
              className={({ isActive }) => (isActive ? "active nav-link" : "nav-link")}
              onClick={closeMenu}
            >
              YOUTUBE COURSES
            </NavLink>
            <NavLink
              to="/platform"
              className={({ isActive }) => (isActive ? "active nav-link" : "nav-link")}
              onClick={closeMenu}
            >
              PLATFORMS
            </NavLink>
          </nav>

          <button
            className="dark-mode-toggle"
            onClick={toggleDarkMode}
            aria-label="Toggle Dark Mode"
          >
            {isDarkMode ? "Light Mode ☀️" : "Dark Mode 🌙"}
          </button>

     <button
  className="menu-toggle"
  onClick={toggleMenu}
  aria-label={menuOpen ? "Close menu" : "Open menu"}
  aria-expanded={menuOpen}
>
  {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
            {/* <span className="hamburger"></span>
            <span className="hamburger"></span>
            <span className="hamburger"></span> */}
          </button>
        </div>
      </header>
    </>
  );
}

export default Header;
