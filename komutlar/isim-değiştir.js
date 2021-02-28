const Discord = require("discord.js");

exports.run = async (client, message, args) => {

if (!message.member.hasPermission("KICK_MEMBERS"))
   return message.reply(`Bu yetkiyi kullanabilmek için **Kullanıcıları At** yetkisine sahip olmak zorundasın.`); // shréwd


     const isimcik = message.mentions.members.first()

     if(!isimcik) return message.channel.send("İsmini Değiştireceğin Kişiyi Etiketlermisin.")


     const yeniad = args.splice(1, args.length-1).join(" ")
      
      isimcik.setNickname(yeniad).then(() => {
          return message.channel.send(`**${isimcik.user.username}** Adlı Kişinin Adı Başarıyla \`${yeniad}\` Olarak Değiştirildi!`);
      }) .catch(() => { // Eğer hata olursa alttakini dicek

          return message.channel.send(`**${isimcik.user.username}** Adlı Kişinin Yetkisi Benden Daha Yüksek O Yüzden Adını Değişemiyorum.`);
      })

   } // shréwd



exports.conf = {
  aliases: ["isim-değiştir"],
  permLevel: 0
};

exports.help = {
  name: "isim"
};

  