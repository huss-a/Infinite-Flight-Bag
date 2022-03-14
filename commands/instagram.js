module.exports = {
    category: 'Instagram', 
    description: 'Replies with the official Infinite Flight Instagram account',

    callback: ({ message }) => {
        message.reply('https://www.instagram.com/infiniteflight/')
    }
}