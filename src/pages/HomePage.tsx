import React from 'react';
import Heading from '../components/Heading/Heading';
import Text from '../components/Text/Text';
import { Img } from '../components/Image/Image';
import './page.css';
//
const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <header className="header">
        <div className="profile-picture-container animated-border">
          <Img
            src="https://media-ord5-1.cdn.whatsapp.net/v/t61.24694-24/441566125_443638561996283_8367756390051226269_n.jpg?ccb=11-4&oh=01_Q5AaIHPWRTuZk3jb5Iko1stS_YjYIBd3IhXZGbWtRB-CiN9w&oe=66BE27D7&_nc_sid=e6ed6c&_nc_cat=104"
            alt="Profile Picture"
           
          />
        </div>
        <Heading children="Hello, I'm Gurusewak Singh" level={1} color="#007bff" bold className="animated-heading" />
        <Text content="A passionate Full Stack Web Developer" color="#555"  />
      </header>
      <section className="about-section">
        <Heading children="About Me" level={2} color="#333" bold />
        <Text content="I am a full-stack web development student with a strong passion for creating dynamic and responsive web applications." color="#555" />
        <Text content="I graduated from Red River College Polytechnic, where I honed my skills in web development and software engineering." color="#555" />
        <Text content="In addition to my technical skills, I enjoy collaborating with others to bring innovative ideas to life." color="#555" />
        <Text content="When I'm not coding, you can find me exploring new places, reading tech blogs, or working on personal projects." color="#555" />
      </section>
      <section className="skills-section">
        <Heading children="Skills" level={2} color="#333" bold />
        <ul className="skills-list">
          <li>HTML, CSS, JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>Ruby on Rails</li>
          <li>SQL</li>
          <li>Git, GitHub</li>
          <li>Responsive Design</li>
          <li>RESTful APIs</li>
        </ul>
      </section>
      <section className="contact-section">
        <Heading children="Contact Me" level={2} color="#333" bold />
        <Text content="Feel free to reach out for web development projects or collaboration opportunities." color="#555" />
        <Text content="You can contact me via email at [gurusewaksinghbains@gmail.com] or connect with me on LinkedIn." color="#555" />
      </section>
      <footer className="footer">
        <Text content="© 2024 Gurusewak Singh. All rights reserved." color="#555" />
        <div className="social-links">
          <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
