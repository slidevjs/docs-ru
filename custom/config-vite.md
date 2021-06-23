# Конфигурация Vite

<Environment type="node" />

Под капотом Slidev работает на [Vite](http://vitejs.dev/). Это означает, что вы можете использовать отличную систему плагинов Vite, чтобы ещё больше настраивать свои слайды.

Создайте `vite.config.ts`, если хотите настроить Vite.

В Slidev предварительно настроены следующие плагины:

- [@vitejs/plugin-vue](https://github.com/vitejs/vite/tree/main/packages/plugin-vue)
- [vite-plugin-md](https://github.com/antfu/vite-plugin-md)
- [vite-plugin-components](https://github.com/antfu/vite-plugin-components)
- [vite-plugin-windicss](https://github.com/windicss/vite-plugin-windicss)
- [vite-plugin-icons](https://github.com/antfu/vite-plugin-icons)
- [vite-plugin-remote-assets](https://github.com/antfu/vite-plugin-remote-assets)

Узнайте больше о [предварительных настройках здесь](https://github.com/slidevjs/slidev/blob/main/packages/slidev/node/plugins/preset.ts).

## Конфигурация внутренних плагины

> Доступно с версии v0.21

Чтобы настроить список встроенных плагинов выше, создайте `vite.config.ts` со следующим содержимым. Обратите внимание, что у Slidev есть некоторые параметры предварительной настройки для этих плагинов, это использование переопределит некоторые из них, что потенциально может привести к поломке приложения. Относитесь к этому как к **расширенной функции**. Прежде чем двигаться дальше, убедитесь, что вы знаете, что делаете.

```ts
import { defineConfig } from 'vite'

export default defineConfig({
  slidev: {
    vue: {
      /* vue параметры */
    },
    markdown: {
      /* markdown-it параметры */
      markdownItSetup(md) {
        /* кастомные markdown-it плагины */
        md.use(/* ... */)
      },
    },
    /* параметры для других плагинов */
  },
})
```

<<<<<<< HEAD
См. дополнительные параметры в [объявлении типов](https://github.com/slidevjs/slidev/blob/main/packages/slidev/node/options.ts#L50).
=======
See the [type declarations](https://github.com/slidevjs/slidev/blob/main/packages/slidev/node/options.ts#L50) for more options.
>>>>>>> 661373b820986b8c869419aa33284cc0c0cfb3b1
