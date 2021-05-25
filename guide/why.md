# Почему Slidev

Есть множество богатых функционалом, универсальных WYSIWYG редакторов презентаций, таких как [Microsoft PowerPoint](https://www.microsoft.com/en-us/microsoft-365/powerpoint) и [Apple Keynote](https://www.apple.com/keynote/). Они работает не плохо для создания красивых презентаций с анимациями, графиками, и множества других штук, оставаясь при этом очень интуитивными и легкими в изучении. Так зачем вообще нужен Slidev?

Slidev направлен на поддержку гибкости и интерактивности для разработчиков, чтобы делать их презентации более интересными, выразительными и привлекательными. Используя инструменты и технологии, с которыми они уже знакомы. 

При работе с WYSIWYG редакторами очень легко отвлечься на варианты стилизации. Slidev исправляет это, разделяя контент и визуальную часть. Что позволяет вам сфокусироваться на чем-то одном, а также дает возможность переиспользовать темы из сообщества. Slidev не стремится полностью заменить другие конструкторы презентаций. Скорее, он фокусируется на разнообразии сообщества разработчиков новыми возможностями.

## Slidev

![](/screenshots/cover.png)

Это лишь часть ключевых особенностей Slidev:

## Markdown-based

Slidev использует расширенный Markdown-формат для хранения и организации ваших презентаций в простом текстовом файле. Это дает вам сфокусироваться на создании контента. Поскольку контент и стили разделены, это позволяет вам переключаться между темами без особых усилий.

Подробнее о [Markdown синтаксисе Slidev](/guide/syntax).

## Темизация

Темы для Slidev могут распространяться и устанавливаться, используя npm-пакеты. Вам понадобится одна строка в конфигурации, чтобы применить их.

Посмотрите [галерею тем](/themes/gallery) или [узнайте, как написать свою тему](/themes/write-a-theme).

## Developer Friendly

Slidev provides first-class support for code snippets for developers. It supports both [Prism](https://prismjs.com/) and [Shiki](https://github.com/shikijs/shiki) to get pixel perfect syntax highlighting, while still being able to modify the code at any time. With [Monaco editor](https://microsoft.github.io/monaco-editor/) built-in, it also empowers you to do live coding / demonstration in your presentation with autocompletion, type hovering, and even TypeScript type check support.

Learn more about [highlighters](/custom/highlighters) and [Monaco configuration](/custom/config-monaco).

## Скорость

Slidev разработан на [Vite](https://vitejs.dev/), [Vue 3](https://v3.vuejs.org/) и [Windi CSS](https://windicss.org/), которые дают вам прекрасный опыт разработки. Каждое внесенное вами изменение **мгновенно** отразится на слайдах.

Почитайте подробнее о [нашем техническом стеке](/guide/#tech-stack).

## Интерактивный и выразительный

Вы можете написать кастомные Vue-компоненты и использовать их непосредственно внутри вашего markdown-файла. Вы также можете взаимодействовать с ними внутри вашей презентации, чтобы выразить вашу идею в более интересной и интуитивной форме.

## Поддержка записи

Slidev provides built-in recording and camera view. You can share your presentation with your camera view inside, or record and save them separately for your screen and camera. All with one go, no additional tools are needed.

Learn more about [recording here](/guide/recording).

## Portable

Export your slides into PDF, PNGs, or even a hostable Single-page Application (SPA) with a single command, and share them anywhere.

Read more about that in the [exporting docs](/guide/exporting).

## Hackable

Being powered by web technologies, anything that can be done in a web app is also possible with Slidev. For example, WebGL, API requests, iframes, or even live sharing. It's up to your imagination!

## Попробуйте сами

Лучше один раз увидеть, чем сто раз услышать – поиграйте со Slidev. Вас отделяет всего одна команда:

```bash
$ npm init slidev
```

Или посмотрите демо:

<div class="aspect-9/16 relative">
<iframe class="rounded w-full shadow-md border-none" src="https://www.youtube.com/embed/eW7v-2ZKZOU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
