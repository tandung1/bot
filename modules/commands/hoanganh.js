module.exports.config = {
    name:"hoanganh",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "HungCho",
    description: "Kiểm tra thông tin nhs chat.",
    commandCategory: "random-img",
    usages: "hoanganh",
    cooldowns: 5,
    dependencies: {
        "request": "",
        "fs-extra": "",
        "axios": ""
    }
};

module.exports.run = async({ api, event, args, client, Users, Threads, __GLOBAL, Currencies }) => {
    const axios = global.nodemodule["axios"];
    const request = global.nodemodule["request"];
    const fs = global.nodemodule["fs-extra"];
    var link =[
      "https://i.imgur.com/Dlf71Ei.jpg",
      "https://i.imgur.com/DU02fqd.jpg",
      "https://i.imgur.com/mvSETg3.jpg",
      "https://i.imgur.com/8z20YCC.jpg",
      "https://i.imgur.com/CnsdrsU.jpg",
      "https://i.imgur.com/pdpOuXu.jpg",
      "https://i.imgur.com/70rEzja.jpg",
      "https://i.imgur.com/chHL7Ub.jpg",
      "https://i.imgur.com/wTY8I2h.jpg",
      "https://i.imgur.com/1scBc1a.jpg",
      "https://i.imgur.com/PDNSvf2.jpg",
      "https://i.imgur.com/jhXdsyS.jpg",
      "https://i.imgur.com/zsQwqGv.jpg",
      "https://i.imgur.com/kXeylC3.jpg",
      "https://i.imgur.com/YVPf5nj.jpg",
      "https://i.imgur.com/rSywUF6.jpg",
      "https://i.imgur.com/tIbzJ4y.jpg",
      "https://i.imgur.com/JfwUEkb.jpg",
      "https://i.imgur.com/dZod3vv.jpg",
      "https://i.imgur.com/1MQMzfJ.jpg",
      "https://i.imgur.com/GwcY9yq.jpg",
      "https://i.imgur.com/rc1ETyU.jpg",
      "https://i.imgur.com/xhksHnR.jpg",
      "https://i.imgur.com/XPhtIFB.jpg",
      "https://i.imgur.com/4snzhBG.jpg",
      "https://i.imgur.com/66rcD1X.jpg",
      "https://i.imgur.com/Ktx9eON.jpg",
      "https://i.imgur.com/jQrmpJA.jpg",
    ];
    var callback = () => api.sendMessage({ body: `Ảnh của Hoanganh đây \nSố Ảnh hiện có: ${link.length}`, attachment: fs.createReadStream(__dirname + "/cache/5.jpg") }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg"));
    return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname + "/cache/5.jpg")).on("close", () => callback());
};