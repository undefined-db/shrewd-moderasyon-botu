const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json")
const db = require("quick.db");

exports.run = function (client, message, args)  {


   const shrewd = new Discord.MessageEmbed()  // shréwd
   .setColor("RANDOM")
   .setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı.`)
   .setTimestamp()


   let tag = ayarlar.tag; // ayarlara koydum tagı burayada koyabilirsiniz -> let tag = "TAGINIZ",
   let tagg = message.guild.members.cache.filter(t => t.user.username.includes(tag)).size;


   let toplam = message.guild.memberCount;


   const sesGanalları = message.guild.channels.cache.filter(c => c.type === "voice")
   let count = 0;

   for (const [id, voiceChannel] of sesGanalları)
    count += voiceChannel.members.size;

  const yazıGanalları = message.guild.channels.cache.filter(text => text.type === "text").size;


  let boost = message.guild.premiumSubscriptionCount;


  let saykrdsm = shrewd.setDescription(`
  
   **<a:adamsin:813160295790805022> Sunucudaki Üye Sayısı;** ${toplam} \n
   **<a:adamsin:813160295790805022> Taglı Üye Sayısı;** ${tagg} \n
   **<a:adamsin:813160295790805022> Ses Kanallarında Bulunan Kullanıcı Sayısı;** ${count} \n
   **<a:adamsin:813160295790805022> Toplam Bulunan Yazı Kanalları;** ${yazıGanalları} \n
   **<a:adamsin:813160295790805022> Sunucudaki Boost Sayısı;** ${boost}`);
    return message.channel.send(saykrdsm);


 } // shréwd

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "say",
  usage: "!say"
};  
