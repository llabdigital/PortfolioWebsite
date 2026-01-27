import './About.css';

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate freelance developer with expertise in building
              modern web applications. With a focus on clean code and
              user-centric design, I help businesses and startups bring their
              ideas to life through technology.
            </p>
            <p>
              My journey in web development started with a curiosity about how
              things work on the internet. Over the years, I've grown to
              specialize in full-stack development, creating solutions that are
              not just functional but also beautiful and intuitive.
            </p>
            <p>
              When I'm not coding, you'll find me contributing to open-source
              projects, learning new technologies, or sharing knowledge with the
              developer community.
            </p>
            <div className="about-stats">
              <div className="stat">
                <h3>50+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat">
                <h3>30+</h3>
                <p>Happy Clients</p>
              </div>
              <div className="stat">
                <h3>5+</h3>
                <p>Years Experience</p>
              </div>
            </div>
          </div>
          <div className="about-image">
            <div className="image-placeholder">
              <div className="placeholder-content">
                <span>📸</span>
                <p>Your Photo Here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
