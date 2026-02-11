import { Resend } from 'resend';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const POST = async ({ request }) => {
  try {
    const apiKey = "re_6ZiSGCYo_EgzcJ3e4WR9EDiCxKxxqosbv";
    if (!apiKey) ;
    let body;
    try {
      body = await request.json();
    } catch {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Datos inválidos",
          details: "El formulario no se envió correctamente"
        }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    const { name, email, message } = body;
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Faltan campos",
          details: "Nombre, email y mensaje son requeridos"
        }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    if (!email.includes("@")) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Email inválido",
          details: "Por favor ingresa un email válido"
        }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    const resend = new Resend(apiKey);
    let adminEmail;
    try {
      adminEmail = await resend.emails.send({
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
    } catch (err) {
      const errMsg = err instanceof Error ? err.message : "Error desconocido";
      console.error("Resend admin email error:", errMsg);
      return new Response(
        JSON.stringify({
          success: false,
          error: "Error al enviar",
          details: errMsg.substring(0, 100)
        }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }
    if (adminEmail.error) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Email no enviado",
          details: adminEmail.error.message
        }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }
    let userEmail;
    try {
      userEmail = await resend.emails.send({
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
    } catch (err) {
      console.warn("Error sending user confirmation:", err);
    }
    return new Response(
      JSON.stringify({
        success: true,
        message: "Mensaje enviado correctamente",
        data: {
          adminEmailId: adminEmail.data?.id,
          userEmailId: userEmail?.data?.id
        }
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("API error:", error);
    const errMsg = error instanceof Error ? error.message : String(error);
    return new Response(
      JSON.stringify({
        success: false,
        error: "Error del servidor",
        details: errMsg.substring(0, 100)
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
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
