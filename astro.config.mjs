import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://elyosis.github.io",
  base: "/astro-blog",
  integrations: [mdx(), sitemap(), react()]
});