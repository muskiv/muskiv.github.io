// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

/*
function areaRectangle (a, b){
    let res = a * b;
    return res;
}

let area = areaRectangle (10, 20);
console.log(area);
*/

// - створити функцію яка обчислює та повертає площу кола з радіусом r

/*
function areaRing (r){
    let pi = 3.14;
    let res = pi * r **2;
    return res ;
}

let r = areaRing (5);
console.log(r);
*/

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

/*
function areaCylinder (r, h){
    let pi = 3.14;
    let res = 2 * pi * r * (r+h);
    return res;
}

let x = areaCylinder (2 , 7);
console.log(x);
*/

// - створити функцію яка приймає масив та виводить кожен його елемент

/*
    let arr = [25,13,6,'dc','54342', true, false];
    function mass(x) {
        for (let i = 0; i < x.length; i++) {
            console.log(x[i]);
        };
    };

    console.log(mass(arr));
*/

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

/*
function p (someText){
    document.write(`<p> ${someText}</p>`);
};

p('створити функцію яка створює параграф з текстом. Текст задати через аргумент');
*/

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

/*
function list(someText) {
    document.write(`<ul>`)
    document.write(`<li>${someText}</li>`)
    document.write(`<li>${someText}</li>`)
    document.write(`</ul>`)
};

list('тут може бути твоя реклама...');
*/

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

/*
function list(text, numLi) {
    document.write(`<ul>`);
    for (let index = 0; index < numLi; index++) {
        document.write(`<li>${text}</li>`);
    };
    document.write(`</ul>`);
};

list('тут може бути твоя реклама...', 5);
*/

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

/*
let arr = [25,13,6,'dc','54342', true, false];
function mass(x) {
        document.write(`<ul>`);
        for (let index = 0; index < x.length; index++) {
            document.write(`<li>${x[index]}</li>`);
        };
        document.write(`</ul>`);
}

mass(arr);
*/

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

/*
let arr = [{id: 1, name:'olen', age: 21}, {id: 2, name:'stas', age: 991}];
function mass(x) {
    for (let index = 0; index < arr.length; index++) {
        document.write(`<div>${arr[index].id} ${arr[index].name} ${arr[index].age}</div>`);
        
    };
};

mass(arr);
*/