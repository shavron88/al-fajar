// src/Contact.jsx
import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    subject: 'Installation Inquiry',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="hero-content">
          <h1>CONTACT US</h1>
          <p>Get in Touch with Our Solar Energy Experts</p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="contact-main">
        <div className="contact-container">
          {/* Office Information */}
          <div className="office-info">
            <h3>Pakistan Office</h3>
            
            <div className="info-item">
              <div className="icon-wrapper">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="info-text">
                <p>Pakistan Codors 3...</p>
                <p>12:00 pm 00002</p>
              </div>
            </div>

            <div className="info-item">
              <div className="icon-wrapper">
                <i className="fas fa-phone"></i>
              </div>
              <div className="info-text">
                <p>+00 232 2864</p>
              </div>
            </div>

            <div className="info-item">
              <div className="icon-wrapper">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="info-text">
                <p>Comer@email.om</p>
                <p>Pakines kifter</p>
              </div>
            </div>

            <div className="info-item">
              <div className="icon-wrapper">
                <i className="fas fa-hashtag"></i>
              </div>
              <div className="info-text">
                <p>#004E64</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-section">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Installation Inquiry"
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Business Hours</label>
                  <select name="businessHours" className="form-select">
                    <option>Business 18:20pm</option>
                    <option>Morning 9:00-12:00</option>
                    <option>Afternoon 12:00-18:00</option>
                    <option>Evening 18:00-21:00</option>
                  </select>
                  <div className="select-dropdown">
                    <span>Maintenance Request</span>
                    <i className="fas fa-chevron-down"></i>
                  </div>
                </div>
              </div>

              <div className="form-group full-width">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Consultancy, etc."
                  rows="4"
                ></textarea>
              </div>

              <div className="form-buttons">
                <button type="button" className="message-btn">Message</button>
                <button type="submit" className="submit-btn">Submit</button>
              </div>
            </form>
          </div>

          {/* Map Section */}
          <div className="map-section">
            <div className="map-placeholder">
              <div className="map-marker">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <span className="country-label">Pakistan</span>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="social-section">
        <div className="social-icons">
          <a href="#" className="social-icon facebook">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="social-icon twitter">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="social-icon linkedin">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;