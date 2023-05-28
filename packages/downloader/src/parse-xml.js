const cheerio = require(`cheerio`)

module.exports = async function parseXml(data){
	const $ = cheerio.load(data, {
		decodeEntities: false,
		xmlMode: true,
	})
	$(`loc`).each((_, el) => {
		const loc = $(el)
		console.log(`Loc: "${loc}"`) 
		const url = loc.text().strip()
		console.log(`Url parsed: "${url}"`)
		if(url){
			console.log(`Doing the other stuff now`)
			this.addToQueue(url)
			const newUrl = this.convertUrl(url)
			loc.html(newUrl)
			console.log(`Finito`)
		}
	})
	const newXml = $.xml()
	return newXml
}
