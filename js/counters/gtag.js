export const gtag = () => {
	const guaCookie = $.cookie('gua') ? $.cookie('gua') : undefined
	$.getScript(`https://www.googletagmanager.com/gtag/js?id=${guaCookie}`)
		.done(() => {
			window.dataLayer = window.dataLayer || []
			const gtag = () => dataLayer.push(arguments)
			gtag('js', new Date())
			gtag('config', guaCookie)
			gtag('event', 'Lead')
			console.log('GTAG Success')
		})
		.fail(() => {
			console.log('GTAG Err')
		})
}
