//1. Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor). Скласти результат цих чисел в змінній result.
/*
let ten = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let result = ten[0] + ten[1] + ten[2] + ten[3] + ten[4] + ten[5] + ten[6] + ten[7] + ten[8] + ten[9];
console.log(result);
*/

//2. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр
/*
let book = {
    name: "js for kids",
    numberOfPages: 289,
    genre: "teaching"
};
console.log(book);
*/

//3. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори
/*
let book = {
    name: "js for kids",
    numberOfPages: 289,
    genre: "teaching",
    authors: "Nick Morgan"
};
console.log(book);
*/

//4. Створити маис об'єктів book з наступними полями  - назва, кількість сторінок, жанр, автори. Вивести кожну книгу як окремий об'єкт

/*
let book = [
    {
        name: "js for kids",
        numberOfPages: 289,
        genre: "teaching",
        authors: "Nick Morgan"
    },

    {
        name: "life",
        numberOfPages:  89,
        genre: "horror",
        authors: "Morgan Freeman"
    }
];

console.log(book[0]);
console.log(book[1]);
*/

//5. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width). Значення площі зберігати в змінній s.

/*
let height = 23;
let width = 10;
let s = height * width;
console.log(s);
*/

//6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),результат помістіть у змінну v.

/*
let heightC = 10;
let dC = 4;
let pi = 3.14;
let r = dC / 2;
let v = pi * (r ** 2) * heightC;
console.log(v);
*/

//7. У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4). Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь) або оператор зведення в ступінь **).

/*
let n = 3;
let m = 4;
let k = (3 ** 2) + (4 ** 2);
console.log(k)
*/