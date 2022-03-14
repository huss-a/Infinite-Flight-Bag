const { MessageEmbed } = require("discord.js")

module.exports = {
    category: 'List of commands embed', 
    description: 'Sends the list of commands available',

    callback: ({ message }) => {
       const embed = new MessageEmbed()
       .setDescription('Here is the list of commands that work with the Infinite Flight Bag Bot.')
       .setTitle('Commands that work with the Infinite Flight Bag Bot')
       .setColor('DARKER_GREY')
       .addField('Command One:', '"?ping" (To check that the bot is functioning with no errors.)')
       .addField('Command Two:', '"?atcschedule" (To quickly check the ATC Schedule for the current month.)')
       .addField('Command Three:', '"?atctraining" (If a member wants to either read or apply for IFATC training.)')
       .addField('Command Four:', '"?atcrecruiting" (If a member wants to either read or apply for IFATC recruiting.)')
       .addField('Command Five:', '"?ifcsupport" (If a member wants to get quick access to the support category of the IFC.)')
       .addField('Command Six:', '"?ejetrework" (Links the IFC thread for E-jet rework.)')
       .addField('Command Seven:', '"?f18rework" (Links the IFC thread for F-18E rework.)')
       .addField('Command Eight:', '"?instagram" (Links the official Infinite Flight Instagram account.)')
       .addField('Command Nine:', '"?twitter" (Links the official Infinite Flight Twitter account.)')
       .addField('Command Ten:', '"?youtube" (Links the official Infinite Flight Youtube account.)')
       .setFooter('Created by Ruan')
       return embed
    }
}