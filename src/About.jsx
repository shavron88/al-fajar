// import React from "react";
// 
// src/About.jsx
import React from "react";                    
import "./About.css";                         
import ServiceCard from "./components/ServiceCard";  

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>About Al-Fajar Solar</h1>
          <p>Years of Expertise in Renewable Energy</p>
        </div>
      </section>

      {/* Company History */}
      <section className="history">
        <h2>Company History</h2>
        <div className="timeline">
          <div className="event"><span>2003</span></div>
          <div className="event"><span>2005</span></div>
          <div className="event"><span>2010</span></div>
          <div className="event"><span>2015</span></div>
          <div className="event"><span>2020</span></div>
        </div>
        <div className="history-text">
          <p>
            Founded in 2003, Al-Fajar Solar has been at the forefront of delivering
            innovative solar solutions for homes and businesses. Over the years, we expanded
            from small residential projects to nationwide solar energy consultancy and
            large-scale installations.
          </p>
          <p>
            Our mission is to empower communities with clean, reliable, and affordable
            renewable energy solutions, contributing towards a sustainable future.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <ServiceCard
          icon="fa-solid fa-solar-panel"
          title="Complete Solar Installation, Maintenance & Repair"
          points={[
            "Consultancy Services & Proposals",
            "Affordable Installations",
            "Maintenance & Repairs",
          ]}
        />

        <ServiceCard
          icon="fa-solid fa-lightbulb"
          title="Consultancy Services"
          description="We provide expert consultancy services for planning, designing, and implementing solar solutions tailored to your needs."
        />

        <ServiceCard
          icon="fa-solid fa-earth-asia"
          title="Mission & Vision"
          description="Our mission is to make renewable energy accessible and affordable for everyone. We envision a greener planet powered by sustainable energy sources."
        />
      </section>
    </div>
  );
};

export default About;