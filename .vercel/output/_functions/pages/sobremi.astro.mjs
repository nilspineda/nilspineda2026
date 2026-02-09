import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_CSf9IKit.mjs';
import 'piccolore';
import { $ as $$LayoutNav } from '../chunks/Layout-nav_wb8Kx18L.mjs';
export { renderers } from '../renderers.mjs';

const $$Sobremi = createComponent(($$result, $$props, $$slots) => {
  const titlePage = "Sobre Mi";
  const experiencia = [
    {
      titulo: "Implementador MID Web",
      empresa: "Orbidi SAS",
      ubicacion: "Cali, CO | Remoto",
      fecha: "2025 - Marzo 2026",
      descripcion: "Desarrollo y mantenimiento integral de sitios web para clientes, implementando dise\xF1os responsive basados en Figma y optimizando rendimiento y experiencia de usuario para garantizar soluciones digitales efectivas. Administraci\xF3n de servidores WHM y cPanel, con gesti\xF3n de configuraciones y despliegues seguros. An\xE1lisis de requerimientos t\xE9cnicos y funcionales, transformando necesidades en proyectos claros y escalables que fortalecen la identidad de marca y mejoran la interacci\xF3n con el usuario.",
      link: "https://orbidi.com/"
    },
    {
      titulo: "Implementador Web",
      empresa: "Webbo",
      ubicacion: "Bogota, CO | Remoto",
      fecha: "2023",
      descripcion: "Responsable del desarrollo y mantenimiento de sitios web para diversos clientes, asegurando soluciones digitales estables y de alto rendimiento. Implementaci\xF3n de dise\xF1os responsive a partir de Figma, optimizando la experiencia de usuario en m\xFAltiples dispositivos. Administraci\xF3n de servidores WHM y cPanel, con gesti\xF3n eficiente de configuraciones y despliegues seguros. An\xE1lisis detallado de requerimientos t\xE9cnicos y funcionales, convirtiendo necesidades en proyectos escalables que fortalecen la identidad de marca y mejoran la interacci\xF3n digital",
      link: "https://webbo.com.co/"
    },
    {
      titulo: "Product designer",
      empresa: "Netdata Networks",
      ubicacion: "Bogota, CO | Remoto",
      fecha: "2023 - 2025",
      descripcion: "Encargado del dise\xF1o y la implementaci\xF3n de soluciones visuales estrat\xE9gicas, incluyendo animaci\xF3n, edici\xF3n de videos y gesti\xF3n de identidad de marca. Responsable de garantizar la coherencia visual y la experiencia de usuario en proyectos digitales, actuando como guardi\xE1n de la marca y asegurando que cada pieza creativa fortaleciera la comunicaci\xF3n y el posicionamiento de la empresa.",
      link: "https://netdatanetworks.com/"
    },
    {
      titulo: "Dise\xF1ador Gr\xE1fico",
      empresa: "Webketing | RevOps",
      ubicacion: "Santiago, CHL | Remoto",
      fecha: "2022-2023",
      descripcion: "Dise\xF1ador responsable de la creaci\xF3n e implementaci\xF3n de soluciones visuales estrat\xE9gicas para m\xFAltiples clientes, abarcando animaci\xF3n, edici\xF3n de videos y gesti\xF3n integral de identidad de marca. Garantiz\xF3 la coherencia visual y la optimizaci\xF3n de la experiencia de usuario en proyectos digitales, desempe\xF1\xE1ndose como guardi\xE1n de la marca y asegurando que cada pieza creativa potenciara la comunicaci\xF3n y el posicionamiento de las empresas atendidas.",
      link: "https://www.revopslatam.com/"
    },
    {
      titulo: "Dise\xF1ador Gr\xE1fico | Implementador Web | Motion Graphic",
      empresa: "Ackagames",
      ubicacion: "Bucaramanga, CO",
      fecha: "2021 - 2022",
      descripcion: "Responsable de l dise\xF1o y desarrollo de sitios web, creaci\xF3n de animaciones y producci\xF3n de piezas gr\xE1ficas para redes sociales y campa\xF1as de marketing. Encargado de implementar soluciones visuales din\xE1micas que fortalecieron la identidad digital de la empresa y mejoraron la interacci\xF3n con su audiencia. Contribu\xED a la coherencia de la marca mediante motion graphics y contenidos multimedia que potenciaron la comunicaci\xF3n y el alcance de los proyectos.",
      link: "https://www.linkedin.com/company/ackagames/?originalSubdomain=co"
    },
    {
      titulo: "Dise\xF1ador Gr\xE1fico | Implementador Web",
      empresa: "Concepto Digital",
      ubicacion: "Bucaramanga, CO",
      fecha: "2021 - 2022",
      descripcion: "Responsable de la comunicaci\xF3n directa con clientes para levantar requerimientos y transformar sus necesidades en soluciones digitales efectivas. Encargado de la implementaci\xF3n y administraci\xF3n de servidores de la compa\xF1\xEDa, asegurando estabilidad y seguridad en los proyectos. Lider\xE9 el \xE1rea de dise\xF1o gr\xE1fico y edici\xF3n de video, garantizando coherencia visual y fortaleciendo la identidad de marca en cada pieza desarrollada",
      link: "https://conceptodigital.com.co/"
    },
    {
      titulo: "Dise\xF1ador Gr\xE1fico | Implementador Web",
      empresa: "Ganasal",
      ubicacion: "Bucaramanga, CO",
      fecha: "2014 - 2019",
      descripcion: "Responsable del desarrollo y mantenimiento de sitios web corporativos y para clientes, implementando dise\xF1os responsive y optimizando rendimiento y experiencia de usuario. Encargado de la administraci\xF3n de redes sociales y plataformas digitales, incluyendo la gesti\xF3n de una academia de aprendizaje online. Realic\xE9 grabaci\xF3n y edici\xF3n de material audiovisual para campa\xF1as internas y externas, asegurando coherencia visual y fortaleciendo la comunicaci\xF3n de la marca en m\xFAltiples canales.",
      link: "https://ganasal.com/"
    }
  ];
  return renderTemplate`${renderComponent($$result, "LayoutNav", $$LayoutNav, { "title": "Sobre M\xED | Nils Pineda - Desarrollador Web y Dise\xF1ador", "description": "Conoce m\xE1s sobre Nils Pineda, mi trayectoria, habilidades y pasi\xF3n por crear soluciones digitales impactantes." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="flex flex-col lg:flex-row justify-center items-center px-6 lg:px-40 lg:py-20"> <h1 class="text-white text-4xl md:text-6xl lg:text-7xl mt-4 font-medium text-center"> ${titlePage} </h1> </section> <section class="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10 px-6 py-12"> <div class="flex-2"> <h3 class="text-primary-400 text-5xl mb-4">¡Hola Soy Nils Pineda!</h3> <p class="text-white text-xl">
Diseñador gráfico y desarrollador web <span class="text-primary-400 text-3xl">apasionado por crear experiencias visuales atractivas y funcionales.</span> Con una sólida trayectoria en diseño y desarrollo web, mi enfoque se centra
        en la innovación, la colaboración y la superación de expectativas. Soy un
        profesional autodidacta, siempre en busca de nuevas tendencias y tecnologías
        para ofrecer soluciones creativas y de vanguardia. Mi mentalidad emprendedora
        y mi atención al detalle me permiten entregar proyectos de alta calidad que
        impulsan el éxito de mis clientes.
</p> </div> <div class="flex-1 flex justify-center"> <img src="nils.webp" class="w-96 drop-shadow-2xl rounded-lg" alt="Nils Pineda"> </div> </section> <section class="max-w-7xl mx-auto px-6 pt-10 pb-20"> <h2 class="text-white text-4xl md:text-6xl font-medium text-center mb-16">
Experiencia laboral
</h2> <div class="relative border-l-2 border-primary-400/20 ml-4 md:ml-10 space-y-12"> <!-- Item: Orbidi SAS --> <div class="relative pl-8 md:pl-12"> <!-- Dot --> <div class="absolute -left-[9px] top-0 w-8 h-8 rounded-full bg-primary-400 shadow-[0_0_10px_2px_rgba(42,176,146,0.3)]"></div> ${experiencia.map((item) => renderTemplate`<div class="flex flex-col md:flex-row gap-6 md:gap-10 items-center mb-10"> <div class="md:w-1/3"> <span class="text-primary-400 font-mono text-lg font-bold"> ${item.fecha} </span> <h3 class="text-white text-3xl font-bold mt-2"> ${item.titulo} </h3> <p class="text-gray-400 text-xl mt-1 uppercase font-bold"> <a${addAttribute(item.link, "href")} target="_blank" rel="noopener noreferrer" class="hover:text-primary-400 transition-all duration-400"> ${item.empresa} </a> </p> </div> <div class="md:w-full p-8 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-primary-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary-400/5"> <p class="text-gray-300 text-xl leading-relaxed"> ${item.descripcion} </p> </div> </div>`)} </div> </div> </section> ` })}`;
}, "D:/Web/nilspineda2026/src/pages/sobremi.astro", void 0);

const $$file = "D:/Web/nilspineda2026/src/pages/sobremi.astro";
const $$url = "/sobremi";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Sobremi,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
