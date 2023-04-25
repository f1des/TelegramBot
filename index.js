const telegramApi = require('node-telegram-bot-api');
//const { Keyboard } = require('np');

const token = '5840214485:AAFZtZ9DF7w9zmaiaANqBxIaAAgAiu1p3Bs';
const bot = new telegramApi(token, { polling: true });

const buyOptions = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
        [
          { text: '💰 Пополнить Steam 💰', callback_data: 'Пополнить Steam:' },
        ],
        [
          { text: '📝 FAQ', callback_data: 'FAQ:' },
          { text: '🗿 Мой профиль', callback_data: 'Мой профиль:' },
        ],
        [
          { text: 'ℹ Информация', callback_data: 'Информация:' },
          { text: '📦 Мои заказы', callback_data: 'Мои заказы:' },
        ],
      ]
  })
};

const start = () => {
  bot.setMyCommands([
    { command: '/start', description: 'СТАРТ' },
    { command: '/buy', description: 'Пополнить счёт' },
  ]);


  bot.on('message', async (msg) => {
    const text = msg.text;
    const chatId = msg.chat.id;

    switch (text) {
      case '/start':
        await bot.sendSticker(chatId, 'https://ie.wampi.ru/2023/04/26/84419_640.webp');
        return bot.sendMessage(chatId, 'Добро пожаловать в сервис для пополнения баланса Steam. \nВыберите нужный пункт меню', buyOptions);

      case '/buy':
        const accountDeposit = '';
        const faq = '';
        const accountInfo = '';
        const botInfo = '';
        const accountOrders = '';
        const balanceProfile = 0; // Баланс пользователя
        const accountId = '';
        const priceSelect = [100, 200, 500];

        return bot.sendMessage(chatId, 'Выберите нужный пункт меню', buyOptions);

      default:
        return bot.sendMessage(chatId, 'Некорректная команда. Попробуйте ещё раз');
    }
  });
  
  // Необходимо обработать событие callback_query, которое возникает, когда пользователь нажимает на кнопку. В примере кода используется метод bot.editMessageText(), который позволяет изменить текст сообщения, отправленного ботом
  bot.on('callback_query', (callbackQuery) => {
    const chatId = callbackQuery.message.chat.id;
    const messageId = callbackQuery.message.message_id;
    const data = callbackQuery.data;
  
    bot.editMessageText(data, {
      chat_id: chatId,
      message_id: messageId
    });
  });

};

start();