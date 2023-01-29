# Конфигурация Vite

<Environment type="node" />

<<<<<<< HEAD
Под капотом Slidev работает на [Vite](http://vitejs.dev/). Это означает, что вы можете использовать отличную систему плагинов Vite, чтобы ещё больше настраивать свои слайды.
=======
Slidev is powered by [Vite](https://vitejs.dev/) under the hood. This means you can leverage Vite's great plugin system to customize your slides even further.
>>>>>>> 2e53e8c41664c5aa920ca84e738e95c8a05fb349

Создайте `vite.config.ts`, если хотите настроить Vite.

В Slidev предварительно настроены следующие плагины:

- [@vitejs/plugin-vue](https://github.com/vitejs/vite/tree/main/packages/plugin-vue)
- [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components)
- [unplugin-icons](https://github.com/antfu/unplugin-icons)
- [vite-plugin-vue-markdown](https://github.com/antfu/vite-plugin-vue-markdown)
- [vite-plugin-remote-assets](https://github.com/antfu/vite-plugin-remote-assets)
- [vite-plugin-windicss](https://github.com/windicss/vite-plugin-windicss)
- [unocss/vite](https://github.com/unocss/unocss/tree/main/packages/vite)

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

См. дополнительные параметры в [объявлении типов](https://github.com/slidevjs/slidev/blob/main/packages/slidev/node/options.ts#L50).
