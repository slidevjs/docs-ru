# Конфигурация горячих клавиш

> Доступно с версии v0.20

> Since v0.35.6 (excluded), you decide which base shortcuts to keep (see `...base,` below).

<Environment type="client" />

<<<<<<< HEAD
Создайте `./setup/shortcuts.ts` со следующим содержанием:
=======
## Getting started

Create `./setup/shortcuts.ts` with the following content:
>>>>>>> e52d01f8924fc2746acb41ca2510db795a7b0c4a

```ts
import type { NavOperations, ShortcutOptions } from '@slidev/types'
import { defineShortcutsSetup } from '@slidev/types'

export default defineShortcutsSetup((nav: NavOperations, base: ShortcutOptions[]) => {
  return [
    ...base, // keep the existing shortcuts
    {
      key: 'enter',
      fn: () => nav.next(),
      autoRepeat: true,
    },
    {
      key: 'backspace',
      fn: () => nav.prev(),
      autoRepeat: true,
    },
  ]
})
```

С помощью этой настройки вы можете задать кастомные горячие клавиши, упомянутые в [Навигации](/guide/navigation#панеnь-навигации). Приведённая выше конфигурация привязывает переход на следующую анимацию или слайд к <kbd>enter</kbd> и переход на предыдущую анимацию или слайд к <kbd>backspace</kbd>.

Функция получает объект с некоторыми методами навигации и возвращает массив, содержащий некоторую конфигурацию горячих клавиш. Посмотрите определения типов для получения более подробной информации.

<<<<<<< HEAD
Подробнее о событиях нажатия клавиш в [useMagicKeys | VueUse](https://vueuse.org/core/useMagicKeys/).
=======
## Advanced key binding

The `key` type only allows for strings, but you can still bind multiple keys by using following convention:

```ts
import type { NavOperations, ShortcutOptions } from '@slidev/types'
import { defineShortcutsSetup } from '@slidev/types'

export default defineShortcutsSetup((nav: NavOperations, base: ShortcutOptions[]) => {
  return [
    ...base,
    {
      key: 'ShiftLeft+ArrowRight',
      fn: () => nav.next(),
      autoRepeat: true,
    }
  ]
})
```

## Advanced navigation features

The `nav` navigation operations allows you to access some functionalities than basic _next slide_ or _previous slide_. See the following for use-cases:

```ts
import { NavOperations, defineShortcutsSetup } from '@slidev/types'

export default defineShortcutsSetup((nav: NavOperations) => {
  return [
    {
      key: 'e',

      // Set the `e` keyboard shortcut to be used as a bookmark
      // or quick-access of sorts, to navigate specifically to
      // slide number 42
      fn: () => nav.go(42),
      autoRepeat: true,
    }
  ]
})
```

Refer to [useMagicKeys | VueUse](https://vueuse.org/core/useMagicKeys/) for more details about key pressed event.
>>>>>>> e52d01f8924fc2746acb41ca2510db795a7b0c4a
