# Глобальные слои

> Доступно с версии v0.17

Глобальные слои позволяют иметь кастомные компоненты, **постоянно** доступные в слайдах. Это может быть полезно для футера, анимации смены слайдов, глобальных эффектов и т.д.

Slidev предоставляет два слоя для этого: создайте `global-top.vue` или `global-bottom.vue` в корне вашего проекта, и он будет загружен автоматически.

Связь слоев:

- Глобальный Top (`global-top.vue`)
- Слайды
- Глобальный Bottom (`global-bottom.vue`)

## Примеры

```html
<!-- global-top.vue -->
<template>
  <footer class="absolute bottom-0 left-0 right-0 p-2">Ваше имя</footer>
</template>
```

Текст `Ваше имя` будет отображаться на всех ваших слайдах.

Чтобы использовать при определенных условиях, вы можете применить его с помощью [глобального контекста Vue](/custom/vue-context).

```html
<!-- футер будет скрыт на четвертой странице -->
<template>
  <footer
    v-if="$slidev.nav.currentPage !== 4"
    class="absolute bottom-0 left-0 right-0 p-2"
  >
    Ваше имя
  </footer>
</template>
```

```html
<!-- футер будет скрыт на "обложке" шаблона -->
<template>
  <footer
    v-if="$slidev.nav.currentLayout !== 'cover'"
    class="absolute bottom-0 left-0 right-0 p-2"
  >
    Ваше имя
  </footer>
</template>
```

```html
<!-- пример футера для отображения страниц -->
<template>
  <footer
    v-if="$slidev.nav.currentLayout !== 'cover'"
    class="absolute bottom-0 left-0 right-0 p-2"
  >
    {{ $slidev.nav.currentPage }} / {{ $slidev.nav.total }}
  </footer>
</template>
```
