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

export { buyOptions };