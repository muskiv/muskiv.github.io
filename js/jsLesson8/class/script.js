// 1) Напишіть код, який :
//     a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)

// завдання взагалі не зрозуміле, з помилками в словах...
/*
let elem = document.querySelector("#main_header");
elem.classList.add('mon-year');
console.log(elem);
*/

//     b) робить шириниу елементу ul 400px
/*
let x = document.getElementsByTagName('ul');
for (const iterator of x) {
    iterator.style.width = '400px';
    console.log(iterator);
};
*/

//     c) робить шириниу всіх елементів з класом linkList шириною 50%
/*
let x = document.getElementsByClassName('linkList');
for (const iterator of x) {
    iterator.style.width = '50%';
    console.log(iterator);
};
*/

//     d) отримує текст який зберігається в елементі з класом listElement2
/*
let x = document.querySelector('.listElement2').innerText;
console.log(x);
*/

//     e) отримує всі елементи li та змінює ім колір фону на сірий

/*
let t = document.querySelectorAll('li');
for (const iterator of t) {
    iterator.style.background = 'gray';
};
*/

//     f) отримує всі елементи 'a' та додає їм клас anchor
/*
let f = document.querySelectorAll('a');
for (const iterator of f) {
    iterator.classList.add('anchor');
};
console.log(f);
*/
//     g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
/*
let g = document.querySelectorAll('a');
for (const iterator of g) {
    if (iterator.innerText === 'link3') {
        iterator.style.fontSize = '40px';
        console.log(iterator);
    };
};
*/

//     h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
/*
let h = document.querySelectorAll('a');
for (const iterator of h) {
    iterator.classList.add('element_' + iterator.innerText);
};
console.log(h);
*/


//     i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
/*
let colorPrompt = prompt('введіть колір', 'red');
let i = document.getElementsByClassName('sub-header');
for (const iterator of i) {
    iterator.style.background = colorPrompt;
};
*/

//     j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
/*
let colorPrompt = prompt('введіть колір', 'red');
let j = document.getElementsByClassName('sub-header');
for (const iterator of j) {
    if (iterator.innerText === 'content 2 segment') {
        iterator.style.background = colorPrompt;
        console.log(iterator);
    };
};
*/

//     k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
/*
let k = document.getElementsByClassName('content_1');
let sometxt = prompt('some text', 'asfdhg')
for (const iterator of k) {
    iterator.innerText = sometxt;
    console.log(iterator);
};
*/

//     l) отримати елементи p та змінити їм padding на 20px
/*
let l = document.getElementsByTagName('p');
for (const iterator of l) {
    iterator.style.padding = '20px';
}
*/

//     m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
/*
let m = document.getElementsByClassName('text2');
for (const iterator of m) {
    iterator.innerText = 'mon-year. Пример sep-2021';
};
*/