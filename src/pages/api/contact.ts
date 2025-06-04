import { Resend } from 'resend';
import 'dotenv/config';

const resend = new Resend(import.meta.env.RESEND_API_KEY);
export const prerender = false;


export async function POST({ request }: { request: Request }) {
  try {
    const { name, email, message } = await request.json();

    // Validación básica del lado servidor
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
      from: 'onboarding@resend.dev',
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
    return new Response(
      JSON.stringify({ error: 'Ocurrió un error al enviar.' }),
      { status: 500 }
    );
  }
}
