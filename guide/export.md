# Exporting

## PDF

Exporting your slides into PDF by the following command

```bash
$ slidev export
```

After a few seconds, your slides will be ready at `./slides.pdf`.

## Single-Page Application (SPA)

Since Slidev is actually a web app, there is no reason you can't host it.

You can build the slides into a self hostable SPA by:

```bash
$ slidev build
```

The dist will be avaliable under `dist/` and then you can host them on [GitHub Pages](https://pages.github.com/), [Netlify](https://netlify.app/), [Vercel](https://vercel.com/), or whatever you want. And share your slides to the world with a single link.