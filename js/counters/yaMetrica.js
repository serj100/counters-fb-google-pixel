export const yaMetrica = () => {
	try {
		const ymcCookie = $.cookie('ymc') ? $.cookie('ymc') : undefined
		const m = window
		const e = document
		const t = 'script'
		const r = 'https://mc.yandex.ru/metrika/tag.js'
		const i = 'ym'
		let k, a

		m[i] =
			m[i] ||
			function () {
				;(m[i].a = m[i].a || []).push(arguments)
			}
		m[i].l = 1 * new Date()
		for (var j = 0; j < document.scripts.length; j++) {
			if (document.scripts[j].src === r) {
				return
			}
		}
		;(k = e.createElement(t)),
			(a = e.getElementsByTagName(t)[0]),
			(k.async = 1),
			(k.src = r),
			a.parentNode.insertBefore(k, a)

		ym(ymcCookie, 'init', {
			clickmap: true,
			trackLinks: true,
			accurateTrackBounce: true,
		})
		console.log('Яндекс Метрика Success')
	} catch (e) {
		console.log('Яндекс Метрика Err')
	}
}
