const db = require("croxydb");
const Discord = require('discord.js');
const fynx = require("../ayarlar.json");
exports.run = async (client, message, args) => { 
let prefix = fynx.prefix
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
if(message.author.id != "853209984510984205") return message.channel.send(bakim)

}
let eklenti = new Discord.MessageEmbed()  
.setAuthor(`Fregas Moderasyon Komutları`, client.user.avatarURL())
.setThumbnail(message.author.displayAvatarURL({dynamic : true}))
.setImage('https://api.creavite.co/out/be509ef5-c75d-42e2-97b1-0dcf2893a247_standard.gif')
.setColor('#f6ff00')
.setDescription(` Fregas botumuzu eklemek için \`${prefix}botdavet\` yazabilirsiniz.`)
.addField(` __Sa-As__`,` \`${prefix}sa-as aç-kapat \` Otomatik Selamlamayı Açar/Kapatır.`,true)
.addField(` __Otorol__`,` \`${prefix}otorol\` Gelenlere Rol Verir.`,true)
.addField(` __Ototag__`,` \`${prefix}ototag\` Gelenlere Tag Verir.`,true)
.addField(` __Ototag Kapat__`,` \`${prefix}ototag-kapat\`  Ototag Sistemini Kapatır.`,true)
.addField(` __Sayaç__`,` \`${prefix}sayaç <sayı> <#kanal>\` Sayaç Ayarlarsınız.`,true)
.addField(` __Sil__`,` \`${prefix}sil \`Belirli Sayıda Mesaj Siler.`,true)
.addField(` __Yavaş Mod__`,` \`${prefix}yavaş-mod \` Sohbete Süre Ayarlar.`,true)
.addField(` __Mod Log__`,` \`${prefix}modlog \` Modlogu ayarlar..`,true)
.addField(` __Moderasyon2__`,` \`${prefix}moderasyon2 \` | Moderasyon Menüsünün Devamı.`,true)
.addField(` __Bilgilendirme__`,` \`${prefix}botdavet\` | BRK'yi Sunucunuza Davet Edersiniz\n \`${prefix}istatistik\` | Botun İstatistiklerini Gösterir `)
 message.channel.send(eklenti) 
  };
  exports.conf = {
    enabled: true,  
    guildOnly: false, 
    aliases: ["moderasyon","ayarlar"], 
    permLevel: 0
  };
  exports.help = {
    name: 'moderasyon'
  }; 
  