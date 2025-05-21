import React, { useState } from "react";
import "./Hero.css";
import learning from "../assets/online-class.png";
import learningHover from "../assets/online-learning.png";

function Hero() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="home" className="hero-section">
      <div className="overlay"></div>
      <div className="content">
        <h1 className="jump-text">
          Welcome to{" "}
          <span className="brand">
  {"EduJunction".split("").map((letter, index) => (
    <span key={index} className="letter" data-letter={letter}>
      {letter}
    </span>
  ))}
</span>

        </h1>
        <p className="quotes"> It's your gateway to thousands of courses from top platforms. We bring all your favorite learning opportunities together in one convenient place, making it easy to explore, compare, and start learning.
        </p>
        <a href="#services" className="btn-primary">
          View Platforms
        </a>
      </div>

      <div
        className="hero-image"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={isHovered ? learningHover : learning}
          alt="Learning cartoon"
          className="hero-img"
        />
      </div>
    </section>
  );
}

export default Hero;
