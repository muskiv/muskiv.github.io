// Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

/*
let minmum = (a,b,c)=>{
if(a < b && a < c){
    console.log(a);
}
else if(b < a && b < c){
    console.log(b);
}
else if(c < a && c < b){
    console.log(c);
}
};

minmum(120,50,633);
*/

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

/*
let minmum = (a,b,c)=>{
if(a > b && a > c){
    console.log(a);
}
else if(b > a && b > c){
    console.log(b);
}
else if(c > a && c > b){
    console.log(c);
}
};

minmum(120,50,633);
*/

// - створити функцію яка повертає найбільше число з масиву

/*
let maxnumb = (mass)=>{
    let q = mass[0];
    for (let iterator of mass) {
        if (iterator > q){
            q = iterator;
        }
    }
    return q;
}
let x = [120,50,633,90,655,488,2366];

console.log(maxnumb(x));
*/

// - створити функцію яка повертає найменьше число з масиву

/*
let minnumb = (mass)=>{
    let q = mass[0];
    for (let iterator of mass) {
        if (iterator < q){
            q = iterator;
        }
    }
    return q;
}
let x = [120,50,633,90,655,488,2366];

console.log(minnumb(x));
*/

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

/*
let z = (q)=>{
let x = 0;
    for (let index = 0; index < q.length; index++) {
        x=x+q[index];
    }
    return x;
}

let num = [1,2,10];
console.log(z(num));
*/

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

/*
let z = (q)=>{
    let x = 0;
        for (let index = 0; index < q.length; index++) {
            x=x+q[index];
        }
        return x/ q.length;
    }
    
    let num = [1,2,10];
    console.log(z(num));
*/

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

/*
let math = (arr)=>{
let minimal = arr[0];
let max = arr[0];
    for (const iterator of arr) {
        if(iterator <  minimal){
            minimal = iterator;
        }
        else if(iterator > max){
            max = iterator;
        }
    }
    document.write(max)
    console.log(minimal)
}

let mass =[10, 20, 30, 40, 50];
math(mass);
*/

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

/*
let random = (rando)=> {
    let z = [];
    for (let i= 0; i < rando; i++) {
        z[i] = Math.round(Math.random()*100);

    }
    return z;
}

console.log(random(5));
*/


// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

/*
let random = (rando, limit)=> {
    let z = [];
    for (let i= 0; i < rando; i++) {
        z[i] = Math.round(Math.random()*limit);
    }
    return z;
}

console.log(random(5, 15000));
*/

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

/*
let rev = (zad) => {
    let numer = [];
    for (let index = 0; index < zad.length; index++) 
    {
        numer.push(zad[index]);
    };
    numer.reverse();
    console.log(numer);
};

let num = [1,2,3];
console.log(num);
rev(num);
*/

