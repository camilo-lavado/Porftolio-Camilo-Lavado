import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="relative py-16 mt-24 px-6 text-gray-300 bg-[#0a0a0a] shadow-[0_-2px_20px_rgba(0,0,0,0.5)] border-t border-white/10 overflow-hidden">
      {/* Patrón animado sutil */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-5 animate-pulse bg-[radial-gradient(#3b82f650_1px,transparent_1px)] bg-[length:35px_35px]"></div>

      <motion.div
        className="relative z-10 max-w-5xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="mb-4 text-sm text-gray-400">
          © {new Date().getFullYear()} Camilo Lavado. Todos los derechos reservados.
        </p>

        <div className="flex justify-center gap-6 text-xl text-gray-400">
          <a
            href="https://github.com/camilo-lavado"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/camilo-lavado/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:camilolavado.it@gmail.com?subject=Consulta%20desde%20tu%20portafolio&body=Hola%20Camilo%2C%20me%20interesa%20conversar%20contigo%20sobre..."
            className="hover:text-white transition duration-300"
          >
            <FaEnvelope />
          </a>
        </div>
      </motion.div>
    </footer>
  );
}
