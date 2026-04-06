import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://archi-vis.example",
  integrations: [sitemap()],
  server: {
    host: true,
  },
});
