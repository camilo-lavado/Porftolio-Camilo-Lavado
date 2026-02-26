import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function FooterComponent() {
  return (
    <footer className="relative py-16 mt-24 px-6 text-gray-300 bg-[#050510] shadow-[0_-10px_40px_rgba(45,212,191,0.05)] border-t border-teal-500/10 overflow-hidden font-outfit">
      {/* Patrón animado sutil */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20 animate-pulse bg-[radial-gradient(rgba(45,212,191,0.15)_1px,transparent_1px)] bg-[length:30px_30px]"></div>

      <motion.div
        className="relative z-10 max-w-5xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <p className="mb-6 text-sm text-gray-400 font-medium tracking-wide">
          © {new Date().getFullYear()} Camilo Lavado. Todos los derechos reservados.
        </p>

        <div className="flex justify-center gap-8 text-2xl text-gray-400">
          <a
            href="https://github.com/camilo-lavado"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/5 rounded-full border border-white/5 hover:bg-white/10 hover:border-teal-400/50 hover:text-teal-400 hover:shadow-[0_0_15px_rgba(45,212,191,0.3)] hover:-translate-y-1 transition-all duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/camilo-lavado/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/5 rounded-full border border-white/5 hover:bg-white/10 hover:border-blue-400/50 hover:text-blue-400 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:-translate-y-1 transition-all duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:camilolavado.it@gmail.com?subject=Consulta%20desde%20tu%20portafolio&body=Hola%20Camilo%2C%20me%20interesa%20conversar%20contigo%20sobre..."
            className="p-3 bg-white/5 rounded-full border border-white/5 hover:bg-white/10 hover:border-teal-400/50 hover:text-teal-400 hover:shadow-[0_0_15px_rgba(45,212,191,0.3)] hover:-translate-y-1 transition-all duration-300"
          >
            <FaEnvelope />
          </a>
        </div>
      </motion.div>
    </footer>
  );
}
