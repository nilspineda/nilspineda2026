import 'piccolore';
import { p as decodeKey } from './chunks/astro/server_QXGJpzTU.mjs';
import 'clsx';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_BwOmMRn0.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///D:/Web/Website2026-nils/","cacheDir":"file:///D:/Web/Website2026-nils/node_modules/.astro/","outDir":"file:///D:/Web/Website2026-nils/dist/","srcDir":"file:///D:/Web/Website2026-nils/src/","publicDir":"file:///D:/Web/Website2026-nils/public/","buildClientDir":"file:///D:/Web/Website2026-nils/dist/client/","buildServerDir":"file:///D:/Web/Website2026-nils/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"1portafolio/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/1portafolio","isIndex":false,"type":"page","pattern":"^\\/1portafolio\\/?$","segments":[[{"content":"1portafolio","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/1portafolio.astro","pathname":"/1portafolio","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"404.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"blog/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/blog","isIndex":true,"type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/index.astro","pathname":"/blog","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"contacto/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/contacto","isIndex":false,"type":"page","pattern":"^\\/contacto\\/?$","segments":[[{"content":"contacto","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contacto.astro","pathname":"/contacto","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"servicios/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/servicios","isIndex":false,"type":"page","pattern":"^\\/servicios\\/?$","segments":[[{"content":"servicios","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/servicios.astro","pathname":"/servicios","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"sobremi/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/sobremi","isIndex":false,"type":"page","pattern":"^\\/sobremi\\/?$","segments":[[{"content":"sobremi","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/sobremi.astro","pathname":"/sobremi","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"testimonios/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/testimonios","isIndex":false,"type":"page","pattern":"^\\/testimonios\\/?$","segments":[[{"content":"testimonios","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/testimonios.astro","pathname":"/testimonios","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/send-email","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/send-email\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"send-email","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/send-email.ts","pathname":"/api/send-email","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["D:/Web/Website2026-nils/src/pages/1portafolio.astro",{"propagation":"none","containsHead":true}],["D:/Web/Website2026-nils/src/pages/blog/[slug].astro",{"propagation":"none","containsHead":true}],["D:/Web/Website2026-nils/src/pages/blog/index.astro",{"propagation":"none","containsHead":true}],["D:/Web/Website2026-nils/src/pages/contacto.astro",{"propagation":"none","containsHead":true}],["D:/Web/Website2026-nils/src/pages/servicios.astro",{"propagation":"none","containsHead":true}],["D:/Web/Website2026-nils/src/pages/sobremi.astro",{"propagation":"none","containsHead":true}],["D:/Web/Website2026-nils/src/pages/404.astro",{"propagation":"none","containsHead":true}],["D:/Web/Website2026-nils/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:src/pages/1portafolio@_@astro":"pages/1portafolio.astro.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/api/send-email@_@ts":"pages/api/send-email.astro.mjs","\u0000@astro-page:src/pages/blog/[slug]@_@astro":"pages/blog/_slug_.astro.mjs","\u0000@astro-page:src/pages/blog/index@_@astro":"pages/blog.astro.mjs","\u0000@astro-page:src/pages/contacto@_@astro":"pages/contacto.astro.mjs","\u0000@astro-page:src/pages/servicios@_@astro":"pages/servicios.astro.mjs","\u0000@astro-page:src/pages/sobremi@_@astro":"pages/sobremi.astro.mjs","\u0000@astro-page:src/pages/testimonios@_@astro":"pages/testimonios.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_Dwt1eBb5.mjs","D:/Web/Website2026-nils/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_CXMiufso.mjs","D:/Web/Website2026-nils/src/content/blog/jamez-saenz copy 2.md":"chunks/jamez-saenz copy 2_DkDZbUyB.mjs","D:/Web/Website2026-nils/src/content/blog/jamez-saenz copy 3.md":"chunks/jamez-saenz copy 3_6scEZ6xF.mjs","D:/Web/Website2026-nils/src/content/blog/jamez-saenz copy 4.md":"chunks/jamez-saenz copy 4_BlGFHGtP.mjs","D:/Web/Website2026-nils/src/content/blog/jamez-saenz copy 5.md":"chunks/jamez-saenz copy 5_ksNJIn9R.mjs","D:/Web/Website2026-nils/src/content/blog/jamez-saenz copy 6.md":"chunks/jamez-saenz copy 6_DXb-VLQD.mjs","D:/Web/Website2026-nils/src/content/blog/jamez-saenz copy 7.md":"chunks/jamez-saenz copy 7_DpGQ5_FE.mjs","D:/Web/Website2026-nils/src/content/blog/jamez-saenz copy 8.md":"chunks/jamez-saenz copy 8_DigZBGPZ.mjs","D:/Web/Website2026-nils/src/content/blog/jamez-saenz copy 9.md":"chunks/jamez-saenz copy 9_Dlt0NqN7.mjs","D:/Web/Website2026-nils/src/content/blog/jamez-saenz copy.md":"chunks/jamez-saenz copy_DYScoeyj.mjs","D:/Web/Website2026-nils/src/pages/contacto.astro?astro&type=script&index=0&lang.ts":"_astro/contacto.astro_astro_type_script_index_0_lang.CG2SgDkT.js","D:/Web/Website2026-nils/src/components/Navbar.astro?astro&type=script&index=0&lang.ts":"_astro/Navbar.astro_astro_type_script_index_0_lang.C2jlvU6V.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["D:/Web/Website2026-nils/src/pages/contacto.astro?astro&type=script&index=0&lang.ts","const t=document.getElementById(\"contact-form\"),n=document.getElementById(\"submit-btn\"),s=document.getElementById(\"btn-text\"),e=document.getElementById(\"response-status\");t?.addEventListener(\"submit\",async a=>{a.preventDefault(),n.disabled=!0,s.innerText=\"Enviando...\",e.classList.add(\"hidden\");const r=new FormData(t),o=Object.fromEntries(r);try{if((await fetch(\"/api/send-email\",{method:\"POST\",headers:{\"Content-Type\":\"application/json\"},body:JSON.stringify(o)})).ok)e.innerText=\"¡Mensaje enviado! Te escribiré pronto.\",e.className=\"text-primary-400 text-center text-sm font-medium mt-2 block animate-bounce\",t.reset();else throw new Error}catch{e.innerText=\"Error al enviar. Intenta por WhatsApp.\",e.className=\"text-red-400 text-center text-sm font-medium mt-2 block\"}finally{n.disabled=!1,s.innerText=\"Enviar mensaje\"}});"],["D:/Web/Website2026-nils/src/components/Navbar.astro?astro&type=script&index=0&lang.ts","const o=document.getElementById(\"menu-button\"),t=document.createElement(\"div\");t.classList.add(\"md:hidden\",\"w-[90%]\",\"bg-gray-800\",\"text-white\",\"p-4\",\"absolute\",\"top-26\",\"right-4\",\"rounded-lg\",\"shadow-lg\",\"hidden\");t.innerHTML=`\n        <ul class=\"flex flex-col gap-4\">\n            <li><a href=\"/\" class=\"hover:text-primary-400 transition-colors\">Inicio</a></li>\n            <li><a href=\"/portafolio\" class=\"hover:text-primary-400 transition-colors\">Portafolio</a></li>\n            <li><a href=\"/servicios\" class=\"hover:text-primary-400 transition-colors\">Servicios</a></li>\n            <li><a href=\"/contacto\" class=\"hover:text-primary-400 transition-colors\">Contacto</a></li>\n        </ul>\n    `;document.body.appendChild(t);o&&o.addEventListener(\"click\",()=>{t.classList.toggle(\"hidden\")});"]],"assets":["/_astro/dm-sans-latin-wght-normal.Xz1IZZA0.woff2","/_astro/dm-sans-latin-ext-wght-normal.BOFOeGcA.woff2","/_astro/1portafolio.C0AntdJd.css","/favicon.jpg","/jamesSaenz.png","/logo.svg","/nils.webp","/1portafolio/index.html","/404.html","/blog/index.html","/contacto/index.html","/servicios/index.html","/sobremi/index.html","/testimonios/index.html","/index.html"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"serverIslandNameMap":[],"key":"CXsmeUxhiP3ZC30jpFVFEde+WSYPdp8m//jO5Vs7+vE="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
