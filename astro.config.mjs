// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  site: "https://nilspineda2026.com",
  output: "server",
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [sitemap()],
  adapter: vercel(),
});
