import './Projects.css';

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description:
        'A full-stack e-commerce solution with payment integration, inventory management, and user authentication.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: '#',
      image: '🛒',
    },
    {
      id: 2,
      title: 'Task Management App',
      description:
        'Collaborative task management application with real-time updates and team collaboration features.',
      technologies: ['React', 'Firebase', 'Tailwind CSS'],
      link: '#',
      image: '✓',
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description:
        'Real-time weather application with location-based forecasts, interactive maps, and detailed analytics.',
      technologies: ['React', 'API', 'Charts.js', 'CSS'],
      link: '#',
      image: '🌤️',
    },
    {
      id: 4,
      title: 'Social Media Feed',
      description:
        'Social platform with user profiles, posts, comments, likes, and real-time notifications.',
      technologies: ['React', 'Express', 'PostgreSQL', 'Socket.io'],
      link: '#',
      image: '👥',
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description:
        'Modern, responsive portfolio websites showcasing professional work and achievements.',
      technologies: ['React', 'CSS', 'Vite', 'JavaScript'],
      link: '#',
      image: '💼',
    },
    {
      id: 6,
      title: 'Analytics Dashboard',
      description:
        'Data visualization dashboard with real-time analytics, custom reports, and interactive charts.',
      technologies: ['React', 'D3.js', 'Node.js', 'MongoDB'],
      link: '#',
      image: '📊',
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <span>{project.image}</span>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <a href={project.link} className="project-link">
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
