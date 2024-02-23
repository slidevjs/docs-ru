<<<<<<< HEAD
# Markdown синтаксис

Слайды описываются в **одном markdown-файле** (по умолчанию `./slides.md`).

Вы можете использовать обычный [Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet), с дополнительной поддержкой встроенного HTML и Vue-компонентов. Также поддерживается стилизация с использованием [Windi CSS](https://windicss.org). Используйте `---` с добавлением новой строки для разделения слайдов.
=======
---
outline: deep
---

# Markdown Syntax

Slides are written within **a single markdown file** (by default `./slides.md`).

You can use [the Markdown features](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) as you normally would, with the additional support of inlined HTML and Vue Components. Styling using [UnoCSS](/custom/config-unocss) is also supported. Use `---` padded with a new line to separate your slides.
>>>>>>> 1d54c861642c679ca01887a28e187047fedcbc83

~~~md
# Slidev

Привет, мир!

---

# Page 2

Использование блоков кода для подсветки

//```ts
console.log('Привет, мир!')
//```

---

# Page 3

Вы можете напрямую использовать Windi CSS и Vue-компоненты для стилизации и улучшения своих слайдов.

<div class="p-3">
  <Tweet id="20" />
</div>
~~~

<<<<<<< HEAD
## Front Matter и Шаблоны

Укажите макеты и другие метаданные для каждого слайда, преобразовав разделители в [front matter блоки](https://jekyllrb.com/docs/front-matter/). Каждый frontmatter блок начинается с тройного тире и заканчивается ими же. Тексты между ними представляют собой объекты данных в формате [YAML](https://www.cloudbees.com/blog/yaml-tutorial-everything-you-need-get-started/). Например:
=======
## Frontmatter & Layouts

Specify layouts and other metadata for each slide by converting the separators into [frontmatter blocks](https://jekyllrb.com/docs/front-matter/). Each frontmatter starts with a triple-dash and ends with another. Texts between them are data objects in [YAML](https://www.cloudbees.com/blog/yaml-tutorial-everything-you-need-get-started/) format. For example:
>>>>>>> 1d54c861642c679ca01887a28e187047fedcbc83

~~~md
---
layout: cover
---

# Slidev

Это титульная страница.

---
layout: center
background: './images/background-1.png'
class: 'text-white'
---

# Page 2

Это страница с макетом `center` и фоновым изображением.

---

# Page 3

Это дефолтная страниц без каких-либо дополнительных метаданных.
~~~

Подробная информация описана на странице [кастомизации](/custom/).

<<<<<<< HEAD
## Блоки кода
=======
> The custom syntax might not be compactible with some formatters like Prettier. To improve that, we also support using a direct `yaml` code block to define the frontmatter:
>
> ~~~markdown
> ---
> layout: cover
> ---
>
> # Slidev
>
> This is the cover page.
>
> ---
>
> ```yaml
> # The first yaml block will be treated as the frontmatter of that slide
> layout: center
> background: './images/background-1.png'
> class: 'text-white'
> ```
>
> # Page 2
>
> This is a page with the layout `center` and a background image.
> ~~~
>
> (Available since v0.44.0)

## Code Blocks
>>>>>>> 1d54c861642c679ca01887a28e187047fedcbc83

Одна из главных причин, по которой я создала Slidev – это то, что мой код должен хорошо выглядеть на слайдах. Так, как вы и ожидали, вы можете использовать блоки кода Markdown, чтобы подсветить свой код.

<<<<<<< HEAD
~~~ts
//```ts
console.log('Привет, мир!')
//```
~~~

### Подсветка строк
=======
~~~md
```ts
console.log('Hello, World!')
```
~~~

We support [Prism](https://prismjs.com), [Shiki](https://github.com/shikijs/shiki) as syntax highlighters. Refer to [the highlighters section](/custom/highlighters) for more details.
>>>>>>> 1d54c861642c679ca01887a28e187047fedcbc83

Мы поддерживаем [Prism](http://prismjs.com) и [Shiki](https://github.com/shiki/shiki) в качестве подсветки синтаксиса. Обратитесь к [разделу подсветки](/custom/highlighters) для получения более подробной информации.

<<<<<<< HEAD
Чтобы выделить определённые строки, просто добавьте номера строк в скобки `{}`. Нумерация строк начинается с 1.
=======
To highlight specific lines, simply add line numbers within bracket `{}`. Line numbers start counting from 1 by default.
>>>>>>> 1d54c861642c679ca01887a28e187047fedcbc83

~~~md
```ts {2,3}
function add(
  a: Ref<number> | number,
  b: Ref<number> | number
) {
  return computed(() => unref(a) + unref(b))
}
```
~~~

<<<<<<< HEAD
Чтобы изменить выделение в несколько шагов, вы можете использовать `|` для их разделения. Например
=======
You can enable line number to all slides by setting `lineNumbers: true` on the config or enable each code block individually by setting `lines:true`. You can also set the starting line for each code block and highlight the lines accordingly, defaults to 1:
>>>>>>> 1d54c861642c679ca01887a28e187047fedcbc83

~~~md
```ts {6,7}{lines:true, startLine:5}
function add(
  a: Ref<number> | number,
  b: Ref<number> | number
) {
  return computed(() => unref(a) + unref(b))
}
```
~~~

<<<<<<< HEAD
Сначала будет выделено `a: Ref<number> | number` и `b: Ref<number> | number`, а затем `return computed(() => unref(a) + unref(b))` после одного клика, и наконец, весь блок. Подробнее в [руководстве анимации по кликам](/guide/animations).
=======
To change the highlight in multiple clicks, you can use `|` to separate them:

~~~md
```ts {2-3|5|all}
function add(
  a: Ref<number> | number,
  b: Ref<number> | number
) {
  return computed(() => unref(a) + unref(b))
}
```
~~~

This will first highlight `a: Ref<number> | number` and `b: Ref<number> | number`, and then `return computed(() => unref(a) + unref(b))` after one click, and lastly, the whole block.

You can set the line number to `hide` to hide the code block or `none` to not highlight any line:

~~~md
```ts {hide|none}
function add(
  a: Ref<number> | number,
  b: Ref<number> | number
) {
  return computed(() => unref(a) + unref(b))
}
```
~~~

::: tip
Learn more in the [clicks animations guide](./animations#positioning).
:::

If the code doesn't fit into one slide, you use the `maxHeight` to set fixed height and enable scrolling:

~~~md
```ts {2|3|7|12}{maxHeight:'100px'}
function add(
  a: Ref<number> | number,
  b: Ref<number> | number
) {
  return computed(() => unref(a) + unref(b))
}
/// ...as many lines as you want
const c = add(1, 2)
```
~~~

### TwoSlash Integration

This feature is only available when you [set `highlighter` to `shiki`](/custom/highlighters)

[TwoSlash](https://twoslash.netlify.app/) is a powerful tool for rendering TypeScript code blocks with type information on hover or inlined. It's quite useful for preparing slides for JavaScript/TypeScript-related topics.

To use it, you can add `twoslash` to the code block's language identifier:

~~~md
```ts twoslash
import { ref } from 'vue'

const count = ref(0)
//            ^?
```
~~~

It will be rendered as:

```ts twoslash
import { ref } from 'vue'

const count = ref(0)
//            ^?
```
>>>>>>> 1d54c861642c679ca01887a28e187047fedcbc83

### Monaco редактор

Всякий раз, когда вы хотите внести какие-либо изменения в презентацию, просто добавьте `{monaco}` после указания языка подсветки - это превратит блок в полнофункциональный Monaco редактор!

<<<<<<< HEAD
~~~ts
//```ts {monaco}
console.log('ПриветМир')
//```
=======
~~~md
```ts {monaco}
console.log('HelloWorld')
```
>>>>>>> 1d54c861642c679ca01887a28e187047fedcbc83
~~~

Подробнее в [конфигурации Monaco](/custom/config-monaco).

<<<<<<< HEAD
## Встроенные стили
=======
#### Monaco Diff

Monaco can also generate a diff between two code blocks. Use `{monaco-diff}` to turn the block into a [diff Monaco editor](https://microsoft.github.io/monaco-editor/playground.html?source=v0.36.1#example-creating-the-diffeditor-multi-line-example) and use `~~~` to separate both original and modified version of the code!

````md
```ts {monaco-diff}
This line is removed on the right.
just some text
abcd
efgh
Some more text
~~~
just some text
abcz
zzzzefgh
Some more text.
This line is removed on the left.
```
````

## Embedded Styles
>>>>>>> 1d54c861642c679ca01887a28e187047fedcbc83

Вы можете использовать тег `<style>` напрямую в Markdown, чтобы переопределить стили для **текущего слайда**.

```md
# Это красный заголовок

<style>
h1 {
  color: red
}
</style>

---

# На следующем слайде стили заголовка останутся прежними
```

<<<<<<< HEAD
Тег `<style>` в Markdown всегда является [scoped](https://vue-loader.vuejs.org/guide/scoped-css.html). Чтобы изменить глобальные стили, прочтите [раздел кастомизации](/custom/directory-structure#style).

Работая с [Windi CSS](https://windicss.org), вы можете напрямую использовать вложенные CSS и [directives](https://windicss.org/features/directives.html) (например, `@apply`)
=======
`<style>` tag in Markdown is always [scoped](https://vuejs.org/api/sfc-css-features.html#scoped-css). As an outstanding result, a selector with the child combinator (`.a > .b`) is unusable as such; see the previous link. To have global style overrides, check out the [customization section](/custom/directory-structure#style).

Powered by [UnoCSS](/custom/config-unocss), you can directly use nested css and [directives](https://unocss.dev/transformers/directives) (e.g. `--uno:` or `@apply`)
>>>>>>> 1d54c861642c679ca01887a28e187047fedcbc83

```md
# Slidev

> Привет, `мир`

<style>
blockquote {
  code {
    --uno: text-teal-500 dark:text-teal-400;
  }
}
</style>
```

## Статические ресурсы

Как и в случае с markdown, вы можете вставлять изображения, использующие удаленный или локальный URL.

Для удаленных ресурсов встроенный [`vite-plugin-remote-assets`](https://github.com/antfu/vite-plugin-remote-assets) кэширует их на диск при первом запуске, поэтому позже у вас будет мгновенная загрузку даже для больших изображений.

```md
![Remote Image](https://sli.dev/favicon.png)
```

Для локальных ресурсов поместите их в [папку `public`](/custom/directory-structure.html#public) и укажите их через **ведущий слэш**.

```md
![Local Image](/pic.png)
```

<<<<<<< HEAD
Если вы хотите применить кастомные размеры или стили, вы можете вставить их через `<img>` тег 
=======
For you want to apply custom sizes or styles, you can convert them to the `<img>` tag
>>>>>>> 1d54c861642c679ca01887a28e187047fedcbc83

```html
<img src="/pic.png" class="m-40 h-40 rounded shadow" />
```

## Заметки

Вы также можете делать заметки для каждого слайда. Они будут отображаться в [Режиме презентации](/guide/presenter-mode), чтобы вы могли ссылаться на них во время презентаций.

В Markdown последний блок комментария в каждом слайде будет считаться как примечание.


~~~md
---
layout: cover
---

# Страница 1

Это титульная страница.

<!-- Это заметка -->

---

# Страница 2

<!-- Это НЕ заметка, потому что стоит перед содержанием слайда. -->

Это вторая страница

<!--
А это другая заметка
-->
~~~

## Иконки

<<<<<<< HEAD
Slidev позволяет вам получить доступ практически ко всем популярным наборам иконок с открытым исходным кодом **прямо** в вашем markdown. Работает это через [`vite-plugin-icons`](https://github.com/antfu/vite-plugin-icons) и [Iconify](https://iconify.design/).
=======
Slidev allows you to have the accessing to almost all the popular open-source iconsets **directly** in your markdown after installing the corresponding package. Powered by [`unplugin-icons`](https://github.com/antfu/unplugin-icons) and [Iconify](https://iconify.design/).
>>>>>>> 1d54c861642c679ca01887a28e187047fedcbc83

Именование следует [Iconify](https://iconify.design/) преобразованию `{collection-name}-{icon-name}`. Например:

<<<<<<< HEAD
- `<mdi-account-circle />` - <mdi-account-circle /> из [Material Design Icons](https://github.com/Templarian/MaterialDesign)
- `<carbon-badge />` - <carbon-badge /> из [Carbon](https://github.com/carbon-design-system/carbon/tree/main/packages/icons)
- `<uim-rocket />` - <uim-rocket /> из [Unicons Monochrome](https://github.com/Iconscout/unicons)
- `<twemoji-cat-with-tears-of-joy />` - <twemoji-cat-with-tears-of-joy /> из [Twemoji](https://github.com/twitter/twemoji)
- `<logos-vue />` - <logos-vue /> из [SVG Logos](https://github.com/gilbarbara/logos)
- И многое другое...
=======
- `<mdi-account-circle />` - <mdi-account-circle /> from [Material Design Icons](https://github.com/Templarian/MaterialDesign) - [`@iconify-json/mdi`](https://npmjs.com/package/@iconify-json/mdi)
- `<carbon-badge />` - <carbon-badge /> from [Carbon](https://github.com/carbon-design-system/carbon/tree/main/packages/icons) - [`@iconify-json/carbon`](https://npmjs.com/package/@iconify-json/carbon)
- `<uim-rocket />` - <uim-rocket /> from [Unicons Monochrome](https://github.com/Iconscout/unicons) - [`@iconify-json/uim`](https://npmjs.com/package/@iconify-json/uim)
- `<twemoji-cat-with-tears-of-joy />` - <twemoji-cat-with-tears-of-joy /> from [Twemoji](https://github.com/twitter/twemoji) - [`@iconify-json/twemoji`](https://npmjs.com/package/@iconify-json/twemoji)
- `<logos-vue />` - <logos-vue /> from [SVG Logos](https://github.com/gilbarbara/logos) - [`@iconify-json/logos`](https://npmjs.com/package/@iconify-json/logos)
- And much more...
>>>>>>> 1d54c861642c679ca01887a28e187047fedcbc83

Просмотрите и найдите все иконки, доступные с [Icônes](https://icones.js.org/).

### Стилизация иконок

Вы можете стилизовать иконки так же, как и другие HTML элементы. Например:

```html
<uim-rocket />
<uim-rocket class="text-3xl text-red-400 mx-2" />
<uim-rocket class="text-3xl text-orange-400 animate-ping" />
```

<uim-rocket />
<uim-rocket class="text-3xl text-red-400 mx-2" />
<uim-rocket class="text-3xl text-orange-400 animate-ping ml-2" />

## Слоты

> Доступны с версии v0.18

Некоторые шаблоны могут предоставлять несколько дополнительных точек, используя [именованные слоты Vue](https://v3.vuejs.org/guide/component-slots.html).

Например, в [шаблоне `two-cols`](https://github.com/slidevjs/slidev/blob/main/packages/client/layouts/two-cols.vue) у вас может быть два столбца рядом, левый (`default` слот) и правый (`right` слот).

```md
---
layout: two-cols
---

<template v-slot:default>

# Левый

Это отобразится слева

</template>
<template v-slot:right>

# Правый

Это отобразится справа

</template>
```

<div class="grid grid-cols-2 rounded border border-gray-400 border-opacity-50 px-10 pb-4">
<div>
<h3>Левый</h3>
<p>Это отобразится слева</p>
</div>
<div>
<h3>Правый</h3>
<p>Это отобразится справа</p>
</div>
</div>

Мы также предоставляем сокращённый синтаксический сахар `::name::` для имени слота. Следующий пример работает точно так же, как и предыдущий.

```md
---
layout: two-cols
---

# Левый

Это отобразится слева

::right::

# Правый

Это отобразится справа
```

Вы также можете явно указать слот по умолчанию и в произвольном порядке

```md
---
layout: two-cols
---

::right::

# Правый

Это отобразится справа

::default::

# Левый

Это отобразится слева
```

<<<<<<< HEAD
## Конфигурации
=======
## Import Code Snippets

> Available since v0.47.0

You can import code snippets from existing files via following syntax:

```md
<<< @/snippets/snippet.js
```

::: tip
The value of `@` corresponds to the source root, the directory where the `slides.md` is located.
:::

This feature is vendored from VitePress, learn more about it in [VitePress's documentation](https://vitepress.dev/guide/markdown#import-code-snippets).

## Configurations
>>>>>>> 1d54c861642c679ca01887a28e187047fedcbc83

Все необходимые конфигурации можно определить в Markdown файле. Например:

```md
---
theme: seriph
layout: cover
background: 'https://source.unsplash.com/1600x900/?nature,water'
---

# Slidev

Это титульная страница.
```

Подробнее о [конфигурации frontmatter](/custom/#frontmatter-configures).

## LaTeX

Slidev поставляется с встроенной поддержкой LaTeX на базе [KaTeX](https://katex.org/).

<TheTweet id="1392246507793915904" />

### Строка

Оберните своё LaTeX выражение одним `$` с каждой стороны для строчного рендеринга.

```md
$\sqrt{3x-1}+(1+x)^2$
```

### Блок

Используйте 2 (`$$`) для блочного рендеринга. В этом режиме используются более крупные символы и результат центрируется.

```latex
$$
\begin{array}{c}

\nabla \times \vec{\mathbf{B}} -\, \frac1c\, \frac{\partial\vec{\mathbf{E}}}{\partial t} &
= \frac{4\pi}{c}\vec{\mathbf{j}}    \nabla \cdot \vec{\mathbf{E}} & = 4 \pi \rho \\

\nabla \times \vec{\mathbf{E}}\, +\, \frac1c\, \frac{\partial\vec{\mathbf{B}}}{\partial t} & = \vec{\mathbf{0}} \\

\nabla \cdot \vec{\mathbf{B}} & = 0

\end{array}
$$
```

Подробнее: [Демо](https://sli.dev/demo/starter/8) | [KaTeX](https://katex.org/) | [`markdown-it-katex`](https://github.com/waylonflinn/markdown-it-katex)

<<<<<<< HEAD
## Диаграммы
=======
### LaTex line highlighting

> Available since v0.43.1

To highlight specific lines, simply add line numbers within bracket `{}`. Line numbers start counting from 1 by default.

```latex
$$ {1|3|all}
\begin{array}{c}
\nabla \times \vec{\mathbf{B}} -\, \frac1c\, \frac{\partial\vec{\mathbf{E}}}{\partial t} &
= \frac{4\pi}{c}\vec{\mathbf{j}}    \nabla \cdot \vec{\mathbf{E}} & = 4 \pi \rho \\
\nabla \times \vec{\mathbf{E}}\, +\, \frac1c\, \frac{\partial\vec{\mathbf{B}}}{\partial t} & = \vec{\mathbf{0}} \\
\nabla \cdot \vec{\mathbf{B}} & = 0
\end{array}
$$
```

The `at` and `finally` options of [code blocks](#line-highlighting) are also available for LaTeX blocks.

## Diagrams
>>>>>>> 1d54c861642c679ca01887a28e187047fedcbc83

Вы также можете создавать диаграммы / графики из текстовых описаний в вашем Markdown, используя [Mermaid](https://mermaid-js.github.io/mermaid).

Блоки кода, помеченные как `mermaid`, будут преобразованы в диаграммы, например:

~~~md
//```mermaid
sequenceDiagram
  Alice->John: Hello John, how are you?
  Note over Alice,John: A typical interaction
//```
~~~

Кроме того, вы можете передать ему объект параметров, чтобы указать масштабирование и тему. Синтаксис объекта - это литерал объекта JavaScript, вам нужно будет добавить кавычки (`'`) для строк и использовать запятую (`,`) между ключами.

~~~md
//```mermaid {theme: 'neutral', scale: 0.8}
graph TD
B[Text] --> C{Decision}
C -->|One| D[Result 1]
C -->|Two| E[Result 2]
//```
~~~

Подробнее: [Демо](https://sli.dev/demo/starter/9) | [Mermaid](https://mermaid-js.github.io/mermaid)

## Множественные вхождения

> Доступны с версии v0.15

Вы можете разделить свой `slides.md` на несколько файлов и организовать их по своему усмотрению.

`slides.md` :

```md
# Страница 1

Это обычная страница

---
src: ./subpage2.md
---

<!-- эта страница будет загружена из './subpage2.md' -->
Контент в этом месте будет проигнорирован
```

`subpage2.md` :

```md
# Страница 2

Эта страница из другого файла
```

### Frontmatter слияние

Вы можете использовать frontmatters как со своей основной страницы, так и с внешней markdown страницы. Если в них есть одинаковые ключи, то **приоритет будут иметь ключи из основной записи**. Например

`slides.md` :

```md
---
src: ./cover.md
background: https://sli.dev/bar.png
class: text-center
---
```

`cover.md` :

```md
---
layout: cover
background: https://sli.dev/foo.png
---

# Обложка

Страница обложки
```

Они будут эквивалентны следующей странице:

```md
---
layout: cover
background: https://sli.dev/bar.png
class: text-center
---

# Обложка

Страница обложки
```

### Переиспользование страниц

Благодаря поддержке множественных вхождений переиспользование страниц может быть довольно простым. Например:

```yaml
---
src: ./cover.md
---

---
src: ./intro.md
---

---
src: ./content.md
---

---
# переиспользование
src: ./content.md
---
```

## MDC Syntax

> Available since v0.43.0

Slidev has an experimental support for [MDC (Markdown Components) Syntax](https://content.nuxtjs.org/guide/writing/mdc) powered by [`markdown-it-mdc`](https://github.com/antfu/markdown-it-mdc).

You can enable it by adding `mdc: true` to the frontmatter of your markdown file.

```md
---
mdc: true
---

This is a [red text]{style="color:red"} :inline-component{prop="value"}

![](/image.png){width=500px lazy}

::block-component{prop="value"}
The **default** slot
::
```

Learn more about [the syntax](https://content.nuxtjs.org/guide/writing/mdc).
