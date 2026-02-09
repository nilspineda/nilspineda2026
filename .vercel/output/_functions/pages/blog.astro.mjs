import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_CSf9IKit.mjs';
import 'piccolore';
import { $ as $$LayoutNav } from '../chunks/Layout-nav_wb8Kx18L.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://nilspineda2026.vercel.app/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const formatDate = (date) => new Intl.DateTimeFormat("es-ES", {
    day: "2-digit",
    month: "long",
    year: "numeric"
  }).format(new Date(date));
  const blogs = await Astro2.glob(/* #__PURE__ */ Object.assign({"../../content/blog/jamez-saenz.md": () => import('../chunks/jamez-saenz_QsEBu-9s.mjs')}), () => "../../content/blog/*.md");
  return renderTemplate`${renderComponent($$result, "LayoutNav", $$LayoutNav, { "title": "Blog | Nils Pineda - Consejos de Dise\xF1o y Desarrollo Web", "description": "Lee nuestros \xFAltimos art\xEDculos sobre dise\xF1o web, tendencias de desarrollo, SEO y marketing digital. Mantente actualizado." }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="flex flex-col lg:flex-row justify-center items-center px-6 lg:px-40 lg:py-20"> <h1 class="text-white text-4xl md:text-6xl lg:text-7xl mt-4 font-medium text-center">
Mantente al día con <br> <span class="text-primary-400 font-bold">Nuestro Blog</span> </h1> </section> <section class="px-6 lg:px-40 py-12"> <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"> ${blogs.map((blog) => renderTemplate`<a${addAttribute(`/blog/${blog.frontmatter.slug}`, "href")} class="group block rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-white/20 hover:-translate-y-1 transition-all duration-300">  <div class="h-48 w-full overflow-hidden"> <img${addAttribute(blog.frontmatter.image, "src")}${addAttribute(blog.frontmatter.title, "alt")} class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"> </div>  <div class="p-6 text-center"> <h2 class="text-white text-xl font-semibold mb-1"> ${blog.frontmatter.title} </h2> <p class="text-gray-400 text-sm mb-3"> ${formatDate(blog.frontmatter.date)} </p> <div class="flex flex-wrap justify-center gap-2 mt-3"> ${blog.frontmatter.tags?.map((tag) => renderTemplate`<span class="bg-primary-300 text-black text-xs px-3 py-1 rounded-full"> ${tag} </span>`)} </div> </div> </a>`)} </div> </section> ` })}`;
}, "D:/Web/nilspineda2026/src/pages/blog/index.astro", void 0);

const $$file = "D:/Web/nilspineda2026/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
