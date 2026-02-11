import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate, b as createAstro, d as addAttribute, r as renderComponent } from '../chunks/astro/server_CSf9IKit.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_ctOiJLpc.mjs';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Services = createComponent(($$result, $$props, $$slots) => {
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
  return renderTemplate`${maybeRenderHead()}<section id="servicios" class="max-w-7xl mx-auto px-6 py-20"> <h2 class="text-white text-4xl md:text-5xl lg:text-6xl font-medium text-center mb-20"> ${titlePage} </h2> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ${services.map((service) => renderTemplate`<div class="group relative p-8 rounded-lg border border-white/5 bg-[#131a22]/50 hover:bg-[#131a22]/80 hover:border-primary-400/50 transition-all duration-300 backdrop-blur-sm flex flex-col items-center justify-center gap-6 min-h-[200px]"> <div class="text-primary-400 group-hover:scale-110 transition-transform duration-300">${unescapeHTML(service.icon)}</div> <h3 class="text-white text-xl md:text-2xl font-medium text-center"> ${service.title} </h3> <div class="absolute inset-0 rounded-lg bg-primary-400/0 group-hover:bg-primary-400/5 transition-colors duration-300"></div> </div>`)} </div> </section>`;
}, "D:/Web/nilspineda2026/src/components/Services.astro", void 0);

const $$Astro = createAstro("https://nilspineda.com");
const $$Technologies = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Technologies;
  const { class: className } = Astro2.props;
  const designTechs = [
    {
      name: "Adobe XD",
      image: "/icons/adobe-xd.svg",
      color: "text-[#FF61F6]"
    },
    {
      name: "Figma",
      image: "/icons/figma.svg",
      color: "text-[#F24E1E]"
    },
    {
      name: "Premiere",
      image: "/icons/premiere.svg",
      color: "text-[#9999FF]"
    },
    {
      name: "Illustrator",
      image: "/icons/illustrator.svg",
      color: "text-[#FF9A00]"
    },
    {
      name: "Photoshop",
      image: "/icons/photoshop.svg",
      color: "text-[#31A8FF]"
    },
    {
      name: "AfterEffects",
      image: "/icons/after-effects.svg",
      color: "text-[#D299FF]"
    }
  ];
  const webTechs = [
    {
      name: "html5",
      image: "/icons/html5.svg",
      color: "text-[#E34F26]"
    },
    {
      name: "css",
      image: "/icons/css.svg",
      color: "text-[#1572B6]"
    },
    {
      name: "tailwindcss",
      image: "/icons/tailwindcss.svg",
      color: "text-[#38B2AC]"
    },
    {
      name: "Astro",
      image: "/icons/astro.svg",
      color: "text-white"
    },
    {
      name: "cPanel",
      image: "/icons/cPanel.svg",
      color: "text-[#FF6C2C]"
    },
    {
      name: "wordpress",
      image: "/icons/wordpress.svg",
      color: "text-[#21759B]"
    },
    {
      name: "Elementor",
      image: "/icons/elementor.svg",
      color: "text-[#92003B]"
    },
    {
      name: "Moodle",
      image: "/icons/moodle.svg",
      color: "text-[#F98012]"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="max-w-7xl mx-auto px-6 py-20"> <h2 class="text-white text-3xl md:text-5xl lg:text-5xl font-bold text-center mb-10">
Tecnologias
</h2> <!-- Diseño Section --> <h3 class="text-white text-2xl font-bold text-center mb-8">Diseño</h3> <div class="flex flex-wrap justify-center gap-6 mb-16"> ${designTechs.map((tech) => renderTemplate`<div class="bg-[#131a22]/80 border border-white/5 rounded-2xl p-6 w-32 md:w-40 flex flex-col items-center gap-4 hover:border-primary-400/30 transition-all duration-300 group hover:scale-105"> <img${addAttribute(tech.image, "src")}${addAttribute(tech.name, "alt")} class="w-12 h-12 md:w-16 md:h-16 transition-transform duration-300 group-hover:scale-110"> <span class="text-gray-400 text-sm font-medium">${tech.name}</span> </div>`)} </div> <!-- Web Section --> <h3 class="text-white text-2xl font-bold text-center mb-8">Web</h3> <div class="flex flex-wrap justify-center gap-6"> ${webTechs.map((tech) => renderTemplate`<div class="bg-[#131a22]/80 border border-white/5 rounded-2xl p-6 w-32 md:w-40 flex flex-col items-center gap-4 hover:border-primary-400/30 transition-all duration-300 group hover:scale-105"> <img${addAttribute(tech.image, "src")}${addAttribute(tech.name, "alt")} class="w-12 h-12 md:w-16 md:h-16 transition-transform duration-300 group-hover:scale-110"> <span class="text-gray-400 text-sm font-medium">${tech.name}</span> </div>`)} </div> </section>`;
}, "D:/Web/nilspineda2026/src/components/Technologies.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const cardsHome = [
    {
      title: "Sobre Mi",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-user"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" /><path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" /></svg>',
      link: "/sobremi"
    },
    {
      title: "Portafolio",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-briefcase"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 9a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2l0 -9" /><path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" /><path d="M12 12l0 .01" /><path d="M3 13a20 20 0 0 0 18 0" /></svg>',
      link: "/portafolio"
    },
    {
      title: "Servicios",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-layout-dashboard"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 4h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1" /><path d="M5 16h4a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1" /><path d="M15 12h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1" /><path d="M15 4h4a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1" /></svg>',
      link: "#servicios"
    },
    {
      title: "Blog",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-news"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M16 6h3a1 1 0 0 1 1 1v11a2 2 0 0 1 -4 0v-13a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1v12a3 3 0 0 0 3 3h11" /><path d="M8 8l4 0" /><path d="M8 12l4 0" /><path d="M8 16l4 0" /></svg>',
      link: "/blog"
    },
    {
      title: "Contacto",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-phone"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" /></svg>',
      link: "/contacto"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Inicio | Nils Pineda - Dise\xF1o Web y Soluciones Digitales", "description": "Transformamos ideas en experiencias digitales que conectan con tu audiencia. Con dise\xF1o y desarrollo a tu medida, somos tu aliado digital.", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="w-full flex flex-col lg:flex-row justify-center items-center px-8 lg:px-0 lg:py-16" data-astro-cid-j7pv25f6> <div class="w-full lg:w-1/2 flex flex-col items-center lg:items-center gap-6 text-center lg:text-center" data-astro-cid-j7pv25f6> <a href="./" rel="noopener noreferrer" data-astro-cid-j7pv25f6><img src="../logo.svg" alt="logo Nils Pineda" class="w-48 lg:w-92" data-astro-cid-j7pv25f6></a> <span class="bg-primary-400/20 px-4 py-2 rounded-2xl text-primary-400 border border-primary-400/50 text-sm md:text-base animacion-botones" data-astro-cid-j7pv25f6> <a rel="noopener noreferrer" data-astro-cid-j7pv25f6><div class="flex items-center gap-2" data-astro-cid-j7pv25f6> <span class="relative flex h-3 w-3" data-astro-cid-j7pv25f6> <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75" data-astro-cid-j7pv25f6></span> <span class="relative inline-flex rounded-full h-3 w-3 bg-primary-500 animate-radio-live" data-astro-cid-j7pv25f6></span> </span> <span class="text-white text-sm font-medium" data-astro-cid-j7pv25f6>Disponible para nuevos proyectos</span> </div></a> </span> <h1 class="text-white text-4xl md:text-6xl lg:text-7xl mt-4 font-medium" data-astro-cid-j7pv25f6>
Diseño y desarrollo que acercan
<span class="text-primary-400 font-bold block lg:inline" data-astro-cid-j7pv25f6>tu marca a las personas</span> </h1> <p class="text-gray-400 text-base md:text-lg" data-astro-cid-j7pv25f6>
Transformamos ideas en experiencias digitales que conectan con tu
        audiencia. Con diseño y desarrollo a tu medida, damos vida a tu marca.
</p> <div class="flex flex-col sm:flex-row gap-4 w-full justify-center lg:justify-center mt-4" data-astro-cid-j7pv25f6> <a href="https://wa.me/573167195500?text=Hola,%20vengo%20desde%20el%20sitio%20web%20y%20quiero%20cotizar%20uno%20de%20tus%20servicios" target="_blank" rel="noopener noreferrer" class="bg-primary-400 text-white px-8 py-3 rounded-xl font-bold hover:bg-primary-500 transition-all text-center animacion-botones flex items-center justify-center gap-2" data-astro-cid-j7pv25f6>
Hablemos
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler-brand-whatsapp" data-astro-cid-j7pv25f6> <path stroke="none" d="M0 0h24v24H0z" fill="none" data-astro-cid-j7pv25f6></path><path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" data-astro-cid-j7pv25f6></path><path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" data-astro-cid-j7pv25f6></path> </svg> </a> <a href="/portafolio" class="border border-white/20 text-white px-8 py-3 rounded-xl hover:bg-white/10 transition-all text-center animacion-botones" data-astro-cid-j7pv25f6>
Ver portafolio
</a> </div> </div> </section> <section class="flex justify-center items-center px-6 py-12 lg:px-40 lg:py-24" data-astro-cid-j7pv25f6> <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 w-full max-w-7xl" data-astro-cid-j7pv25f6> ${cardsHome.map((card) => renderTemplate`<a${addAttribute(card.link, "href")} class="group flex flex-col animacion-botones" data-astro-cid-j7pv25f6> <div class="h-full p-8 border border-white/10 rounded-3xl bg-white/0.02 hover:bg-white/0.05 hover:border-primary-400/50 transition-all duration-500 flex flex-col items-center text-center backdrop-blur-sm" data-astro-cid-j7pv25f6> <div class="relative mb-6" data-astro-cid-j7pv25f6> <div class="absolute inset-0 bg-primary-400/20 blur-xl rounded-full group-hover:bg-primary-400/40 transition-colors" data-astro-cid-j7pv25f6></div> <div class="relative text-primary-400 w-12 h-12 [&>svg]:w-full [&>svg]:h-full transition-transform duration-500 group-hover:scale-110" data-astro-cid-j7pv25f6>${unescapeHTML(card.icon)}</div> </div> <h3 class="text-white text-xl font-bold tracking-tight leading-tight" data-astro-cid-j7pv25f6> ${card.title} </h3> <span class="hidden md:block mt-4 text-primary-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm" data-astro-cid-j7pv25f6>
Ver más →
</span> </div> </a>`)} </div> </section> ${renderComponent($$result2, "Services", $$Services, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Technologies", $$Technologies, { "data-astro-cid-j7pv25f6": true })} ` })} `;
}, "D:/Web/nilspineda2026/src/pages/index.astro", void 0);

const $$file = "D:/Web/nilspineda2026/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
