const { MessageEmbed } = require("discord.js")

module.exports = {
    category: 'List of commands embed', 
    description: 'Sends the list of commands available',

    callback: ({ message }) => {
       const embed = new MessageEmbed()
       .setDescription('Want to find out information about the A318 and how it performs?')
       .setTitle('Airbus A318 Performance')
       .setColor('DARKER_GREY')
       .addField('A318 Performance:', 'https://contentzone.eurocontrol.int/aircraftperformance/details.aspx?ICAO=A318')
       .setFooter('Created by Ruan. All information on the website belongs to the website.')
       return embed
    }
}