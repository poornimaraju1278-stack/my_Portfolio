import React, { useState, useEffect } from 'react';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CurrentlyBuilding from './components/CurrentlyBuilding';
import About from './components/About';
import DeveloperDNA from './components/DeveloperDNA';
import DeveloperJourney from './components/DeveloperJourney';
import TechStack from './components/TechStack';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ProjectModal from './components/ProjectModal';
import Exploring from './components/Exploring';
import BuildProcess from './components/BuildProcess';
import ProofOfWork from './components/ProofOfWork';
import Experience from './components/Experience';
import Education from './components/Education';
import Achievements from './components/Achievements';
import GitHubSection from './components/GitHubSection';
import LetsConnectCTA from './components/LetsConnectCTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TerminalModal from './components/TerminalModal';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.2 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <div className="min-h-screen bg-[#070B14] text-[#F8FAFC] selection:bg-[#38BDF8]/30 selection:text-[#38BDF8]">
      
      {/* Scroll Progress Bar at Viewport Top */}
      <ScrollProgress />

      {/* Sticky Glass Navbar */}
      <Navbar 
        activeSection={activeSection} 
        onOpenTerminal={() => setTerminalOpen(true)}
      />

      {/* Main Portfolio Sections */}
      <main id="main-content">
        <Hero onOpenTerminal={() => setTerminalOpen(true)} />
        <CurrentlyBuilding />
        <About />
        <DeveloperDNA />
        <DeveloperJourney />
        <TechStack />
        <Skills />
        <Projects onSelectProject={(project) => setSelectedProject(project)} />
        <Exploring />
        <BuildProcess />
        <ProofOfWork />
        <Experience />
        <Education />
        <Achievements />
        <GitHubSection />
        <LetsConnectCTA />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Project Detail Explorer Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {/* Interactive CLI Terminal Modal */}
      <TerminalModal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
      />

    </div>
  );
}
