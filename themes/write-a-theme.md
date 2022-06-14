# Создание темы

Для начала мы рекомендуем использовать наш генератор для создания вашей первой темы.

```bash
$ npm init slidev-theme
```

Затем вы можете изменить и поиграться с ней. Вы также можете посмотреть [официальные темы](/themes/gallery) в качестве примеров.

## Возможности

Тема может содержать:

- Глобальные стили
- Дефолтные конфигурации (шрифты, цветовые схемы, подсветки, и т.д.)
- Кастомные шаблоны или замена существующих
- Кастомные компоненты или замена существующих
- Расширение конфигурации Windi CSS
- Настройка таких инструментов, как Monaco или Prism

## Соглашения

Темы публикуются в реестре npm, и они должны соответствовать приведённым ниже соглашениям:

- Имя пакета должно начинаться с `slidev-theme-`, например: `slidev-theme-awesome`
- Содержать `slidev-theme` и `slidev` в поле `keywords` вашего `package.json`

## Настройка

Чтобы настроить тестовую песочницу для вашей темы, вы можете создать `example.md` со следующим frontmatter, чтобы сообщить Slidev, что вы используете текущий каталог в качестве темы.

```md
---
theme: ./
---
```

При желании вы также можете добавить несколько скриптов в свой `packages.json`

```json
// package.json
{
  "scripts": {
    "dev": "slidev example.md",
    "build": "slidev build example.md",
    "export": "slidev export example.md",
    "screenshot": "slidev export example.md --format png"
  }
}
```

Чтобы опубликовать свою тему, просто запустите `npm publish`, и всё. Процесс сборки не требуется (это означает, что вы можете напрямую публиковать файлы `.vue` и` .ts`, Slidev достаточно умён, чтобы понять их).

Пункты добавления темы следуют тем же соглашениям, что и локальная настройка, подробнее в [документации по соглашениям об именовании](/custom/).

## Конфигурации по умолчанию

> Доступно с версии v0.19

Тема может предоставлять дефолтные [конфигурации](/custom/#frontmatter-configures) через `package.json`.

```json
// package.json
{
  "slidev": {
    "default": {
      "aspectRatio": "16/9",
      "canvasWidth": 980,
      "fonts": {
        "sans": "Robot",
        "mono": "Fira Code"
      }
    }
  }
}
```

Шрифты будут автоматически импортированы из [Google Fonts](https://fonts.google.com/).

Подробнее о [шрифтах](/custom/fonts) и [frontmatter конфигурации](/custom/#frontmatter-configures).

## Метаданные темы

### Цветовая палитра

По умолчанию Slidev предполагает, что темы поддерживают как светлый, так и тёмный режим. Если вы хотите, чтобы ваша тема была представлена только в разработанной цветовой схеме, вам нужно будет явно указать её в `package.json`.

```json
// package.json
{
  "name": "slidev-theme-my-cool-theme",
  "keywords": [
    "slidev-theme",
    "slidev"
  ],
  "slidev": {
    "colorSchema": "light" // или "dark", или "both"
  }
}
```

Чтобы получить доступ к тёмному режиму при стилизации вашей темы, вы можете обернуть CSS, зависящий от тёмного режима, внутри класса `dark`:

```css
/* основные css стили */

html:not(.dark) {
  /* css для светлой темы */
}

html.dark {
  /* css для тёмной темы */
}
```

Slidev переключает класс `dark` в элементе `html` страницы для переключения цветовой схемы.

### Подсветка

В теме также предусмотрены цвета для подсветки синтаксиса. Мы поддерживаем как [Prism](https://prismjs.com/), так и [Shiki](https://github.com/shikijs/shiki). Подробнее в [документации по подсветке синтаксиса](/custom/highlighters).

<<<<<<< HEAD
Вы можете использовать как один из них, так и оба. Примеры конфигураций дефолтной темы смотрите в [`./styles/prism.css`](https://github.com/slidevjs/slidev/blob/main/packages/theme-default/styles/prism.css) / [`./setup/shiki.ts`](https://github.com/slidevjs/slidev/blob/main/packages/theme-default/setup/shiki.ts).
=======
You can support either one of them, or both. Refer to the default theme for configurations examples [`./styles/code.css`](https://github.com/slidevjs/slidev/blob/main/packages/create-theme/template/styles/code.css) / [`./setup/shiki.ts`](https://github.com/slidevjs/slidev/blob/main/packages/create-theme/template/setup/shiki.ts).
>>>>>>> 0d7183dcb5054d1cc1d9af406b951526a92f09b6

Также не забудьте указать поддерживаемую подсветку в вашем `package.json`

```json
// package.json
{
  "slidev": {
    "highlighter": "shiki" // или "prism", или "all"
  }
}
```

### Версионирование Slidev

Если тема ссылается на определённую функцию Slidev, которая была недавно добавлена, то вы можете установить минимальную версию Slidev, необходимую для правильной работы вашей темы:

```json
// package.json
{
  "engines": {
    "slidev": ">=0.19.3"
  }
}
```

Если пользователи будут использовать более старую версию Slidev, то будет выведена ошибка.
