# Три в одном. Facebook pixel, Google tag и Yandex Метрика

![image-20221025120335800](countersPic.png)

### 1 variant

1 variant - для офферов, где все действия происходят на одной странице, затем по результату этих действйи срабатывает handler:

```js
// хендлер сабмита в форме
$('.form__steps').submit(function (event) {
	fbq('track', 'Lead')
	console.log("отработал fbq('track', 'Lead')")
})
```

Для работы хендлера нужно добавить атрибут id к форме, пример:

```html
<form
	action="sendData.php"
	class="form__steps" // вышеуказанный атрибут.
	method="post"
	name="feedback"
> </form>
```

### 2 variant

2 variant - для офферов со страницей «спасибо».

Содержимое файла **head.html** устанавливается в index.html (php), а содержмое файла **before end tag body.html** устанавливается перед закрывающим тегом **body**.