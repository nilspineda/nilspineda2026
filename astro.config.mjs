import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/serverless"; // o hybrid si usas static + server

export default defineConfig({
  output: "server", // o 'hybrid' si quieres páginas estáticas + rutas dinámicas
  adapter: vercel({
    // Opcional pero recomendado
    webAnalytics: { enabled: true },
    // Si usas edge functions (más rápido)
    // edgeMiddleware: true,
  }),
  // ... resto de tu config
});
