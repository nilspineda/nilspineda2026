import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CSf9IKit.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_C3N6-1D0.mjs';
/* empty css                               */
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "404 - P\xE1gina no encontrada", "data-astro-cid-zetdm5md": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="relative min-h-dvh flex flex-col items-center justify-center overflow-hidden bg-[radial-gradient(125%_125%_at_50%_10%,#131a22_60%,#2ab092_150%)] px-6" data-astro-cid-zetdm5md> <div class="absolute w-[500px] h-[500px] bg-primary-400/10 blur-[120px] rounded-full -z-10 animate-pulse" data-astro-cid-zetdm5md></div> <div class="text-center" data-astro-cid-zetdm5md> <h1 class="text-[12rem] md:text-[18rem] font-bold text-white/5 leading-none select-none" data-astro-cid-zetdm5md>
404
</h1> <div class="relative -mt-20 md:-mt-32" data-astro-cid-zetdm5md> <h2 class="text-white text-3xl md:text-5xl font-bold mb-4" data-astro-cid-zetdm5md>
Parece que te has <span class="text-primary-400" data-astro-cid-zetdm5md>perdido</span> </h2> <p class="text-gray-400 text-lg md:text-xl max-w-md mx-auto mb-10" data-astro-cid-zetdm5md>
La página que buscas no existe o fue movida a otra dimensión digital.
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center items-center" data-astro-cid-zetdm5md> <a href="/" class="bg-primary-400 text-primary-400 px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-all flex items-center gap-2" data-astro-cid-zetdm5md> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-zetdm5md><path d="m12 19-7-7 7-7" data-astro-cid-zetdm5md></path><path d="M19 12H5" data-astro-cid-zetdm5md></path></svg>
Volver al Inicio
</a> <a href="/portafolio" class="text-white border border-white/10 px-8 py-4 rounded-2xl font-medium hover:bg-white/5 transition-all" data-astro-cid-zetdm5md>
Ver Proyectos
</a> </div> </div> </div> </main> ` })} `;
}, "D:/Web/nilspineda2026/src/pages/404.astro", void 0);

const $$file = "D:/Web/nilspineda2026/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
