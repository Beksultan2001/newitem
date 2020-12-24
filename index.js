
const TelegramBot = require('node-telegram-bot-api')

const TOKEN = '1460256412:AAFWR0pm4DLwwBrmdRODy8Kk9yxu_x3FMbE';

const bot = new TelegramBot(TOKEN,{
    polling: true
})

bot.on('message', msg =>{
    bot.sendMessage(msg.chat.id, 'Hello');
})
