// deleted message sniper bot

import { MessageEmbed } from 'discord.js';
const Discord = require('discord.js');
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

client.login('REDACTED');


client.on('messageDelete', msg => {
    console.log('message deleted')
    let embed = new MessageEmbed()
        .setTitle("Message Deleted")
        .setAuthor({
            name: msg.author?.tag,
            iconURL: msg.author?.avatarURL()
        })
        .setDescription(msg.content);
        msg.channel?.send({ embeds: [embed] });
})

client.on('ready', () => {
    console.log('Bot is ready!');
})