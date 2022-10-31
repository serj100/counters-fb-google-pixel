import { gtag } from './counters/gtag.js'
import { pixel } from './counters/pixel.js'
import { yaMetrica } from './counters/yaMetrica.js'
import { setupCookie } from './utils/setupCookie.js'

$(document).ready(() => {
	// Тянем из url в куки gua, pixid и ymc
	setupCookie()

	// GTAG
	gtag()

	// Facebook Pixel
	pixel()

	// Яндекс Метрика
	yaMetrica()
})
