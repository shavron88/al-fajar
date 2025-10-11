import React from "react";
import "../index.css";

function Card({ image, title, description }) {
  return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt={title} style={{ width: "100%", height: "180px", objectFit: "cover", borderRadius: "8px" }} />

      </div>
      <h3>{title}</h3>
      <p>{description}</p>
 </div>
  );
}

export default Card;
