import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'
import qwikdev from '@qwikdev/astro'

import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
  site: 'https://qwidditch.github.io',
  base: 'qwidditch',
  integrations: [
    starlight({
      title: 'Qwidditch',
      social: {
        github: 'https://github.com/qwidditch',
      },
      sidebar: [
        {
          label: 'Getting started',
          autogenerate: {
            directory: 'getting-started',
          },
        },
        {
          label: 'Components',
          autogenerate: {
            directory: 'components',
          },
        },
        { label: 'Roadmap', autogenerate: { directory: 'roadmap' } },
        { label: 'Changelog', link: '/changelog' },
      ],
    }),
    qwikdev(),
    tailwind(),
  ],
})
