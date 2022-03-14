module.exports = {
    category: 'ATC Schedule', 
    description: 'Replies with the ATC Schedule',

    callback: ({ message }) => {
        message.reply('https://community.infiniteflight.com/t/atc-schedule-march-2022/648503/1')
    }
}