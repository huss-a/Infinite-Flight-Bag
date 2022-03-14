module.exports = {
    category: 'Twitter', 
    description: 'Replies with the official Infinite Flight Twitter account',

    callback: ({ message }) => {
        message.reply('https://twitter.com/infiniteflight')
    }
}