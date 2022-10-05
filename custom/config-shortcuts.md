# Конфигурация горячих клавиш

> Доступно с версии v0.20

> Since v0.35.6 (excluded), you decide which base shortcuts to keep (see `...base,` below).

<Environment type="client" />

Создайте `./setup/shortcuts.ts` со следующим содержанием:

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

Refer to [useMagicKeys | VueUse](https://vueuse.org/core/useMagicKeys/) for more details about key pressed event.
>>>>>>> a9706e023e005538c02c8ba9f36d03876f65dacb
