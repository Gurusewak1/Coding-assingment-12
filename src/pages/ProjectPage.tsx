import React from 'react';  
import Heading from '../components/Heading/Heading';  
import Text from '../components/Text/Text';  
import './ProjectPage.css'; // Import CSS for styling  

const ProjectsPage: React.FC = () => {  
  const projects = [  
    {  
      title: 'Personal Portfolio',  
      description: 'A personal portfolio showcasing my skills, projects, and experience. It features a modern design with sections for my biography, skills, and detailed information about the projects I have worked on.',  
      technologies: ['React', 'TypeScript', 'CSS'],  
      demoLink: 'https://example.com/demo1',  
      repoLink: 'https://github.com/user/project-one',  
    },  
    {  
      title: 'E-Commerce Website',  
      description: 'An e-commerce website built with Ruby on Rails. This project includes features such as product listings, a shopping cart, user authentication, and secure checkout processes. It is designed to provide a seamless shopping experience for users.',  
      technologies: ['Ruby on Rails', 'PostgreSQL', 'CSS'],  
      demoLink: 'https://example.com/demo2',  
      repoLink: 'https://github.com/user/project-two',  
    },  
    {  
      title: 'Project Three',  
      description: 'A brief description of Project Three, outlining its purpose and functionality.',  
      technologies: ['HTML', 'CSS', 'JavaScript'],  
      demoLink: 'https://example.com/demo3',  
      repoLink: 'https://github.com/user/project-three',  
    },  
  ];  

  return (  
    <div className="projects-page">  
      <Heading children="My Projects" level={1} color="#333" bold />  
      <Text content="Here are some of the projects I've worked on:" color="#555" />  
      
      <div className="projects-list">  
        {projects.map((project, index) => (  
          <div key={index} className="project-card">  
            <Heading children={project.title} level={2} color="#007bff" />  
            <Text content={project.description} color="#555" />  
            <Text content={`Technologies Used: ${project.technologies.join(', ')}`} color="#777" />  
            <div className="project-links">  
              <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="button">View Demo</a>  
              <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="button">View Code</a>  
            </div>  
          </div>  
        ))}  
      </div>  
      
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

export default ProjectsPage;
