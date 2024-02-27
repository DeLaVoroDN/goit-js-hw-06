'use strict'; // Строгий режим, который помогает выявить и предотвратить ошибки в коде

class StringBuilder {
  // Класс "StringBuilder" представляет собой инструмент для построения и модификации строк

  #value; // Приватное поле для хранения текущего значения строки

  // Конструктор класса, принимающий начальное значение строки
  constructor(initialValue) {
    this.#value = initialValue;
  }

  // Метод для получения текущего значения строки
  getValue() {
    return this.#value;
  }

  // Метод для добавления строки в конец текущего значения
  padEnd(str) {
    this.#value += str;
  }

  // Метод для добавления строки в начало текущего значения
  padStart(str) {
    this.#value = str + this.#value;
  }

  // Метод для добавления строки в начало и конец текущего значения
  padBoth(str) {
    this.padStart(str); // Добавляем строку в начало
    this.padEnd(str); // Добавляем строку в конец
  }
}

// Создаем новый экземпляр класса "StringBuilder" с начальным значением '.'
const builder = new StringBuilder('.');
console.log(builder.getValue()); // Выводим текущее значение

// Добавляем строку в начало текущего значения и выводим обновленное значение
builder.padStart('^');
console.log(builder.getValue());

// Добавляем строку в конец текущего значения и выводим обновленное значение
builder.padEnd('^');
console.log(builder.getValue());

// Добавляем строку и в начало, и в конец текущего значения и выводим обновленное значение
builder.padBoth('=');
console.log(builder.getValue());
