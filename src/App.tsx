import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Menu, X } from 'lucide-react';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const skills = [
    { category: 'Languages', items: ['Python', 'JavaScript', 'TypeScript', 'Java', 'C++'] },
    { category: 'Frontend', items: ['React', 'Next.js', 'Vue.js', 'Tailwind CSS', 'HTML/CSS'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'Django', 'FastAPI', 'PostgreSQL'] },
    { category: 'Tools', items: ['Git', 'Docker', 'AWS', 'CI/CD', 'Jest'] }
  ];

  const projects = [
    {
      title: 'AI-Powered Analytics Platform',
      description: 'Built a comprehensive analytics dashboard with real-time data visualization and machine learning predictions.',
      tech: ['React', 'Python', 'TensorFlow', 'PostgreSQL'],
      link: '#'
    },
    {
      title: 'E-Commerce Microservices',
      description: 'Designed and implemented scalable microservices architecture handling 100K+ daily transactions.',
      tech: ['Node.js', 'Docker', 'Kubernetes', 'MongoDB'],
      link: '#'
    },
    {
      title: 'Mobile Fitness Tracker',
      description: 'Cross-platform mobile app with real-time activity tracking and social features.',
      tech: ['React Native', 'Firebase', 'Redux', 'TypeScript'],
      link: '#'
    },
    {
      title: 'Blockchain Voting System',
      description: 'Decentralized voting platform ensuring transparency and security in electoral processes.',
      tech: ['Solidity', 'Web3.js', 'React', 'IPFS'],
      link: '#'
    }
  ];

  return (
    <div className="bg-white text-gray-900 min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold tracking-tight text-gray-900">
              AK<span className="text-blue-600">.</span>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item)}
                  className={`capitalize transition-colors font-medium ${
                    activeSection === item ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-900"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden pt-4 pb-2 border-t border-gray-100 mt-4">
              {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item)}
                  className="block w-full text-left py-2 capitalize text-gray-600 hover:text-gray-900 font-medium"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-blue-50 rounded-full text-sm text-blue-700 font-medium">
            Full Stack Developer
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-gray-900">
            Amulya Kantamaneni
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            Building scalable, user-centric applications with modern technologies
          </p>
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => scrollTo('projects')}
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors shadow-sm"
            >
              View Work
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="px-8 py-3 bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-lg font-medium transition-colors"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-gray-900">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                I'm a passionate software engineer with expertise in building modern web applications. 
                I specialize in creating efficient, scalable solutions that solve real-world problems.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                With a strong foundation in both frontend and backend development, I bring ideas to 
                life through clean code and thoughtful design.
              </p>
            </div>
            <div className="space-y-4">
              <div className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
                <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
                <div className="text-gray-600 font-medium">Years Experience</div>
              </div>
              <div className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
                <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-gray-600 font-medium">Projects Completed</div>
              </div>
              <div className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
                <div className="text-3xl font-bold text-blue-600 mb-2">20+</div>
                <div className="text-gray-600 font-medium">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-gray-900">Skills & Expertise</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillGroup) => (
              <div
                key={skillGroup.category}
                className="p-6 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all"
              >
                <h3 className="text-xl font-semibold mb-4 text-blue-600">{skillGroup.category}</h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((item) => (
                    <li key={item} className="text-gray-700">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-gray-900">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="group p-6 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all"
              >
                <h3 className="text-2xl font-semibold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
                >
                  View Project <ExternalLink size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">Let's Work Together</h2>
          <p className="text-xl text-gray-600 mb-12">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <div className="flex gap-6 justify-center mb-12">
            <a
              href="mailto:your.email@example.com"
              className="p-4 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
              aria-label="Email"
            >
              <Mail size={24} className="text-gray-700" />
            </a>
            <a
              href="https://github.com/Amulyakantamneni"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} className="text-gray-700" />
            </a>
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} className="text-gray-700" />
            </a>
          </div>
          <a
            href="mailto:your.email@example.com"
            className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors shadow-sm"
          >
            Send Me a Message
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-200 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center text-gray-600">
          <p>© 2024 Amulya Kantamaneni. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
