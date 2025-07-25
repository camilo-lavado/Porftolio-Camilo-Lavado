import { useState, useEffect } from 'react';
import { FaHome, FaUser, FaProjectDiagram, FaFileAlt, FaEnvelope } from 'react-icons/fa';

const sections = [
  { id: 'home', label: 'Inicio', icon: <FaHome /> },
  { id: 'about', label: 'Sobre Mí', icon: <FaUser /> },
  { id: 'projects', label: 'Proyectos', icon: <FaProjectDiagram /> },
  { id: 'cv', label: 'Currículum', icon: <FaFileAlt /> },
  { id: 'contact', label: 'Contáctame', icon: <FaEnvelope /> },
];

export default function NavbarComponent() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActiveSection(visible.target.id);
      },
      {
        rootMargin: '-40% 0px -50% 0px',
        threshold: 0.1,
      }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="sticky top-0 z-50 w-full bg-black/90 border-b border-white/10 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
       <a href="#home" className="flex items-center gap-2 text-white font-mono font-bold text-lg">
  <img
    src="/logo.svg"
    alt="Camilo Lavado Logo"
    className="h-10 w-10 shadow-sm"
  />
  Camilo Lavado
</a>


        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center text-sm font-medium">
          {sections.map(({ id, label, icon }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`flex items-center gap-2 transition ${
                activeSection === id
                  ? 'text-blue-500 font-semibold'
                  : 'text-white hover:text-blue-500'
              }`}
            >
              <span className="text-blue-500">{icon}</span>
              <span>{label}</span>
            </a>
          ))}
        </div>

        {/* Mobile Menu */}
        <details className="relative md:hidden">
          <summary className="cursor-pointer text-white">☰</summary>
          <div className="absolute right-0 mt-2 w-44 bg-black border border-white/10 rounded shadow-lg flex flex-col text-sm font-medium z-50">
            {sections.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                className="px-4 py-2 text-white hover:text-blue-500"
              >
                {label}
              </a>
            ))}
          </div>
        </details>
      </div>
    </nav>
  );
}
