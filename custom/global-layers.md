# Глобальные слои

> Доступно с версии v0.17

Глобальные слои позволяют иметь кастомные компоненты, **постоянно** доступные в слайдах. Это может быть полезно для футера, анимации смены слайдов, глобальных эффектов и т.д.

<<<<<<< HEAD
Slidev предоставляет два слоя для этого: создайте `global-top.vue` или `global-bottom.vue` в корне вашего проекта, и он будет загружен автоматически.
=======
Slidev provides three layers for this usage, create `global-top.vue`, `global-bottom.vue` or `custom-nav-controls.vue` under your project root and it will pick up automatically.
>>>>>>> c2931a4b1de23de51866bfc76636cc1667f323b4

Связь слоёв:

<<<<<<< HEAD
- Глобальный Top (`global-top.vue`)
- Слайды
- Глобальный Bottom (`global-bottom.vue`)
=======
- Global Top (`global-top.vue`)
- Slides
- Global Bottom (`global-bottom.vue`)
- NavControls
  - Customized Navigation Controls (`custom-nav-controls.vue`)
>>>>>>> c2931a4b1de23de51866bfc76636cc1667f323b4

## Примеры

```html
<!-- global-bottom.vue -->
<template>
  <footer class="absolute bottom-0 left-0 right-0 p-2">Ваше имя</footer>
</template>
```

Текст `Ваше имя` будет отображаться на всех ваших слайдах.

<<<<<<< HEAD
Чтобы использовать при определённых условиях, вы можете применить его с помощью [глобального контекста Vue](/custom/vue-context).
=======
```html
<!-- custom-nav-controls -->
<template>
  <button class="icon-btn" title="Next" @click="$slidev.nav.next">
    <carbon:arrow-right />
  </button>
</template>
```

The button `Next` will appear in NavControls.

To enable it conditionally, you can apply it with the [Vue Global Context](/custom/vue-context).
>>>>>>> c2931a4b1de23de51866bfc76636cc1667f323b4

```html
<!-- футер будет скрыт на четвёртой странице -->
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

```html
<!-- custom-nav-controls -->
<!-- hide the button in Presenter model -->
<template>
  <button v-if="!$slidev.nav.isPresenter" class="icon-btn" title="Next" @click="$slidev.nav.next">
    <carbon:arrow-right />
  </button>
</template>
```
