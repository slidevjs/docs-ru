# Структура каталогов

Slidev использует некоторые соглашения о структуре каталогов, чтобы минимизировать конфигурацию и сделать расширения функциональности гибкими и интуитивно понятными.

Базовая структура выглядит следующим образом:

```bash
your-slidev/
  ├── components/       # кастомные компоненты
  ├── layouts/          # кастомные шаблоны
  ├── public/           # static assets
  ├── setup/            # кастомные настройки / хуки
  ├── styles/           # кастомные стили
  ├── index.html        # инъекции в index.html
  ├── slides.md         # описание слайдов
  └── vite.config.ts    # расширение конфигурации vite
```

Все они необязательны.

## Компоненты

Соглашения: `./components/*.{vue,js,ts,jsx,tsx,md}`

Компоненты внутри этого каталога можно напрямую использовать в Markdown слайдов с тем же именем компонента, что и имя файла.

Например:

```bash
your-slidev/
  ├── ...
  └── components/
      ├── MyComponent.vue
      └── HelloWorld.ts
```

```md
<!-- slides.md -->

# Мой слайд

<MyComponent :count="4"/>

<!-- оба названия работают -->

<hello-world foo="bar">
  Слот
</hello-world>
```

Эта функция работает благодаря [`vite-plugin-components`](https://github.com/antfu/vite-plugin-components).

Slidev также предоставляет вам некоторые [встроенные компоненты](/builtin/components).

## Шаблоны

Соглашения: `./layouts/*.{vue,js,ts,jsx,tsx}`

```
your-slidev/
  ├── ...
  └── layouts/
      ├── cover.vue
      └── my-cool-theme.vue
```

Вы можете использовать любое имя файла для своего макета. Затем вы можете указать его в шаблоне в заголовке YAML, используя имя файла.

```yaml
---
layout: my-cool-theme
---
```

Если шаблон имеет то же имя, что и встроенный шаблон или шаблон темы, то ваш шаблон будет иметь приоритет над ними. Порядок приоритетов - `local > theme > built-in`.

В компоненте шаблона используйте `<slot/>` для содержимого слайда. Например:

```html
<!-- default.vue -->
<template>
  <div class="slidev-layout default">
    <slot />
  </div>
</template>
```

## Public

Соглашения: `./public/*`

Ресурсы в этой папке будут находиться по корневому пути `/` во время разработки и копироваться в корень каталога dist как есть. Узнайте больше о [`public` каталоге Vite](https://vitejs.dev/guide/assets.html#the-public-directory).

## Стили

Соглашения: `./style.css` | `./styles/index.{css,js,ts}`

Файлы, соответствующие этому соглашению, будут внедрены в корень приложения. Если вам нужно импортировать несколько css записей, вы можете создать следующую структуру и самостоятельно управлять порядком импорта.

```bash
your-slidev/
  ├── ...
  └── styles/
      ├── index.ts
      ├── base.css
      ├── code.css
      └── layouts.css
```

```ts
// styles/index.ts

import './base.css'
import './code.css'
import './layouts.css'
```

<<<<<<< HEAD
Стили будут обрабатываться через [Windi CSS](http://windicss.org/) и [PostCSS](https://postcss.org/), поэтому вы можете использовать вложенные css стили и [at-директивы](https://windicss.org/features/directives.html) прямо из коробки. Например:
=======
Styles will be processed by [Windi CSS](https://windicss.org/) and [PostCSS](https://postcss.org/), so you can use css nesting and [at-directives](https://windicss.org/features/directives.html) out-of-box. For example:
>>>>>>> 0d7183dcb5054d1cc1d9af406b951526a92f09b6

```less
.slidev-layout {
  @apply px-14 py-10 text-[1.1rem];

  h1, h2, h3, h4, p, div {
    @apply select-none;
  }

  pre, code {
    @apply select-text;
  }

  a {
    color: theme('colors.primary');
  }
}
```

[Подробнее о синтаксисе](https://windicss.org/features/directives.html).

## `index.html`

Соглашения: `index.html`

`index.html` позволяет вставлять метатеги и/или скрипты в основной `index.html`

Например, для следующего кастомного файла `index.html`:

```html
<!-- ./index.html -->
<head>
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;600&family=Nunito+Sans:wght@200;400;600&display=swap" rel="stylesheet">
</head>

<body>
  <script src="./your-scripts"></script>
</body>
```

Финальный файл `index.html` будет выглядеть:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="icon" type="image/png" href="https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png">
  <!-- injected head -->
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;600&family=Nunito+Sans:wght@200;400;600&display=swap" rel="stylesheet">
</head>
<body>
  <div id="app"></div>
  <script type="module" src="__ENTRY__"></script>
  <!-- injected body -->
  <script src="./your-scripts"></script>
</body>
</html>
```

## Глобальные слои

Соглашения: `global-top.vue` | `global-bottom.vue`

Подробнее: [Глобальные слои](/custom/global-layers)

