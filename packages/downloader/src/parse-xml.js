const cheerio = require(`cheerio`)

module.exports = async function parseXml(data){
	const $ = cheerio.load(data, {
		decodeEntities: false,
		xmlMode: true,
	})
	$(`loc`).each((_, el) => {
		const loc = $(el)
		console.log(`Loc: "${loc}"`) 
		const url_o = loc.text()
		console.log(`Url parsed: "${url}"`)
		if(url_o){
			console.log(`Doing the other stuff now`)
			const url = url_o.trim()
			this.addToQueue(url)
			const newUrl = this.convertUrl(url)
			loc.html(newUrl)
			console.log(`Finito`)
		}
	})
	const newXml = $.xml()
	return newXml
}
