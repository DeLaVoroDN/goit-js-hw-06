'use strict'; // Строгий режим, который помогает выявить и предотвратить ошибки в коде

const customer = {
  // Объект "customer" содержит информацию о клиенте и методы для работы с ней

  username: 'Mango', // Имя пользователя
  balance: 24000, // Баланс клиента
  discount: 0.1, // Скидка по умолчанию
  orders: ['Burger', 'Pizza', 'Salad'], // Заказы клиента

  // Метод для получения текущего баланса
  getBalance() {
    return this.balance;
  },

  // Метод для получения текущей скидки
  getDiscount() {
    return this.discount;
  },

  // Метод для установки скидки на заданное значение
  setDiscount(value) {
    this.discount = value;
  },

  // Метод для получения списка заказов клиента
  getOrders() {
    return this.orders;
  },

  // Метод для добавления нового заказа
  addOrder(cost, order) {
    // Вычитаем из баланса стоимость заказа с учетом скидки
    this.balance -= cost - cost * this.discount;
    // Добавляем заказ в список заказов клиента
    this.orders.push(order);
  },
};

// Устанавливаем новую скидку для клиента
customer.setDiscount(0.15);
// Выводим текущую скидку
console.log(customer.getDiscount());
// Добавляем новый заказ и выводим текущий баланс и список заказов
customer.addOrder(5000, 'Steak');
console.log(customer.getBalance());
console.log(customer.getOrders());
