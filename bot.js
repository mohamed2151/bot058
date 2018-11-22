const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('NTE0ODY2NTUwMTA5NjM0NTgw.DtfTXQ.IMXteunv60uUM-mqZjREzMrr83U');
