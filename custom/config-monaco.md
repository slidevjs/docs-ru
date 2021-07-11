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