# Конфигурация Windi CSS

<Environment type="node" />

<<<<<<< HEAD
Markdown, естественно, поддерживает встроенные разметки HTML. Таким образом, вы можете стилизовать свой контент так, как захотите. Для некоторого удобства у нас есть встроенный [Windi CSS](https://github.com/windicss/windicss), так что вы можете стилизовать разметку напрямую с помощью utility-классов.
=======
::: warning
Since Slidev v0.42.0, [UnoCSS](/custom/config-unocss) become the default CSS framework for Slidev.

You can still use Windi CSS by setting `css: windicss` in the frontmatter.
```md
---
css: windicss
---
```
:::

Markdown naturally supports embedded HTML markups. You can therefore style your content the way you want.
>>>>>>> 6e0af1f2744db999dfeb58e8528478dea41a1240

Например:

```html
<div class="grid pt-4 gap-4 grid-cols-[100px,1fr]">

### Имя

- Пункт 1
- Пункт 2

</div>
```

[Режим атрибутов](https://windicss.org/posts/v30.html#attributify-mode) в [Windi CSS v3.0](https://windicss.org/posts/v30.html) включён по умолчанию.

## Конфигурации

Чтобы настроить Windi CSS и расширить встроенные конфигурации, создайте `setup/windicss.ts` со следующим содержимым

```ts
// setup/windicss.ts

import { defineWindiSetup } from '@slidev/types'

// расширение встроенных конфигураций windicss
export default defineWindiSetup(() => ({
  shortcuts: {
    // кастомный дефолтный фон
    'bg-main': 'bg-white text-[#181818] dark:(bg-[#121212] text-[#ddd])',
  },
  theme: {
    extend: {
      // здесь можно заменить шрифты, не забудьте обновить ссылки на веб-шрифты в `index.html`
      fontFamily: {
        sans: 'ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
        mono: '"Fira Code", monospace',
      },
    },
  },
}))
```

Learn more about [Windi CSS configurations](https://windicss.org/guide/configuration.html)
