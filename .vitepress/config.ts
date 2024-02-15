import type { DefaultTheme } from 'vitepress'
import { defineConfig } from 'vitepress'
import { transformerTwoslash } from '@shikijs/vitepress-twoslash'

const CURRENT_VERSION = '0.48.0-beta.2'

const Guide: DefaultTheme.NavItemWithLink[] = [
  {
    text: 'Почему Slidev',
    link: '/guide/why',
  },
  {
    text: 'Руководство',
    link: '/guide/',
  },
  {
    text: 'Установка',
    link: '/guide/install',
  },
  {
    text: 'Markdown синтаксис',
    link: '/guide/syntax',
  },
  {
    text: 'Навигация',
    link: '/guide/navigation',
  },
  {
    text: 'Анимация',
    link: '/guide/animations',
  },
  {
    text: 'Экспорт',
    link: '/guide/exporting',
  },
  {
<<<<<<< HEAD
    text: 'Запись презентации',
=======
    text: 'Static Hosting',
    link: '/guide/hosting',
  },
  {
    text: 'Record Presentation',
>>>>>>> ee7ae42035591cb6565a72f5217129c670a59b0c
    link: '/guide/recording',
  },
  {
    text: 'Режим докладчика',
    link: '/guide/presenter-mode',
  },
  {
<<<<<<< HEAD:.vitepress/config.js
<<<<<<< HEAD
    text: 'Интеграции редакторов',
=======
    text: 'Drawing & Annonations',
=======
    text: 'Drawing & Annotations',
>>>>>>> 5bb36b886ae9009e4661ee060cce1d86954d7280:.vitepress/config.ts
    link: '/guide/drawing',
  },
  {
    text: 'Editor Integrations',
>>>>>>> ee7ae42035591cb6565a72f5217129c670a59b0c
    link: '/guide/editors',
  },
  {
    text: 'FAQ',
    link: '/guide/faq',
  },
]

const BuiltIn: DefaultTheme.NavItemWithLink[] = [
  {
    text: 'Components',
    link: '/builtin/components',
  },
  {
    text: 'Layouts',
    link: '/builtin/layouts',
  },
]

const Theme: (DefaultTheme.NavItemWithLink | DefaultTheme.NavItemChildren)[] = [
  {
    text: 'Использование тем',
    link: '/themes/use',
  },
  {
    text: 'Галерея тем',
    link: '/themes/gallery',
  },
  {
    text: 'Создание темы',
    link: '/themes/write-a-theme',
  },
]

const Addon: DefaultTheme.NavItemWithLink[] = [
  {
<<<<<<< HEAD:.vitepress/config.js
    text: 'Русский',
  },
  {
    text: 'English',
    link: 'https://sli.dev{{pathname}}',
  },
  {
    text: '简体中文',
    link: 'https://cn.sli.dev{{pathname}}',
  },
  {
    text: 'Français',
    link: 'https://fr.sli.dev{{pathname}}',
  },
  {
    text: 'Español',
    link: 'https://es.sli.dev{{pathname}}',
  },
  {
    text: 'Việt Nam',
    link: 'https://vn.sli.dev{{pathname}}',
  },
  {
    text: 'Deutsch',
    link: 'https://de.sli.dev{{pathname}}',
  },
  {
    text: 'Português (BR)',
    link: 'https://br.sli.dev{{pathname}}',
  },
  {
    text: 'Ελληνικά',
    link: 'https://el.sli.dev{{pathname}}',
=======
    text: 'Use Addon',
    link: '/addons/use',
  },
  {
    text: 'Write an Addon',
    link: '/addons/write-an-addon',
>>>>>>> 5bb36b886ae9009e4661ee060cce1d86954d7280:.vitepress/config.ts
  },
]

const Customizations: (DefaultTheme.NavItemWithLink | DefaultTheme.NavItemChildren)[] = [
  {
    text: 'Кастомизация',
    link: '/custom/',
  },
  {
    text: 'Структура каталогов',
    link: '/custom/directory-structure',
  },
  {
    text: 'Шрифты',
    link: '/custom/fonts',
  },
  {
    text: 'Подсветка',
    link: '/custom/highlighters',
  },
  {
    text: 'Конфигурация Vue',
    link: '/custom/config-vue',
  },
  {
    text: 'Конфигурация Vite',
    link: '/custom/config-vite',
  },
  {
<<<<<<< HEAD:.vitepress/config.js
    text: 'Конфигурация Windi CSS',
    link: '/custom/config-windicss',
=======
    text: 'Configure UnoCSS',
    link: '/custom/config-unocss',
>>>>>>> 5bb36b886ae9009e4661ee060cce1d86954d7280:.vitepress/config.ts
  },
  {
    text: 'Конфигурация Monaco',
    link: '/custom/config-monaco',
  },
  {
    text: 'Конфигурация KaTeX',
    link: '/custom/config-katex',
  },
  {
    text: 'Конфигурация Mermaid',
    link: '/custom/config-mermaid',
  },
  {
<<<<<<< HEAD:.vitepress/config.js
    text: 'Конфигурация горячих клавиш',
=======
    text: 'Configure Parser',
    link: '/custom/config-parser',
  },
  {
    text: 'Configure Shortcuts',
>>>>>>> 5bb36b886ae9009e4661ee060cce1d86954d7280:.vitepress/config.ts
    link: '/custom/config-shortcuts',
  },
  {
    text: 'Глобальный контекст Vue',
    link: '/custom/vue-context',
  },
  {
    text: 'Глобальные слои',
    link: '/custom/global-layers',
  },
]

const Resources: DefaultTheme.NavItemWithLink[] = [
  {
    text: 'Примеры',
    link: '/showcases',
  },
  {
    text: 'Образовательные ресурсы',
    link: '/resources/learning',
  },
  {
    text: 'Модерируемые обложки',
    link: '/resources/covers',
  },
]

const slidebars: DefaultTheme.SidebarItem[] = [
  {
<<<<<<< HEAD:.vitepress/config.js
    text: 'Руководство',
    children: Guide,
  },
  {
    text: 'Темы',
    children: Theme,
  },
  {
    text: 'Кастомизация',
    children: Customizations,
  },
  {
    text: 'Встроенное',
    children: [
      {
        text: 'Компоненты',
        link: '/builtin/components',
      },
      {
        text: 'Шаблоны',
        link: '/builtin/layouts',
      },
    ],
=======
    text: 'Guide',
    items: Guide,
  },
  {
    text: 'Themes',
    items: Theme,
  },
  {
    text: 'Addons',
    items: Addon,
  },
  {
    text: 'Customizations',
    items: Customizations,
  },
  {
    text: 'Built-in',
    items: BuiltIn,
>>>>>>> 5bb36b886ae9009e4661ee060cce1d86954d7280:.vitepress/config.ts
  },
]

export default defineConfig({
  title: 'Slidev',
  description: 'Presentation slides for developers',
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    ['meta', { name: 'author', content: 'Anthony Fu' }],
    ['meta', { property: 'og:title', content: 'Slidev' }],
    ['meta', { property: 'og:image', content: 'https://sli.dev/og-image.png' }],
    ['meta', { property: 'og:description', content: 'Presentation slides for developers' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:creator', content: '@slidevjs' }],
    ['meta', { name: 'twitter:image', content: 'https://sli.dev/og-image.png' }],
    ['link', { rel: 'dns-prefetch', href: 'https://fonts.gstatic.com' }],
    ['link', { rel: 'preconnect', crossorigin: 'anonymous', href: 'https://fonts.gstatic.com' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@200;400;500&family=Inter:wght@200;400;500;600', rel: 'stylesheet' }],
  ],
  markdown: {
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark',
    },
    async shikiSetup(shiki) {
      await shiki.loadLanguage(
        'html',
        'xml',
        'vue',
        'markdown',
      )
    },
    codeTransformers: [
      transformerTwoslash(),
    ],
  },
  cleanUrls: true,
  themeConfig: {
<<<<<<< HEAD:.vitepress/config.js
    repo: 'slidevjs/docs-ru',
    logo: '/logo.svg',
    docsBranch: 'main',
    editLinks: true,
    editLinkText: 'Редактировать страницу',

    algolia: {
      apiKey: '1a5c5a504139c58f428974c78c55291d',
      indexName: 'slidev',
      searchParameters: {
        // for translations maintainers: change the filter to your locale code (subdomain name)
        facetFilters: ['language:ru']
      }
=======
    logo: '/logo.svg',
    editLink: {
      pattern: 'https://github.com/slidevjs/docs/edit/main/:path',
      text: 'Suggest changes to this page',
    },

    search: {
      provider: 'local',
>>>>>>> 5bb36b886ae9009e4661ee060cce1d86954d7280:.vitepress/config.ts
    },

    nav: [
      {
        text: 'Руководство',
        items: Guide,
      },
      {
<<<<<<< HEAD:.vitepress/config.js
        text: 'Темы',
        items: Theme,
      },
      {
        text: 'Кастомизация',
        items: Customizations,
=======
        text: 'Theme',
        items: [
          ...Theme,
          {
            text: 'Built-in',
            items: BuiltIn,
          },
        ],
      },
      {
        text: 'Customize',
        items: [
          ...Customizations,
          {
            text: 'Addon',
            items: Addon,
          },
        ],
>>>>>>> 5bb36b886ae9009e4661ee060cce1d86954d7280:.vitepress/config.ts
      },
      {
        text: 'Ресурсы',
        items: Resources,
      },
      {
<<<<<<< HEAD:.vitepress/config.js
        text: 'Русский',
        items: Translations,
=======
        text: `v${CURRENT_VERSION}`,
        items: [
          { text: 'Release Notes', link: 'https://github.com/slidevjs/slidev/releases' },
        ],
>>>>>>> 5bb36b886ae9009e4661ee060cce1d86954d7280:.vitepress/config.ts
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/slidevjs/slidev' },
      { icon: 'twitter', link: 'https://twitter.com/slidevjs' },
      { icon: 'discord', link: 'https://chat.sli.dev' },
    ],

    sidebar: {
      '/guide/': slidebars,
      '/themes/': slidebars,
      '/addons/': slidebars,
      '/custom/': slidebars,
      '/builtin/': slidebars,
      '/resources/': slidebars,
      '/': slidebars,
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2020 Anthony Fu.',
    },
  },

  locales: {
    root: {
      label: 'English',
    },
    zh: {
      label: '简体中文',
      link: 'https://cn.sli.dev/',
    },
    fr: {
      label: 'Français',
      link: 'https://fr.sli.dev/',
    },
    es: {
      label: 'Español',
      link: 'https://es.sli.dev/',
    },
    ru: {
      label: 'Русский',
      link: 'https://ru.sli.dev/',
    },
    vn: {
      label: 'Việt Nam',
      link: 'https://vn.sli.dev/',
    },
    de: {
      label: 'Deutsch',
      link: 'https://de.sli.dev/',
    },
    br: {
      label: 'Português (BR)',
      link: 'https://br.sli.dev/',
    },
    el: {
      label: 'Ελληνικά',
      link: 'https://el.sli.dev/',
    },
    ja: {
      label: '日本語',
      link: 'https://ja.sli.dev/',
    },
  },
})
