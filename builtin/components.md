# Компоненты

## Встроенные компоненты

> Документация в процессе разработки. А пока, вы можете взглянуть напрямую [в исходный код](https://github.com/slidevjs/slidev/blob/main/packages/client/builtin).

<<<<<<< HEAD
## Кастомные компоненты
=======
### `TOC`

Insert a Table Of Content.

Titles and title levels get automatically retrieved from the first title element of each slides.

You can override this automatic behaviour for a slide by using the front matter syntax:
```yml
---
title: Amazing slide title
level: 2
---
```

Or if you prefer the slide to not appear in the TOC at all, you can use:
```yml
---
hideInToc: true
---
```

#### Usage
~~~md
<Toc />
~~~

Parameters:

* `columns` (`string | number`, default: `1`): The number of columns of the display
* `maxDepth` (`string | number`, default: `Infinity`): The maximum depth level of title to display
* `minDepth` (`string | number`, default: `1`): The minimum depth level of title to display
* `mode` (`'all' | 'onlyCurrentTree'| 'onlySiblings'`, default: `'all'`):
  * `'all'`: Display all items
  * `'onlyCurrentTree'`: Display only items that are in current tree (active item, parents and children of active item)
  * `'onlySiblings'`: Display only items that are in current tree and their direct siblings

## Custom Components
>>>>>>> 871a293da7f02bedf8804133bf6a4af060611eb0

Создайте папку `components/` в корне вашего проекта, и просто вставьте в неё ваши кастомные Vue-компоненты, после этого вы сможете использовать их по тому же имени в ваших markdown-файлах!

Подробнее в разделе [Кастомизация](/custom/directory-structure#components).

## Компоненты темы

Темы также могут содержать компоненты. Прочитайте документацию по ним, чтобы узнать, что они предоставляют.

Подробнее в [структуре каталогов](/custom/directory-structure).
