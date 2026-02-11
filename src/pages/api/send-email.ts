import type { APIRoute } from "astro";
import { Resend } from "resend";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const apiKey = import.meta.env.RESEND_API_KEY;

    if (!apiKey) {
      return new Response(
        JSON.stringify({ success: false, error: "API key no configurada" }),
        { status: 500 },
      );
    }

    const resend = new Resend(apiKey);

    const body = await request.json();
    const { name, email, message } = body;

    // Validar campos
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ success: false, error: "Faltan campos requeridos" }),
        { status: 400 },
      );
    }

    // Validar email
    if (!email.includes("@")) {
      return new Response(
        JSON.stringify({ success: false, error: "Email inválido" }),
        { status: 400 },
      );
    }

    // Enviar email a admin
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
      `,
    });

    // Enviar confirmación al usuario
    const userEmail = await resend.emails.send({
      from: "info@nilspineda.com",
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
      `,
    });

    if (!adminEmail.id || !userEmail.id) {
      throw new Error("Error al enviar emails");
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: "Mensaje enviado correctamente",
      }),
      { status: 200 },
    );
  } catch (error) {
    console.error("Email error:", error);
    const errorMessage = error instanceof Error ? error.message : String(error);

    return new Response(
      JSON.stringify({
        success: false,
        error: "Error al enviar el mensaje. Intenta nuevamente.",
        details: errorMessage,
      }),
      { status: 500 },
    );
  }
};
