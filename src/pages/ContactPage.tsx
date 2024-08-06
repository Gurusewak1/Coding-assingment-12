import React, { useState } from 'react';
import Heading from '../components/Heading/Heading';
import Text from '../components/Text/Text';
import './ContactPage.css';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
    setFormErrors({
      ...formErrors,
      [name]: ''
    });
  };

  const validateForm = () => {
    const errors = { name: '', email: '', message: '' };
    let isValid = true;

    if (!formData.name) {
      errors.name = 'Name is required';
      isValid = false;
    }
    if (!formData.email) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
      isValid = false;
    }
    if (!formData.message) {
      errors.message = 'Message is required';
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validateForm()) {
      alert('Thank you for your message! I will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <div className="wide-container">
      <Heading level={1}>Contact Me</Heading>
      <Text content="I'm here to answer any questions you may have. Please feel free to reach out!" />

      <form onSubmit={handleSubmit} className="contact-form" aria-label="Contact Form">
        <div className="form-group">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Your Name"
            required
            className={`form-input ${formErrors.name ? 'error' : ''}`}
            aria-label="Your Name"
          />
          {formErrors.name && <span className="error-message">{formErrors.name}</span>}
        </div>

        <div className="form-group">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Your Email"
            required
            className={`form-input ${formErrors.email ? 'error' : ''}`}
            aria-label="Your Email"
          />
          {formErrors.email && <span className="error-message">{formErrors.email}</span>}
        </div>

        <div className="form-group">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Your Message"
            required
            className={`form-textarea ${formErrors.message ? 'error' : ''}`}
            aria-label="Your Message"
          />
          {formErrors.message && <span className="error-message">{formErrors.message}</span>}
        </div>

        <button type="submit" className="submit-button">Send Message</button>
      </form>

      <footer className="footer">
        <Text content="© 2023 Your Name. All Rights Reserved." color="#999" />
        <div className="social-links">
          <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;
