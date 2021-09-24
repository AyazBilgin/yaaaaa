const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;
  
module.exports = client => {
var oyun = [
        `f! prefix`,
" Kullanıcılar",
      client.guilds.cache
        .reduce((a, b) => a + b.memberCount, 0)
        .toLocaleString(),
      true
    .addField(
      "Sunucular",
      client.guilds.cache.size.toLocaleString(),
      true