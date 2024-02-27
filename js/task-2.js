'use strict'; // Строгий режим, который помогает выявить и предотвратить ошибки в коде

class Storage {
  // Класс "Storage" представляет собой простое хранилище элементов

  #items; // Приватное поле для хранения элементов

  // Конструктор класса, принимающий массив элементов и инициализирующий приватное поле
  constructor(items) {
    this.#items = items;
  }

  // Метод для получения всех элементов хранилища
  getItems() {
    return this.#items;
  }

  // Метод для добавления нового элемента в хранилище
  addItem(newItem) {
    this.#items.push(newItem);
  }

  // Метод для удаления элемента из хранилища
  removeItem(itemToRemove) {
    this.#items = this.#items.filter(item => item !== itemToRemove);
  }
}

// Создаем новый экземпляр класса "Storage" с заданными начальными элементами
const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);
console.log(storage.getItems()); // Выводим текущие элементы хранилища

// Добавляем новый элемент в хранилище и выводим обновленные элементы
storage.addItem('Droid');
console.log(storage.getItems());

// Удаляем элемент из хранилища и выводим обновленные элементы
storage.removeItem('Prolonger');
console.log(storage.getItems());
