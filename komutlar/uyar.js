const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {

     if(!message.member.hasPermission("KICK_MEMBERS")) 
     return message.reply("Bu komutu kullanman için **Kullanıcıları At** yetkisine sahip olman gerekiyor")


     let sunucu = message.guild;
     let uyarılcak = message.mentions.users.first() || message.guild.members.cache.get(args[0]); // Uyarı kodunun bile log kanalına göndermesini yaptım aq fdslkşsmanklşasdmklasmlşk
     let sebep = args.slice(1).join(' ')
     let kanal = 'LOG KANAL ID'


      if(!uyarılcak) return message.channel.send("Uyarcağın Kullanıcıyı Belirtirmisin.")

      if(!sebep) return message.channel.send("Uyarma Sebebini Belirtirmisin")

       else 
       uyarılcak.send(`**${sunucu}** Sunucusunda **${sebep}** sebebiyle uyarıldın. Lütfen bir daha tekrarlama!`) // Kullanıcı uyarıldı


      const uyar = new Discord.MessageEmbed()
       .setAuthor(message.author.username, message.author.avatarURL())
       .setTitle("Bir Kullanıcı Uyarıldı!")
       .setColor("RANDOM")
       .addField("Uyaran Yetkili", message.author)
       .addField("Uyarılan Kullanıcı", uyarılcak)
       .addField("Sebep", "`" + sebep + "`")
       .setTimestamp()
       
       client.channels.cache
       .get(kanal)
       .send(uyar)

  }  // shréwd

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["uyarı", "uyarıver",],
  permlevel: 0
};

exports.help = {
  name: "uyar",
  description: "Belirtilen kullanıcıyı özel mesajlarında gözükecek şekilde uyarır.",
  usage: "uyarı"
};
