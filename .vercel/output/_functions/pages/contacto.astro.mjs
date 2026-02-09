import { c as createComponent, r as renderComponent, e as renderScript, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CSf9IKit.mjs';
import 'piccolore';
import { $ as $$LayoutNav } from '../chunks/Layout-nav_ASv_iRnz.mjs';
export { renderers } from '../renderers.mjs';

const $$Contacto = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "LayoutNav", $$LayoutNav, { "title": "Contacto | Nils Pineda - Hablemos de tu Proyecto", "description": "\xBFListo para iniciar tu pr\xF3ximo proyecto digital? Cont\xE1ctame y conversemos sobre c\xF3mo puedo ayudarte a alcanzar tus objetivos." }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="relative min-h-dvh flex flex-col items-center justify-center px-6 py-24 overflow-hidden"> <div class="fixed inset-0 -z-10"></div> <div class="w-full max-w-4xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"> <div class="text-center lg:text-left"> <h1 class="text-white text-5xl md:text-6xl font-bold mb-6 leading-tight">
¿Hacemos algo <span class="text-primary-400">increíble?</span> </h1> <p class="text-gray-400 text-lg mb-8 max-w-md mx-auto lg:mx-0">
Estoy listo para escuchar tu idea. Escríbeme y diseñemos una
          experiencia digital que destaque.
</p> <div class="flex flex-col gap-4 items-center lg:items-start"> <div class="flex items-center gap-3 text-white/80"> <span class="flex h-3 w-3 relative"> <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span> <span class="relative inline-flex rounded-full h-3 w-3 bg-primary-500"></span> </span>
Respuesta en menos de 24h
</div> <a href="mailto:info@nilspineda.com" class="text-primary-400 hover:underline font-medium">info@nilspineda.com</a> </div> </div> <div class="bg-white/0.03 backdrop-blur-xl border border-white/10 p-8 rounded-[2.5rem] shadow-2xl"> <form id="contact-form" class="flex flex-col gap-5"> <div class="flex flex-col gap-2"> <label class="text-white/60 text-sm ml-2">Nombre</label> <input type="text" name="name" required placeholder="Tu nombre" class="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-primary-400 transition-all placeholder:text-white/20"> </div> <div class="flex flex-col gap-2"> <label class="text-white/60 text-sm ml-2">Email</label> <input type="email" name="email" required placeholder="tu@email.com" class="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-primary-400 transition-all placeholder:text-white/20"> </div> <div class="flex flex-col gap-2"> <label class="text-white/60 text-sm ml-2">Mensaje</label> <textarea name="message" required rows="4" placeholder="¿En qué puedo ayudarte?" class="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-primary-400 transition-all resize-none placeholder:text-white/20"></textarea> </div> <button type="submit" id="submit-btn" class="mt-4 bg-primary-400 text-accent font-bold py-4 rounded-2xl hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-primary-400/20"> <span id="btn-text">Enviar mensaje</span> <svg id="btn-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="group-hover:translate-x-1 transition-transform"> <line x1="22" y1="2" x2="11" y2="13"></line> <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon> </svg> </button> <p id="response-status" class="text-center text-sm font-medium mt-2 hidden"></p> </form> </div> </div> </main> ` })} ${renderScript($$result, "D:/Web/nilspineda2026/src/pages/contacto.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/Web/nilspineda2026/src/pages/contacto.astro", void 0);

const $$file = "D:/Web/nilspineda2026/src/pages/contacto.astro";
const $$url = "/contacto";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contacto,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
