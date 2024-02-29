# Использование тем

Менять темы в Slidev очень легко. Всё, что вам нужно сделать, это добавить поле `theme:` в frontmatter.

```yaml
---
theme: seriph
---
```

<<<<<<< HEAD
Вы можете запустить сервер, который предложит вам установить тему автоматически
=======
> **Note**
> To install a theme from a scoped package, you will have to give the full namespace e.g `@organization/slidev-theme-name`

You can start the server, which will prompt you to install the theme automatically
>>>>>>> 15820b064d1f419ed06cd798ae4b6dfe0c230e94

<div class="language-md">
<pre>
<span class="token keyword">?</span> The theme <span class="token string">"@slidev/theme-seriph"</span> was not found in your project, do you want to install it now? › (Y/n)
</pre>
</div>

или установите тему вручную через

```bash
$ npm install @slidev/theme-seriph
```

И всё, наслаждайтесь новой темой! Для получения дополнительной информации об использовании вы можете прочитать README-файл темы.

Хотите поделиться своей темой? Узнайте подробнее [how to write a theme](/themes/write-a-theme).

## Извлечение темы

Если вы хотите получить полный контроль над текущей темой, вы можете **извлечь** её в свою локальную файловую систему и изменить её по своему усмотрению. Выполнив следующую команду

```bash
$ slidev theme eject
```

<<<<<<< HEAD
Тема, которую вы сейчас используете, будет извлечена в `./theme`, а frontmatter будет изменён на
=======
It will eject the theme you are using currently into `./theme`, and changed your frontmatter to
>>>>>>> 15820b064d1f419ed06cd798ae4b6dfe0c230e94

```yaml
---
theme: ./theme
---
```

Это также может быть полезно, если вы хотите создать тему на основе существующей. Если собираетесь делать, не забудьте упомянуть оригинальную тему и автора :)

## Локальная тема

Как вы могли узнать из предыдущего раздела, у вас может быть локальная тема для вашего проекта. Укажите **относительный путь** в поле вашей темы.

```yaml
---
theme: ./path/to/theme
---
```

Подробнее на странице [создания темы](/themes/write-a-theme).
