const TelegramApi = require('node-telegram-bot-api')

const token = '5840214485:AAFZtZ9DF7w9zmaiaANqBxIaAAgAiu1p3Bs'

const bot = new TelegramApi(token, {polling: true})

const start = () => {
    bot.setMyCommands([
        {command: '/start', description: 'Приветствие'},
        {command: '/info', description: 'Получить информацию о пользователе'},
    ])
    
    bot.on('message', async msg => {
        const text = msg.text;
        const chatId = msg.chat.id;
    
        if (text === '/start') {
            await bot.sendSticker(chatId, 'https://stickerpacks.ru/wp-content/uploads/2022/10/nabor-stikerov-s-hasbikom-4-12.webp');
            return bot.sendMessage(chatId, `Добро пожаловать в мой первый телеграм бот`)
        }
        if (text === '/info') {
            return bot.sendMessage(chatId, `Тебя зовут ${msg.from.first_name} ${msg.from.last_name}`);
        }
        return bot.sendMessage(chatId, 'Я тебя не понимаю, попробуй ещё раз!')

    })
}

start()