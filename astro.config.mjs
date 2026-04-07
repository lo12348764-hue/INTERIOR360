import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://interior360.example",
  integrations: [sitemap()],
  server: {
    host: true,
  },
});
