import './Projects.css';

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Local Coffee Shop Website',
      description:
        'Professional website for a local cafe with menu display, online reservations, and social media integration.',
      technologies: ['React', 'HTML/CSS', 'Contact Forms', 'Responsive Design'],
      link: '#',
      image: '☕',
    },
    {
      id: 2,
      title: 'HVAC Service Landing Page',
      description:
        'Lead generation landing page for heating and cooling services with service areas, testimonials, and CTA buttons.',
      technologies: ['HTML/CSS', 'JavaScript', 'Lead Forms', 'SEO Optimized'],
      link: '#',
      image: '🔧',
    },
    {
      id: 3,
      title: 'Real Estate Agency Website',
      description:
        'Property listing website showcasing homes for sale with image galleries, agent profiles, and property filters.',
      technologies: ['React', 'CSS Grid', 'Image Galleries', 'Responsive Layout'],
      link: '#',
      image: '🏠',
    },
    {
      id: 4,
      title: 'Dental Practice Website',
      description:
        'Professional website for dental clinic featuring services, appointment booking, patient testimonials, and contact info.',
      technologies: ['React', 'Contact Forms', 'Appointment Booking', 'Mobile Responsive'],
      link: '#',
      image: '😁',
    },
    {
      id: 5,
      title: 'Local Electrician Lead Form',
      description:
        'Lead capture system for electrical services with service request forms, service areas, and instant quote requests.',
      technologies: ['Form Builder', 'JavaScript', 'Email Integration', 'Analytics'],
      link: '#',
      image: '⚡',
    },
    {
      id: 6,
      title: 'Fitness Studio Website',
      description:
        'Modern website for fitness studio with class schedules, pricing, member testimonials, and online registration.',
      technologies: ['React', 'CSS', 'Class Scheduling', 'Payment Integration'],
      link: '#',
      image: '💪',
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
