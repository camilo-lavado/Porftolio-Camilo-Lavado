// src/pages/api/contact.ts

// Carga dotenv solo en desarrollo local
if (process.env.NODE_ENV !== 'production') {
  await import('dotenv').then((dotenv) => dotenv.config());
}

import { Resend } from 'resend';

// Astro necesita esto para permitir endpoints dinámicos
export const prerender = false;

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export async function POST({ request }: { request: Request }) {
  try {
    const { name, email, message } = await request.json();

    // Validación básica del servidor
    if (
      typeof name !== 'string' ||
      typeof email !== 'string' ||
      typeof message !== 'string' ||
      name.length < 2 ||
      !email.match(/^[\w.-]+@[\w.-]+\.[A-Za-z]{2,}$/)
    ) {
      return new Response(
        JSON.stringify({ error: 'Datos inválidos' }),
        { status: 400 }
      );
    }

    const result = await resend.emails.send({
      from: 'contact@camilo-lavado.dev',
      to: 'camilolavado.it@gmail.com',
      subject: `Nuevo mensaje de ${name}`,
      html: `
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Correo:</strong> ${email}</p>
        <p><strong>Mensaje:</strong><br>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    return new Response(JSON.stringify({ result }), { status: 200 });
  } catch (error) {
    console.error('Error en envío de email:', error);
    return new Response(
      JSON.stringify({ error: 'Ocurrió un error al enviar.' }),
      { status: 500 }
    );
  }
}
