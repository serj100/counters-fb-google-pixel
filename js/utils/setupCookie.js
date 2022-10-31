export const setupCookie = () => {
	let expires = new Date()
	expires.setTime(expires.getTime() + 5 * 24 * 60 * 60 * 1000)

	if (!'{gua}'.includes('{') === true) {
		$.cookie('gua', '{gua}', { expires: expires, path: '/' })
	}

	if (!'{pixid}'.includes('{') === true) {
		$.cookie('pixid', '{pixid}', { expires: expires, path: '/' })
	}

	if (!'{ymc}'.includes('{') === true) {
		$.cookie('ymc', '{ymc}', { expires: expires, path: '/' })
	}
}
