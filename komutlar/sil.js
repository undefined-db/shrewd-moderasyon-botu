const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {

    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Bu komutu kullanmak için yeterli yetkiye sahip değilsin.")  // shréwd

   if(isNaN(args)) return message.reply("Lütfen bir sayı giriniz.") // isNaN girdğiniz değerin sayı olup olmadığını anlayan bir metod. Eğer !sil qwe yani harf girerseniz hata verecektir

   if(args < 2 || args > 100) return message.reply("Lütfen 2-100 arası silinecek mesaj belirleyin.")  // bunu 200 yapmayın silmez
   message.channel.bulkDelete(Number(args))

     const silindila = new Discord.MessageEmbed() 
      .setColor("RANDOM")  
      .setAuthor(message.member.displayName, message.author.avatarURL({ dynamic : true}))   
      .setDescription(`Başarıyla **${args}** adet mesaj silindi!`)
        return message.channel.send(silindila)
        .then(x => x.delete({ timeout: 5000}))  // shréwd
        
     }

exports.conf = {
  aliases: ["sil", "temizle", "clear"],
  usage: "!sil 1-100",
  description: "Belirtilen mesaj sayısı kadar mesaj temizler."
};

exports.help = {
  name: "sil"
};


