# Почему Slidev

Есть множество богатых функционалом, универсальных WYSIWYG редакторов презентаций, например [Microsoft PowerPoint](https://www.microsoft.com/en-us/microsoft-365/powerpoint) или [Apple Keynote](https://www.apple.com/keynote/). Они не плохо работают для создания красивых презентаций с анимациями, графиками, и множества других штук, оставаясь при этом очень интуитивными и лёгкими в изучении. Так зачем вообще нужен Slidev?

<<<<<<< HEAD
Slidev направлен на поддержку гибкости и интерактивности для разработчиков, чтобы делать их презентации более интересными, выразительными и привлекательными. Используя инструменты и технологии, с которыми они уже знакомы. 
=======
Slidev aims to provide the flexibility and interactivity for developers to make their presentations even more interesting, expressive, and attractive by using the tools and technologies they are already familiar with.
>>>>>>> 9bbccbb1bd2d1d93f3d376ed06c73986710dd518

При работе с WYSIWYG редакторами очень легко отвлечься на варианты стилизации. Slidev исправляет это, разделяя контент и визуальную часть. Что позволяет вам сфокусироваться на чем-то одном, а также даёт возможность переиспользовать темы из сообщества. Slidev не стремится полностью заменить другие конструкторы презентаций. Скорее, он фокусируется на разнообразии сообщества разработчиков новыми возможностями.

## Slidev

![](/screenshots/cover.png)

Это лишь часть ключевых особенностей Slidev:

## Markdown-based

Slidev использует расширенный Markdown формат для хранения и организации ваших презентаций в простом текстовом файле. Это даёт вам сфокусироваться на создании контента. Поскольку контент и стили разделены, это позволяет вам переключаться между темами без особых усилий.

Подробнее о [Markdown синтаксисе Slidev](/guide/syntax).

## Темизация

Темы для Slidev могут распространяться и устанавливаться, используя npm-пакеты. Вам понадобится одна строка в конфигурации, чтобы применить их.

Посмотрите [галерею тем](/themes/gallery) или [узнайте, как написать свою тему](/themes/write-a-theme).

## Удобство разработки

Slidev предоставляет разработчикам первоклассную поддержку фрагментов кода. Он поддерживает как [Prism](https://prismjs.com/), так и [Shiki](https://github.com/shikijs/shiki), чтобы добиться идеальной pixel-perfect подсветки синтаксиса, при этом сохраняя возможность изменять код в любое время. Благодаря встроенному редактору [Monaco](https://microsoft.github.io/monaco-editor/), он также даёт вам возможность выполнять кодирование / демонстрацию в реальном времени в вашей презентации с автозаполнением, наведением курсора и даже с поддержкой проверки типов TypeScript.

Узнайте больше о [подсветки](/custom/highlighters) и [конфигурации Monaco](/custom/config-monaco).

## Скорость

<<<<<<< HEAD
Slidev разработан на [Vite](https://vitejs.dev/), [Vue 3](https://v3.vuejs.org/) и [Windi CSS](https://windicss.org/), которые в совокупности дают прекрасный опыт разработки. Каждое внесённое вами изменение **мгновенно** отразится на слайдах.
=======
Slidev is powered by [Vite](https://vitejs.dev/), [Vue 3](https://v3.vuejs.org/) and [UnoCSS](https://unocss.dev/), which give you the most wonderful authoring experience. Every change you made will reflect to your slides **instantly**.
>>>>>>> 9bbccbb1bd2d1d93f3d376ed06c73986710dd518

Почитайте подробнее о [нашем техническом стеке](/guide/#tech-stack).

## Интерактивность

Вы можете написать кастомные Vue-компоненты и использовать их непосредственно внутри вашего markdown-файла. Вы также можете взаимодействовать с ними внутри вашей презентации, чтобы исполнить вашу идею в более интересной и интуитивной форме.

## Поддержка записи

Slidev обеспечивает встроенную запись и просмотр с камеры. Вы можете поделиться своей презентацией с камерой внутри или записать и сохранить их отдельно для экрана и камеры. Всё сразу, никаких дополнительных инструментов не требуется.

Узнайте больше о [записи здесь](/guide/recording).

## Портативность

Экспортируйте ваши слайды в PDF, PNGs, или даже a hostable Single-page Application (SPA) with a single command, and share them anywhere.

Read more about that in the [exporting docs](/guide/exporting).

## Расширяемость

Будучи сделанным на веб-технологиях, всё что вы можете сделать в веб-приложение – можно реализовать и в Slidev. Например: WebGL, API запросы, iframes, или даже live sharing. Все зависит от вашего воображения!

## Попробуйте сами

Лучше один раз увидеть, чем сто раз услышать – поиграйте со Slidev. Вас отделяет всего одна команда:

```bash
$ npm init slidev
```

Или посмотрите демо:

<iframe class="aspect-16/9 rounded-xl w-full shadow-md border-none" src="https://www.youtube.com/embed/eW7v-2ZKZOU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
