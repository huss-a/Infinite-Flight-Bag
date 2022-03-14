module.exports = {
    category: 'ATC Training', 
    description: 'Replies with the ATC Training Thread',

    callback: ({ message }) => {
        message.reply('https://community.infiniteflight.com/t/atc-training/416531/1')
    }
}