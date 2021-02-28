const Discord = require("discord.js");

exports.run = function (client, message, args) {

    if(message.author.bot) return;
    
    const insancık = message.mentions.users.first();

    const avatar = new Discord.MessageEmbed()

     .setColor("RANDOM")
     .setTitle("» İşte avatarınız!")
     .setImage(insancık.avatarURL({ dynamic: true, format: "png", size: 1024})) // eğer kullanıcının nitrosu varsa herketli görstermesini sağlar
       return message.channel.send(avatar);

  }

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ["av","avatar"], 
  permLevel: 0 
};

exports.help = {
  name: 'avatar',
  description: 'Avatarınızı gösterir.',
  usage: 'avatar'
};