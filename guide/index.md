# Руководство

## Введение

Slidev <sup>(slide + dev, произносится `/slʌɪdɪv/`)</sup> – это веб-приложение для создания и презентации слайдов. Предназначен для разработчиков, которые сосредоточены на написании контента в Markdown, в то же время используя HTML и Vue-компоненты для реализации pixel-perfect шаблонов и дизайна со встроенными интерактивными демо в ваши презентации.

Slidev использует многофункциональный markdown-файл для создания красивых слайдов с мгновенной перезагрузкой, а также множество встроенных интеграций, таких как live-кодинг, экспорт PDF, запись презентаций и т.д. Поскольку он работает через интернет, вы можете делать с Slidev всё что угодно — возможности безграничны.

Вы можете узнать больше о создании проекта на странице [Почему Slidev](/guide/why).

### Особенности

<<<<<<< HEAD
- 📝 [**Markdown-based**](/guide/syntax.html) - используйте свои любимые редакторы и рабочие процессы
- 🧑‍💻 [**Удобство разработки**](/guide/syntax.html#code-blocks) - встроенная подсветка кода, live-кодинг, и т.д.
- 🎨 [**Темизация**](/themes/gallery.html) - темы могут распространяться и использоваться через npm-пакеты
- 🌈 [**Стилизация**](/guide/syntax.html#embedded-styles) - благодаря [Windi CSS](https://windicss.org/) очень просто работать со стилями
- 🤹 [**Интерактивность**](/custom/directory-structure.html#components) - плавное встраивание Vue-компонентов
- 🎙 [**Режим докладчика**](/guide/presenter-mode.html) - используйте другое окно или даже телефон для управления слайдами
- 🧮 [**LaTeX**](/guide/syntax.html#latex) - встроенная поддержка LaTeX математических уравнений
- 📰 [**Диаграммы**](/guide/syntax.html#diagrams) - создание диаграмм с текстовым описанием
- 🌟 [**Иконки**](/guide/syntax.html#icons) - доступ к иконкам напрямую из любого набора иконок
- 💻 [**Редакторы**](/guide/editors.html) - встроенные редакторы и [расширения для VS Code](https://github.com/slidevjs/slidev-vscode)
- 🎥 [**Запись**](/guide/recording.html) - встроенная запись и просмотр камеры
- 📤 [**Портативность**](/guide/exporting.html) - экспорт в PDF, PNGs, или даже в hostable SPA
- ⚡️ [**Скорость**](https://vitejs.dev) - мгновенная перезагрузка благодаря [Vite](https://vitejs.dev)
- 🛠 [**Расширяемость**](/custom/config-vite.html) - использование Vite плагинов, Vue-компонентов, либо других npm-пакетов
=======
- 📝 [**Markdown-based**](/guide/syntax.html) - use your favorite editors and workflow
- 🧑‍💻 [**Developer Friendly**](/guide/syntax.html#code-blocks) - built-in syntax highlighting, live coding, etc.
- 🎨 [**Themable**](/themes/gallery.html) - theme can be shared and used with npm packages
- 🌈 [**Stylish**](/guide/syntax.html#embedded-styles) - on-demand utilities via [Windi CSS](https://windicss.org/) or [UnoCSS](https://github.com/unocss/unocss).
- 🤹 [**Interactive**](/custom/directory-structure.html#components) - embedding Vue components seamlessly
- 🎙 [**Presenter Mode**](/guide/presenter-mode.html) - use another window, or even your phone to control your slides
- 🎨 [**Drawing**](/guide/drawing.html) - draw and annotate on your slides
- 🧮 [**LaTeX**](/guide/syntax.html#latex) - built-in LaTeX math equations support
- 📰 [**Diagrams**](/guide/syntax.html#diagrams) - creates diagrams with textual descriptions 
- 🌟 [**Icons**](/guide/syntax.html#icons) - Access to icons from any iconset directly
- 💻 [**Editors**](/guide/editors.html) - integrated editor, or [extension for VS Code](https://github.com/slidevjs/slidev-vscode)
- 🎥 [**Recording**](/guide/recording.html) - built-in recording and camera view
- 📤 [**Portable**](/guide/exporting.html) - export into PDF, PNGs, or even a hostable SPA
- ⚡️ [**Fast**](https://vitejs.dev) - instant reloading powered by [Vite](https://vitejs.dev)
- 🛠 [**Hackable**](/custom/config-vite.html) - using Vite plugins, Vue components, or any npm packages
>>>>>>> ee7ae42035591cb6565a72f5217129c670a59b0c

### Технический стек

Slidev разработан благодаря набору этих инструментов и технологий.

<<<<<<< HEAD
- [Vite](https://vitejs.dev) - Чрезвычайно быстрый инструмент frontend разработки.
- [Vue 3](https://v3.vuejs.org/) на основе [Markdown](https://daringfireball.net/projects/markdown/syntax) - Фокусировка на контенте, при этом используя всю мощность HTML и Vue компонентов в любом месте.
- [Windi CSS](https://github.com/windicss/windicss) - CSS-фреймворк на основе utility-классов, позволяет легко стилизовать слайды.
- [Prism](https://github.com/PrismJS/prism), [Shiki](https://github.com/shikijs/shiki), [Monaco Editor](https://github.com/Microsoft/monaco-editor) - Первоклассная поддержка фрагментов кода с возможностью live-кодинг.
- [RecordRTC](https://recordrtc.org) - Встроенная запись и просмотр камеры.
- [VueUse](https://vueuse.org) - Набор [`@vueuse/core`](https://github.com/vueuse/vueuse), [`@vueuse/head`](https://github.com/vueuse/head), [`@vueuse/motion`](https://github.com/vueuse/motion), и т.д.
- [Iconify](https://iconify.design/) - Коллекция иконок.
- [KaTeX](https://katex.org/) - Математический рендеринг LaTeX.
- [Mermaid](https://mermaid-js.github.io/mermaid) - Текстовые диаграммы.
=======
- [Vite](https://vitejs.dev) - An extremely fast frontend tooling
- [Vue 3](https://v3.vuejs.org/) powered [Markdown](https://daringfireball.net/projects/markdown/syntax) - Focus on the content while having the power of HTML and Vue components whenever needed
- [Windi CSS](https://github.com/windicss/windicss) or [UnoCSS](https://github.com/unocss/unocss) - On-demand utility-first CSS framework, style your slides at ease
- [Prism](https://github.com/PrismJS/prism), [Shiki](https://github.com/shikijs/shiki), [Monaco Editor](https://github.com/Microsoft/monaco-editor) - First-class code snippets support with live coding capability
- [RecordRTC](https://recordrtc.org) - Built-in recording and camera view
- [VueUse](https://vueuse.org) family -  [`@vueuse/core`](https://github.com/vueuse/vueuse), [`@vueuse/head`](https://github.com/vueuse/head), [`@vueuse/motion`](https://github.com/vueuse/motion), etc.
- [Iconify](https://iconify.design/) - Iconsets collection.
- [Drauu](https://github.com/antfu/drauu) - Drawing and annotations support
- [KaTeX](https://katex.org/) - LaTeX math rendering.
- [Mermaid](https://mermaid-js.github.io/mermaid) - Textual Diagrams.
>>>>>>> ee7ae42035591cb6565a72f5217129c670a59b0c

### Создание вашей первой презентации

<<<<<<< HEAD
Через NPM:
=======
<br>

#### Try it Online

[sli.dev/new](https://sli.dev/new)

[![](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://sli.dev/new)

#### Create Locally

With NPM:
>>>>>>> ee7ae42035591cb6565a72f5217129c670a59b0c

```bash
$ npm init slidev
```

Через Yarn:

```bash
$ yarn create slidev
```
Следуйте инструкциям и начните создавать слайды прямо сейчас! Подробнее о markdown-синтаксисе читайте в [руководстве о синтаксисе](/guide/syntax).

### Command Line Interface

В проекте, где установлен Slidev, вы можете использовать бинарную версию `slidev` в своих npm-скриптах.

```json
{
  "scripts": {
    "dev": "slidev", // запуск dev севера
    "build": "slidev build", // билд SPA для production
    "export": "slidev export" // экспорт слайдов в pdf
  }
}
```

В противном случае вы можете использовать [`npx`](https://www.npmjs.com/package/npx)

```bash
$ npx slidev
```

Запустите `slidev --help` для просмотра дополнительный опций.

### Markdown синтакс

Slidev считывает ваш `slides.md` файл в корне проекта и конвертирует его в файлы. Всякий раз, когда вы вносите в него изменения, содержание слайдов будет моментально обновлено. Например:

~~~md
# Slidev

Привет, мир!

---

# Страница 2

Использование блоков кода для подсветки

//```ts
console.log('Привет, мир!')
//```

---

# Страница 3
~~~

Подробнее о Markdown синтаксисе Slidev читайте в [руководстве по синтаксису](/guide/syntax).
