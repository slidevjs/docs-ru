# Подсветка

<<<<<<< HEAD
Slidev поставляется с двумя подсветками синтаксиса на выбор:
=======
Slidev comes with three syntax highlighters for you to choose from:
>>>>>>> 0ef9dde3b1b07a8fc34763e4b83520b893460024

- [Prism](https://prismjs.com/)
- [Shiki](https://github.com/shikijs/shiki)
- [Shikiji](https://github.com/antfu/shikiji)

**Prism** - один из самых популярных инструментов подсветки синтаксиса. Подсветка выполняется путём добавления токенов в виде классов и стилизации их через CSS. Вы можете просмотреть [официальные темы](https://github.com/PrismJS/prism-themes) или очень легко создать/настроить их самостоятельно, используя [`prism-theme-vars`](https://github.com/antfu/prism-theme-vars).

**Shiki**, с другой стороны, представляет собой средство выделения синтаксиса на основе грамматики TextMate. Он генерирует цветовые токены, поэтому дополнительный CSS не требуется. Поскольку он имеет отличную поддержку грамматики, сгенерированные цвета очень точны, как, например, в VS Code. Shiki также поставляется с [набором встроенных тем](https://github.com/shikijs/shiki/blob/master/docs/themes.md). Обратной стороной Shiki является то, что для выделения также требуются темы TextMate (совместимые с темой VS Code), что может быть немного сложнее настроить.

<<<<<<< HEAD
Темы Slidev обычно поддерживают как Prism, так и Shiki, но в зависимости от темы, которую вы используете, он может поддерживать только одну из них.
=======
**Shikiji** is an ESM rewrite of Shiki bringing many improvements and new features. You could have [AST-based transformers](https://github.com/antfu/shikiji#hast-transformers) to customize how the code is rendered. And the [TwoSlash](#twoslash) support is also built-in.

Slidev themes usually support both Prism and Shiki, but depending on the theme you are using, it might only support one of them.
>>>>>>> 0ef9dde3b1b07a8fc34763e4b83520b893460024

Когда у вас есть выбор, компромисс заключается в следующем:

<<<<<<< HEAD
- **Prism** – для лёгкой кастомизации
- **Shiki** – для более аккуратной подсветки

По умолчанию Slidev использует Prism. Вы можете изменить его в frontmatter:
=======
- **Prism** for easier customization
- **Shiki** for more accurate highlighting
- **Shikiji** on top of Shiki, it also enables [TwoSlash](#twoslash) support and custom transformers addons. 

Slidev uses Prism by default for compatibility. We recommend using Shikiji for more accurate and feature-rich highlighting, you can switch to it by adding the following to your `slides.md`:
>>>>>>> 0ef9dde3b1b07a8fc34763e4b83520b893460024

```yaml
---
highlighter: shikiji
---
```

<<<<<<< HEAD
## Конфигурация Prism

Чтобы настроить Prism, вы можете просто импортировать css тему или использовать [`prism-theme-vars`](https://github.com/antfu/prism-theme-vars) для настройки тем как для светлого, так и для тёмного режима. Обратитесь к документации Prism для получения более подробной информации.
=======
## TwoSlash Integration

This feature is only available when you set `highlighter` to `shikiji`.

[TwoSlash](https://www.typescriptlang.org/dev/twoslash/) is a powerful tool for rendering TypeScript code blocks with type information on hover or inlined. It's quite useful for preparing slides for JavaScript/TypeScript-related topics.

To use it, you can add `twoslash` to the code block's language identifier:

~~~md
```ts twoslash
console.log('hello')
```
~~~

An example of TwoSlash enabled code snippet [can be found here](https://antfu.me/posts/shikiji-twoslash).

## Configure Prism

To configure your Prism, you can just import the theme CSS or use [`prism-theme-vars`](https://github.com/antfu/prism-theme-vars) to configure themes for both light and dark mode. Refer to its docs for more details.
>>>>>>> 0ef9dde3b1b07a8fc34763e4b83520b893460024

## Конфигурация Shiki

<Environment type="node" />

Создайте файл `./setup/shiki.ts` со следующим содержанием:

```ts
/* ./setup/shiki.ts */
import { defineShikiSetup } from '@slidev/types'

export default defineShikiSetup(() => {
  return {
    theme: {
      dark: 'min-dark',
      light: 'min-light',
    },
  }
})
```

Доступные имена тем можно посмотреть в [документации Shiki](https://github.com/shikijs/shiki/blob/master/docs/themes.md#all-themes).

Или, если вы хотите использовать свою собственную тему:

```ts
/* ./setup/shiki.ts */

import { defineShikiSetup } from '@slidev/types'

export default defineShikiSetup(async({ loadTheme }) => {
  return {
    theme: {
      dark: await loadTheme('path/to/theme.json'),
      light: await loadTheme('path/to/theme.json'),
    },
  }
})
```

## Configure Shikiji

<Environment type="node" />

Create `./setup/shikiji.ts` file with the following content:

```ts
/* ./setup/shikiji.ts */
import { defineShikijiSetup } from '@slidev/types'

export default defineShikijiSetup(() => {
  return {
    themes: {
      dark: 'vitesse-dark',
      light: 'vitesse-light',
    },
    transformers: [
      ...
    ]
  }
})
```

Refer to [Shikiji's docs](https://github.com/antfu/shikiji) for all available options.

> It makes it easier for the community to adapt, when no `shikiji.ts` is presented, we will look for `shiki.ts` and try to convert it to Shikiji options.
