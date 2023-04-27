const buyOptions = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
        [
          { text: '💰 Пополнить Steam 💰', callback_data: 'money_steam' },
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

const moneyOptions = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
        [
          { text: '100', callback_data: 'category_100' },
          { text: '200', callback_data: 'category_200' },
          { text: '300', callback_data: 'category_300' },
        ],
        [
          { text: '500', callback_data: 'category_500' },
          { text: '1000', callback_data: 'category_600' },
          { text: '2000', callback_data: 'category_700' },
        ],
        [
          { text:'Назад', callback_data: 'category_back' }
        ]
      ]
  })
};



export { buyOptions, moneyOptions };