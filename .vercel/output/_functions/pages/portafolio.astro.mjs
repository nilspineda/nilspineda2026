import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_CSf9IKit.mjs';
import 'piccolore';
import { $ as $$LayoutNav } from '../chunks/Layout-nav_ASv_iRnz.mjs';
import { g as getCollection } from '../chunks/_astro_content_UxZlJib_.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const formatDate = (date) => new Intl.DateTimeFormat("es-ES", {
    day: "2-digit",
    month: "long",
    year: "numeric"
  }).format(new Date(date));
  const portafolios = (await getCollection("portafolio")).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  );
  return renderTemplate`${renderComponent($$result, "LayoutNav", $$LayoutNav, { "title": "Portafolio | Nils Pineda - Proyectos Destacados", "description": "Explora mi portafolio de dise\xF1o y desarrollo web. Descubre c\xF3mo he ayudado a marcas a destacar con soluciones digitales personalizadas." }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="flex flex-col lg:flex-row justify-center items-center px-6 lg:px-40 lg:py-20"> <h1 class="text-white text-4xl md:text-6xl lg:text-7xl mt-4 font-medium text-center">
Algunos de mis <br> <span class="text-primary-400 font-bold">Trabajos realizados</span> </h1> </section> <section class="px-6 lg:px-40 py-12"> <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"> ${portafolios.map((portafolio) => renderTemplate`<a${addAttribute(`/portafolio/${portafolio.slug}`, "href")} class="group block rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-white/20 hover:-translate-y-1 transition-all duration-300">  <div class="h-72 w-full overflow-hidden"> <img${addAttribute(portafolio.data.image, "src")}${addAttribute(portafolio.data.title, "alt")} class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"> </div>  <div class="p-6 text-center"> <h2 class="text-white text-xl font-semibold mb-1"> ${portafolio.data.title} </h2> <p class="text-gray-400 text-sm mb-3"> ${formatDate(portafolio.data.date)} </p> <div class="flex flex-wrap justify-center gap-2 mt-3"> ${portafolio.data.tags?.map((tag) => renderTemplate`<span class="bg-primary-300 text-black text-xs px-3 py-1 rounded-full"> ${tag} </span>`)} </div> </div> </a>`)} </div> </section> ` })}`;
}, "D:/Web/nilspineda2026/src/pages/portafolio/index.astro", void 0);

const $$file = "D:/Web/nilspineda2026/src/pages/portafolio/index.astro";
const $$url = "/portafolio";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
