const { MessageEmbed } = require("discord.js")

module.exports = {
    category: 'Manchester Airport Specifications', 
    description: 'Sends EGCC Specs',

    callback: ({ message }) => {
       const embed = new MessageEmbed()
       .setDescription('Here are the facts and figures of Manchester Airport.')
       .setTitle('Manchester Airport Specifications')
       .setColor('DARKER_GREY')
       .addField('Runway 1 (23R/05L):', '3,048 m × 45 m (10,000 ft × 148 ft)')
       .addField('Runway 2 (23L/05R):', '3,200 m × 45 m (10,499 ft × 148 ft)')
       .addField('Number of aircraft stands:', '100+')
       .addField('Number of airlines:', '100')
       .addField('Number of destinations served:', '199')
       .addField('Main Airlines and focus cities for:', '	Aer Lingus UK, easyJet UK, Jet2.com, Ryanair, TUI Airways and Virgin Atlantic')
       .setFooter('Created by Ruan. Powered by the Infinite Flight Bag Bot.')
       .setImage('https://cdn.discordapp.com/attachments/912923020987871255/952575628983537694/Screenshot_443.png')
       return embed
    }
}