import './Projects.css';
import TTTImg from '../assets/Tic-Tac-Toe.png';
import CountdownImg from '../assets/CountdownChallenge.png';
import ClothingImg from '../assets/ClothingStorefront.png';
import TaskImg from '../assets/TaskManager.png';
function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Tic-Tac-Toe',
      description: 'A clean, interactive desktop implementation of the classic two-player Tic Tac Toe game built with modern web technologies. Players take turns placing their marks on a dynamic game board, featuring real-time win detection, draw logic, and simple game reset functionality.',
      technologies: ['React', 'HTML/CSS'],
      link: 'https://roaring-froyo-f8ab53.netlify.app/',
      image: TTTImg,
    },
    {
      id: 2,
      title: 'Countdown Challenge',
      description:
        'A desktop timing game where users test their precision by starting and stopping a countdown timer. The application provides real-time feedback, simple controls, and dynamic state updates that create an engaging, challenge-based experience.',
      technologies: ['HTML/CSS', 'JavaScript', 'Lead Forms', 'SEO Optimized'],
      link: 'https://cosmic-zabaione-3384db.netlify.app/',
      image: CountdownImg,
    },
    {
      id: 3,
      title: 'Clothing Storefront',
      description:
        'An interactive storefront interface showcasing a selection of clothing items with dynamic cart functionality. Users can browse products, add and remove items from their cart, and see updates reflected in real time. This project focuses on front-end state management, user interaction, and building a basic e-commerce-style experience.',
      technologies: [
        'React',
        'CSS Grid',
        'Image Galleries',
        'Responsive Layout',
      ],
      link: 'https://teal-bublanina-d2a8b8.netlify.app/',
      image: ClothingImg,
    },
    {
      id: 4,
      title: 'Task Manager',
      description:
        'Professional website for dental clinic featuring services, appointment booking, patient testimonials, and contact info.',
      technologies: [
        'React',
        'Contact Forms',
        'Appointment Booking',
        'Mobile Responsive',
      ],
      link: 'https://spiffy-cranachan-3a0c96.netlify.app/',
      image: TaskImg,
    },
    {
      id: 5,
      title: 'Local Electrician Lead Form',
      description:
        'Lead capture system for electrical services with service request forms, service areas, and instant quote requests.',
      technologies: [
        'Form Builder',
        'JavaScript',
        'Email Integration',
        'Analytics',
      ],
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
              <div
                className="project-image"
                style={{
                  backgroundImage: `linear-gradient(135deg, rgba(229,225,220,0.45), rgba(139,46,46,0.55)), url(${project.image})`,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                }}
              >
                <span className="project-image-label">{project.title}</span>
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
