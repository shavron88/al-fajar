import React, { useState } from "react";
import "../style.css"; // Import external CSS

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <nav className="navbar">

        <div className="logo">
          <img src="/solar.jpg" alt="Logo" />
        </div>

        <ul className={isOpen ? "nav-links active" : "nav-links"}>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">Book Me</a></li>
          <li><a href="#">Contact</a></li>
        </ul>

        <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </div>
      </nav>
    </header>
  );
}
