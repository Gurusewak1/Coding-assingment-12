import React from 'react';  
import Heading from '../components/Heading/Heading';  
import Text from '../components/Text/Text';  
import './ContactPage.css';  

const ContactPage: React.FC = () => {  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {  
    event.preventDefault();  
    // Implement form submission logic here, possibly using an API call  
    alert("Thank you for your message! I will get back to you soon.");  
  };  

  return (  
    <div className="contact-page">  
      <Heading children="Contact Me" level={1} />  
      <Text content="I'm here to answer any questions you may have. Please feel free to reach out!" />  

      <form onSubmit={handleSubmit} className="contact-form" aria-label="Contact Form">  
        <input  
          type="text"  
          placeholder="Your Name"  
          required  
          className="form-input"  
          aria-label="Your Name"  
        />  
        <input  
          type="email"  
          placeholder="Your Email"  
          required  
          className="form-input"  
          aria-label="Your Email"  
        />  
        <textarea  
          placeholder="Your Message"  
          required  
          className="form-textarea"  
          aria-label="Your Message"  
        />  
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