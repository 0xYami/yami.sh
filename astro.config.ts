import { defineConfig } from "astro/config";
import prefetch from "@astrojs/prefetch";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://yami.sh",
  integrations: [prefetch(), react(), tailwind(), sitemap(), mdx()],
  markdown: {
    shikiConfig: {
      theme: "github-dark-dimmed",
    },
  },
});
