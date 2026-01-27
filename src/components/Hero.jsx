import './Hero.css';

function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Digital Solutions
            <br />
            <span className="gold-text">For Local Brands</span>
          </h1>
          <p className="hero-subtitle">
            Professional web design, lead generation, and digital strategy for
            small businesses and entrepreneurs.
          </p>
          <div className="hero-buttons">
            <button
              className="btn btn-primary"
              onClick={() => scrollToSection('projects')}
            >
              Our Work
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => scrollToSection('contact')}
            >
              Build Your Brand
            </button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-tagline-box">
            <p className="hero-tagline">"Where culture meets code"</p>
            <p className="hero-tagline-sub">
              Elevating local businesses through premium digital design
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
