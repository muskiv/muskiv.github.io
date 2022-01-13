// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.

/*
function konk (z) {
    if(arguments.length === 1){
        console.log(z)
    }
    else if (arguments.length === 2) {
        console.log(arguments[0] + [1])
    }
    else{
        console.log('error');
    }
}; 

(konk('5'));
(konk('9999','5'));
(konk(5, 6, 9));
(konk(5));
(konk(9999, 5));
*/

// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//   EXAMPLE:
//   [1,2,3,4]
//   [2,3,4,5]
//   результат
//   [3,5,7,9]

/*
let nfgb =[1,2,3,4];
let gjfd =[2,3,4,5];
function sumArr(a, b ) {
    let newArr =[];
    for (let index = 0; index < a.length; index++) {
        newArr.push(a[index]+b[index]);
    }
    return newArr;
}

console.log(sumArr(nfgb, gjfd));
*/

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
//   EXAMPLE:
//   [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

/*
let array =[{name: 'Dima', age: 13}, {model: 'Camry'}];
let newArr =[];
function keyArr(a) {
    for (let object of a) {
        for (let key of Object.keys(object)) {
            newArr.push(key);
        };
    };
    return newArr;
}
console.log(keyArr(array));
*/

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
//   EXAMPLE:
//   [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

/*
let array =[{name: 'Dima', age: 13}, {model: 'Camry'}];
let newArr =[];
function keyArr(a) {
    for (let object of a) {
        for (let key of Object.values(object)) {
            newArr.push(key);
        };
    };
    return newArr;
}
console.log(keyArr(array));
*/
