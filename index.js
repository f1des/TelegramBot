const telegramApi = require('node-telegram-bot-api');

const { Keyboard } = require('telegram-keyboard')

const token = '5840214485:AAFZtZ9DF7w9zmaiaANqBxIaAAgAiu1p3Bs';

const bot = new telegramApi(token, {polling: true});

const keyboard = Keyboard.make(['Пополнить Steam', 
                                'FAQ', 'Мой профиль',
                                'Информация', 'Мои заказы'], {
    pattern: [1, 2]
  }).reply();

console.log(keyboard.reply_markup.keyboard);

//const chats = {};

const buyOptions = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{text: 'Текст кнопки', callback_data: 'Какая-то информация'}]
        ]
    })
}



const start = () => {   

    bot.setMyCommands([
        {command: '/start', description: 'Приветствие'},
        {command: '/info', description: 'Получить информацию о пользователе'},
        {command: '/buy', description: 'Пополнить счёт'},
    ]);


    bot.setChatMenuButton([
        {chat_id: 5840214485, type: 'start'}
    ]);
    
    bot.on('message', async msg => {
        const text = msg.text;
        const chatId = msg.chat.id;
    
        if (text === '/start') {
            await bot.sendSticker(chatId, 'https://stickerpacks.ru/wp-content/uploads/2022/10/nabor-stikerov-s-hasbikom-4-12.webp');
            return bot.sendMessage(chatId, `Добро пожаловать в сервис для автоматического пополнения баланса Steam. \nЗдесь вы можете пополнить кошелёк Steam на нужную сумму разными способами. К оплате принимаются карты, кошельки и даже криптовалюта!`);
            
            
        }
        if (text === '/info') {
            return bot.sendMessage(chatId, `Тебя зовут ${msg.from.first_name} ${msg.from.last_name}`);
        }
        if (text === '/buy') {         

            const accountDeposit = '';
            const faq = '';
            const accountInfo = '';
            const botInfo = '';
            const accountOrders = '';


            const balanceProfile = 0; // Баланс пользователя
            const accountId = ''; 
            const priceSelect = [100, 200, 500];

            await bot.sendMessage(chatId, `Выберите нужный пункт меню для оплаты`);
            return bot.sendMessage(chatId, '123', buyOptions);

        }

        return bot.sendMessage(chatId, 'Некорректная команда. Попробуйте ещё раз')

    })
}

start()