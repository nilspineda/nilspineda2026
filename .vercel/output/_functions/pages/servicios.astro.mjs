import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../chunks/astro/server_CSf9IKit.mjs';
import 'piccolore';
import { $ as $$LayoutNav } from '../chunks/Layout-nav_B8LH9BPt.mjs';
export { renderers } from '../renderers.mjs';

const $$Servicios = createComponent(($$result, $$props, $$slots) => {
  const titlePage = "Mis Servicios";
  const services = [
    {
      title: "WordPress",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z"/><path d="M17.5 7L13.8 20.5"/><path d="M20 12l-6-8.5L8 12"/><path d="M4.5 7l4.3 13.5"/><path d="M4 12l6-8.5 6 8.5"/></svg>`
    },
    {
      title: "Dise\xF1o Web",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/><line x1="2" y1="7" x2="22" y2="7"/></svg>`
    },
    {
      title: "Desarrollo Web",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/><circle cx="12" cy="12" r="3"/><line x1="12" y1="9" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="15"/></svg>`
    },
    {
      title: "Dise\xF1o Gr\xE1fico",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>`
    },
    {
      title: "Dise\xF1o UI",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><path d="M12 18h.01"/><path d="M8 6h8"/><path d="M8 10h8"/><path d="M8 14h6"/></svg>`
    },
    {
      title: "Motion Graphics",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"/><line x1="7" y1="2" x2="7" y2="22"/><line x1="17" y1="2" x2="17" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="2" y1="7" x2="7" y2="7"/><line x1="2" y1="17" x2="7" y2="17"/><line x1="17" y1="17" x2="22" y2="17"/><line x1="17" y1="7" x2="22" y2="7"/></svg>`
    }
  ];
  return renderTemplate`${renderComponent($$result, "LayoutNav", $$LayoutNav, { "title": "Servicios | Nils Pineda - Dise\xF1o Web, Desarrollo y M\xE1s", "description": "Ofrezco servicios de dise\xF1o web, desarrollo frontend, optimizaci\xF3n SEO y soluciones digitales a medida para potenciar tu negocio." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="max-w-7xl mx-auto px-6 py-20"> <h1 class="text-white text-4xl md:text-5xl lg:text-6xl font-medium text-center mb-20"> ${titlePage} </h1> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ${services.map((service) => renderTemplate`<div class="group relative p-8 rounded-lg border border-white/5 bg-[#131a22]/50 hover:bg-[#131a22]/80 hover:border-primary-400/50 transition-all duration-300 backdrop-blur-sm flex flex-col items-center justify-center gap-6 min-h-[200px]"> <div class="text-primary-400 group-hover:scale-110 transition-transform duration-300">${unescapeHTML(service.icon)}</div> <h3 class="text-white text-xl md:text-2xl font-medium text-center"> ${service.title} </h3> <div class="absolute inset-0 rounded-lg bg-primary-400/0 group-hover:bg-primary-400/5 transition-colors duration-300"></div> </div>`)} </div> </section> ` })}`;
}, "D:/Web/nilspineda2026/src/pages/servicios.astro", void 0);

const $$file = "D:/Web/nilspineda2026/src/pages/servicios.astro";
const $$url = "/servicios";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Servicios,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
