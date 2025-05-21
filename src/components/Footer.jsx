import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-wrapper">
        <div className="footer-links">
          <h4 className="footer-title">Quick Links</h4>
          <ul className="links-list">
            <li>
              <a href="#home" className="footer-link">Home</a>
            </li>
            <li>
              <a href="#about" className="footer-link">About</a>
            </li>
            <li>
              <a href="#services" className="footer-link">Services</a>
            </li>
            <li>
              <a href="/courses" className="footer-link"> Youtube Courses</a>
            </li>
            <li>
              <a href="./platform" className="footer-link">Platforms</a>
            </li>
          </ul>
        </div>
        <div className="footer-copy">
          &copy; EDUJUNCTION. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
