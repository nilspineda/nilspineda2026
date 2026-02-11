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
        JSON.stringify({ success: false, error: "Missing fields" }),
        { status: 400 }
      );
    }
    const data = await resend.emails.send({
      from: "info@nilspineda.com",
      to: "nilspineda@gmail.com",
      subject: `📩 Nuevo mensaje de: ${name}`,
      html: `
        <h2>Nuevo mensaje</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      `
    });
    return new Response(JSON.stringify({ success: true, data }), {
      status: 200
    });
  } catch (error) {
    console.error("Email error:", error);
    return new Response(
      JSON.stringify({ success: false, error: "Error al enviar el correo" }),
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
