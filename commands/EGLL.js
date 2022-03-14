const { MessageEmbed } = require("discord.js")

module.exports = {
    category: 'London Heathrow Specifications', 
    description: 'Sends EGLL Specs',

    callback: ({ message }) => {
       const embed = new MessageEmbed()
       .setDescription('Here are the facts and figures of London Heathrow.')
       .setTitle('London Heathrow Specifications')
       .setColor('DARKER_GREY')
       .addField('Runway Length Northern:', 'Northen Runway is 3,902m x 50m long')
       .addField('Runway Length Southern', 'Southern Runway is 3,658m x 50m long')
       .addField('Number of aircraft stands served by an air bridge:', '133')
       .addField('Number of remote stands:', '64')
       .addField('Number of cargo stands:', '15')
       .addField('Number of airlines:', '84')
       .addField('Number of destinations served:', '203 (in 84 countries)')
       .addField('Terminal 2', '40,000 square metres')
       .addField('Terminal 3', '98,962 square metres')
       .addField('Terminal 4', '105,481 square metres')
       .addField('Terminal 5', '353,020 square metres')
       .addField('Main Airline:', 'British Airways')
       .setFooter('Created by Ruan. Powered by the Infinite Flight Bag Bot.')
       .setImage('https://cdn.discordapp.com/attachments/807533800036630528/952565509856043018/unknown.png')
       return embed
    }
}