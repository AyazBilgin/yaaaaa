const Discord = require('discord.js');
const ayarlar = require("../ayarlar.json")
exports.run = (client, message) => {
  
  const davet = new Discord.MessageEmbed()
  .setColor('#f6ff00')
  .setThumbnail('https://media.discordapp.net/attachments/720029424216440923/735255651638313061/727894683061321759.gif')
  .setDescription(`** Fregas Bot Davet Linki Ve Destek Sunucusu **

**[Bot Davet](https://discord.com/oauth2/authorize?client_id=882636769147904030&scope=bot&permissions=805314622)**
**[Destek Sunucusu](https://discord.gg/Dj5CF27Pfy)** 
**[Bot Sitesi Yakında]**



`)
  message.channel.send(davet)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
}
exports.help = {
  name: "botdavet"
}