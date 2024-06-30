# Запись

<<<<<<< HEAD
Slidev имеет встроенную поддержку записи и просмотра камеры. Вы можете использовать их для простой записи презентации.
=======
Slidev has a built-in recording feature, as well as a camera view. You can use them to record your presentation easily in one simple tool rather than juggling a bunch of disparate recording options while also giving a talk.
>>>>>>> 21fdadc17cd2018f65c637e5727de640db5036e3

## Просмотр камеры

Нажмите кнопку <carbon-user-avatar class="inline-icon-btn"/> на панели навигации, чтобы отобразить изображение с камеры в презентации. Вы можете переместить его и настроить его размер, используя меню в правом нижнем углу. Размер и позиция будут сохраняться в `localStorage` и, следовательно, будут иметь актуальные настройки при обновлениях страницы, так что не нужно об этом беспокоиться.

<TheTweet id="1395006771027120133" />

## Запись

Clicking the <carbon-video class="inline-icon-btn"/> button in the navigation panel will bring up a dialog for you. Here you can choose to either record your camera output embedded in your slides or to separate them into two video files.

При нажатии на кнопку <carbon-video class="inline-icon-btn"/> на панели навигации откроется диалоговое окно. Здесь вы можете выбрать запись камеры, встроенную в слайды, либо разделить их на два видеофайла.

Эта функция работает на [RecordRTC](https://github.com/muaz-khan/RecordRTC) и использует [WebRTC API](https://webrtc.org/).

![](/screenshots/recording.png)
