import { buyOptions, moneyOptions, metodPaymentOptions, faqOptions  } from './utlis/constants.js';
import telegramApi from 'node-telegram-bot-api';
//import { Telegraf } from 'telegraf';
import config from 'config';

const bot = new telegramApi(config.get('TELEGRAM_TOKEN'), { polling: true }); //Поменять токен, работа с сервером

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
        // return bot.sendMessage(chatId, 'Выберите нужный пункт меню', buyOptions);

      default:        
        //return bot.sendMessage(chatId, 'Некорректная команда. Попробуйте ещё раз');
    }
  });
  
  // Необходимо обработать событие callback_query, которое возникает, когда пользователь нажимает на кнопку. В примере кода используется метод bot.editMessageText(), который позволяет изменить текст сообщения, отправленного ботом
  bot.on('callback_query', (callbackQuery) => {
    const chatId = callbackQuery.message.chat.id;
    const queryData = callbackQuery.data;

    if (queryData === 'money_steam') {
      const message = 'Пополнить Steam.  \n\n Введите Ваш логин Steam \n\n Что такое логин можно узнать в разделе "FAQ"';
      const replyMarkup = message.text;
      // Условие проверки логина на ввод
      
      bot.editMessageText(message, { chat_id: chatId, message_id: callbackQuery.message.message_id, reply_markup: replyMarkup });

      //Bспользуем метод bot.once() для ожидания следующего сообщения от пользователя
      bot.once('message', (msg) => {
        if (msg.text) {
          bot.sendMessage(chatId, 'Ваш логин: ' + msg.text);          
          if (msg.text) { // Сделать проверку на ввод логина с серверов
            bot.sendMessage(chatId, 'Введите сумму пополнения или выберите из популярных', moneyOptions);
          } else {
            bot.sendMessage(chatId, 'Извините, ваш логин некорректный, попробуйте ещё раз!');
          }

          // Дописать условия
           
          // 

          

        } else {
          bot.sendMessage(chatId, 'Введен некорректный логин, пожалуйста, попробуйте ввести ещё раз!');
        }

      });     
    }

    // else if (){

    // }
  
    // bot.editMessageText(queryData, {
    //   chat_id: chatId,
    //   message_id: messageId
    // });
  });

};

start();