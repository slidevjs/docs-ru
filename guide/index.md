# Руководство

## Введение

Slidev <sup>(slide + dev, произносится `/slʌɪdɪv/`)</sup> – это веб-приложение для создания и презентации слайдов. Предназначен для разработчиков, которые сосредоточены на написании контента в Markdown, в то же время используя HTML и Vue-компоненты для реализации pixel-perfect шаблонов и дизайна со встроенными интерактивными демо в ваши презентации.

Slidev использует многофункциональный markdown-файл для создания красивых слайдов с мгновенной перезагрузкой, а также множество встроенных интеграций, таких как live-кодинг, экспорт PDF, запись презентаций и т.д. Поскольку он работает через интернет, вы можете делать с Slidev всё что угодно — возможности безграничны.

Вы можете узнать больше о создании проекта на странице [Почему Slidev](/guide/why).

### Особенности

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

### Технический стек

Slidev разработан благодаря набору этих инструментов и технологий.

- [Vite](https://vitejs.dev) - Чрезвычайно быстрый инструмент frontend разработки.
- [Vue 3](https://v3.vuejs.org/) на основе [Markdown](https://daringfireball.net/projects/markdown/syntax) - Фокусировка на контенте, при этом используя всю мощность HTML и Vue компонентов в любом месте.
- [Windi CSS](https://github.com/windicss/windicss) - CSS-фреймворк на основе utility-классов, позволяет легко стилизовать слайды.
- [Prism](https://github.com/PrismJS/prism), [Shiki](https://github.com/shikijs/shiki), [Monaco Editor](https://github.com/Microsoft/monaco-editor) - Первоклассная поддержка фрагментов кода с возможностью live-кодинг.
- [RecordRTC](https://recordrtc.org) - Встроенная запись и просмотр камеры.
- [VueUse](https://vueuse.org) - Набор [`@vueuse/core`](https://github.com/vueuse/vueuse), [`@vueuse/head`](https://github.com/vueuse/head), [`@vueuse/motion`](https://github.com/vueuse/motion), и т.д.
- [Iconify](https://iconify.design/) - Коллекция иконок.
- [KaTeX](https://katex.org/) - Математический рендеринг LaTeX.
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
Следуйте инструкциям и начните создавать слайды прямо сейчас! Подробнее о markdown-синтаксисе читайте в [руководстве о синтаксисе](/guide/syntax).

### Command Line Interface

В проекте, где установлен Slidev, вы можете использовать бинарную версию `slidev` в своих npm-скриптах.

```json
{
  "scripts": {
    "dev": "slidev", // запуск dev севера
    "build": "slidev build", // билд SPA для продакшна
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
