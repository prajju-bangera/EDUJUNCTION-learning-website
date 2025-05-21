import React, { useState } from "react";
import "./About.css";

function About() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (type) => {
    if (activeDropdown === type) {
      setActiveDropdown(null); // close if clicked again
    } else {
      setActiveDropdown(type); // open the selected one
    }
  };

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-image">
          <img
            src="https://thumbs.dreamstime.com/b/cartoon-girl-programmer-working-laptop-stylized-representation-female-seated-likely-use-educational-376218663.jpg"
            alt="Learning"
          />
        </div>

        <div className="about-content">
          <h2>About Us</h2>
          <p>
            <b>LearnPortal</b> is your one-stop gateway to a variety of top-rated online learning platforms such as <b>Great Learning</b>, <b>Infosys Springboard</b>, and others.
          </p>
          <p>
            Instead of searching multiple platforms, learners can find and access all relevant course links in one place — making learning accessible, centralized, and simple.
          </p>

          <div className="dropdown-row">
            <button
              onClick={() => toggleDropdown("vision")}
              className="dropdown-btn"
            >
              🎯 Vision
            </button>
            <button
              onClick={() => toggleDropdown("mission")}
              className="dropdown-btn"
            >
              🚀 Mission
            </button>
          </div>

          {activeDropdown === "vision" && (
            <div className="dropdown-content">
              To become a trusted aggregator platform for online education, making skill-building accessible and efficient for all.
            </div>
          )}

          {activeDropdown === "mission" && (
            <div className="dropdown-content">
              To simplify the learning journey by connecting learners with curated, high-quality courses from multiple trusted platforms.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default About;
