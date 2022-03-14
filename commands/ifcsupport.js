module.exports = {
    category: 'IFC Support', 
    description: 'Replies with the IFC Support Category',

    callback: ({ message }) => {
        message.reply('https://community.infiniteflight.com/c/support/17')
    }
}