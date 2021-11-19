// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

/*
function minNum(a, b, c,) {
    if (a < b && a < c) {
        document.write(a)
    }
    else if (b < a && b < c){
        document.write(b)
    }
    else if (c < a && c < b) {
        document.write(c)
    }
    else{
        document.write(error)
    }
};

minNum(6541654, 5415431, 669643153);
*/

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

/*
function maxNum(a, b, c,) {
    if (a > b && a > c) {
        document.write(a)
    }
    else if (b > a && b > c){
        document.write(b)
    }
    else if (c > a && c > b) {
        document.write(c)
    }
    else{
        document.write(error)
    }
};

maxNum(6541654, 5415431, 669643153);
*/

// - створити функцію яка повертає найбільше число з масиву

/*
let array = [12, 526949, 217, 65956];

function arrayMax(array) {
    let maxNum = array[0];
    for (let numbs of array) {
        if (numbs > maxNum) {
            maxNum = numbs;
        }
    }
    return maxNum;
}
document.write(arrayMax(array));
*/

// - створити функцію яка повертає найменьше число з масиву
/*
let array = [3636, 12, 526949, 217, 65956];

function arrayMin(array) {
    let minNum = array[0];
    for (let numbs of array) {
        if (numbs < minNum) {
            minNum = numbs;
        }
    }
    return minNum;
}
document.write(arrayMin(array));
*/

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

/*
let array = [10, 20, 30, 40, 50];

function arrayMax(array) {
    let mass = 0;
    for (let num = 0; num < array.length; num++){
        mass = mass + array[num];
    }
    return mass;
}
document.write(arrayMax(array));
*/

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

/*
let array = [10, 20, 30, 40, 50];

function arrayMax(array) {
    let mass = 0;
        for (let num = 0; num < array.length; num++){
            mass = mass + array[num];
        }
        
    return mass = mass /array.length;
}

document.write(arrayMax(array));
*/

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

/*
let array = [12, 526949, 217, 65956];

function arrayMin(array) {
    let minNum = array[0];
    let maxNum = array[0];
    for (let numbs of array) {
        if (numbs < minNum) {
            minNum = numbs;
        }
        else if (numbs > maxNum) {
            maxNum = numbs;
        }
    }
    console.log(maxNum)
    return minNum;
    
}
document.write(arrayMin(array));
*/

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

/*
function randomArray(frray_length) {
    let i= [];
    for (let numbs = 0; numbs < frray_length; numbs++) {
        i[numbs] = Math.floor((Math.random() * 100))
    }
    return i;
}

console.log(randomArray(10));
*/

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

/*
function randomArray(frray_length, limit) {
    let i= [];
    for (let numbs = 0; numbs < frray_length; numbs++) {
        i[numbs] = Math.floor((Math.random() * limit))
    }
    return i;
}

console.log(randomArray(10, 50));
*/

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
/*
let x = [1,2,3];

function zad(array) {
    let red = [];
    for (let index = 0; index < array.length; index++) {
        red.push(array[index]);
    }
    red.reverse();
    
console.log(red);
}

zad(x);
console.log(x);
*/
