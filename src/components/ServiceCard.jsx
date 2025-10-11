// src/components/ServiceCard.jsx
import React from 'react';

const ServiceCard = ({ icon, title, points, list, description }) => {
  return (
    <div className="service-card">
      <div className="service-icon">
        {/* Handle both emoji icons and FontAwesome class names */}
        {icon && icon.startsWith('fa-') ? (
          <i className={icon}></i>
        ) : (
          <span>{icon}</span>
        )}
      </div>
      
      <div className="service-content">
        <h3 className="service-title">{title}</h3>
        
        {/* Handle description prop (used in About.jsx) */}
        {description && (
          <p className="service-description">{description}</p>
        )}
        
        {/* Handle points prop (used in Services.jsx) */}
        {points && points.length > 0 && (
          <ul className="service-points">
            {points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        )}
        
        {/* Handle list prop (used in About.jsx) */}
        {list && list.length > 0 && (
          <ul className="service-list">
            {list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;