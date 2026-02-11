// astro.config.mjs
import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";
import tailwind from "@tailwindcss/vite";

export default defineConfig({
  output: "static",
  adapter: vercel({
    webAnalytics: { enabled: true },
    imageService: true,
  }),
  site: "https://www.nilspineda.com",
  vite: {
    plugins: [tailwind()],
  },
});
