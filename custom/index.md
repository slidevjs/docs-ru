# Кастомизация

Slidev полностью кастомизируем, начиная от стилей, заканчивая инструментами конфигурации. Это позволяет вам сконфигурировать инструменты под ([Vite](/custom/config-vite), [Windi CSS](/custom/config-windicss), [Monaco](/custom/config-monaco), и т.д.)

## Frontmatter Configures

Вы можете настроить Slidev в frontmatter блоке вашего первого слайда, ниже показаны значения по умолчанию для каждого параметра.

```yaml
---
# id темы или название пакета
theme: 'default'
<<<<<<< HEAD
# заголовок слайда, если не указан, то будет автоматически подставлен из первого найденного заголовка
title: ''
# шаблон заголовка для веб-страницы, `%s` будет заменен заголовком страницы
=======
# title of your slide, will auto infer from the first header if not specified
title: 'Slidev'
# titleTemplate for the webpage, `%s` will be replaced by the page's title
>>>>>>> 37797ff651c1914f542e82bc6a10f8450281fad5
titleTemplate: '%s - Slidev'
# information for your slides, can be a markdown string
info: false

<<<<<<< HEAD
# загрузка pdf в SPA сборке, также может содержать кастомный URL
download: true
# подсветка синтаксиса, может быть 'prism' или 'shiki'
=======
# enabled pdf downloading in SPA build, can also be a custom url
download: false
# filename of the export file
exportFilename: 'slidev-exported.pdf'
# syntax highlighter, can be 'prism' or 'shiki'
>>>>>>> 37797ff651c1914f542e82bc6a10f8450281fad5
highlighter: 'prism'
# отображение номеров строк в блоках кода
lineNumbers: false
<<<<<<< HEAD
# включение Monaco редактора, по умолчанию только в дев режиме
=======
# enable monaco editor, can be boolean, 'dev' or 'build'
>>>>>>> 37797ff651c1914f542e82bc6a10f8450281fad5
monaco: 'dev'
# download remote assets in local using vite-plugin-remote-assets, can be boolean, 'dev' or 'build'
remoteAssets: false
# controls whether texts in slides are selectable
selectable: true
# enable slide recording, can be boolean, 'dev' or 'build'
record: 'dev'

<<<<<<< HEAD
# цветовая схема для слайдов, может быть 'auto', 'light', или 'dark'
colorSchema: 'auto'
# режим роутера для vue-router, может быть 'history' или 'hash'
=======
# force color schema for the slides, can be 'auto', 'light', or 'dark'
colorSchema: 'auto'
# router mode for vue-router, can be "history" or "hash"
>>>>>>> 37797ff651c1914f542e82bc6a10f8450281fad5
routerMode: 'history'
# соотношение сторон слайдов
aspectRatio: '16/9'
# реальная ширина canvas, единица измерения в пикселях
canvasWidth: 980
# used for theme customization, will inject root styles as `--slidev-theme-x` for attribute `x`
themeConfig:
  primary: '#5d8392'

<<<<<<< HEAD
# шрифты будут автоматически импортированы из Google fonts
# Подробнее: https://sli.dev/custom/fonts
=======
# favicon, can be a local file path or URL
favicon: 'https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png'
# URL of PlantUML server used to render diagrams
plantUmlServer: 'https://www.plantuml.com/plantuml'
# fonts will be auto imported from Google fonts
# Learn more: https://sli.dev/custom/fonts
>>>>>>> 37797ff651c1914f542e82bc6a10f8450281fad5
fonts:
  sans: 'Roboto'
  serif: 'Roboto Slab'
  mono: 'Fira Code'

# дефолтные настройки frontmatter для всех слайдов
defaults:
  layout: 'default'
  # ...

<<<<<<< HEAD
# информация для слайдов, может быть markdown-строкой
info: |
  ## Slidev
  My first [Slidev](http://sli.dev/) presentations!
=======
# drawing options
# Learn more: https://sli.dev/guide/drawing.html
drawings:
  enabled: true
  persist: false
  presenterOnly: false
  syncAll: true
>>>>>>> 37797ff651c1914f542e82bc6a10f8450281fad5
---
```

Подробнее в [определении типов](https://github.com/slidevjs/slidev/blob/main/packages/types/src/types.ts#L29).

## Структура каталогов

Slidev использует структуру каталогов для минимальной и поверхностной конфигурации, и делает расширения гибкими и интуитивными в функциональности.

Подробнее в [Структура каталогов](/custom/directory-structure).

## Конфигурация инструментов

- [Highlighters](/custom/highlighters)
- [Configure Vue](/custom/config-vue)
- [Configure Vite](/custom/config-vite)
- [Configure Windi CSS](/custom/config-windicss)
- [Configure Monaco](/custom/config-monaco)
- [Configure KaTeX](/custom/config-katex)
- [Configure Mermaid](/custom/config-mermaid)
