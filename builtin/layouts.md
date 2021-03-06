# Шаблоны

## Встроенные шаблоны

> Поскольку темы могут переопределять поведение макетов, лучший способ узнать точное использование, параметры и примеры - обратиться к их документации.


### `center`

Отображает содержимое в центре экрана.

### `cover`

Используется для отображения титульной страницы презентации, может содержать название презентации, контекстуализацию и т.д.

### `default`

Самый простой макет для отображения любого вида контента.

### `end`

Заключительная страница для презентации.

### `fact`

Показать на экране какой-либо факт или данные с большим акцентом.

### `full`

Использует все пространство экрана для отображения содержимого.

### `image-left`

Показывает изображение в левой части экрана, содержимое будет размещено в правой части.

#### Использование

```yaml
---
layout: image-left

# источник изображения
image: ./path/to/the/image

# пользовательское имя класса для содержимого
class: my-cool-content-on-the-right
---
```

### `image-right`

Показывает изображение в правой части экрана, содержимое будет размещено в левой части.

#### Использование

```yaml
---
layout: image-right

# источник изображения
image: ./path/to/the/image

# пользовательское имя класса для содержимого
class: my-cool-content-on-the-left
---
```

### `image`

Показывает изображение в качестве основного содержимого страницы.

#### Использование

```yaml
---
layout: image

# источник изображения
image: ./path/to/the/image
---
```


### `iframe-left`

Shows a web page on the left side of the screen, the content will be placed on the right side.

#### Usage

```yaml
---
layout: iframe-left

# the web page source
url: https://github.com/slidevjs/slidev

# a custom class name to the content
class: my-cool-content-on-the-right
---
```

### `iframe-right`

Shows a web page on the right side of the screen, the content will be placed on the left side.

#### Usage

```yaml
---
layout: iframe-right

# the web page source
url: https://github.com/slidevjs/slidev

# a custom class name to the content
class: my-cool-content-on-the-left
---
```

### `iframe`

Shows a web page as the main content of the page.

#### Usage

```yaml
---
layout: iframe

# the web page source
url: https://github.com/slidevjs/slidev
---
```


### `intro`

Представление презентации, обычно с указанием названия презентации, краткого описания, автора и т.д.

### `none`

Макет без какой-либо существующей стилизации.

### `quote`

Отображает цитату на видном месте.

### `section`

Используется для обозначения начала нового раздела презентации.

### `statement`

Делает утверждение/заявление основным содержанием страницы.

### `two-cols`

Разделяет содержимое страницы на две колонки.

#### Использование


```md
---
layout: two-cols
---

# Слева

Это отобразится слева

::right::

# Справа

Это отобразится справа
```

## Кастомные шаблоны

Создайте папку `layouts/` в корне вашего проекта, и просто вставьте в неё ваши кастомные Vue-компоненты.

Подробнее в разделе [Кастомизация](/custom/directory-structure#layouts).

## Шаблоны темы

Темы также могут содержать макеты, либо заменять существующие. Пожалуйста, прочтите документацию, чтобы узнать, что они предоставляют.