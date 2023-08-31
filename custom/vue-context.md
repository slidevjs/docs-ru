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

### `$slidev.nav`

Реактивный объект, содержащий свойства и элементы управления для навигации по слайдам. Например:

```js
$slidev.nav.next() // переход к следующему шагу

$slidev.nav.nextSlide() // переход к следующему слайду (пропуская v-clicks)

$slidev.nav.go(10) // переход к слайду #10
```

```js
$slidev.nav.currentPage // номер текущего слайда

$slidev.nav.currentLayout // текущий id шаблона

$slidev.nav.clicks // текущее количество кликов
```

Дополнительные доступные свойства смотрите в экспортах файла [nav.ts](https://github.com/slidevjs/slidev/blob/main/packages/client/logic/nav.ts).

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

### `$clicks`

> Available since v0.43.0

A shorthand of `$slidev.nav.clicks`.

```html
<div v-if="$clicks > 3">Content</div>
```
