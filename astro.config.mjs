import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'
import qwikdev from '@qwikdev/astro'

import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Qwidditch',
      social: {
        github: 'https://github.com/qwidditch',
      },
      sidebar: [
        {
          label: 'Start Here',
          autogenerate: {
            directory: 'start-here',
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
