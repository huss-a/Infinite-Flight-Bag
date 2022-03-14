const { MessageEmbed } = require("discord.js")

module.exports = {
    category: 'London Heathrow Specifications', 
    description: 'Sends EGLL Specs',

    callback: ({ message }) => {
       const embed = new MessageEmbed()
       .setDescription('Here are the facts and figures of London Gatwick.')
       .setTitle('London Gatwick Specifications')
       .setColor('DARKER_GREY')
       .addField('Runway 08R/26L:', '10879 x 150 feet / 3316 x 46 meters')
       .addField('Runway 08L/26R:', '8415 x 148 feet / 2565 x 45 meters')
       .addField('Number of aircraft stands:', '65')
       .addField('Number of airlines:', '45')
       .addField('Number of destinations served:', '174 (in 59 countries)')
       .addField('Main Airline:', 'easyJet')
       .setFooter('Created by Ruan. Powered by the Infinite Flight Bag Bot.')
       .setImage('https://cdn.discordapp.com/attachments/807533800036630528/952573753643139113/unknown.png')
       return embed
    }
}