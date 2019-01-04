
const Discord = require('discord.js');
const moment = require("moment");
const fs = require("fs");
const client = new Discord.Client();
 const prefix = "-";
client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
  var prefix = "#"; 
  
if (message.author.bot) return;
if (!message.content.startsWith(prefix)) return;
   
let command = message.content.split(" ")[0];
command = command.slice(prefix.length);
   
let args = message.content.split(" ").slice(1);
   
if (command === "say") {
message.delete()
  message.channel.sendMessage(args.join(" ")).catch(console.error);
}




client.login(process.env.BOT_TOKEN);


