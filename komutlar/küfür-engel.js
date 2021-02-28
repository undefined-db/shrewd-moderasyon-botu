const Discord = require('discord.js');
const { prefix } = require("../ayarlar.json")
const db = require("quick.db")


exports.run = async (client, message, args) => {

     
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Bu komutu kullanmak için yeterli yetkiye sahip değilsin.")

 
    if(!args[0])

     return message.channel.send(new Discord.MessageEmbed()
     .setDescription(`${message.author} Komutu çalıştırmak için \`aç\` veya \`kapat\` demen gerekiyor.`) // Shréwd
     .setColor("0x800d0d")
     .setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true }))
     .setTimestamp())
       .then(x => x.delete({ timeout: 5000 }));


    if(args[0] == "aç") {

      if(db.has(`kufurcum_${message.guild.id}`))
        return message.channel.send(new Discord.MessageEmbed()
         .setDescription(`${message.author} Komut zaten önceden \`açılmış\` \n Kapatmak için: \`${prefix}küfür-engel kapat\``)
         .setColor("0x800d0d")
         .setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true }))
         .setTimestamp())
          .then(x => x.delete({ timeout: 5000 }));

      db.set(`kufurcum_${message.guild.id}`, "acik");
        message.channel.send(new Discord.MessageEmbed()
        .setDescription(`${message.author} Küfür filtresini başarıyla \`açtın\``)
        .setColor("0x800d0d")
        .setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true }))
        .setTimestamp())
         .then(x => x.delete({ timeout: 5000 }));


    } 
     else if(args[0] == "kapat") {

       if(!db.has(`kufurcum_${message.guild.id}`))
         return message.channel.send(new Discord.MessageEmbed()
          .setDescription(`${message.author} Komut zaten önceden \`kapatılmış\` \n Açmak için: \`${prefix}küfür-engel aç\``)
          .setColor("0x800d0d")
          .setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true }))
          .setTimestamp())
           .then(x => x.delete({ timeout: 5000 }));

        db.delete(`kufurcum_${message.guild.id}`);
         message.channel.send(new Discord.MessageEmbed()
           .setDescription(`${message.author} Küfür filtresini başarıyla \`kapattın\``)
           .setColor("0x800d0d")
           .setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true }))
           .setTimestamp())
            .then(x => x.delete({ timeout: 5000 }))           

      }

   }

exports.conf = {
  aliases: ["küfürengel"],
  usage: "küfür-engel"
};

exports.help = {
  name: "küfür-engel"
};


