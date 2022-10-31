# Три в одном. Facebook pixel, Google tag и Yandex Метрика (Keitaro)

![counters_Pic](counters_Pic.png)

Для офферов со страницей «спасибо».  

Добавить в index.html (php):

```html
     <meta name="referrer" content="no-referrer" />
	<script
		src="https://code.jquery.com/jquery-3.6.1.min.js"
		integrity="sha256-o88AwQnZB+VDvE9tvIXrMQaPlFFSUTR+nldQm1LuPXQ="
		crossorigin="anonymous"
	></script>
	<script
		src="https://cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.min.js"
		integrity="sha512-3j3VU6WC5rPQB4Ld1jnLV7Kd5xr+cq9avvhwqzbH/taCRNURoeEpoPBK9pDyeukwSxwRPJ8fDgvYXd6SkaZ2TA=="
		crossorigin="anonymous"
		referrerpolicy="no-referrer"
	></script>
	<!-- блок сохранения id счетчиков в куки из url -->
	<script>
		(()=>{"use strict";$(document).ready((function(){var e;(e=new Date).setTime(e.getTime()+432e6),1==!"{gua}".includes("{")&&$.cookie("gua","{gua}",{expires:e,path:"/"}),1==!"{pixid}".includes("{")&&$.cookie("pixid","{pixid}",{expires:e,path:"/"}),1==!"{ymc}".includes("{")&&$.cookie("ymc","{ymc}",{expires:e,path:"/"})}))})();
	</script>
```

Добавить в страницу "Спасибо". 

```html
	<meta name="referrer" content="no-referrer" />
	<script
		src="https://code.jquery.com/jquery-3.6.1.min.js"
		integrity="sha256-o88AwQnZB+VDvE9tvIXrMQaPlFFSUTR+nldQm1LuPXQ="
		crossorigin="anonymous"
	></script>
	<script
		src="https://cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.min.js"
		integrity="sha512-3j3VU6WC5rPQB4Ld1jnLV7Kd5xr+cq9avvhwqzbH/taCRNURoeEpoPBK9pDyeukwSxwRPJ8fDgvYXd6SkaZ2TA=="
		crossorigin="anonymous"
		referrerpolicy="no-referrer"
	></script>


<script>
  (()=>{"use strict";var e="undefined"==typeof arguments?void 0:arguments;$(document).ready((function(){var o;o=$.cookie("gua")?$.cookie("gua"):void 0,$.getScript("https://www.googletagmanager.com/gtag/js?id=".concat(o)).done((function(){window.dataLayer=window.dataLayer||[];var o=function(){return dataLayer.push(e)};o(new Date),o(),o(),console.log("GTAG Success")})).fail((function(){console.log("GTAG Err")})),function(){try{var e,o,t,c=$.cookie("pixid")?$.cookie("pixid"):void 0,n=window,a=document,r="script";if(n.fbq)return;e=n.fbq=function(){e.callMethod?e.callMethod.apply(e,arguments):e.queue.push(arguments)},n._fbq||(n._fbq=e),e.push=e,e.loaded=!0,e.version="2.0",e.queue=[],(o=a.createElement(r)).async=!0,o.src="https://connect.facebook.net/en_US/fbevents.js",(t=a.getElementsByTagName(r)[0]).parentNode.insertBefore(o,t),fbq("init",c),fbq("track","Lead"),console.log("Facebook Pixel Success")}catch(r){console.log("Facebook Pixel Err")}}(),function(){try{var e,o,t=$.cookie("ymc")?$.cookie("ymc"):void 0,c=window,n=document,a="script",r="https://mc.yandex.ru/metrika/tag.js";c.ym=c.ym||function(){(c.ym.a=c.ym.a||[]).push(arguments)},c.ym.l=1*new Date;for(var i=0;i<document.scripts.length;i++)if(document.scripts[i].src===r)return;e=n.createElement(a),o=n.getElementsByTagName(a)[0],e.async=1,e.src=r,o.parentNode.insertBefore(e,o),ym(t,"init",{clickmap:!0,trackLinks:!0,accurateTrackBounce:!0}),console.log("Яндекс Метрика Success")}catch(n){console.log("Яндекс Метрика Err")}}()}))})();
</script>
```

## Как попадают значения id счетчиков в скрипт?

### Через url, пример:

```url
https://domain.com?pixid=388666732323826&gua=UA-232124918-1&ymc=90910377
```

 

## Как скрипт работает?

На странице **index.html (php)** значения pixid, gua и ymc поступают в куки. Затем, на последующей странице "спасибо" эти значения считываются скриптами счетчиков. 

Весь структуированный проект находится в папке **js** репозиторя. Для сборки подойдет любой сборщик на подобие связки Gulp + WebPack + Babel.

