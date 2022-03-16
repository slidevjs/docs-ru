# Кастомизация

Slidev полностью кастомизируем, начиная от стилей, заканчивая инструментами конфигурации. Это позволяет вам сконфигурировать инструменты под ([Vite](/custom/config-vite), [Windi CSS](/custom/config-windicss), [Monaco](/custom/config-monaco), и т.д.)

## Frontmatter Configures

Вы можете настроить Slidev в frontmatter блоке вашего первого слайда, ниже показаны значения по умолчанию для каждого параметра.

```yaml
---
# id темы или название пакета
theme: 'default'
# заголовок слайда, если не указан, то будет автоматически подставлен из первого найденного заголовка
title: ''
# шаблон заголовка для веб-страницы, `%s` будет заменен заголовком страницы
titleTemplate: '%s - Slidev'

# загрузка pdf в SPA сборке, также может содержать кастомный URL
download: true
# подсветка синтаксиса, может быть 'prism' или 'shiki'
highlighter: 'prism'
# отображение номеров строк в блоках кода
lineNumbers: false
# включение Monaco редактора, по умолчанию только в дев режиме
monaco: 'dev'

# цветовая схема для слайдов, может быть 'auto', 'light', или 'dark'
colorSchema: 'auto'
# режим роутера для vue-router, может быть 'history' или 'hash'
routerMode: 'history'
# соотношение сторон слайдов
aspectRatio: '16/9'
# реальная ширина canvas, единица измерения в пикселях
canvasWidth: 980

<<<<<<< HEAD
# шрифты будут автоматически импортированы из Google fonts
# Подробнее: https://sli.dev/custom/fonts
=======
# favicon, can be a local file path or URL
favicon: 'https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png'
# fonts will be auto imported from Google fonts
# Learn more: https://sli.dev/custom/fonts
>>>>>>> 1abac97d69f2a4c1bf1ea213947287922b7adba4
fonts:
  sans: 'Roboto'
  serif: 'Roboto Slab'
  mono: 'Fira Code'

# дефолтные настройки frontmatter для всех слайдов
defaults:
  layout: 'default'
  # ...

# информация для слайдов, может быть markdown-строкой
info: |
  ## Slidev
  My first [Slidev](http://sli.dev/) presentations!
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
