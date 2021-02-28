const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => { // shréwd

  let yazı = args.slice(0).join(' ')

   if(!yazı) return message.channel.send("**Lütfen yazı yazarmısın?**")
    else {
        return message.channel.send(yazı)
    }
 }

module.exports.conf = { // shréwd
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 0
};

module.exports.help = {
 name: "yazı-yaz",
 description: "Botunuza Yazı Yazdırırsınız",
 usage: "yazı-yaz"
};