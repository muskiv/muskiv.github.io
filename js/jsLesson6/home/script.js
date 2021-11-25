// - Знайти та вивести довижину настипних стрінгових значень
//     'hello world', 'lorem ipsum', 'javascript is cool'

/*
let a = 'hello world';
let b = 'lorem ipsum';
let c = 'javascript is cool';

console.log(a.length);
console.log(b.length);
console.log(c.length);
*/

// - Перевести до великого регістру наступні стрінгові значення
//       'hello world', 'lorem ipsum', 'javascript is cool'

/*
let y = 'hello world';
let x = 'lorem ipsum';
let z = 'javascript is cool';

console.log(y.toUpperCase());
console.log(x.toUpperCase());
console.log(z.toUpperCase());
*/

// - Перевести до нижнього регістру настипні стрінгові значення
//       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

/*
let y = 'HELLO WORLD';
let x = 'LOREM IPSUM';
let z = 'JAVASCRIPT IS COOL';

console.log(y.toLowerCase());
console.log(x.toLowerCase());
console.log(z.toLowerCase());
*/

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

/*
let str = ' dirty string   '

console.log(str.trim());
*/

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']

/*
    let stringToarray = (str)=>{
            console.log(str.split(' '));
    };

    stringToarray('Каждый охотник желает знать');
*/

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
//     document.writeln(delete_characters(str, 7)); 
// Каждый

/*
let str = 'Каждый охотник желает знать';
let delete_characters = (str, length)=>{
    console.log(str.slice(0,7));
};
delete_characters(str);
*/

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//    let str = "HTML JavaScript PHP";
//    document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

/*
let str = "HTML JavaScript PHP";
let insert_dash=(str)=>{
    console.log(str.toUpperCase().replaceAll(' ', '-'));
};
insert_dash(str);
*/

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.

/*
let str = 'каждый охотник желает знать';
let firstLetterOfUppercase =(str)=>{
console.log(str.charAt(0).toUpperCase() + str.slice(1));
};

firstLetterOfUppercase(str);
*/


// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

/*
let str = 'каждый охотник желает знать';
let capitalize =(str)=>{
    console.log(str.split(/\s+/).map(word => word[0].toUpperCase() + word.substr(1)).join(' '));
    };
    
capitalize(str);
*/