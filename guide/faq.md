# FAQ

## Сетки

Поскольку Slidev использует в своей работе интернет, вы можете использовать любые макеты сетки по своему усмотрению. [CSS Grids](https://css-tricks.com/snippets/css/complete-guide-grid/), [flexboxes](https://css-tricks.com/snippets/css/a-guide-to-flexbox/), или даже [Masonry](https://css-tricks.com/native-css-masonry-layout-in-css-grid/).

<<<<<<< HEAD
Поскольку у нас есть встроенный [Windi CSS](https://windicss.org/), вот один из простых способов использовать его:
=======
Since we have [UnoCSS](https://unocss.dev/) built-in, here is one simple way for you to reference:
>>>>>>> e83fcdcee0f661e3799f934529a0048122d0806d

```html
<div class="grid grid-cols-2 gap-4">
<div>

Первая колонка

</div>
<div>

Вторая колонка

</div>
</div>
```

Пойдём дальше, вы можете настроить размер каждого столбца, например:

```html
<div class="grid grid-cols-[200px_1fr_10%] gap-4">
<div>

Первая колонка (200px)

</div>
<div>

Вторая колонка (auto fit)

</div>
<div>

Третья колонка (10% ширины от родительского контейнера)

</div>
</div>
```

<<<<<<< HEAD
Подробнее о [Windi CSS сетках](https://windicss.org/utilities/grid.html).
=======
Learn more about [Windi CSS Grids](https://windicss.org/utilities/layout/grid.html).
>>>>>>> e83fcdcee0f661e3799f934529a0048122d0806d

## Позиционирование

Слайды имеют фиксированный размер (по умолчанию `980x552px`) и масштабируются в соответствии с экраном пользователя. Вы можете безопасно использовать абсолютное позиционирование на своих слайдах, поскольку они будут масштабироваться вместе с экраном.

Например:

```html
<div class="absolute left-30px bottom-30px">
This is a left-bottom aligned footer
</div>
```

Чтобы изменить фактический размер холста, вы можете передать параметры `canvasWidth` в вашем первом frontmatter:

```yaml
---
canvasWidth: 800
---
```

## Размер шрифта

Если вам кажется, что размер шрифта на слайдах слишком мал, вы можете изменить его несколькими способами:

### Замена локальных стилей

Вы можете переопределить стили для каждого слайда с помощью встроенного тега `<style>`.

```md
# Страница 1

<style>
h1 {
  font-size: 10em;
}
</style>

---

# Страница 2

Этот слайд не будет затронут.
```

Подробнее: [Встроенные стили](/guide/syntax.html#встроенные-стиnи)

### Замена глобальных стилей

Вы можете указать собственные глобальные стили, например, создав `./style.css`

```css
/* style.css */ 

h1 {
  font-size: 10em !important;
}
```

Подробнее: [Глобальные стили](/custom/directory-structure.html#стиnи)

### Масштабирование Canvas

Изменение фактического размера canvas приведёт к масштабированию слайдов и всего вашего содержимого (текста, изображений, компонентов и т.д.).

```yaml
---
# default: 980
# поскольку canvas становится меньше, визуальный размер станет больше
canvasWidth: 800
---
```

### Использование трансформации

Мы предоставляем встроенный компонент `<Transform />`, который представляет из себя обёртку над CSS свойством трансформации.

```md
<Transform :scale="1.4">

- Пункт 1
- Пункт 2

</Transform>
```
