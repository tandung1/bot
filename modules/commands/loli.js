module.exports.config = {
	name: "loli",
	version: "1.1.1",
	hasPermssion: 0,
	credits: "JRT",
	description: "Random ảnh loli",
	commandCategory: "random-img",
	usages: "loli",
	cooldowns: 3
};

module.exports.run = async ({ api, event }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
		axios.get('https://jrt-api.nguyenhaidang.ml/loli').then(res => {
		let callback = function () {
					api.sendMessage({
						body : ``,
						attachment: fs.createReadStream(__dirname + '/cache/gaidep.jpg')
					}, event.threadID, () => fs.unlinkSync(__dirname + '/cache/gaidep.jpg'), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + '/cache/gaidep.jpg')).on("close", callback);
			})
}