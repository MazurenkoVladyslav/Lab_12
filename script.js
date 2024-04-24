//Виведення імені за допомогою alert()
alert("Ім'я: Владислав");

//Виведення прізвища в консоль
console.log("Прізвище: Мазуренко");


//Оголошення двох змінних
var variable1;
var variable2;

// b) Присвоєння значень змінним
variable1 = "15";
variable2 = "92";

//Виведення значень змінних
console.log("Значення variable1:", variable1);
console.log("Значення variable2:", variable2);

//Копіювання значення однієї змінної в іншу
variable1 = variable2;

//Виведення значень змінних після копіювання
console.log("Після копіювання:");
console.log("Значення variable1:", variable1);
console.log("Значення variable2:", variable2);

//Створення об’єкта з примітивними типами даних
var dataTypes = {
  String: "Тут має бути текст",
  Number: 958569566,
  Boolean: true,
  Undefined: undefined,
  Null: null
};

//Виведення об’єкта в консоль
console.log("Об'єкт з примітивними типами даних:", dataTypes);

//Перевірка на повноліття за допомогою confirm()
var isAdult = confirm("Ви вже досягли повнолітнього віку?");
console.log("Результат перевірки на повноліття:", isAdult);

