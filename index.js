const DiscordJS = require('discord.js');
const WOKCommands = require('wokcommands')
const path = require('path')
const { Intents } = require('discord.js');
const dotenv = require('dotenv');
const fetch = require("node-fetch")
const axios = require('axios');
const { maxArgs } = require('./commands/posts');
const { Message } = require('discord.js');
dotenv.config()

const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
    ]
})

client.on('ready', () => {
    console.log('Infinite Flight Bag is flying!')

    new WOKCommands(client, {
        commandsDir: path.join(__dirname, 'commands')
    })
    .setDefaultPrefix('?') 
})

client.login(process.env.TOKEN)