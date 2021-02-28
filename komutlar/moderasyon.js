const Discord = require("discord.js");
const db = require("quick.db");

exports.run = function (client, message, args) {
  
   const mod = new Discord.MessageEmbed()
     .setColor("#00ffeb")
     .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true, format: "png", size: 1024}))
     .setTitle("`Moderasyon Menüsü`")
     .setDescription(`Kod Açıklaması: **Bu Kodlar Tamamen Ücretsiz Bir Şekilde Sunucunuzu Yönetmenizi Sağlar**`)
     .addField("» `!ban`", "Kullanıcıyı sunucudan yasaklarsınız.")
     .addField("» `!unban`", "Kullanıcının sunucudaki banını açarsınız.")
     .addField("» `!kick`", "Etiketlediğiniz üyeyi sunucudan atarsınız.")
     .addField("» `!uyar`", "Uyarılacak kullanıcının özel mesajına uyarı mesajı gönderirsiniz.")
     .setTimestamp()
     .setFooter("© 2021 Moderasyon Menüsü")
      return message.channel.send(mod);

 } // shréwd

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], 
  permLevel: 0 
};

exports.help = {
  name: 'moderasyon',
  description: 'Moderasyon komutlarını gösterir.',
  usage: 'moderasyon'
};
