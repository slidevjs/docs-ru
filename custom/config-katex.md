# Конфигурация KaTeX

<Environment type="node" />

Создайте `./setup/katex.ts` со следующим содержанием:

```ts
import { defineKatexSetup } from '@slidev/types'

export default defineKatexSetup(() => {
  return {
    /* ... */
  }
})
```

С помощью этой записи вы можете указать пользовательские настройки для [параметров KaTex](https://katex.org/docs/options.html). Посмотрите определения типов и их документацию для получения более подробной информации.
