import { c as createComponent, m as maybeRenderHead, e as renderScript, a as renderTemplate, b as createAstro, d as addAttribute, i as renderHead, r as renderComponent, j as renderSlot } from './astro/server_CSf9IKit.mjs';
import 'piccolore';
/* empty css                          */
import { $ as $$BotonesFlotantes, a as $$Footer } from './BotonesFlotantes_BEoR_CVg.mjs';
import 'clsx';
/* empty css                          */

const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="flex justify-between items-center p-4 lg:px-40"> <a href="/"><img src="../logo.svg" alt="logo Nils Pineda" class="w-32 md:w-48"></a> <nav> <ul class="hidden md:flex gap-8 text-white font-medium"> <li> <a href="/" class="hover:text-primary-400 transition-colors">Inicio</a> </li> <li> <a href="/sobremi" class="hover:text-primary-400 transition-colors">Sobre Mi</a> </li> <li> <a href="/portafolio" class="hover:text-primary-400 transition-colors">Portafolio</a> </li> <li> <a href="/blog" class="hover:text-primary-400 transition-colors">Blog</a> </li> <li> <a href="/contacto" class="hover:text-primary-400 transition-colors">Contacto</a> </li> </ul> <button class="md:hidden text-white p-2" id="menu-button"> <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path> </svg> </button> </nav> </div> ${renderScript($$result, "D:/Web/nilspineda2026/src/components/Navbar.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/Web/nilspineda2026/src/components/Navbar.astro", void 0);

const $$Astro = createAstro("https://nilspineda2026.vercel.app/");
const $$LayoutNav = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LayoutNav;
  const {
    title = "Nils Pineda | Dise\xF1o Web Profesional y Soluciones Digitales",
    description = "Transformamos ideas en experiencias digitales que conectan con tu audiencia. Con dise\xF1o y desarrollo a tu medida, damos vida a tu marca.",
    image = "/logonils.jpg"
  } = Astro2.props;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  return renderTemplate`<html lang="es" data-astro-cid-qlz3gco7> <head><!-- Primary Meta Tags --><title>${title}</title><meta name="title"${addAttribute(title, "content")}><meta name="description"${addAttribute(description, "content")}><link rel="canonical"${addAttribute(canonicalURL, "href")}><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"${addAttribute(Astro2.url, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(new URL(image, Astro2.url), "content")}><!-- X (Twitter) --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(Astro2.url, "content")}><meta property="twitter:title"${addAttribute(title, "content")}><meta property="twitter:description"${addAttribute(description, "content")}><meta property="twitter:image"${addAttribute(new URL(image, Astro2.url), "content")}><!-- Meta Tags Generated with https://metatags.io --><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/jpg" href="/favicon.jpg">${renderHead()}</head> <body class="min-h-screen bg-fixed bg-[radial-gradient(125%_125%_at_50%_10%,#131a22_60%,#2ab092_150%)]" data-astro-cid-qlz3gco7> ${renderComponent($$result, "Navbar", $$Navbar, { "data-astro-cid-qlz3gco7": true })} ${renderComponent($$result, "BotonesFlotantes", $$BotonesFlotantes, { "data-astro-cid-qlz3gco7": true })} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-qlz3gco7": true })} </body></html>`;
}, "D:/Web/nilspineda2026/src/layouts/Layout-nav.astro", void 0);

export { $$LayoutNav as $ };
