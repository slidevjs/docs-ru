# Анимация

## Анимация по клику

### `v-click`

Чтобы применить «анимацию по клику» для элементов, вы можете использовать директиву `v-click` или `<v-click>` компоненты

```md
# Привет

<!-- Использование компонента: этот блок не будет видно, пока вы не нажмёте "Далее" -->
<v-click>

Привет, мир!

</v-click>

<!-- Использование директивы: этот блок не будет видно, пока вы не нажмёте "Далее" второй раз -->
<div v-click class="text-xl p-2">

Хэй!

</div>
```

### `v-after`

Использование `v-after` очень похоже на `v-click`, но элемент появится только при срабатывании предыдущего `v-click`.

```md
<div v-click>Привет</div>
<div v-after>Мир</div>
```

Когда вы нажмёте кнопку «Далее», `Привет` и `Мир` появятся вместе.

### `v-click-hide`

То же, что и `v-click`, но вместо того, чтобы отображать элемент, он скроет его после клика.

```md
<div v-click-hide>Привет</div>
```

### `v-clicks`

`v-clicks` используется только как компонент. Это сокращение для директивы `v-click` ко всем её дочерним элементам. Особенно полезно при работе со списками.

```md
<v-clicks>

- Пункт 1
- Пункт 2
- Пункт 3
- Пункт 4

</v-clicks>
```

Каждый пункт будет отображаться по клику на «Далее».

<<<<<<< HEAD
### Кастомный счётчик кликов
=======
It accepts a `depth` props for nested list:

```md
<v-clicks depth="2">

- Item 1
  - Item 1.1
  - Item 1.2
- Item 2
  - Item 2.1
  - Item 2.2

</v-clicks>
```

### Custom Clicks Count
>>>>>>> e041d9f163908ef9fbd5eb7731224b8314fef92a

По умолчанию Slidev подсчитывает, сколько шагов нужно сделать, прежде чем перейти к следующему слайду. Вы можете переопределить этот параметр, передав frontmatter опцию `clicks`:

```yaml
---
# 10 кликов на этом слайде, прежде чем перейти к следующему
clicks: 10
---
```

### Порядок

Передав индекс кликов в свои директивы, вы можете настроить порядок раскрытия

```md
<div v-click>1</div>
<div v-click>2</div>
<div v-click>3</div>
```

```md
<!-- обратный порядок -->
<div v-click="3">1</div>
<div v-click="2">2</div>
<div v-click="1">3</div>
```

```md
---
clicks: 3
---

<!-- отобразится после 3 кликов -->
<v-clicks at="3">
  <div>Привет</div>
</v-clicks>
```

<<<<<<< HEAD
### Переходы элементов
=======
### Enter & Leave

> Available since v0.43.0

You can also specify the enter and leave index for the `v-click` directive by passing an array. The end index is exclusive.

```md
<div v-click="[2, 4]">This will be shown on the 2nd and 3rd clicks, and hide again after the 4th.</div>
```

### Element Transitions
>>>>>>> e041d9f163908ef9fbd5eb7731224b8314fef92a

Когда вы применяете директиву `v-click` к элементам, она добавляет к ним класс `slidev-vclick-target`. Когда элементы скрыты, будет добавлен класс `slidev-vclick-hidden`. Например:

```html
<div class="slidev-vclick-target slidev-vclick-hidden">Текст</div>
```

После клика он станет

```html
<div class="slidev-vclick-target">Текст</div>
```

По умолчанию к этим классам применяется мягкий переход прозрачности:

```css
// по умолчанию

.slidev-vclick-target {
  transition: opacity 100ms ease;
}

.slidev-vclick-hidden {
  opacity: 0;
  pointer-events: none;
}
```

Вы можете переопределить их, чтобы настроить эффекты перехода в своих стилях.

Например, вы можете добавить переход масштабирования следующим образом:

```css
// styles.css

.slidev-vclick-target {
  transition: all 500ms ease;
}

.slidev-vclick-hidden {
  transform: scale(0);
}
```

Чтобы указать анимацию только для определённого слайда или макета

```scss
.slidev-page-7,
.slidev-layout.my-custom-layout {
  .slidev-vclick-target {
    transition: all 500ms ease;
  }

  .slidev-vclick-hidden {
    transform: scale(0);
  }
}
```

Подробнее в [кастомизации стилей](/custom/directory-structure#style).

## Перемещение

Slidev имеет встроенный [@vueuse/motion](https://motion.vueuse.org/). Вы можете использовать директиву `v-motion` к любым элементам, чтобы применить к ним перемещение. Например

```html
<div
  v-motion
  :initial="{ x: -80 }"
  :enter="{ x: 0 }">
  Slidev
</div>
```

Текст `Slidev` переместится с `-80px` в исходное положение при инициализации.

> Примечание: Slidev предзагружает следующий слайд для повышения производительности, что означает, что анимация может начаться до того, как вы перейдёте на страницу. Чтобы она работала правильно, вы можете отключить предварительную загрузку для конкретного слайда.
>
> ```md
> ---
> preload: false
> ---
> ```
>
> Или управляйте жизненным циклом элемента с помощью `v-if`
>
> ```html
> <div
>   v-if="$slidev.nav.currentPage === 7"
>   v-motion
>   :initial="{ x: -80 }"
>   :enter="{ x: 0 }">
>   Slidev
> </div>
> ```

<<<<<<< HEAD
Подробнее: [Демо](https://sli.dev/demo/starter/7) | [@vueuse/motion](https://motion.vueuse.org/) | [v-motion](https://motion.vueuse.org/directive-usage.html) | [Presets](https://motion.vueuse.org/presets.html)

## Переходы страниц

> Встроенная поддержка слайдов ЕЩЁ НЕ предусмотрена в текущей версии. Мы планируем добавить их в следующей мажорной версии. Но сейчас вы всё ещё можете использовать свои собственные стили и библиотеки для этого.
=======
Learn mode: [Demo](https://sli.dev/demo/starter/7) | [@vueuse/motion](https://motion.vueuse.org/) | [v-motion](https://motion.vueuse.org/features/directive-usage) | [Presets](https://motion.vueuse.org/features/presets)

## Slide Transitions

<div id="pages-transitions" />

> Available since v0.39.0

Slidev supports slide transitions out of the box. You can enable it by setting the `transition` frontmatter option:

```md
---
transition: slide-left
---
```

This will give you a nice sliding effects on slide switching. Setting it in the frontmatter will apply to all slides. You can also set different transition per slide.

### Builtin Transitions

- `fade` - Crossfade in/out
- `fade-out` - Fade out and then fade in
- `slide-left` - Slides to the left (slide to right when going backward)
- `slide-right` - Slides to the right (slide to left when going backward)
- `slide-up` - Slides to the top (slide to bottom when going backward)
- `slide-down` - Slides to the bottom (slide to top when going backward)
- `view-transition` - Slides with the view transitions API

### View Transitions

> Available since v0.43.0

The **View Transitions API** provides a mechanism for easily creating animated transitions between different DOM states. Learn more how it works in [View Transitions API - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API).

:::warning
Experimental: This is not supported by all browsers. Check the [Browser compatibility table](https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API#browser_compatibility) carefully before using this.
:::

You can use the `view-transition-name` CSS property to name view transitions, which creates connections between different page elements and smooth transitions when switching slides.

You can enable [MDC (Markdown Component) Syntax](https://content.nuxtjs.org/guide/writing/mdc) support to conveniently name view-transitions:

```md
---
transition: view-transition
mdc: true
---
# View Transition {.inline-block.view-transition-title}
---
# View Transition {.inline-block.view-transition-title}
```

### Custom Transitions

Slidev's slide transitions are powered by [Vue Transition](https://vuejs.org/guide/built-ins/transition.html). You can provide your custom transitions by:

```md
---
transition: my-transition
---
```

and then in your custom stylesheets:

```css
.my-transition-enter-active,
.my-transition-leave-active {
  transition: opacity 0.5s ease;
}

.my-transition-enter-from,
.my-transition-leave-to {
  opacity: 0;
}
```

Learn more how it works in [Vue Transition](https://vuejs.org/guide/built-ins/transition.html).

### Forward & Backward Transitions

You can specify different transitions for forward and backward navigation using `|` as a separator in the transition name:

```md
---
transition: go-forward | go-backward
---
```

With this, when you go from slide 1 to slide 2, the `go-forward` transition will be applied. When you go from slide 2 to slide 1, the `go-backward` transition will be applied.

### Advanced Usage

The `transition` field accepts an option that will passed to the [`<TransitionGroup>`](https://vuejs.org/api/built-in-components.html#transition) component. For example:

```md
---
transition:
  name: my-transition
  enterFromClass: custom-enter-from
  enterActiveClass: custom-enter-active
---
```
>>>>>>> e041d9f163908ef9fbd5eb7731224b8314fef92a
