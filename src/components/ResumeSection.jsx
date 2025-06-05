import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MdVisibility, MdVisibilityOff, MdDownload } from 'react-icons/md';

export default function ResumeSection() {
  const [showPreview, setShowPreview] = useState(false);

  return (
    <section id="cv" className="py-24 px-6 max-w-4xl mx-auto text-white">
      <motion.h2
        className="text-4xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Currículum Vitae
      </motion.h2>

      <motion.div
        className="bg-white/5 border border-white/10 rounded-xl p-8 shadow-xl backdrop-blur-md"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <p className="mb-6 text-gray-300 text-center">
          Puedes visualizar o descargar mi CV en formato PDF. Se cargará solo cuando lo necesites.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-8">
          <button
            onClick={() => setShowPreview(!showPreview)}
            className={`w-full md:w-auto px-6 py-3 rounded font-semibold text-white border transition duration-300 ${
              showPreview ? 'btn-outline-red' : 'btn-outline-blue'
            } flex items-center justify-center gap-2 text-center`}
          >
            {showPreview ? (
              <MdVisibilityOff
                className="text-xl align-middle leading-none translate-y-[1px]"
                aria-hidden="true"
              />
            ) : (
              <MdVisibility
                className="text-xl align-middle leading-none translate-y-[1px]"
                aria-hidden="true"
              />
            )}
            {showPreview ? 'Ocultar vista' : 'Ver CV'}
          </button>

          <a
            href="/cv/CamiloLavadoCV.pdf"
            download
            className="w-full md:w-auto px-6 py-3 rounded font-semibold text-white border btn-outline-blue flex items-center justify-center gap-2 text-center"
          >
            <MdDownload
              className="text-xl align-middle leading-none translate-y-[1px]"
              aria-hidden="true"
            />
            Descargar CV
          </a>
        </div>

        <AnimatePresence>
          {showPreview && (
            <motion.div
              className="overflow-hidden rounded-lg border border-white/10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
            >
              <iframe
                src="/cv/CamiloLavadoCV.pdf"
                className="w-full h-[700px] bg-black"
                loading="lazy"
                title="Vista previa del CV"
              ></iframe>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
