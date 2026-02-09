export { renderers } from '../../renderers.mjs';

const POST = async ({ request }) => {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      throw new Error("RESEND_API_KEY is missing");
    }
    const resend = new Resend(apiKey);
    const body = await request.json();
    const { name, email, message } = body;
    const data = await resend.emails.send({
      from: "info@nilspineda.com",
      to: "nilspineda@gmail.com",
      subject: `📩 Nuevo mensaje de: ${name}`,
      html: `...`
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
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
