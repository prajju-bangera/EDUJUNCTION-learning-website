import React, { useState } from 'react';
import './Services.css';

import { FaChalkboardTeacher, FaYoutube, FaCertificate } from "react-icons/fa";

const services = [
  {
    icon: <FaChalkboardTeacher size={40} />,
    title: 'Course Aggregation',
    description:
      'We bring top free courses from platforms like Great Learning, Springboard, and more into one place.',
  },
 {
    icon: <FaYoutube size={40} />,
    title: 'Learn from YouTube',
    description:
      'We handpick the best free YouTube courses to help you learn effectively without wasting time.',
  },
  {
    icon: <FaCertificate size={40} />,
    title: 'Certification Access',
    description:
      'Access certified courses from reputed platforms to enhance your skills and credibility.',
  },
];



function Services() {
  const [current, setCurrent] = useState(0);
  const total = services.length;

  const prevIndex = (current - 1 + total) % total;
  const nextIndex = (current + 1) % total;

  const goLeft = () => setCurrent(prevIndex);
  const goRight = () => setCurrent(nextIndex);

  return (
    <section className="carousel-wrapper"id="services">
      <h2>
        Our <span>Services</span>
      </h2>
      <div className="carousel">
        {services.map((item, index) => {
          let className = 'card hidden';

          if (index === current) className = 'card center';
          else if (index === prevIndex) className = 'card left';
          else if (index === nextIndex) className = 'card right';

          return (
            <div className={className} key={index}>
              <div className="icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          );
        })}

        <button className="nav left" onClick={goLeft}>
          ‹
        </button>
        <button className="nav right" onClick={goRight}>
          ›
        </button>
      </div>
    </section>
  );
}

export default Services;