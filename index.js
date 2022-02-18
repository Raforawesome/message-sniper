"use strict";
// deleted message sniper bot
exports.__esModule = true;
var discord_js_1 = require("discord.js");
var Discord = require('discord.js');
var client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });
client.login('Njc4ODEwMjkyNDYwNzE2MDk3.XkoNWQ.qC9MMXLfHvhaJSXEcM4syzsOpHA');
client.on('messageDelete', function (msg) {
    var _a, _b, _c;
    console.log('message deleted');
    var embed = new discord_js_1.MessageEmbed()
        .setTitle("Message Deleted")
        .setAuthor({
        name: (_a = msg.author) === null || _a === void 0 ? void 0 : _a.tag,
        iconURL: (_b = msg.author) === null || _b === void 0 ? void 0 : _b.avatarURL()
    })
        .setDescription(msg.content);
    (_c = msg.channel) === null || _c === void 0 ? void 0 : _c.send({ embeds: [embed] });
});
client.on('ready', function () {
    console.log('Bot is ready!');
});
