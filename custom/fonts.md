# Шрифты

> Доступно с версии v0.19.3

Хотя вы можете использовать HTML и CSS для настройки шрифтов и стилей для своих слайдов, Slidev также предоставляет удобный способ их использования без особых усилий.

В вашем fontmatter настройте следующим образом

```yaml
---
fonts:
  # основной текст
  sans: 'Robot'
  # использование с css классом `font-serif` от windicss
  serif: 'Robot Slab'
  # для блоков кода, inline-кода и т.д.
  mono: 'Fira Code'
---
```

И это всё.

Шрифты будут **автоматически импортированы из [Google Fonts](https://fonts.google.com/)**. Это означает, что вы можете напрямую использовать любые шрифты, доступные в Google Fonts.

## Локальные шрифты

По умолчанию Slidev считает, что все шрифты, указанные в конфигурациях `fonts`, взяты из Google Fonts. Если вы хотите использовать локальные шрифты, укажите `fonts.local`, чтобы отключить автоматический импорт.

```yaml
---
fonts:
  # вы можете использовать `,` чтобы использовать несколько шрифтов для fallback'а (как font-family в css)
  sans: 'Helvetica Neue,Robot'
  # пометить 'Helvetica Neue' как локальный шрифт
  local: 'Helvetica Neue'
---
```

## Fallback шрифтов

Для большинства сценариев вам нужно только указать «специальный шрифт», и Slidev добавит вам fallback шрифты, например:

```yaml
---
fonts:
  sans: 'Robot'
  serif: 'Robot Slab'
  mono: 'Fira Code'
---
```

сбилдится в

```css
.font-sans {
  font-family: "Robot",ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
}
.font-serif {
  font-family: "Robot Slab",ui-serif,Georgia,Cambria,"Times New Roman",Times,serif;
}
.font-mono {
  font-family: "Fira Code",ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;
}
```

Если вы хотите отключить fallback шрифты, то настройте следующим образом

```yaml
---
fonts:
  mono: 'Fira Code, monospace'
  fallback: false
---
```

## Провайдеры

- Параметры: `google` | `none`
- По умолчанию: `google`

В настоящее время поддерживаются только Google Fonts, в будущем мы планируем добавить больше провайдеров. Если указать `none`, то функция автоимпорта будет полностью отключена, и все шрифты будут обрабатываться локально.

```yaml
---
fonts:
  provide: 'none'
---
```


