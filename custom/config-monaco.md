# Конфигурация Monaco

<Environment type="client" />

<<<<<<< HEAD
> По умолчанию Monaco включён только в режиме разработки. Чтобы он работал на сборке SPA, добавьте `monaco: true` в ваши frontmatter конфиги.

Создайте `./setup/monaco.ts` со следующим содержанием:
=======
Create `./setup/monaco.ts` with the following content:
>>>>>>> fcc2f07502ee5a4c2865a8717b4ecd4bfafa05c8

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

<<<<<<< HEAD
По умолчанию Monaco будет работать ТОЛЬКО в `dev` режиме. Если вы также хотите, чтобы он был доступен в экспортированном SPA, вы можете настроить его в своём frontmatter:
=======
By default, Monaco will ONLY work on `dev` mode. If you would like to have it available in the exported SPA, configure it in your frontmatter:
>>>>>>> fcc2f07502ee5a4c2865a8717b4ecd4bfafa05c8

```yaml
---
monaco: true # по умолчанию "dev"
---
```

## Автоматическая установка типов

<<<<<<< HEAD
Когда вы используете TypeScript с Monaco, типы для зависимостей будут автоматически установлены на клиентской стороне.
=======
When use TypeScript with Monaco, types for dependencies will be installed to the client-side automatically.
>>>>>>> fcc2f07502ee5a4c2865a8717b4ecd4bfafa05c8

~~~ts
//```ts {monaco}
import { ref } from 'vue'
import { useMouse } from '@vueuse/core'

const counter = ref(0)
//```
~~~

<<<<<<< HEAD
В приведённом выше примере убедитесь, что `vue` и `@vueuse/core` установлены локально как dependencies / devDependencies, Slidev сделает всё остальное, и ваш редактор будет работать!
=======
In the example above, make sure `vue` and `@vueuse/core` are installed locally as dependencies / devDependencies, Slidev will handle the rest to get the types working for the editor automatically!
>>>>>>> fcc2f07502ee5a4c2865a8717b4ecd4bfafa05c8
