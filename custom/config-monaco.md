# Конфигурация Monaco

<Environment type="client" />

Создайте `./setup/monaco.ts` со следующим содержанием:

```ts
import { defineMonacoSetup } from '@slidev/types'

export default defineMonacoSetup(async (monaco) => {
  // используйте `monaco` для конфигурации
})
```

Подробнее о [конфигурации Monaco](https://github.com/Microsoft/monaco-editor).

## Использование

Чтобы использовать Monaco в своих слайдах, просто добавьте `{monaco}` в фрагменты кода:

~~~md
```js {monaco} // [!code ++]
const count = ref(1)
const plusOne = computed(() => count.value + 1)

console.log(plusOne.value) // 2

plusOne.value++ // error
<<<<<<< HEAD
//```
~~~

На

~~~js
//```js {monaco}
const count = ref(1)
const plusOne = computed(() => count.value + 1)

console.log(plusOne.value) // 2

plusOne.value++ // error
//```
~~~

## Экспорт

По умолчанию Monaco будет работать ТОЛЬКО в `dev` режиме. Если вы хотите, чтобы он был доступен в экспортированном SPA, вы можете настроить его в своём frontmatter:

```yaml
---
monaco: true # по умолчанию "dev"
---
=======
>>>>>>> 4ee072e055e04965fad621e5941c6905ef2a2be0
```
~~~

<<<<<<< HEAD
## Автоматическая установка типов
=======
## TypeScript Types
>>>>>>> 4ee072e055e04965fad621e5941c6905ef2a2be0

Когда вы используете TypeScript с Monaco, типы для зависимостей будут автоматически установлены на клиентской стороне.

~~~md
```ts {monaco}
import { ref } from 'vue'
import { useMouse } from '@vueuse/core'

const counter = ref(0)
```
~~~

<<<<<<< HEAD
В приведённом выше примере убедитесь, что `vue` и `@vueuse/core` установлены локально как dependencies / devDependencies, Slidev сделает все остальное, чтобы типы для редактора работали автоматически!
=======
In the example above, make sure `vue` and `@vueuse/core` are installed locally as dependencies / devDependencies, Slidev will handle the rest to get the types working for the editor automatically. When deploy as SPA, those types will also be bundled for static hosting.

### Additional Types

Slidev will scan all the monaco codeblocks in your slides and import the types for those used libraries for you. In case it missed some, you can explicitly specify extra packages to import the types for:

```md
---
monacoTypesAdditionalPackages:
  - lodash-es
  - foo
---
```

### Auto Type Acquisition

You can optionally switch to load types from CDN by setting the following headmatter:

```md
---
monacoTypesSource: ata
---
```

This feature is powered by [`@typescript/ata`](https://github.com/microsoft/TypeScript-Website/tree/v2/packages/ata) and runs completely on the client-side.
>>>>>>> 4ee072e055e04965fad621e5941c6905ef2a2be0

## Конфигурация тем

<<<<<<< HEAD
Тема контролируется Slidev на основе светлой/темной темы. Если вы хотите настроить ее, вы можете передать идентификатор темы в функцию настройки:
=======
Since v0.48.0, Monaco will reuse the Shiki theme you configured in [Shiki's setup file](/custom/highlighters#configure-shiki), powered by [`@shikijs/monaco`](https://shiki.style/packages/monaco). You don't need to worry about it anymore and it will have a consistent style with the rest of your code blocks.

## Configure the Editor

> Available since v0.43.0

If you would like to customize the Monaco editor you may pass an `editorOptions` object that matches the [Monaco IEditorOptions](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IEditorOptions.html) definition.

~~~md
```ts {monaco} { editorOptions: { wordWrap:'on'} }
console.log('HelloWorld')
```
~~~

Alternatively if you would like these options to be applied to every Monaco instance, you can return them in the `defineMonacoSetup` function
>>>>>>> 4ee072e055e04965fad621e5941c6905ef2a2be0

```ts
// ./setup/monaco.ts
import { defineMonacoSetup } from '@slidev/types'

export default defineMonacoSetup(() => {
  return {
    editorOptions: {
      wordWrap: 'on'
    }
  }
})
```

<<<<<<< HEAD
Если вы хотите загрузить собственные темы:
=======
## Disabling
>>>>>>> 4ee072e055e04965fad621e5941c6905ef2a2be0

Since v0.48.0, Monaco editor is enabled by default and only be bundled when you use it. If you want to disable it, you can set `monaco` to `false` in the frontmatter of your slide:

<<<<<<< HEAD
// измените на свои темы
import dark from 'theme-vitesse/themes/vitesse-dark.json'
import light from 'theme-vitesse/themes/vitesse-light.json'

export default defineMonacoSetup((monaco) => {
  monaco.editor.defineTheme('vitesse-light', light as any)
  monaco.editor.defineTheme('vitesse-dark', dark as any)

  return {
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark',
    },
  }
})
```

> Если вы создаете тему для Slidev, используйте динамический `import()` внутри функции настройки, чтобы получить лучшие результаты при tree-shaking и code-splitting.
=======
```yaml
---
monaco: false # can also be `dev` or `build` tp conditionally enable it
---
```
>>>>>>> 4ee072e055e04965fad621e5941c6905ef2a2be0
