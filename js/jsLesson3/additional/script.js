
// 1. Створити пустий масив та :
// a. заповнити його 50 парними числами за допомоги циклу.

/*
let y = [];
for (let numbs = 1; numbs <= 100; numbs++) {
    if (numbs % 2 === 0){
    y.push(numbs);
    }
}
console.log(y);
*/

// b. заповнити його 50 непарними числами за допомоги циклу.

/*
let y = [];
for (let numbs = 1; numbs <= 100; numbs++) {
    if (numbs % 2 !== 0){
    y.push(numbs);
    }
}
console.log(y);
*/

// c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)

/*
let i = [];
for (let numbs = 0; numbs < 20; numbs++) {
    i[numbs] = Math.floor(Math.random() *30)
};
console.log(i);
*/

// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)

/*
let i = [];
for (let numbs = 0; numbs < 20; numbs++) {
    i[numbs] = Math.floor((Math.random() * (732 - 8) ) + 8)
};
console.log(i);
*/

// 2. Вивести за допомогою console.log кожен третій елемен
/*
for (let num = 3; num <= 60; num +=3){
    console.log(num);
}
*/
// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.

/*
for (let num = 0; num <= 60; num +=3){
    if( num % 2 === 0){
    console.log(num);
    }
}
*/

// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив

/*
let y = [];
for (let numbs = 3; numbs <= 60; numbs += 3) {
    if (numbs % 2 === 0){
    y.push(numbs);
    }
}
console.log(y);
*/

// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56

/*
let x = [1, 2, 3, 5, 7, 9, 56, 8, 67];
for (let num = 1; num < x.length; num++){
    if (x[num]%2 === 0) {
        console.log(x[num-1]);
    }
}
*/

// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.

/*
let x = [100,250,50,168,120,345,188];
let y = 0;
for (let num = 0; num < x.length; num++){
    y = y + x[num];
}
console.log(y);

y = y / x.length;
console.log(y);
*/

// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
/*
let i = [];
let x = [1, 2, 3,];
for (let numbs = 0; numbs < 5; numbs++) {
    let m = Math.floor((Math.random() * 100)) ;
    i[numbs] = m * 5;
    x.push(i[numbs]);
};
console.log(x);
*/

// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.

/*
let z = [2, 'dfvd', true, 235, 'fdf', 34]
let x = [1, 2, 3,];
for (let i of z){
    if (typeof i === "number"){
        x.push(i)
    }
}
    console.log(x);
*/

// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
/*
let usersWithId = [
{id: 1, name: 'vasya', age: 31, status: false},
{id: 2, name: 'petya', age: 30, status: true},
{id: 3, name: 'kolya', age: 29, status: true},
{id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
{user_id: 3, country: 'USA', city: 'Portland'},
{user_id: 1, country: 'Ukraine', city: 'Ternopil'},
{user_id: 2, country: 'Poland', city: 'Krakow'},
{user_id: 4, country: 'USA', city: 'Miami'}
];


for (let user of usersWithId) {
    for (let citi of citiesWithId) {
        if(user.id === citi.user_id){
            user.address = citi;
        }
    }
    console.log(user);
}
*/

// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив
// Example:
// let usersWithCities = [
// {
// id: 1, // <===
// name: 'vasya',
// age: 31,
// status: false,
// address: {
//      user_id: 1, // <===
//     country: 'Ukraine',
//     city: 'Ternopil'
// }
// },
// TO BE CONTINUED .....
// ]




// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
/*
let x = [2,17,13,6,22,31,45,66,100,-18];
for (let i = 0; i < x.length; i++) {
    if (x[i]%2 === 0) {
    console.log(x[i]);
    }
};
*/

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.

/*
let i = [];
let x = [2,17,13,6,22,31,45,66,100,18];
for (let numbs = 0; numbs < x.length ; numbs++) {
    i.push(x[numbs]);
}
console.log(i);
*/

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.

/*
let arr =[ 'a', 'b', 'c'];
let x = '';
for (let i = 0; i < arr.length; i++) {
    x = x + arr[i];
}
console.log(x)
*/

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.

/*
let arr = [ 'a', 'b', 'c'];
let x = '';
let i = 0;
while (i < arr.length){
    x = x + arr[i];
    i++;
}
console.log(x)
*/

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

/*
let arr = [ 'a', 'b', 'c'];
let x = '';
for (let i of arr) {
    x = x + i;
};
console.log(x);
*/
