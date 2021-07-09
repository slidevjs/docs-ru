# Экспорт

## PDF

> Экспорт в PDF или PNG происходит за счёт [Playwright](https://playwright.dev) рендеринга. Поэтому вам необходимо установить [`playwright-chromium`](https://playwright.dev/docs/installation#download-single-browser-binary), чтобы использовать этот функционал.
> Если вы выполняете экспорт в CI, то взгляните на [руководство по playwright CI](https://playwright.dev/docs/ci).

Установите `playwright-chromium`

```bash
$ npm i -D playwright-chromium
```

Теперь можете экспортировать слайды в PDF с помощью следующей команды

```bash
$ slidev export
```

Через несколько секунд ваши слайды будут находиться в `./slides-exports.pdf`.

### Экспорт с кликами

> Доступно с версии v0.21

<<<<<<< HEAD
По умолчанию Slidev экспортирует 1 страницу на слайд с отключенной анимацией кликов. Если вы хотите экспортировать слайды с несколькими шагами для вставки нескольких страниц, передайте параметры `--with-clicks`.
=======
By default, Slidev exports one page per slide with clicks animations disabled. If you want export slides with multiple steps into multiple pages, pass the `--with-clicks` options.
>>>>>>> 43ba9b5124834bb0357272c915cf70fa0cc52e06

```bash
$ slidev export --with-clicks
```

## PNG

При передаче параметра `--format png` Slidev будет экспортировать каждый слайд в изображения PNG вместо PDF.

```bash
$ slidev export --format png
```

## Single-Page Application (SPA)

Вы также можете сбилдить слайды в self-hostable SPA:

```bash
$ slidev build
```

Созданное приложение будет доступно в папке `dist/`, после чего его можно будет разместить на [GitHub Pages](https://pages.github.com/), [Netlify](https://netlify.app/), [Vercel](https://vercel.com/) или на любых других платформах. Теперь вы можете поделиться своими слайдами с остальным миром с помощью одной ссылки.

### Базовый путь

Чтобы развернуть слайды на определённом роутере, вам нужно передать параметр `--base`. Например:

```bash
$ slidev build --base /talks/my-cool-talk/
```

Подробнее в [документации Vite](https://vitejs.dev/guide/build.html#public-base-path).

### Provide Downloadable PDF

<<<<<<< HEAD
Вы можете предоставить PDF-файл для скачивания вашим пользователям SPA. Включить его можно с помощью следующей конфигурации:
=======
You can provide a downloadable PDF to the viewers of your SPA with the following config:
>>>>>>> 43ba9b5124834bb0357272c915cf70fa0cc52e06

```md
---
download: true
---
```

<<<<<<< HEAD
Теперь Slidev сгенерирует PDF-файл вместе со сборкой, и в SPA появится кнопка загрузки.
=======
Slidev will generate a pdf file along with the build and a download button will be displayed in the SPA.
>>>>>>> 43ba9b5124834bb0357272c915cf70fa0cc52e06

Вы также можете указать собственный URL-адрес для PDF-файла. В этом случае процесс рендеринга будет пропущен.

```md
---
download: 'https://myside.com/my-talk.pdf'
---
```

### Примеры

Вот несколько примеров экспортированного SPA:

- [Starter Template](https://sli.dev/demo/starter)
- [Composable Vue](https://talks.antfu.me/2021/composable-vue) от [Anthony Fu](https://github.com/antfu)
