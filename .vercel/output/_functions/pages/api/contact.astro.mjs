import { Resend } from 'resend';
export { renderers } from '../../renderers.mjs';

if (process.env.NODE_ENV !== "production") {
  await import('dotenv').then((dotenv) => dotenv.config());
}
const prerender = false;
const resend = new Resend("re_Mj2LpZ4y_DV26aYyeeXEYA2wosWMiJW36");
async function POST({ request }) {
  try {
    const { name, email, message } = await request.json();
    if (typeof name !== "string" || typeof email !== "string" || typeof message !== "string" || name.length < 2 || !email.match(/^[\w.-]+@[\w.-]+\.[A-Za-z]{2,}$/)) {
      return new Response(
        JSON.stringify({ error: "Datos inválidos" }),
        { status: 400 }
      );
    }
    const result = await resend.emails.send({
      from: "contact@camilo-lavado.dev",
      to: "camilolavado.it@gmail.com",
      subject: `Nuevo mensaje de ${name}`,
      html: `
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Correo:</strong> ${email}</p>
        <p><strong>Mensaje:</strong><br>${message.replace(/\n/g, "<br>")}</p>
      `
    });
    return new Response(JSON.stringify({ result }), { status: 200 });
  } catch (error) {
    console.error("Error en envío de email:", error);
    return new Response(
      JSON.stringify({ error: "Ocurrió un error al enviar." }),
      { status: 500 }
    );
  }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
