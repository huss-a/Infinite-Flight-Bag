module.exports = {
    category: 'Ping', 
    description: 'Testing',

    callback: ({ message }) => {
        message.reply('pong')
    }
}
