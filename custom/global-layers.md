# Глобальные слои

<<<<<<< HEAD
> Доступно с версии v0.17

Глобальные слои позволяют иметь кастомные компоненты, **постоянно** доступные в слайдах. Это может быть полезно для футера, анимации смены слайдов, глобальных эффектов и т.д.

Slidev предоставляет два слоя для этого: создайте `global-top.vue` или `global-bottom.vue` в корне вашего проекта, и он будет загружен автоматически.

Связь слоёв:

- Глобальный Top (`global-top.vue`)
- Слайды
- Глобальный Bottom (`global-bottom.vue`)
=======
Global layers allow you to have custom components that **persist** across slides. This could be useful for having footers, cross-slide animations, global effects, etc.

Slidev provides three layers for this usage, create `global-top.vue`, `global-bottom.vue` or `custom-nav-controls.vue` under your project root and it will pick up automatically.

There are also layers for **each** slide: `layouts/slide-top.vue` and `layouts/slide-bottom.vue`. The usage is similar to the global layers, but they are applied to every slide, so there may be more than one instance of them.

::: tip
When exporting, the `--per-slide` option should be used to ensure the global layers are applied to each slide correctly.
:::

## Layers relationship

At z-axis, from top to bottom:

- NavControls
  - Customized Navigation Controls (`custom-nav-controls.vue`)
- Global Top (`global-top.vue`) - single instance
- Slide Top (`slide-top.vue`) - instance per slide
- Slide Content
- Slide Bottom (`slide-bottom.vue`) - instance per slide
- Global Bottom (`global-bottom.vue`) - single instance
>>>>>>> 21fdadc17cd2018f65c637e5727de640db5036e3

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
  <button class="icon-btn" title="Next" @click="$nav.next">
    <carbon:arrow-right />
  </button>
</template>
```

The button `Next` will appear in NavControls.

To enable it conditionally, you can apply it with the [Vue Global Context](/custom/vue-context).
>>>>>>> 21fdadc17cd2018f65c637e5727de640db5036e3

```html
<!-- футер будет скрыт на четвёртой странице -->
<template>
  <footer
    v-if="$nav.currentPage !== 4"
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
    v-if="$nav.currentLayout !== 'cover'"
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
    v-if="$nav.currentLayout !== 'cover'"
    class="absolute bottom-0 left-0 right-0 p-2"
  >
    {{ $nav.currentPage }} / {{ $nav.total }}
  </footer>
</template>
```

```html
<!-- custom-nav-controls -->
<!-- hide the button in Presenter model -->
<template>
  <button v-if="!$nav.isPresenter" class="icon-btn" title="Next" @click="$nav.next">
    <carbon:arrow-right />
  </button>
</template>
```
