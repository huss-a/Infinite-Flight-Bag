module.exports = {
    category: 'Youtube', 
    description: 'Replies with the official Infinite Flight Youtube account',

    callback: ({ message }) => {
        message.reply('https://youtube.com/InfiniteFlight')
    }
}