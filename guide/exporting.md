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

<<<<<<< HEAD
Через несколько секунд ваши слайды будут находиться в `./slides-exports.pdf`.
=======
After a few seconds, your slides will be ready at `./slides-export.pdf`.

In case you want to export your slides using the dark version of the theme, use the `--dark` option:

```bash
$ slidev export --dark
```
>>>>>>> 8b430eefeed2277fc07f273ce000804365333b56

### Экспорт с кликами

> Доступно с версии v0.21

По умолчанию Slidev экспортирует одну страницу на слайд с отключенной анимацией кликов. Если вы хотите экспортировать слайды с несколькими шагами на несколько страниц, передайте параметр `--with-clicks`.

```bash
$ slidev export --with-clicks
```

## PNG

При передаче параметра `--format png` Slidev будет экспортировать каждый слайд в изображения PNG вместо PDF.

```bash
$ slidev export --format png
```

## Single-Page Application (SPA)

<<<<<<< HEAD
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

Вы можете предоставить загружаемый PDF-файл зрителям вашего SPA со следующей конфигурацией:

```md
---
download: true
---
```

Slidev сгенерирует файл pdf вместе со сборкой, и в SPA отобразится кнопка загрузки.

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
=======
See [Static Hosting](/guide/hosting).
>>>>>>> ee7ae42035591cb6565a72f5217129c670a59b0c
