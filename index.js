const Discord = require('discord.js');
const ascii_text_generator = require('ascii-text-generator');
const client = new Discord.Client();

const config = require('./config.json');

client.on("ready", () => {
    console.log(ascii_text_generator("we bumpin", "1"));

    setInterval(function() {
        client.channels.get(config.channel).send("!disboard bump");
    }, config.interval);
});

client.login(config.token);