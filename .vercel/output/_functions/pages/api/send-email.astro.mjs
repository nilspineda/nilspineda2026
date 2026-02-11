import { Resend } from 'resend';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const POST = async ({ request }) => {
  try {
    const apiKey = "re_6ZiSGCYo_EgzcJ3e4WR9EDiCxKxxqosbv";
    if (!apiKey) ;
    const resend = new Resend(apiKey);
    const body = await request.json();
    const { name, email, message } = body;
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ success: false, error: "Faltan campos requeridos" }),
        { status: 400 }
      );
    }
    if (!email.includes("@")) {
      return new Response(
        JSON.stringify({ success: false, error: "Email inválido" }),
        { status: 400 }
      );
    }
    const adminEmail = await resend.emails.send({
      from: "noreply@nilspineda.com",
      to: "nilspineda@gmail.com",
      replyTo: email,
      subject: `📩 Nuevo mensaje de: ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>📩 Nuevo mensaje de contacto</h2>
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Nombre:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Mensaje:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          <p style="color: #666; font-size: 12px;">Para responder, usa el email: ${email}</p>
        </div>
      `
    });
    if (adminEmail.error) {
      throw new Error(
        `Error enviando email al admin: ${adminEmail.error.message}`
      );
    }
    const userEmail = await resend.emails.send({
      from: "noreply@nilspineda.com",
      to: email,
      subject: "Recibimos tu mensaje ✅",
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>¡Gracias ${name}! 🎉</h2>
          <p>Recibimos tu mensaje y nos pondremos en contacto en las próximas 24 horas.</p>
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Tu mensaje:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          <p>Si tienes preguntas urgentes, puedes escribir a <strong>info@nilspineda.com</strong></p>
          <p style="color: #999; font-size: 12px;">Nils Pineda - Diseño & Desarrollo Web</p>
        </div>
      `
    });
    if (userEmail.error) {
      console.warn(
        `Advertencia: Email de confirmación no enviado: ${userEmail.error.message}`
      );
    }
    return new Response(
      JSON.stringify({
        success: true,
        message: "Mensaje enviado correctamente",
        data: {
          adminEmailId: adminEmail.data?.id,
          userEmailId: userEmail.data?.id
        }
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Email error:", error);
    const errorMessage = error instanceof Error ? error.message : String(error);
    return new Response(
      JSON.stringify({
        success: false,
        error: "Error al enviar el mensaje. Intenta nuevamente.",
        details: errorMessage
      }),
      { status: 500 }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
