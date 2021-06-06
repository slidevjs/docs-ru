# Подсветка

Slidev поставляется с двумя подсветками синтаксиса на выбор:

- [Prism](https://prismjs.com/)
- [Shiki](https://github.com/shikijs/shiki)

**Prism** - один из самых популярных инструментов подсветки синтаксиса. Подсветка выполняется путем добавления токенов в виде классов и стилизации их через CSS. Вы можете просмотреть [официальные темы](https://github.com/PrismJS/prism-themes) или очень легко создать/настроить их самостоятельно, используя [`prism-theme-vars`](https://github.com/antfu/prism-theme-vars).

**Shiki**, с другой стороны, представляет собой средство выделения синтаксиса на основе грамматики TextMate. Он генерирует цветовые токены, поэтому дополнительный CSS не требуется. Поскольку он имеет отличную поддержку грамматики, сгенерированные цвета очень точны, как, например, в VS Code. Shiki также поставляется с [набором встроенных тем](https://github.com/shikijs/shiki/blob/master/docs/themes.md). Обратной стороной Shiki является то, что для выделения также требуются темы TextMate (совместимые с темой VS Code), что может быть немного сложнее настроить.

Темы Slidev обычно поддерживают как Prism, так и Shiki, но в зависимости от темы, которую вы используете, он может поддерживать только одну из них.

Когда у вас есть выбор, компромисс заключается в следующем:

- **Prism** – для легкой кастомизации
- **Shiki** – для более аккуратной подсветки

По умолчанию Slidev использует Prism. Вы можете изменить его в frontmatter:

```yaml
---
highlighter: shiki
---
```

## Конфигурация Prism

Чтобы настроить Prism, вы можете просто импортировать css тему или использовать [`prism-theme-vars`](https://github.com/antfu/prism-theme-vars) для настройки тем как для светлого, так и для темного режима. Обратитесь к документации Prism для получения более подробной информации.

## Конфигурация Shiki

<Environment type="node" />

Создайте файл `./setup/shiki.ts` со следующим содержанием:

```ts
/* ./setup/shiki.ts */
import { defineShikiSetup } from '@slidev/types'

export default defineShikiSetup(() => {
  return {
    theme: {
      dark: 'min-dark',
      light: 'min-light',
    },
  }
})
```

Доступные имена тем можно посмотреть в [документации Shiki](https://github.com/shikijs/shiki/blob/master/docs/themes.md#all-themes).

Или, если вы хотите использовать свою собственную тему:

```ts
/* ./setup/shiki.ts */

import { defineShikiSetup } from '@slidev/types'

export default defineShikiSetup(async({ loadTheme }) => {
  return {
    theme: {
      dark: await loadTheme('path/to/theme.json')),
      light: await loadTheme('path/to/theme.json')),
    },
  }
})
```
