const request = require('request');

const fs = global.nodemodule["fs-extra"]

module.exports.config = {

  name: "ad",

  version: "1.0.0",

  hasPermssion: 0,

  credits: "JRT",

  description: "Kiểm tra thông tin adminbot",

  commandCategory: "Thông tin",

  usages: "ad",

  cooldowns: 0,

  dependencies: {

"request": ""

}

};
module.exports.run = async({api,event,args,Users,global,Currencies}) => {

var callback = () => api.sendMessage(

  {body:`[⚜️]=== 『 INFORMATION ADMIN 』 ===[⚜️]
◆━━━━━━━━━━━━━━━━◆


[👀]➜ Tên: Nguyễn Hoàng Anh
[💮]➜ Biệt danh: KEN 
[❎]➜ Ngày tháng năm sinh: 27/01/2001 
[👤]➜ Giới tính: Nam
[💫]➜ Chiều cao cân nặng: 1m75 x 68 kg
[💘]➜ Mối quan hệ: Độc thân
[🌎]➜ Quê quán: Hà Nội
[🌸]➜ Tính cách: Hòa đồng, năng nổ, dứt khoát, thân thiện và hài hước
[🌀]➜ Sở thích: GYM,Football

[⚜️]=== 『 CONTACT 』 ===[⚜️]
◆━━━━━━━━━━━━━━━━◆

[👉]➜ Information: https://bio.link/ken2k
[☎]➜ SĐT & Zalo: 0338303710
0[🌐]➜ Facebook: https://www.facebook.com/kenj.2k
[✉️]➜ Email: CSCD113@gmail.com

[⚜️]=== 『 PROBLEM 』 ===[⚜️]
◆━━━━━━━━━━━━━━━━◆


[❗]➜ Mọi thắc mắc hay bot không hoạt động có thể hỏi trực tiếp admin theo các link ở trên.
[📌]➜ Hãy đồng hành cùng BOT JRT và mình nhé. Cảm ơn mọi người <3

✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏

[📝]➜ Bot được điều hành bởi JRT`,

    attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => 

    fs.unlinkSync(__dirname + "/cache/1.png"));  

      return request(

        encodeURI(`https://graph.facebook.com/${100081290556155}/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(

fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());

       };