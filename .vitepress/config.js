// @ts-check

const Guide = [
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
<<<<<<< HEAD
<<<<<<< HEAD
    text: 'Интеграции редакторов',
=======
    text: 'Drawing & Annonations',
=======
    text: 'Drawing & Annotations',
>>>>>>> a89202a9190ecc9fbbd155cbeed518e8424e54e3
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

const Theme = [
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

const Addon = [
  {
    text: 'Use Addon',
    link: '/addons/use',
  },
  {
    text: 'Write an Addon',
    link: '/addons/write-an-addon',
  },
]

const Translations = [
  {
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
  },
  {
    text: '日本語',
    link: 'https://ja.sli.dev{{pathname}}',
  },
]

const Customizations = [
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
    text: 'Конфигурация Windi CSS',
    link: '/custom/config-windicss',
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
<<<<<<< HEAD
    text: 'Конфигурация горячих клавиш',
=======
    text: 'Configure Parser',
    link: '/custom/config-parser',
  },
  {
    text: 'Configure Shortcuts',
>>>>>>> a89202a9190ecc9fbbd155cbeed518e8424e54e3
    link: '/custom/config-shortcuts',
  },
  {
    text: 'Глобальный контекст Vue',
    link: '/custom/vue-context',
  },
  {
    text: 'Глобальные слои',
    link: '/custom/global-layers',
  }
]

const Resources = [
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

const slidebars = [
  {
    text: 'Руководство',
    children: Guide,
  },
  {
    text: 'Темы',
    children: Theme,
  },
  {
<<<<<<< HEAD
    text: 'Кастомизация',
=======
    text: 'Addons',
    children: Addon,
  },
  {
    text: 'Customizations',
>>>>>>> a89202a9190ecc9fbbd155cbeed518e8424e54e3
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
  },
]

/**
 * @type {import('vitepress').UserConfig}
 */
module.exports = {
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
  themeConfig: {
    repo: 'slidevjs/docs-ru',
    logo: '/logo.svg',
    docsBranch: 'main',
    editLinks: true,
    editLinkText: 'Редактировать страницу',

    algolia: {
      appId: 'LCBV6MIFS6',
      apiKey: '1ff173fe73b20edc962c1c24c0b1c160',
      indexName: 'slidev',
      searchParameters: {
        // for translations maintainers: change the filter to your locale code (subdomain name)
        facetFilters: ['language:ru']
      }
    },

    nav: [
      {
        text: 'Руководство',
        items: Guide,
      },
      {
        text: 'Темы',
        items: Theme,
      },
      {
<<<<<<< HEAD
        text: 'Кастомизация',
=======
        text: 'Addon',
        items: Addon,
      },
      {
        text: 'Customize',
>>>>>>> a89202a9190ecc9fbbd155cbeed518e8424e54e3
        items: Customizations,
      },
      {
        text: 'Ресурсы',
        items: Resources,
      },
      {
        text: 'Русский',
        items: Translations,
      },
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
  },
}
