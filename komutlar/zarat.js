const Discord = require('discord.js');

exports.run = function (bot, message) { // shréwd

      message.channel.send(new Discord.MessageEmbed()
      .setColor(message.guild.me.displayHexColor)
      .setTitle('🎲 Zarın: ' + doMagicDiceVoodoo()));


         function doMagicDiceVoodoo () {

         var zar = ["1", "2", "3", "4", "5", "6"];

         return zar[Math.floor(Math.random()* zar.length)];
          
      }
   

   } // shréwd

exports.conf = {
  enabled: true,
  aliases: ['zarat','zar-at'],
  guildOnly: false,
  permLevel: 0
};

exports.help = {
  name: 'zarat',
  description: 'Zar Atarsınız',
  usage: 'zarat'
};   