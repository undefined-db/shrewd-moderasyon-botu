  const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message) => {

    const embed = new Discord.MessageEmbed()
    .setColor("#00ffeb")
    .setTitle("`Kullanıcı Komutları`")
    .addField("» `!avatar`", "Avatarınıza bakarsınız.")
    .addField("» `!istatistik`", "Botun istatistiklerinine bakarsınız.")
    .addField("» `!kullanıcıbilgi`", "Etiketlediğiniz kişinin bilgilerine bakarsınız.")
    .addField("» `!ping`", "Botun ping değerine bakarsınız.")
    .addField("  `!afk`", "Afk olursunuz.")
    .addField("» `!toplam-komut`", "Botta bulunan toplam komutlara bakarsınız.")
    .setTimestamp()
    .setFooter("© 2021 Kullanıcı Komutları")
      return message.channel.send(embed);
      
}

exports.conf = {
  enabled: true,
  aliases: ['kullanıcı'],
  guildOnly: false,
  permLevel: 0
};

exports.help = {
  name: 'kullanıcı',
  description: 'Kullanıcı Komutlarını Gösterir',
  usage: 'kullanıcı'
};