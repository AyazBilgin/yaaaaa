const Discord = require("discord.js");
const moment = require("moment")
const ayarlar = require("./ayarlar.json")
const db = require("croxydb")
const jimp = require("jimp")
const client = new Discord.Client();
const express = require("express");
const app = express();
const chalk = require('chalk');
const fs = require('fs');
const path = require('path');
const request = require('request');
const snekfetch = require('snekfetch');
const queue = new Map();
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');


//Uptime için__________________________________________________________________
app.get("/", (req, res) => {
  res.send("Bot Uptime Ediliyor");
});
app.listen(process.env.PORT);

//KOMUT Algılayıcı______________________________________________________________

client.commands = new Discord.Collection();

fs.readdir("./komutlar/", (err, files) => {
  if (err) return console.error(err);
  files.forEach((file) => {
    if (!file.endsWith(".js")) return;
    let cmd = require(`./komutlar/${file}`);
    let cmdFileName = file.split(".")[0];
    console.log(`Komut Yükleme Çalışıyor: ${cmdFileName}`);
    client.commands.set(cmd.help.name, cmd);
  });
});
//EVENTS Yükleyici_______________________________________________________________
fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach((file) => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    console.log(`Etkinlik Yükleme Çalışıyor: ${eventName}`);
    client.on(eventName, event.bind(null, client));
  });
});

client.on("ready", () => {
  console.log(`${client.user.tag}! Aktif!`);
});
//BOT ÇALIŞTIRICI______________________________________________________________
client.login(process.env.token)

//////////////////////////////////////////////////////////////////////////////////