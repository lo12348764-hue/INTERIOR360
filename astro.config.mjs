import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import path from "node:path";

const extraFsAllow = [
  process.cwd(),
  process.env.INTERIOR360_SOURCE_DIR,
  process.env.INTERIOR360_RUN_DIR,
  process.env.INTERIOR360_VITE_ALLOW,
].filter(Boolean);

export default defineConfig({
  site: "https://interior360.example",
  integrations: [sitemap()],
  server: {
    host: true,
  },
  vite: {
    server: {
      fs: {
        allow: extraFsAllow.map((entry) => path.resolve(entry)),
      },
      watch: {
        ignored: [
          "**/.snapshots/**",
          "**/*.log",
          "**/.astro-dev-*.log",
          "**/.r-dev-*.log",
        ],
      },
    },
  },
});
