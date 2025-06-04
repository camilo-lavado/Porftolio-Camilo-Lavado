import React, { useState } from 'react';
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
    <section id="contact" className="py-20 px-4 max-w-4xl mx-auto text-white">
      <h2 className="text-3xl font-bold text-center mb-8">Contáctame</h2>
      <AnimatePresence mode="wait">
        {isSubmitted ? (
          <motion.div
            key="thanks"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className="bg-green-900/20 border border-green-500 text-center p-8 rounded-xl"
          >
            <h3 className="text-2xl font-semibold mb-4 text-green-300">Gracias por tu mensaje 🙌</h3>
            <p className="text-green-200">Te responderé lo antes posible.</p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white/5 p-6 rounded-lg shadow border border-white/10 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <div>
              <label htmlFor="name" className="block mb-1 text-sm">Nombre</label>
              <input
                id="name"
                type="text"
                {...register('name')}
                className="w-full px-4 py-2 rounded bg-black/50 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-blue-500 transition"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block mb-1 text-sm">Correo electrónico</label>
              <input
                id="email"
                type="email"
                {...register('email')}
                className="w-full px-4 py-2 rounded bg-black/50 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-blue-500 transition"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
            </div>

            <div>
              <label htmlFor="message" className="block mb-1 text-sm">Mensaje</label>
              <textarea
                id="message"
                rows="5"
                {...register('message')}
                className="w-full px-4 py-2 rounded bg-black/50 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-blue-500 transition"
              ></textarea>
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded transition disabled:opacity-50"
            >
              {isSubmitting ? 'Enviando...' : 'Enviar'}
            </motion.button>
          </motion.form>
        )}
      </AnimatePresence>
    </section>
  );
}
