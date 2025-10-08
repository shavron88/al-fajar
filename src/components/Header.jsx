import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style.css"; // Import external CSS

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <nav className="navbar">

        <div className="logo">
          <img src="/solar.png" alt="Logo" />
        </div>

        <ul className={isOpen ? "nav-links active" : "nav-links"}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/booking">Book Me</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/testimonials">Testimonials</Link></li>
        </ul>

        <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </div>
      </nav>
    </header>
  );
}
