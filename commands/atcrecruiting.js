module.exports = {
    category: 'ATC Recruiting', 
    description: 'Replies with the ATC Recruiting thread',

    callback: ({ message }) => {
        message.reply('https://community.infiniteflight.com/t/infinite-flight-atc-recruiting/564656/1')
    }
}