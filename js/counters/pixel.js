export const pixel = () => {
	try {
		const pixidCookie = $.cookie('pixid') ? $.cookie('pixid') : undefined
		const f = window
		const b = document
		const e = 'script'
		const v = 'https://connect.facebook.net/en_US/fbevents.js'
		let n, t, s
		if (f.fbq) return
		n = f.fbq = function () {
			n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)
		}
		if (!f._fbq) f._fbq = n
		n.push = n
		n.loaded = !0
		n.version = '2.0'
		n.queue = []
		t = b.createElement(e)
		t.async = !0
		t.src = v
		s = b.getElementsByTagName(e)[0]
		s.parentNode.insertBefore(t, s)

		fbq('init', pixidCookie)
		fbq('track', 'Lead')
		console.log('Facebook Pixel Success')
	} catch (e) {
		console.log('Facebook Pixel Err')
	}
}
