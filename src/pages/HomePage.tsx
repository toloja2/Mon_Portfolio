import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Certifications from '../components/Certifications';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

function HomePage () {
  return (
    <div className="animate-fade-in">
      <Hero />
      <About />
      <Skills />
      <Certifications />
      <Projects />
      <Contact />
    </div>
  );
}

export default HomePage;