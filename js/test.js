// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// function cuber(a,b) {
//   let x = a*b;
//   console.log(x);
// };

// cuber(3,7);

// - створити функцію яка обчислює та повертає площу кола з радіусом r

// function radius (r){
//   let x = 3.14*r**2;
// console.log(x);
// }

// radius(17);

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// function Cylinder (h, r){
//  let x = 2*3.14*r*(r+h);
//  console.log(x);
// }
// Cylinder(3,5)

// - створити функцію яка приймає масив та виводить кожен його елемент

// let arr = [25,13,6,'dc','54342', true, false];

// function mass(x) {
//   for (let index = 0; index < x.length; index++) {
//     console.log(x[index]);
//   }
// }
// mass(arr)

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function name(x) {
//   document.write(`<p>${x}</p>`)
// }

// name('n. nf nb oj')

// function name(x) {
//   document.write('<p>' + x + '</p>')
// }

// name('n. nf nb oj')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function ulka(lishki) {
//   document.write(`<ul><li>${lishki}</li><li>${lishki}</li><li>${lishki}</li></ul>`);
// };

// ulka('якось так');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function ulka(txt, numb) {
//   for (let index = 0; index < numb; index++) {
//     let x = `<li>${txt}</li>`;
//     document.write(`<ul>${x}</ul>`);
//   };
// };

// ulka('ac dc', 3);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let arr = [25,13,6,'dc','54342', true, false];

// function readerArr (arr){
// for (let index = 0; index < arr.length; index++) {
//   document.write(`<ul><li>${arr[index]}</li></ul>`)
// }
// };

// readerArr(arr);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// let arr = [{id: 1, name:'olen', age: 21}, {id: 2, name:'stas', age: 991}];

// function readerArr(arr) {
//   for (let index = 0; index < arr.length; index++) {
//     document.write(`
//     <div> id ${arr[index].id}</div>
//     <div> name ${arr[index].name}</div>
//     <div> age ${arr[index].age}</div>
//     `);
//   };
// };

// readerArr(arr);













// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// function min(a, b, c) {
//   if (a < b && a < c) {
//     console.log(a);
//   };
//   if (b < a && b < c) {
//     console.log(b);
//   };
//   if (c < a && c < b) {
//     console.log(c);
//   };
// };

// min (23,44,12);

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// function max(a, b, c) {
//   if (a > b && a > c) {
//     console.log(a);
//   };
//   if(b > a && b >c){
//     console.log(b);
//   };
//   if(c > a && c > b){
//     console.log(c);
//   };
// };

// max(23,44,12);

// - створити функцію яка повертає найбільше число з масиву
// let array = [12, 526949, 217, 65956];
// function getMaxOfArray(numArray) {
//   console.log(Math.max.apply(null, numArray));
// };
// getMaxOfArray(array);

// - створити функцію яка повертає найменьше число з масиву

// let array = [12, 526949, 217, 65956];
// function getMinOfArray(numArray) {
//   console.log(Math.min.apply(null, numArray));
// };
// getMinOfArray(array);

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// let arr = [10, 20, 30, 40, 50];
// function sum(arr){
//   let sum = 0;
//   for (let index = 0; index < arr.length; index++) {
//     sum += arr[index];
//   };
//   console.log(sum);
// };
// sum(arr);

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// let arr = [10, 20, 30, 40, 50];
// function sum(arr){
//   let sum = 0;
//   for (let index = 0; index < arr.length; index++) {
//     sum += arr[index];
//   };
//   console.log(sum = sum / arr.length);
// };
// sum(arr);

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

// let array = [12, 526949, 217, 65956];

// function x(arr) {
//   let min = arr[3];
//   let max = arr[3];
//   for (const numb of arr) {
//     if(numb < min){
//       min = numb;
//     }
//     else if(numb > max){
//       max = numb;
//     };
//   }
//   document.write(max);
//   console.log(min);
// }
// x(array);

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

// let arr = [];
// function rand(x) {
//   for (let index = 0; index < x; index++) {
//     arr[index] = Math.round(Math.random()*100)
//   }
//   console.log(arr);
// }

// rand(3);

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

// let arr = [];
// function rand(x, limit) {
//   for (let index = 0; index < x; index++) {
//     arr[index] = Math.round(Math.random()*limit)
//   }
//   console.log(arr);
// }

// rand(3, 10);                      ` `

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

// let x =  [1,2,3];
// function rivers(numb) {
//   let y = [];
//   for (let index = 0; index < numb.length; index++) {
//     y.push(numb[index]);
//   }
//   y.reverse();
//   console.log(y);
// }

// rivers(x)



let b = {name : 'v'};
let a = {name : 'v'};


console.log(b == a);








// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

// for (let index = 0; index < 10; index++) {
//   document.write(`<div>'sdv'<div/>`);
// };

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

// for (let index = 0; index < 10; index++) {
//   document.write(`<div>'${index} sdv'<div/>`);
// };


// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

// let x = 0;
// while (x < 20) {
//   document.write(`<h2>dv</h2>`);
//   x++;
// };

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.


// let h = 0;
// while (h < 20) {
//   document.write(`<h2>${h} dv</h2>`);
//   h++;
// };
