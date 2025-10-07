// src/App.jsx
import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <h1 className="logo">Al-Fajar Solar</h1>
        <ul className="nav-links">
          <li><Link to="/">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/booking">Book Now</Link></li>
          <li><Link to="/testimonials">Testimonials</Link></li>
        </ul>
      </nav>

      {/* Page content will render here */}
      <main className="page-content">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
