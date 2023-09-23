# Глобальный контекст Vue

Slidev внедряет `$slidev` в [глобальный контекст Vue](https://v3.vuejs.org/api/application-config.html#globalproperties) для расширенных условий или элементов управления навигацией.

## Использование

Вы можете получить доступ к нему в любом месте markdown-файла или шаблона Vue, используя ["Mustache" синтаксис](https://v3.vuejs.org/guide/template-syntax.html#interpolations).

```md
<!-- slides.md -->

# Страница 1

Текущая страница: {{ $slidev.nav.currentPage }}
```

```html
<!-- Foo.vue -->

<template>
  <div>Заголовок: {{ $slidev.configs.title }}</div>
  <button @click="$slidev.nav.next">Следующая страница</button>
</template>
```

## Параметры

### `$clicks`

`$clicks` hold a number of clicks on the current slide. Can be used conditionally to show different content on clicks.

```html
<div v-if="$clicks > 3">Content</div>
```

### `$page`

`$page` holds the number of the current page, 1-indexed.

```md
Page: {{ $page }}

Is current page active: {{ $page === $slidev.nav.currentPage }}
```

### `$renderContext`

`$renderContext` holds the current render context, can be `slide`, `overview`, `presenter` or `previewNext`

```md
<div v-if="$renderContext === 'slide'">
  This content will only be rendered in slides view
</div>
```

### `$slidev.nav`

Реактивный объект, содержащий свойства и элементы управления для навигации по слайдам. Например:

```js
$slidev.nav.next() // переход к следующему шагу

$slidev.nav.nextSlide() // переход к следующему слайду (пропуская v-clicks)

$slidev.nav.go(10) // переход к слайду #10
```

```js
$slidev.nav.currentPage // номер текущего слайда

<<<<<<< HEAD
$slidev.nav.currentLayout // текущий id шаблона

$slidev.nav.clicks // текущее количество кликов
=======
$slidev.nav.currentLayout // current layout id
>>>>>>> 0c897047096b0c05c5b5d3c2a8c99912c5a33056
```

Дополнительные доступные свойства смотрите в экспортах файла [nav.ts](https://github.com/slidevjs/slidev/blob/main/packages/client/logic/nav.ts).

> Note: `$slidev.nav.clicks` is a global state while `$clicks` is local to each slide. It's recommended to **use `$clicks` over `$slidev.nav.clicks`** to avoid clicks changed been triggered on page transitions.

### `$slidev.configs`

Реактивный объект, содержащий обработанные [настройки из первого frontmatter](/custom/#frontmatter-configures) вашего `slides.md`. Например

```yaml
---
title: Мой первый Slidev!
---
```

```
{{ $slidev.configs.title }} // 'Мой первый Slidev!'
```

### `$slidev.themeConfigs`

Реактивный объект, содержащий обработанные настройки темы.

```yaml
---
title: Мой первыйSlidev!
themeConfig:
  primary: #213435
---
```

```
{{ $slidev.themeConfigs.primary }} // '#213435'
```

### `$nav`

> Available since v0.43.0

A shorthand of `$slidev.nav`.
