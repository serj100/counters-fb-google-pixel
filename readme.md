# Три в одном. Facebook pixel, Google tag и Yandex Метрика (Keitaro)

![counters_Pic](counters_Pic.png)

### 1 variant

1 variant - для офферов, где все действия происходят на одной странице, затем по результату этих действйи срабатывает handler:

```html
	<script>
		// хендлер сабмита в форме
		$('#form__steps').submit(function (event) {
			fbq('track', 'Lead')
			gtag('event', 'Lead')
			console.log("отработал fbq('track', 'Lead') и gtag('event', 'Lead')")
		})
	</script>
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

Содержимое файла **first page.html** устанавливается в index.html (php), а содержмое файла **second page.html** устанавливается в странице «спасибо».



## Как попадают значения id счетчиков в скрипт?

### Через url, пример:

```url
https://domain.com?pixid=388666732323826&gua=UA-232124918-1&ymc=90910377
```
