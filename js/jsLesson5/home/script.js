// Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка обчислює та повертає площу прямокутника висотою
/*
let areaRectangle = (a,b)=> {
    console.log(a*b);
};

let x = areaRectangle(10,50);
*/

// - створити функцію яка обчислює та повертає площу кола

/*
let areaRing = (r)=>{
    r = 3.14 * r ** 2;
    console.log(r)
}

let radius = areaRing(5);
*/


// - створити функцію яка обчислює та повертає площу циліндру

/*
let areaCylinder = (r,h) =>{
    let x = 2 * 3.14 * r * (r+h);
    console.log(x);
}

let radius = areaCylinder(2,7);
*/

// - створити функцію яка приймає масив та виводить кожен його елемент

/*
let mas = (x)=>{
    for (const iterator of x) {
        console.log(iterator);
    }
}

let arr = [25,13,6,'dc','54342', true, false];
mas(arr);
*/

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

/*
let p =(q) =>{
document.write(`<div><p>${q}</p></div>`)
}
let z = "text";
p(z);
*/

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

/*
let ul=(list)=>{
    document.write(`<ul><li>${list} </li> <li>${list} </li> <li>${list} </li></ul>`)
}
let z = "srdtfghbjnkml";
ul(z);
*/

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

/*
let ul=(a, list)=>{
    for (let index = 0; index < a; index++) {
        document.write(`<ul><li>${a, list}</li></ul>`)
    }
}
let z = "srdtfghbjnkml";
ul(5, z);
*/

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

/*
let array = (u)=>{
    for (const iterator of u) {
        document.write(`<ul><li>${iterator}</li></ul>`);
    };
};

let arr = [25,13,6,'dc','54342', true, false];
array(arr);
*/

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

/*
let array = (x)=>{
    for (const iterator of x) {
        console.log(iterator.id, iterator.name , iterator.age);
    }
}

let arr = [{id: 1, name:'olen', age: 21}, {id: 2, name:'stas', age: 991}];
array(arr);
*/

//АБО все в стрінговому значенні

/*
let array = (x)=>{
    for (const iterator of x) {
        console.log(`${iterator.id}  ${iterator.name}  ${iterator.age}`);
    }
}

let arr = [{id: 1, name:'olen', age: 21}, {id: 2, name:'stas', age: 991}];
array(arr);
*/