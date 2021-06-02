# Руководство

## Введение

Slidev <sup>(slide + dev, произносится `/slʌɪdɪv/`)</sup> – это веб-конструктор презентаций и их просмотра. Предназначен для разработчиков с фокусировкой на написание контента в Markdown-файлах, в то же время используя HTML и Vue компоненты для реализации pixel-perfect шаблонов и дизайна со вставками интерактивных демо в ваши презентации.

It uses a feature-rich markdown file to generate beautiful slides with an instant reloading experience, along with many built-in integrations such as live coding, PDF exporting, presentation recording, and so on. Since it's powered by the web, you can do anything with Slidev - the possibilities are endless.

You can learn more about the rationale behind the project in the [Why Slidev](/guide/why) section.

### Особенности

- 📝 [**Markdown-based**](/guide/syntax.html) - use your favorite editors and workflow
- 🧑‍💻 [**Developer Friendly**](/guide/syntax.html#code-blocks) - built-in syntax highlighting, live coding, etc.
- 🎨 [**Themable**](/themes/gallery.html) - theme can be shared and used with npm packages
- 🌈 [**Stylish**](/guide/syntax.html#embedded-styles) - [Windi CSS](https://windicss.org/) on-demand utilities, easy-to-use embedded stylesheets
- 🤹 [**Interactive**](/custom/directory-structure.html#components) - embedding Vue components seamlessly
- 🎙 [**Presenter Mode**](/guide/presenter-mode.html) - use another window, or even your phone to control your slides
- 🧮 [**LaTeX**](/guide/syntax.html#latex) - Built-in LaTeX math equations support
- 📰 [**Diagrams**](/guide/syntax.html#diagrams) - Creates diagrams with textual descriptions 
- 🌟 [**Icons**](/guide/syntax.html#icons) - Access to icons from any iconset directly
- 💻 [**Editors**](/guide/editors.html) - Integrated editor, or [extension for VS Code](https://github.com/slidevjs/slidev-vscode)
- 🎥 [**Recording**](/guide/recording.html) - built-in recording and camera view
- 📤 [**Portable**](/guide/exporting.html) - export into PDF, PNGs, or even a hostable SPA
- ⚡️ [**Fast**](https://vitejs.dev) - instant reloading powered by [Vite](https://vitejs.dev)
- 🛠 [**Hackable**](/custom/config-vite.html) - using Vite plugins, Vue components, or any npm packages

### Технический стек

Slidev разработан благодаря комбинации этих инструментов и технологий.

- [Vite](https://vitejs.dev) - Чрезвыйчайно быстрый инструмент frontend разработки
- [Vue 3](https://v3.vuejs.org/) на основе [Markdown](https://daringfireball.net/projects/markdown/syntax) - Фокусировка на контенте, при этом используя всю мощность HTML и Vue компонентов в любом месте
- [Windi CSS](https://github.com/windicss/windicss) - On-demand utility-first CSS framework, style your slides at ease
- [Prism](https://github.com/PrismJS/prism), [Shiki](https://github.com/shikijs/shiki), [Monaco Editor](https://github.com/Microsoft/monaco-editor) - First-class code snippets support with live coding capability
- [RecordRTC](https://recordrtc.org) - Built-in recording and camera view
- [VueUse](https://vueuse.org) семейство -  [`@vueuse/core`](https://github.com/vueuse/vueuse), [`@vueuse/head`](https://github.com/vueuse/head), [`@vueuse/motion`](https://github.com/vueuse/motion), и т.д.
- [Iconify](https://iconify.design/) - Iconsets коллекция.
- [KaTeX](https://katex.org/) - LaTeX math rendering.
- [Mermaid](https://mermaid-js.github.io/mermaid) - Текстовые диаграммы.

### Создание вашей первой презентации

Через NPM:

```bash
$ npm init slidev
```

Через Yarn:

```bash
$ yarn create slidev
```

Follow the prompts and start making your slides now! For more details about the markdown syntax, read through the [syntax guide](/guide/syntax).

### Command Line Interface

In a project where Slidev is installed, you can use the `slidev` binary in your npm scripts.

```json
{
  "scripts": {
    "dev": "slidev", // start dev server
    "build": "slidev build", // build for production SPA
    "export": "slidev export" // export slides to pdf
  }
}
```

Otherwise, you can use it with [`npx`](https://www.npmjs.com/package/npx)

```bash
$ npx slidev
```

Run `slidev --help` for more options available.

### Markdown синтакс

Slidev reads your `slides.md` file under your project root and converts them into slides. Whenever you made changes to it, the content of the slides will be updated immediately. For example:

~~~md
# Slidev

Hello World

---

# Page 2

Directly use code blocks for highlighting

//```ts
console.log('Hello, World!')
//```

---

# Page 3
~~~

Read more about the Slidev Markdown syntax in the [syntax guide](/guide/syntax).
