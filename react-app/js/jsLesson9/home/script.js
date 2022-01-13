// // Все робити за допомоги js.
// // - створити блок,

// let div = document.createElement('div');

// // - додати йому класи wrap, collapse, alpha, beta

// div.classList.add ('wrap', 'collapse', 'alpha', 'beta');

// // - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту

// div.style.color = 'red';
// div.style.background = 'blue';
// div.style.fontSize = '20px';

// // - додати цей блок в body.

// document.body.appendChild(div);

// // - клонувати його повністю, та додати клон в body.

// let divClone = div.cloneNode();
// document.body.appendChild(divClone);

// console.log(div);

// - Є масив:
// ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
/*
let array = ['Main','Products','About us','Contacts'];
let menuClass = document.body.getElementsByClassName('menu'); 
for (const iterator of array) {
    let li = document.createElement('li');
    li.innerText = iterator;
    menuClass[0].appendChild(li);
};
*/

// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
/*
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

for (const iterator of coursesAndDurationArray) {
    let div = document.createElement('div');
    div.innerText = (iterator.title + ' ' + iterator.monthDuration);
    document.body.appendChild(div);
};
*/
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
// Завдання робити через цикли.

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];

// for (const iterator of coursesAndDurationArray) {
//     let h1 = document.createElement('h1');
//     h1.innerText = iterator.title;
//     h1.classList.add('heading');
//     let p = document.createElement('p');
//     p.innerText = iterator.monthDuration;
//     p.classList.add('description');
//     let div = document.createElement('div');
//     div.classList.add('item');
//     div.appendChild(h1);
//     div.appendChild(p);
//     document.body.appendChild(div);
// };