const cheerio = require(`cheerio`)

module.exports = async function parseXml(data){
	const $ = cheerio.load(data, {
		decodeEntities: false,
		xmlMode: true,
	})
	$(`loc`).each((_, el) => {
		const loc = $(el)
		console.log(`Loc: "${loc}"`) 
		const url = loc.text()
		console.log(`Url parsed: "${url}"`)
		if(url){
			this.addToQueue(url)
			const newUrl = this.convertUrl(url)
			loc.html(newUrl)
		}
	})
	const newXml = $.xml()
	return newXml
}
