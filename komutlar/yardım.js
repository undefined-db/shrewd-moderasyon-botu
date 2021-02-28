const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message) => {

     const embed = new Discord.MessageEmbed()  // shréwd
      .setColor("#00ffeb")
      .setTitle("📋 `Yardım Menüsü`")
      .setDescription("**BAĞLANTILAR**\n[Discord](https://discord.gg/qvbQ9MWmrZ)\n[GitHub](https://github.com/undefined-db)\n[YouTube](https://www.youtube.com/channel/UC9D_UaoIspUbU-yA2t914-g)\n[Davet Et](https://discord.com/oauth2/authorize?client_id=809490314477043753&scope=bot&permissions=8)")
      .addField("» `!moderasyon`", "Moderasyon menüsünü görüntülersiniz.")  // shréwd
      .addField("» `!eğlence`", "Eğlence menüsünü görüntülersiniz.")
      .addField("» `!kullanıcı`", "Kullanıcı komutlarına bakarsınız.")
      .setTimestamp()
      .setFooter("")
        return message.channel.send(embed);
        
  }

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["yardım", "help",],
  permlevel: 0
};

exports.help = {
  name: "yardım",
  usage: "yardım"
};