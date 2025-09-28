// src/Services.jsx
// // src/Services.jsx
import React from "react";
import ServiceCard from "./components/ServiceCard";
import "./Services.css";

const servicesData = [
  {
    icon: "☀️",
    title: "Complete Solar Installation",
    points: ["Residential", "Commercial"],
  },
  {
    icon: "🛠️",
    title: "Maintenance & Repair",
    points: ["Routine checkups", "Emergency support"],
  },
  {
    icon: "📄",
    title: "Consultancy Services",
    points: ["System design", "Cost optimization"],
  },
];

const Services = () => {
  return (
    <div className="services-container">
      {servicesData.map((service, idx) => (
        <ServiceCard
          key={idx}
          icon={service.icon}
          title={service.title}
          points={service.points}
        />
      ))}
    </div>
  );
}

export default Services;