import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion, AnimatePresence } from 'framer-motion';
import toast from 'react-hot-toast';

const contactSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  email: z.string().email('Correo electrónico inválido'),
  message: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres'),
});

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (data) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        reset();
        setIsSubmitted(true);
        toast.success('Mensaje enviado correctamente 🎉');
      } else {
        const errorData = await response.json();
        toast.error(`Error al enviar: ${errorData.error}`);
      }
    } catch (error) {
      toast.error('Ocurrió un error al enviar el mensaje.');
    }
  };

  return (
    <section id="contact" className="py-24 px-4 max-w-4xl mx-auto text-white">
      <h2 className="text-4xl md:text-5xl font-outfit font-extrabold text-center mb-12 tracking-tight relative">
        Contáctame <span className="text-gradient">Hoy</span>
      </h2>
      <AnimatePresence mode="wait">
        {isSubmitted ? (
          <motion.div
            key="thanks"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className="glass-panel text-center p-12 rounded-3xl border border-teal-500/30"
          >
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-500/20 ring-1 ring-teal-400/50 shadow-[0_0_20px_rgba(45,212,191,0.3)]">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-3xl font-outfit font-bold mb-4 text-white">¡Gracias por tu mensaje!</h3>
            <p className="text-gray-300 text-lg">Te responderé lo antes posible.</p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit(onSubmit)}
            className="glass-panel p-8 md:p-10 rounded-3xl border border-white/10 space-y-8 relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl mix-blend-screen pointer-events-none"></div>

            <div className="relative z-10">
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-300">Nombre</label>
              <input
                id="name"
                type="text"
                {...register('name')}
                placeholder="Tu nombre"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-400/50 focus:border-transparent transition-all duration-300"
              />
              {errors.name && <p className="text-red-400 text-sm mt-2">{errors.name.message}</p>}
            </div>

            <div className="relative z-10">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300">Correo electrónico</label>
              <input
                id="email"
                type="email"
                {...register('email')}
                placeholder="tu@correo.com"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-400/50 focus:border-transparent transition-all duration-300"
              />
              {errors.email && <p className="text-red-400 text-sm mt-2">{errors.email.message}</p>}
            </div>

            <div className="relative z-10">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-300">Mensaje</label>
              <textarea
                id="message"
                rows="5"
                {...register('message')}
                placeholder="¿En qué te puedo ayudar?"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-400/50 focus:border-transparent transition-all duration-300 resize-none"
              ></textarea>
              {errors.message && <p className="text-red-400 text-sm mt-2">{errors.message.message}</p>}
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative z-10 w-full bg-gradient-to-r from-blue-500 to-teal-400 hover:from-blue-400 hover:to-teal-300 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(45,212,191,0.2)] hover:shadow-[0_0_30px_rgba(45,212,191,0.4)]"
            >
              {isSubmitting ? 'Enviando Mensaje...' : 'Enviar Mensaje'}
            </motion.button>
          </motion.form>
        )}
      </AnimatePresence>
    </section>
  );
}
