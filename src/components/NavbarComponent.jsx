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
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-5xl z-50 transition-all duration-300">
      <div className="glass-panel rounded-full px-6 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 text-white font-outfit font-bold text-xl tracking-tight group">
          <img
            src="/logo-cl.svg"
            alt="Camilo Lavado Logo"
            className="h-10 w-10 shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(45,212,191,0.6)]"
          />
          <span className="hidden sm:block">Camilo Lavado</span>
        </a>


        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-2 items-center text-sm font-medium font-outfit">
          {sections.map(({ id, label, icon }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`relative flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                activeSection === id
                  ? 'text-teal-400 bg-white/10 shadow-[inner_0_0_10px_rgba(255,255,255,0.05)]'
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <span className={activeSection === id ? "drop-shadow-[0_0_8px_rgba(45,212,191,0.6)]" : ""}>{icon}</span>
              <span>{label}</span>
            </a>
          ))}
        </div>

        {/* Mobile Menu */}
        <details className="relative md:hidden group">
          <summary className="cursor-pointer text-white p-2 bg-white/5 rounded-full hover:bg-white/10 transition list-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </summary>
          <div className="absolute right-0 mt-4 w-48 glass-panel rounded-2xl flex flex-col p-2 text-sm font-medium font-outfit z-50 origin-top-right transform group-open:animate-in group-open:fade-in group-open:scale-100 scale-95 opacity-0 transition-all duration-200">
            {sections.map(({ id, label, icon }) => (
              <a
                key={id}
                href={`#${id}`}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                  activeSection === id ? 'bg-white/10 text-teal-400' : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <span className={activeSection === id ? "drop-shadow-[0_0_8px_rgba(45,212,191,0.6)]" : ""}>{icon}</span>
                {label}
              </a>
            ))}
          </div>
        </details>
      </div>
    </nav>
  );
}
