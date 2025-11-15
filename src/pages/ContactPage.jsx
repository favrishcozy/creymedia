// src/pages/ContactPage.jsx
import React, { useState } from 'react';
import styled from 'styled-components';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

const ContactContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
`;

const ContactHero = styled.section`
  padding: 6rem 5% 4rem;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="20" cy="20" r="2" fill="rgba(99,102,241,0.1)"/><circle cx="80" cy="80" r="2" fill="rgba(99,102,241,0.1)"/><circle cx="40" cy="60" r="1" fill="rgba(99,102,241,0.1)"/></svg>');
    opacity: 0.5;
  }
`;

const ContactTitle = styled.h1`
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, #1a202c, #2d3748);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  z-index: 2;
`;

const ContactSubtitle = styled.p`
  font-size: 1.3rem;
  color: #4a5568;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
  position: relative;
  z-index: 2;
`;

const ContactSection = styled.section`
  padding: 4rem 5%;
  position: relative;
`;

const ContactCard = styled.div`
  background: linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.95) 100%);
  backdrop-filter: blur(25px);
  border-radius: 30px;
  padding: 4rem;
  box-shadow: 0 25px 80px rgba(0, 0, 0, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.3);
  position: relative;
  overflow: hidden;
  max-width: 1000px;
  margin: 0 auto;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 6px;
    background: linear-gradient(90deg, #667eea, #764ba2, #ff6b35, #f7931e);
    border-radius: 30px 30px 0 0;
  }

  &::after {
    content: '';
    position: absolute;
    top: -50%;
    right: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(102, 126, 234, 0.03) 0%, transparent 70%);
    pointer-events: none;
  }
`;

const ContactCardHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  position: relative;
  z-index: 2;

  .contact-icon {
    width: 80px;
    height: 80px;
    background: linear-gradient(135deg, #667eea, #764ba2);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 2rem;
    box-shadow: 0 15px 40px rgba(102, 126, 234, 0.3);

    svg {
      color: white;
      font-size: 2rem;
    }
  }

  h2 {
    font-size: 3rem;
    font-weight: 800;
    margin-bottom: 1rem;
    background: linear-gradient(135deg, #1a202c, #2d3748);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  p {
    font-size: 1.2rem;
    color: #4a5568;
    max-width: 500px;
    margin: 0 auto;
    line-height: 1.6;
  }
`;

const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 4rem;
  position: relative;
  z-index: 2;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const ContactInfo = styled.div`
  .info-section {
    margin-bottom: 2.5rem;

    &:last-child {
      margin-bottom: 0;
    }

    .info-header {
      display: flex;
      align-items: center;
      margin-bottom: 1rem;

      .icon-container {
        width: 50px;
        height: 50px;
        background: linear-gradient(45deg, #667eea, #764ba2);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 1rem;
        flex-shrink: 0;

        svg {
          color: white;
          font-size: 1.2rem;
        }
      }

      h3 {
        font-size: 1.4rem;
        font-weight: 700;
        color: #1a202c;
      }
    }

    .info-content {
      margin-left: 3.5rem;

      p {
        color: #4a5568;
        line-height: 1.6;
        margin-bottom: 0.5rem;
        font-size: 1rem;
      }
    }
  }
`;

const ContactFormSection = styled.div`
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(15px);
  border-radius: 20px;
  padding: 2.5rem;
  border: 1px solid rgba(255, 255, 255, 0.4);
`;

const ContactFormTitle = styled.h2`
  font-size: 2.8rem;
  font-weight: 800;
  margin-bottom: 2.5rem;
  background: linear-gradient(135deg, #1a202c, #2d3748);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-align: center;
  position: relative;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;

  .form-group {
    position: relative;

    label {
      position: absolute;
      top: 1rem;
      left: 1rem;
      font-weight: 500;
      color: #4a5568;
      font-size: 0.9rem;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      pointer-events: none;
      transition: all 0.3s ease;
      background: transparent;
      padding: 0 0.5rem;
    }

    input:focus + label,
    input:not(:placeholder-shown) + label,
    textarea:focus + label,
    textarea:not(:placeholder-shown) + label {
      top: -0.5rem;
      left: 1rem;
      font-size: 0.75rem;
      color: #667eea;
      background: white;
      border-radius: 4px;
    }

    input, textarea {
      width: 100%;
      padding: 1.5rem 1rem 0.5rem;
      border: 2px solid #e2e8f0;
      border-radius: 12px;
      font-family: inherit;
      font-size: 1rem;
      background: rgba(255, 255, 255, 0.8);
      backdrop-filter: blur(10px);
      transition: all 0.3s ease;
      position: relative;

      &::placeholder {
        color: transparent;
      }

      &:focus {
        outline: none;
        border-color: #667eea;
        box-shadow: 0 0 0 4px rgba(102, 126, 234, 0.1);
        background: white;
      }

      &:hover {
        border-color: #cbd5e0;
      }
    }

    textarea {
      min-height: 120px;
      resize: vertical;
      padding-top: 2rem;
      padding-bottom: 1rem;
    }
  }

  .form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;

    @media (max-width: 640px) {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
  }

  .submit-section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1rem;

    @media (max-width: 480px) {
      flex-direction: column;
      gap: 1rem;
      align-items: stretch;
    }
  }

  .form-note {
    font-size: 0.9rem;
    color: #718096;
    font-style: italic;
  }

  button {
    padding: 1.2rem 3rem;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border: none;
    border-radius: 50px;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
    position: relative;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
      transition: left 0.5s;
    }

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 12px 35px rgba(102, 126, 234, 0.4);

      &::before {
        left: 100%;
      }
    }

    &:active {
      transform: translateY(-1px);
    }
  }
`;

const MapSection = styled.section`
  padding: 4rem 5%;
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image:
      radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
      radial-gradient(circle at 40% 40%, rgba(120, 219, 226, 0.3) 0%, transparent 50%);
    opacity: 0.6;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }
`;

const MapContainer = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

const MapTitle = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: white;
`;

const MapPlaceholder = styled.div`
  height: 400px;
  background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%);
  border-radius: 20px;
  border: 2px solid rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text x="50" y="50" text-anchor="middle" dy=".35em" font-size="8" fill="rgba(255,255,255,0.3)">MAP</text></svg>');
    background-size: 50px 50px;
  }

  .map-content {
    position: relative;
    z-index: 2;
    text-align: center;
    color: white;

    .map-icon {
      font-size: 4rem;
      margin-bottom: 1rem;
      opacity: 0.7;
    }

    h3 {
      font-size: 2rem;
      margin-bottom: 1rem;
    }

    p {
      font-size: 1.1rem;
      opacity: 0.9;
    }
  }
`;

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
    // Show success message
    alert('Your message has been sent successfully!');
  };

  return (
    <ContactContainer>
      <Navigation />

      <ContactHero>
        <ContactTitle>Get In Touch</ContactTitle>
        <ContactSubtitle>
          Ready to start your creative journey? We'd love to hear from you.
          Let's discuss how we can bring your vision to life.
        </ContactSubtitle>
      </ContactHero>

      <ContactSection>
        <ContactCard>
          <ContactCardHeader>
            <div className="contact-icon">
              <FaEnvelope />
            </div>
            <h2>Let's Connect</h2>
            <p>Have a project in mind or want to collaborate? We'd love to hear from you. Send us a message and let's create something amazing together.</p>
          </ContactCardHeader>

          <ContactContent>
            <ContactInfo>
              <div className="info-section">
                <div className="info-header">
                  <div className="icon-container">
                    <FaMapMarkerAlt />
                  </div>
                  <h3>Visit Us</h3>
                </div>
                <div className="info-content">
                  <p>Lagos, Nigeria</p>
                  <p>Creative District, Tech Hub</p>
                </div>
              </div>

              <div className="info-section">
                <div className="info-header">
                  <div className="icon-container">
                    <FaPhone />
                  </div>
                  <h3>Call Us</h3>
                </div>
                <div className="info-content">
                  <p>+234 8123 456 789</p>
                  <p>Mon - Fri: 9AM - 6PM WAT</p>
                </div>
              </div>

              <div className="info-section">
                <div className="info-header">
                  <div className="icon-container">
                    <FaEnvelope />
                  </div>
                  <h3>Email Us</h3>
                </div>
                <div className="info-content">
                  <p>info@creydreamhouse.com</p>
                  <p>We'll respond within 24 hours</p>
                </div>
              </div>

              <div className="info-section">
                <div className="info-header">
                  <div className="icon-container">
                    <FaClock />
                  </div>
                  <h3>Business Hours</h3>
                </div>
                <div className="info-content">
                  <p>Monday - Friday</p>
                  <p>9:00 AM - 6:00 PM WAT</p>
                </div>
              </div>
            </ContactInfo>

            <ContactFormSection>
              <ContactForm onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone (Optional)</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+234 XXX XXX XXXX"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project or inquiry..."
                    required
                  ></textarea>
                </div>
                <div className="submit-section">
                  <p className="form-note">We typically respond within 24 hours</p>
                  <button type="submit">Send Message</button>
                </div>
              </ContactForm>
            </ContactFormSection>
          </ContactContent>
        </ContactCard>
      </ContactSection>

      <MapSection>
        <MapContainer>
          <MapTitle>Find Us</MapTitle>
          <MapPlaceholder>
            <div className="map-content">
              <FaMapMarkerAlt className="map-icon" />
              <h3>Our Location</h3>
              <p>Lagos, Nigeria - Creative Technology Hub</p>
            </div>
          </MapPlaceholder>
        </MapContainer>
      </MapSection>

      <Footer />
    </ContactContainer>
  );
};

export default ContactPage;
