import { b as createAstro, c as createComponent, d as addAttribute, i as renderHead, r as renderComponent, j as renderSlot, a as renderTemplate } from './astro/server_CSf9IKit.mjs';
import 'piccolore';
/* empty css                          */
import { $ as $$BotonesFlotantes, a as $$Footer } from './BotonesFlotantes_BEoR_CVg.mjs';
/* empty css                         */

const $$Astro = createAstro("https://nilspineda2026.com");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title = "Nils Pineda | Dise\xF1o Web Profesional y Soluciones Digitales",
    description = "Transformamos ideas en experiencias digitales que conectan con tu audiencia. Con dise\xF1o y desarrollo a tu medida, damos vida a tu marca.",
    image = "/logonils.jpg"
  } = Astro2.props;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  return renderTemplate`<html lang="es" data-astro-cid-sckkx6r4> <head><!-- Primary Meta Tags --><title>${title}</title><meta name="title"${addAttribute(title, "content")}><meta name="description"${addAttribute(description, "content")}><link rel="canonical"${addAttribute(canonicalURL, "href")}><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"${addAttribute(Astro2.url, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(new URL(image, Astro2.url), "content")}><!-- X (Twitter) --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(Astro2.url, "content")}><meta property="twitter:title"${addAttribute(title, "content")}><meta property="twitter:description"${addAttribute(description, "content")}><meta property="twitter:image"${addAttribute(new URL(image, Astro2.url), "content")}><!-- Meta Tags Generated with https://metatags.io --><!-- Meta Tags Generated with https://metatags.io --><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/svg+xml" href="/favicon.svg">${renderHead()}</head> <body class="min-h-screen bg-fixed bg-[radial-gradient(125%_125%_at_50%_10%,#131a22_60%,#2ab092_150%)]" data-astro-cid-sckkx6r4> ${renderComponent($$result, "BotonesFlotantes", $$BotonesFlotantes, { "data-astro-cid-sckkx6r4": true })} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-sckkx6r4": true })} </body></html>`;
}, "D:/Web/nilspineda2026/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
