const Discord = require("discord.js");

exports.run = async (client, message) => {

    message.channel.send("**🎆 Şanslı Sayını Buluyorum! 🎇**")
    .then(message => {

  var şanslısayıcım = [
    "🎉 Senin Şanslı Sayın 1 🎲",
    "🎉 Senin Şanslı Sayın 2 🎲",
    "🎉 Senin Şanslı Sayın 3 🎲",
    "🎉 Senin Şanslı Sayın 4 🎲",
    "🎉 Senin Şanslı Sayın 5 🎲",
    "🎉 Senin Şanslı Sayın 6 🎲",
    "🎉 Senin Şanslı Sayın 7 🎲",
    "🎉 Senin Şanslı Sayın 8 🎲",
    "🎉 Senin Şanslı Sayın 9 🎲",
    "🎉 Senin Şanslı Sayın 10 🎲",
    "🎉 Senin Şanslı Sayın 11 🎲",
    "🎉 Senin Şanslı Sayın 12 🎲",
    "🎉 Senin Şanslı Sayın 13 🎲",
    "🎉 Senin Şanslı Sayın 14 🎲",
    "🎉 Senin Şanslı Sayın 15 🎲",
    "🎉 Senin Şanslı Sayın 16 🎲",
    "🎉 Senin Şanslı Sayın 17 🎲",
    "🎉 Senin Şanslı Sayın 18 🎲",
    "🎉 Senin Şanslı Sayın 19 🎲",
    "🎉 Senin Şanslı Sayın 20 🎲",  
    "🎉 Senin Şanslı Sayın 21 🎲",
    "🎰 Senin Şanslı Sayın Yok Ki"
  ];

   var sayı = şanslısayıcım[Math.floor(Math.random()*şanslısayıcım.length)];
    message.edit(`${sayı}`)

   }); 
 }

exports.conf = {
  enabled: true,
  aliases: ['şs','şanslısayım'],
  guildOnly: false,
  permLevel: 0
};

exports.help = {
  name: 'şanslı-sayım',
  description: 'Zar Atarsınız',
  usage: 'şanslı-sayım'
};   