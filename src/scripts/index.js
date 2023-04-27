import { buyOptions } from './utlis/constants.js';
import telegramApi from 'node-telegram-bot-api';

// Поменять токен, работа с сервером
import { Telegraf } from 'telegraf';
import config from 'config';

const bot = new telegramApi(config.get('TELEGRAM_TOKEN'), { polling: true });

const start = () => {
  bot.setMyCommands([
    { command: '/start', description: 'СТАРТ' },
    { command: '/buy', description: 'Пополнить счёт'},
  ]);


  bot.on('message', async (msg) => {
    const text = msg.text;
    const chatId = msg.chat.id;

    switch (text) {
      case '/start':
        await bot.sendSticker(chatId, 'https://ie.wampi.ru/2023/04/26/84419_640.webp');
        return bot.sendMessage(chatId, 'Добро пожаловать в сервис для пополнения баланса Steam. \nВыберите нужный пункт меню', buyOptions);

      // case '/buy':
        // const accountDeposit = '';
        // const faq = '';
        // const accountInfo = '';
        // const botInfo = '';
        // const accountOrders = '';
        // const balanceProfile = 0; // Баланс пользователя
        // const accountId = '';
        // const priceSelect = [100, 200, 500];

        // return bot.sendMessage(chatId, 'Выберите нужный пункт меню', buyOptions);

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