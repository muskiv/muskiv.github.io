// --створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

/*
let x = [5, 6, 8, 7, 2];
let y = ['a', 'd', 'v', 'n', 'g'];
let z = [5, 6, 'n', 'g', true];
console.log(x, y, z);
*/

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

/*
let f = [];
f[0] = 2335;
f[1] = '5dfvd';
f[2] = true;
console.log(f[1]);
console.log(f[0]);
console.log(f[2]);
*/

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

/*
for (let i = 0; i <=10; i++) {
    document.write('x text ');
};
*/

/*
for (let i = 0; i <=10; i++) {
    document.write(` товар ${i} `);
};
*/

/*
let i = 0;
while (i < 20){
    document.write(`<h2> some text </h2>`);
    i++;
};
*/

/*
let i = 0;
while (i < 20){
    document.write(`<h2> some text </h2> ${i}`);
    i++;
};
*/


// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

/*
let sot = [1, 22, 3434, 567, 34, 74, 12, 13, 675, 23,];
for (let i = 0; i < 10; i++) {
    console.log(sot [i]);
};
*/

/*
let sot = ['dfv', 'ds', 'cvv', 'dfav', 'dQv', 'de', 'dnuv', 'dnbv', 'dfyujv', 'div', ];
for (let i of sot) {
    console.log(i);
};
*/

/*
let sot = [1, 22, 'ds', 'cvv', 'dfav', 'dQv', 12, 13, true, 23,];
for (let i of sot){
    console.log(i);
}
*/

/*
let sot = [1, 22, false, 'cvv', 'dfav', 'dQv', 12, 13, true, 23,];
for (let i of sot){
    if (typeof i === "boolean"){
        console.log(i);
    }
}
*/

/*
let sot = [1, 22, false, 'cvv', 'dfav', 'dQv', 12, 13, true, 23,];
for (let i of sot){
    if (typeof i === "number"){
        console.log(i);
    }
}
*/

/*
let sot = [1, 22, false, 'cvv', 'dfav', 'dQv', 12, 13, true, 23,];
for (let i of sot){
    if (typeof i === "string"){
        console.log(i);
    }
}
*/


// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

/*
let i = [];
i[0] = 123245;
i[1] = 'nfbds';
i[2] = true;
i[3] = 757;
i[4] = true;
i[5] = 0;
i[6] = 454;
i[7] = 'dff';
i[8] = false;
i[9] = 'dfvd';
for (let sot of i) {
    console.log(sot);
}
*/

/*
for (let i = 0; i < 10; i++) {
    console.log(i);
    document.write(i);
}
*/

/*
for (let i = 0; i < 100; i++) {
    console.log(i);
    document.write(i);
}
*/

/*
for (let i = 0; i < 200; i +=2) {
    console.log(i);
    document.write(i);
}
*/


/*
for (let i = 0; i < 100; i += 2) {
    console.log(i);
    document.write(i);
}
*/

/*
for (let i = 1; i < 100; i += 2) {
    console.log(i);
    document.write(i);
}
*/