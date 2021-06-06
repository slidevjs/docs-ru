# Конфигурация Mermaid

<Environment type="client" />

Создайте `./setup/mermaid.ts` со следующим содержанием:

```ts
import { defineMermaidSetup } from '@slidev/types'

export default defineMermaidSetup(() => {
  return {
    theme: 'forest',
  }
})
```

С помощью этой записи вы можете указать дефолтные настройки для [Mermaid](https://mermaid-js.github.io/). Посмотрите определения типов и их документацию для получения более подробной информации.

