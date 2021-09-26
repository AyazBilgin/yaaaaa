const db = require("croxydb");
const Discord = require('discord.js');
const spallers = require("../ayarlar.json");
const ayarlar = require("../ayarlar.json");
let prefix = ayarlar.prefix
exports.run = async (client, message, args) => { 
    let karaliste = db.fetch(`ckaraliste.${message.author.id}`)
 const westraben = new Discord.MessageEmbed()
 .setColor("#f6ff00")
 .setDescription(` **${karaliste}** sebebiyle karalisteye alınmışsın!\nBeyaz listeye alınmak istiyorsan [BURAYA](https://discord.gg/Dj5CF27Pfy) gelebilirsin!`)
  if(karaliste) 
    return message.channel.send(westraben)
  
  if(db.fetch(`bakim`)) {
  const bakim = new Discord.MessageEmbed()
  .setColor("#f6ff00")
.setThumbnail(message.author.displayAvatarURL({dynamic : true}))
  .setTitle('Üzgünüm Bot Bakımda')
  .addField('Bot Şuan Bakımdadır Lütfen Bekleyin.','Bot Ne Durumda Yada Botla İlgili Güncelleme Ve Duyurular İçin Destek Sunucumuza Gelmeyi Unutmayınız.')
  .addField('İşte Destek Sunucum',"[Destek Sunucusu](https://discord.gg/Dj5CF27Pfy)")
  .setFooter('Üzgünüm...')
  .setImage('https://lh3.googleusercontent.com/proxy/gAN4I19oqqabXd_VIiwg5or-ITh4XxJTRNJA1ot0EIHPiBpxC74Atj4wNIcFes1N3VcE8WnOk6fIN29BChqNbj4lj9dIF2jiI7MBV6U8v842LA')
if(message.author.id != "") return message.channel.send(bakim)

}
let eklenti = new Discord.MessageEmbed()  
.setAuthor('Fregas Bot Yardım Menüsü',message.author.displayAvatarURL({dynamic : true}))
.setThumbnail('')
.setImage("https://api.creavite.co/out/be509ef5-c75d-42e2-97b1-0dcf2893a247_standard.gif")
.setColor('#f6ff00')
.addField( `**╔═══════════◥◣❖◢◤════════════╗**`,
    ` **║ Bilgilendirme.**
**║ [Botu Davet Et](https://discord.com/oauth2/authorize?client_id=882636769147904030&scope=bot&permissions=805314622)**
**║ [Destek](https://discord.gg/jpCXm6HugQ)**
**║ Bot Sitesi (Yakında)**
**╚═══════════◥◣❖◢◤════════════╝**
   `)
.addField(` __Kayıt Komutları__`,` \`${prefix}kayıt\``,true)
.addField(` __Seviye Komutları__`,` \`${prefix}seviye\` `,true)
.addField(` __Yetkili Komutları__`,` \`${prefix}moderasyon\` `,true)
.addField(` __Logo Komutları__`,` \`${prefix}logo\` `,true)
.addField(` __Botlist Komutları__`,` \`${prefix}botlist\` `,true)
.addField(` __Guard Komutları__`,` \`${prefix}guard\` `,true)
.addField(` __Gif Komutları__`,` \`${prefix}gif\` `,true)
.addField(` __Güvenlik Komutları__`,` \`${prefix}güvenlik\` `,true)
.addField(` __Davet Komutları__`,` \`${prefix}davet\` `,true)
.addField(` __Profil Komutları__`,` \`${prefix}profil\` `,true)
.addField(` __Kullanıcı Komutları__`,` \`${prefix}kullanıcı\` `,true)
.addField(` __Nsfw Komutları__`,` \`${prefix}nsfw(yakında),\` `,true)
.addField(` __Hazır Sunucu Komutları__`,` \`${prefix}sunucukur\` `,true)

.addField(`╔═══════════◥◣❖◢◤════════════╗`,
`**║  \`${prefix}botdavet\` __Botu Davet Edebilirsiniz!__**
**║  \`${prefix}istatistik\` __İstatistiklerini Göre Bilirsiniz.__**
**║ \`${prefix}tavsiye\` __Bizlere Tavsiye Verirsiniz.__**
**║ \`${prefix}bug-bildir\` __Bot Hatalarını Bildirirsiniz.__**
**╚═══════════◥◣❖◢◤════════════╝**
`)
message.channel.send(eklenti)
  };
  exports.conf = {
    enabled: true,  
    guildOnly: false, 
    aliases: ["yardım","help"], 
    permLevel: 0
  };
  exports.help = {
    name: 'yardım'
  }; 
  