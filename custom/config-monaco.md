# Конфигурация Monaco

<Environment type="client" />

> По умолчанию Monaco включен только в режиме разработки. Чтобы он работал на сборке SPA, добавьте `monaco: true` в ваши frontmatter конфиги.

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

По умолчанию Monaco будет работать ТОЛЬКО в `dev` режиме. Если вы также хотите, чтобы он был доступен в экспортированном SPA, вы можете настроить его в своем frontmatter:

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

В приведенном выше примере убедитесь, что `vue` и `@vueuse/core` установлены локально как dependencies / devDependencies, Slidev сделает все остальное, и ваш редактор будет работать!
