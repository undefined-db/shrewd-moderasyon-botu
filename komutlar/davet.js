const Discord = require("discord.js");

exports.run = async (client, message, args) => {

      const davet = new Discord.MessageEmbed()
       .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true, format: "png", size: 1024}))
       .setTitle("» Davet Linkim!")
       .setDescription("[Davet Et](https://discord.com/oauth2/authorize?client_id=809490314477043753&scope=bot&permissions=8)")
       .setThumbnail("https://cdn.discordapp.com/attachments/814147502945206342/814249228837978132/leazy.png")
       .setFooter("Beni Sunucuna Davet Etmeyi Unutma!")
         return message.channel.send(davet);

   }

exports.conf = {
  enabled: true,
  aliases: ['davet'],
  guildOnly: false,
  permLevel: 0
};

exports.help = {
  name: 'davet',
  usage: 'davet'
};