const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("550010598591823872")
setInterval(function() {
channel.send(`توباك البطل مغوار`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
