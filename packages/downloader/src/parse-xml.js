const cheerio = require(`cheerio`)

module.exports = async function parseXml(data){
	const $ = cheerio.load(data, {
		decodeEntities: false,
		xmlMode: true,
	})
	$(`loc`).each((_, el) => {
		const loc = $(el)
		const url_o = loc.text()
		if(url_o){
			const url = url_o.trim()
			this.addToQueue(url)
			const newUrl = this.convertUrl(url)
			loc.html(newUrl)
		}
	})
	const newXml = $.xml()
	return newXml
}
