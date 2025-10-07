import React from "react";
import "../style.css";

export default function Home() {
  return (
    <div className="home">

      <section className="hero">
        <img src="/big solar.jpg" alt="Solar Panels" className="hero-img" />
        <div className="hero-text">
          <h1>Power Your Future with Solar Energy</h1>
          <p>Reliable • Affordable • Sustainable</p>
          <button className="btn-primary">Get a Free Quote</button>
        </div>
      </section>

      <section className="services">
        <h2>Our Services</h2>
        <div className="service-cards">
          <div className="card">
            <img src="/installation.jpg" alt="Installation" />
            <h3>Solar Panel Installation</h3>
            <p>Professional setup for residential & commercial properties.</p>
          </div>
          <div className="card">
            <img src="/team.jpg" alt="Maintenance" />
            <h3>Maintenance & Repair</h3>
            <p>Ensure your system runs efficiently with our support.</p>
          </div>
          <div className="card">
            <img src="/monitor.jpg" alt="Monitoring" />
            <h3>Smart Monitoring</h3>
            <p>Track performance in real-time with modern tools.</p>
          </div>
        </div>
      </section>

      <section className="products">
        <h2>Our Products</h2>
        <div className="product-cards">
          <div className="card">
            <img src="/close up.jpg" alt="Solar Panel" />
            <h3>Solar Panels</h3>
          </div>
          <div className="card">
            <img src="/battery.png" alt="Battery Storage" />
            <h3>Battery Storage</h3>
          </div>
          <div className="card">
            <img src="/inverter.jpg" alt="Inverter" />
            <h3>Solar Inverters</h3>
          </div>
        </div>
      </section>

      <section className="why-us">
        <div className="why-text">
          <h2>Why Choose Us?</h2>
          <p>
            With years of experience, certified professionals, and cutting-edge
            solar technology, we deliver reliable and affordable energy
            solutions. Make the smart choice today and join the green revolution.
          </p>
          <button className="btn-secondary">Learn More</button>
        </div>
        <div className="why-img">
          <img src="/house.png" alt="House with Solar Panels" />
        </div>
      </section>

    </div>
  );
}
