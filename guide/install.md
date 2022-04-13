# Установка

## Стартовый шаблон

> Для Slidev требуется [**Node.js >=14.0**](https://nodejs.org/)

Наилучшим способом начать, будет использование нашего официального стартового шаблона.

Через NPM:

```bash
$ npm init slidev@latest
```

Через Yarn:

```bash
$ yarn create slidev
```

Следуйте подсказкам и презентация автоматически откроется на http://localhost:3030/

Шаблон также содержит базовую настройку и короткую демонстрацию с инструкциями о том, как начать работу со Slidev.

## Ручная установка

Если вы по-прежнему хотите установить Slidev вручную или хотите интегрировать его в свои существующие проекты, вы можете сделать:

```bash
$ npm install @slidev/cli @slidev/theme-default
```
```bash
$ touch slides.md
```
```bash
$ npx slidev
```

> Обратите внимание, если вы используете [pnpm](https://pnpm.io), вам нужно включить [shamefully-hoist](https://pnpm.io/npmrc#shamefully-hoist) опцию для корректной работы Slidev:
>
> ```bash
> echo 'shamefully-hoist=true' >> .npmrc
> ```

## Глобальная установка

> Доступно с версии v0.14

Вы можете установить Slidev глобально с помощью следующей команды

```bash
$ npm i -g @slidev/cli
```

И далее использовать `slidev` в любом месте, без создания проекта каждый раз.

```bash
$ slidev
```

Эта команда также попытается использовать локальный `@slidev/cli`, если найдёт его в `node_modules`.

## Установка на Docker

<<<<<<< HEAD
Если вам нужен быстрый способ запуска презентации в контейнерах, вы можете использовать предварительно созданный [docker](https://hub.docker.com/r/stig124/slidev) образ, поддерживаемый [stig124](https://github.com/Stig124), либо создать свой собственный.

Более подробно в [slidevjs/container repo](https://github.com/slidevjs/container).
=======
If you need a rapid way to run a presentation with containers, you can use the prebuilt [docker](https://hub.docker.com/r/tangramor/slidev) image maintained by [tangramor](https://github.com/tangramor), or build your own.

Just run following command in your work folder:

```bash
docker run --name slidev --rm -it \
    --user node \
    -v ${PWD}:/slidev \
    -p 3030:3030 \
    tangramor/slidev:latest
```

If your work folder is empty, it will generate a template `slides.md` and other related files under your work folder, and launch the server on port `3030`. 

You can access your slides from http://localhost:3030/


### Build deployable image

Or you can create your own slidev project to a docker image with Dockerfile:

```Dockerfile
FROM tangramor/slidev:latest

ADD . /slidev

```

Create the docker image: `docker build -t myppt .`

And run the container: `docker run --name myslides --rm --user node -p 3030:3030 myppt`

You can visit your slides from http://localhost:3030/


### Build hostable SPA (Single Page Application)

Run command `docker exec -i slidev npx slidev build` on the running container `slidev`. It will generate static HTML files under `dist` folder.


#### Host on Github Pages

You can host `dist` in a static web site such as [Github Pages](https://tangramor.github.io/slidev_docker/) or Gitlab Pages. 

Because in Github pages the url may contain subfolder, so you need to modify the generated `index.html` to change `href="/assets/xxx` to `href="./assets/xxx`. Or you may use `--base=/<subfolder>/` option during the build process, such as: `docker exec -i slidev npx slidev build --base=/slidev_docker/`.

And to avoid Jekyll build process, you need to add an empty file `.nojekyll`.


#### Host by docker

You can also host it by yourself with docker:

```bash
docker run --name myslides --rm -p 80:80 -v ${PWD}/dist:/usr/share/nginx/html nginx:alpine
```

Or create a static image with following Dockerfile:

```Dockerfile
FROM nginx:alpine

COPY dist /usr/share/nginx/html

```

Create the docker image: `docker build -t mystaticppt .`

And run the container: `docker run --name myslides --rm -p 80:80 mystaticppt`

You can visit your slides from http://localhost/


Refer to the [tangramor/slidev_docker](https://github.com/tangramor/slidev_docker) for more details.
>>>>>>> 9fa6829bca1bd8a2262cbc20eb2759d08a0f11fa
