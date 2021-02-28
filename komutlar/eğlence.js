const Discord = require("discord.js");
const db = require("quick.db");  // shréwd

exports.run = function (client, message) {

      const embed = new Discord.MessageEmbed()
      .setColor("#00ffeb")
      .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true, format: "png", size: 1024}))
      .setTitle("`Eğlence Menüsü`")
      .addField("» `!yazı-yaz`", "Botunuza yazı yazdırırsınız.")
      .addField("» `!zarat`", "Zar atarsınız.")
      .addField("» `!espri`", "Bot çok soğuk bir espri yapar.")
      .addField("» `!şanslısayım`", "Şanslı sayınıza bakarsınız.")
      .addField("» `!ilginçbilgi`", "İlginç bilgi öğrenirsiniz.")
      .addField("» `!sorusor`", "Bota soru sorarsınız.")
      .setTimestamp()
      .setFooter("© 2021 Eğlence Menüsü")
        return message.channel.send(embed);
        
  }  // shréwd

exports.conf = {
  enabled: true,
  aliases: ['eğlence'],
  guildOnly: false,
  permLevel: 0
};

exports.help = {
  name: 'eğlence',
  description: 'Eğlence Komutlarını Gösterir',
  usage: 'eğlence'
};