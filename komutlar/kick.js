const Discord = require("discord.js");
const db = require("quick.db");

exports.run = function (client, message, args) {

    if (!message.member.hasPermission("KICK_MEMBERS"))
      return message.reply(`Bu yetkiyi kullanabilmek için **Kullanıcıları At** yetkisine sahip olmak zorundasın.`);


      let kisi = message.mentions.users.first() || message.guild.members.cache.get(args[0]);  // shréwd
      let sebep = args.slice(1).join(' ');

      if(!kisi) return message.reply("Kickleyeceğin kişiyi belirtirmisin?")  // shréwd
      .then(x => x.delete({ timeout: 5000}))

      if(!sebep) return message.reply("Sebebini belirtirmisin?")

      if(!message.guild.member(kisi).kickable)
        return message.reply("Bu kişiyi kickleyemezsin!")

         else
         message.guild.member(kisi).kick(sebep); // Kullanıcı kicklendi


          const kanal = message.guild.channels.cache.find(knl => knl.id === "LOG KANAL ID")
          
          const kickkrdsm = new Discord.MessageEmbed()
           .setColor("RANDOM")
           .setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
           .addField("Kicklenen kişi ve sebebi", `Kicklenen üye  **${kisi}** kicklenme sebebi **${sebep}**`)
           .setTimestamp()
           .setFooter("")
             kanal.send(kickkrdsm);

  }

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], 
  permLevel: 0 
};

exports.help = {
  name: 'kick',
  usage: 'kick'
};
