# Подсветка

<<<<<<< HEAD
Slidev поставляется с двумя подсветками синтаксиса на выбор:
=======
Slidev comes with two syntax highlighters for you to choose from:
>>>>>>> e8054222645741a1f15a6138c2b0b6a091fb43a1

- [Prism](https://prismjs.com/)
- [Shiki](https://github.com/shikijs/shiki)

**Prism** - один из самых популярных инструментов подсветки синтаксиса. Подсветка выполняется путём добавления токенов в виде классов и стилизации их через CSS. Вы можете просмотреть [официальные темы](https://github.com/PrismJS/prism-themes) или очень легко создать/настроить их самостоятельно, используя [`prism-theme-vars`](https://github.com/antfu/prism-theme-vars).

<<<<<<< HEAD
**Shiki**, с другой стороны, представляет собой средство выделения синтаксиса на основе грамматики TextMate. Он генерирует цветовые токены, поэтому дополнительный CSS не требуется. Поскольку он имеет отличную поддержку грамматики, сгенерированные цвета очень точны, как, например, в VS Code. Shiki также поставляется с [набором встроенных тем](https://github.com/shikijs/shiki/blob/master/docs/themes.md). Обратной стороной Shiki является то, что для выделения также требуются темы TextMate (совместимые с темой VS Code), что может быть немного сложнее настроить.
=======
**Shiki** is a TextMate grammar-powered syntax highlighter. It generates colored tokens, so there is no additional CSS needed. Since it has great grammar support, the generated colors are very accurate, just like what you will see in VS Code. Shiki also comes with [a bunch of built-in themes](https://shiki.style/themes). In Slidev, we also provided the [TwoSlash](#twoslash-integration) support is also built-in.
>>>>>>> e8054222645741a1f15a6138c2b0b6a091fb43a1

Темы Slidev обычно поддерживают как Prism, так и Shiki, но в зависимости от темы, которую вы используете, он может поддерживать только одну из них.

Когда у вас есть выбор, компромисс заключается в следующем:

<<<<<<< HEAD
- **Prism** – для лёгкой кастомизации
- **Shiki** – для более аккуратной подсветки

По умолчанию Slidev использует Prism. Вы можете изменить его в frontmatter:
=======
- **Prism** for easier customization
- **Shiki** for accurate highlighting

Slidev uses Shiki by default since v0.47. You can switch to it by adding the following to your `slides.md`:
>>>>>>> e8054222645741a1f15a6138c2b0b6a091fb43a1

```yaml
---
highlighter: Prism
---
```

<<<<<<< HEAD
## Конфигурация Prism

Чтобы настроить Prism, вы можете просто импортировать css тему или использовать [`prism-theme-vars`](https://github.com/antfu/prism-theme-vars) для настройки тем как для светлого, так и для тёмного режима. Обратитесь к документации Prism для получения более подробной информации.

## Конфигурация Shiki
=======
## Configure Shiki
>>>>>>> e8054222645741a1f15a6138c2b0b6a091fb43a1

<Environment type="node" />

Создайте файл `./setup/shiki.ts` со следующим содержанием:

```ts
/* ./setup/shiki.ts */
import { defineShikiSetup } from '@slidev/types'

export default defineShikiSetup(() => {
  return {
    themes: {
      dark: 'min-dark',
      light: 'min-light',
    },
    transformers: [
      // ...
    ]
  }
})
```

<<<<<<< HEAD
Доступные имена тем можно посмотреть в [документации Shiki](https://github.com/shikijs/shiki/blob/master/docs/themes.md#all-themes).

Или, если вы хотите использовать свою собственную тему:
=======
Refer to [Shiki's docs](https://shiki.style) for available theme names.

## Configure Prism
>>>>>>> e8054222645741a1f15a6138c2b0b6a091fb43a1

To configure your Prism, you can just import the theme CSS or use [`prism-theme-vars`](https://github.com/antfu/prism-theme-vars) to configure themes for both light and dark mode. Refer to its docs for more details.
