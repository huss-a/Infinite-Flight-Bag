const { MessageEmbed } = require("discord.js")

module.exports = {
    category: 'Edinburgh Airport Specifications', 
    description: 'Sends EGPH Specs',

    callback: ({ message }) => {
       const embed = new MessageEmbed()
       .setDescription('Here are the facts and figures of Edinburgh Airport.')
       .setTitle('Edinburgh Airport Specifications')
       .setColor('DARKER_GREY')
       .addField('Runway 06/24:', '2,556 m (8,386 ft)')
       .addField('Number of aircraft stands:', '76')
       .addField('Number of airlines:', '37')
       .addField('Number of destinations served:', '158')
       .addField('Main Airlines and focus cities for:', '	Aer Lingus UK and easyJet UK')
       .setFooter('Created by Ruan. Powered by the Infinite Flight Bag Bot.')
       .setImage('https://i2.wp.com/nats.aero/blog/wp-content/uploads/2014/01/EdinburghTower.jpg?ssl=1')
       return embed
    }
}