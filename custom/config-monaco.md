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

~~~js
//```js
const count = ref(1)
const plusOne = computed(() => count.value + 1)

console.log(plusOne.value) // 2

plusOne.value++ // error
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
```

## Автоматическая установка типов

Когда вы используете TypeScript с Monaco, типы для зависимостей будут автоматически установлены на клиентской стороне.

~~~ts
//```ts {monaco}
import { ref } from 'vue'
import { useMouse } from '@vueuse/core'

const counter = ref(0)
//```
~~~

В приведённом выше примере убедитесь, что `vue` и `@vueuse/core` установлены локально как dependencies / devDependencies, Slidev сделает все остальное, чтобы типы для редактора работали автоматически!

## Конфигурация тем

Тема контролируется Slidev на основе светлой/темной темы. Если вы хотите настроить ее, вы можете передать идентификатор темы в функцию настройки:

```ts
// ./setup/monaco.ts
import { defineMonacoSetup } from '@slidev/types'

export default defineMonacoSetup(() => {
  return {
    theme: {
      dark: 'vs-dark',
      light: 'vs',
    },
  }
})
```

Если вы хотите загрузить собственные темы:

```ts
import { defineMonacoSetup } from '@slidev/types'

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
