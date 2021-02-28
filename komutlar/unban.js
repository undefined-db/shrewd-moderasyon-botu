const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
   
    
     if (!["YETKİLİ ROL ID"].some(role => message.member.roles.cache.get(role)) &&

     !message.member.hasPermission("ADMINISTRATOR")) 
        return message.channel.send(new Discord.MessageEmbed()
        .setDescription(`${message.author} Komutu kullanmak için yetkin bulunmamakta.`)
        .setColor("0x800d0d")
        .setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true }))
        .setTimestamp())
         .then(x => x.delete({ timeout: 5000 }));

         //-----------------------KOD-BAŞLANGIÇ---------------------\\

         let member = args[0]
         let sebep = args.slice(1).join(' ')
         let guild = message.guild;
         let kanal = 'LOG KANAL ID'

         if(!member) return message.channel.send("Banını Kaldıracağın Kişinin ID'sini Yazarmısın.")
         

         else
         guild.members.unban(member) // Kullanıcının banı kalktı 
          message.channel.send(new Discord.MessageEmbed()
            .setDescription(`${message.author} Tarafından ${member} adlı kişinin banı kaldırıldı.`)
            .setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true }))
            .setColor("0x348f36"))
            .then(x => x.delete({ timeout: 5000 }))

         message.react("✅").then(() => {
         setTimeout(function () {

         message.delete()
         },5000);

         })

         
          const kaldırıldı = new Discord.MessageEmbed()
           .setAuthor(message.author.username, message.author.avatarURL())
           .setTitle("Bir Kullanıcının Banı Kalktı!")
           .setColor("RANDOM")
           .addField("Banı Kaldıran Yetkili", message.author)
           .addField("Banı Kaldırılan Kullanıcı", "`" + member + "`")
           .addField("Sebep", "`" + sebep + "`")
           .setTimestamp()
          
           client.channels.cache
           .get(kanal)
           .send(kaldırıldı)  

  }

exports.conf = {
  enabled: true,
  aliases: ['unban'],
  guildOnly: false,
  permLevel: 0
};

exports.help = {
  name: 'unban',
  usage: 'unban'
};
  