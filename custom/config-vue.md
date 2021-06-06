# Конфигурация Vue

<Environment type="client" />

Slidev использует [Vue 3](https://v3.vuejs.org/) для рендеринга приложения на стороне клиента. Вы можете расширить приложение, добавив собственные плагины или конфигурации.

Создайте `./setup/main.ts` со следующим содержанием:

```ts
import { defineAppSetup } from '@slidev/types'

export default defineAppSetup(({ app, router }) => {
  // Vue App
  app.use(YourPlugin)
})
```

Его также можно использовать в качестве главного входа в ваше приложение Slidev для выполнения некоторых инициализаций перед запуском приложения.

Подробнее: [API Vue приложений](https://v3.vuejs.org/api/application-api.html#component).
