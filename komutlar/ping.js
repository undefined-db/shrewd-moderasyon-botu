const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("ms");

exports.run = function (client, message) {
     
      let pinglen = new Discord.MessageEmbed()  // shréwd
       .setColor("RANDOM")
       .addField("**__Ping Değerim__**, ", `**${client.ws.ping}** ms olarak hesaplandı.`, true);
         return message.channel.send(pinglen)
         .then(x => x.delete({ timeout: 5000}))

  } // shréwd

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], 
  permLevel: 0 
};

exports.help = {
  name: 'ping',
  usage: 'ping'
};