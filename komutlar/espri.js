const Discord = require("discord.js");

exports.run = function (client, message, args) {   // shréwd

   var espriii = [

"Bacaktaki 10' a ne denir? \n **Pantolon**", // istediğinizi ekleyin la bende kopyaladım ztn bi yerden espriler yerini SDNKLJSDLKSADJKSKDSAL
"Yıkanan ton balığına ne denir? \n **Washington**",
"Gülen ördeğe ne denir? \n **Kıkır-duck**",
"Örümcek adam ağ atamıyormuş neden? \n **ÇÜNKÜ AĞ BAĞLANTISI KOPMUŞ.**",
"En çok eşek yavrusu nerde bulunur? \n **SPA MERKEZİNDE**",
"Kırmızı giyen erkeğe ne denir? \n **ALBAY**",
"İneklerin sevmediği element? \n **AZ-OT**",
"Dört tarafı suyla çevrili çaya ne denir? \n **ADAÇAYI**", 
"Pişmemiş burgere ne denir?\n**HAMBURGER**",
"Baykuşlar vedalaşırken ne der?\n**BAY BAY BAYKUŞ**",
"Yemeğin suyuna kim bandı?\n**KOLİ BANDI**",
"Bebeğe patik giydirmeye çalışmışlar ama giymemiş neden?\n**BEBEK ANTİPATİKMİŞ**"];
  
   var esrpiler = espriii[Math.floor(Math.random()* espriii.length)];
    return message.channel.send(`${esrpiler}`);

  }  // shréwd  

exports.conf = {
  enabled: true,
  aliases: ['espri'],
  guildOnly: false,
  permLevel: 0
};

exports.help = {
  name: 'espri',
  description: 'Bot Espri Yapar',
  usage: 'espri'
};   