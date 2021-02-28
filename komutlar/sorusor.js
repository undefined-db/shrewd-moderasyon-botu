const Discord = require("discord.js");

exports.run = async (client, message, args) => {

   let cevaplar = [
    "Evet", 
    "Hayır", 
    "Muhtemelen", 
    "İmkansız", 
    "Ne yazık ki hayır", 
    "Maalesef",  
    "Tabii ki", 
    "Belki de", 
    "Şimdi söylemeyeceğim",
    "Emin Değilim",
    "Cevap Vermicem"   
   ];

   let soru = args.slice(0).join(' ')
   let cevap = cevaplar[Math.floor(Math.random()*cevaplar.length)];

   if(!soru) return message.channel.send("Soru Sorarmısın Lütfen?") // eğer soru sormazsanız
    else message.channel.send(`${cevap}`)

  }
  
exports.conf= {
    enabled: false,
    guildOlny: false,
    aliases: ["soru-sor"],
    permLevel: 0
  };
  
  exports.help = {
    name: "sorusor"
  };