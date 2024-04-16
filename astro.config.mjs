import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import qwikdev from "@qwikdev/astro";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: 'My Docs',
    social: {
      github: 'https://github.com/qwidditch'
    },
    sidebar: [{
      label: 'Getting started',
      items: [
      // Each item here is one entry in the navigation menu.
      {
        label: 'Example Guide',
        link: '/guides/example/'
      }]
    }, {
      label: 'Components',
      autogenerate: {
        directory: 'reference'
      }
    }]
  }), qwikdev(), tailwind()]
});