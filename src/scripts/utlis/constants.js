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

const metodPaymentOptions = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
        [
          { text: 'Оплатить через QIWI', callback_data: 'category_qiwi' }
        ],
        [
          { text:'Назад', callback_data: 'category_back' }
        ]
      ]
  })
};

const faqOptions = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
        [
          { text: 'Требования к аккаунту', callback_data: 'category_faq1' },
          { text: 'Что такое логин в Steam', callback_data: 'category_faq2' },
          { text: 'В течение какого времени проходит оплата', callback_data: 'category_faq3' },
          { text: 'Пришла сумма меньше, чем в калькуляторе, что делать?', callback_data: 'category_faq4' },
          { text: 'Возврат средств', callback_data: 'category_faq5' },
        ],
        [
          { text:'Назад', callback_data: 'category_back' }
        ]
      ]
  })
};

// const accountDeposit = '';
// const faq = '';
// const accountInfo = '';
// const botInfo = '';
// const accountOrders = '';
// const balanceProfile = 0; // Баланс пользователя
// const accountId = '';
// const priceSelect = [100, 200, 500];



export { buyOptions, moneyOptions, metodPaymentOptions, faqOptions };