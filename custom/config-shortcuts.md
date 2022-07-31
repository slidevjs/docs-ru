# Конфигурация горячих клавиш

> Доступно с версии v0.20

<Environment type="client" />

Создайте `./setup/shortcuts.ts` со следующим содержанием:

```ts
import { defineShortcutsSetup, NavOperations } from '@slidev/types'

export default defineShortcutsSetup((nav: NavOperations) => {
  return [
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
import { defineShortcutsSetup, NavOperations } from '@slidev/types'

export default defineShortcutsSetup((nav: NavOperations) => {
  return [
    {
      key: 'ShiftLeft+ArrowRight',
      fn: () => nav.next(),
      autoRepeat: true,
    }
  ]
})
```

Refer to [useMagicKeys | VueUse](https://vueuse.org/core/useMagicKeys/) for more details about key pressed event.
>>>>>>> e385300710ea3ef7a726c926b1933fd80d40744e
