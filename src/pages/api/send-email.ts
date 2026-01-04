import type { APIRoute } from 'astro';
import { Resend } from 'resend';


export const prerender = false; // <--- AGREGA ESTO AL PRINCIPIO
// Inicializamos con tu clave (aunque es mejor usar .env, aquí está integrada)
const resend = new Resend(process.env.RESEND_API_KEY!);

export const POST: APIRoute = async ({ request }) => {
  try {
    // 1. Extraemos los datos enviados desde el formulario
    const body = await request.json();
    const { name, email, message } = body;

    // 2. Enviamos el correo usando Resend
    const data = await resend.emails.send({
      from: 'info@nilspineda.com', // Dominio de prueba de Resend
      to: 'nilspineda@gmail.com',    // Tu correo donde recibirás los mensajes
      subject: `📩 Nuevo mensaje de: ${name}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #131a22;">
          <h2 style="color: #2ab092;">Tienes un nuevo mensaje de contacto</h2>
          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
          <p><strong>Mensaje:</strong></p>
          <p style="background-color: #f9f9f9; padding: 15px; border-radius: 8px;">${message}</p>
        </div>
      `
    });

    return new Response(JSON.stringify({ success: true, data }), { status: 200 });

  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ success: false, error: 'Error al enviar el correo' }), { status: 500 });
  }
};