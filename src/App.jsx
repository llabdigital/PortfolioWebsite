import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContactForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', contactForm);
    alert('Thank you for your message! I will get back to you soon.');
    setContactForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="app">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact
        onFormChange={handleContactChange}
        onFormSubmit={handleContactSubmit}
        formData={contactForm}
      />
      <Footer />
    </div>
  );
}

export default App;
