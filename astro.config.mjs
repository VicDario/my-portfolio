// @ts-check
import { defineConfig } from 'astro/config';

import vercel from '@astrojs/vercel';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  adapter: vercel(),
  integrations: [icon({
    include: {
      'fa6-solid': ['circle-user', 'laptop-code'],
      'fa6-brands': ['js', 'github', 'linkedin']
    }
  })]
});