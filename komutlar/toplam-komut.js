const Discord = require("discord.js"); // shréwd

exports.run = function(client, message, args) {

    const toplmkmt = new Discord.MessageEmbed()
     .setColor("RANDOM")
     .setTitle("Toplam Komut")
     .setDescription(`Bottaki toplam komut sayısı **${client.commands.size}**`)  // shréwd
       return message.channel.send(toplmkmt);

  }

exports.conf= {
    enabled: false,
    guildOlny: false,
    aliases: ["toplam-komut", "komut-sayısı", "komutsayısı"],
    permLevel: 0
  };
  
  exports.help = {
    name: "toplamkomut"
  };