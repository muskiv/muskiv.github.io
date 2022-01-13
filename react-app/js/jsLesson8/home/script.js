// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!

// - Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
//     -- отримує текст з параграфа з id "content"
/*
let x = document.getElementById('content').innerText;
console.log(x);
*/
//     -- отримує текст з блоку з id "rules"
/*
let y = document.getElementById('rules').innerText;
console.log(y);
*/
//     -- замініть текст параграфа з id 'content' на будь-який інший
/*
let z = document.getElementById('content');
z.innerText = 'замініть текст параграфа з id content на будь-який інший';
*/
//     -- замініть текст параграфа з id 'rules' на будь-який інший
/*
let q = document.getElementById('rules');
q.innerText = 'замініть текст параграфа з id rules на будь-який інший';
*/
//     -- змініть кожному елементу колір фону на червоний
/*
let backColor = document.body.children;
for (const iterator of backColor) {
    iterator.style.background = 'red';
};
*/
//     -- змініть кожному елементу колір тексту на синій
/*
let colorTxt = document.body.children;
for (let iterator of colorTxt) {
    iterator.style.color = 'blue';
};
*/
//     -- отримати весь список класів елемента з id=rules і вивести їх в console.log
/*
let b = document.getElementById('rules');
let n = b.classList
console.log(n);
*/
//     -- поміняти колір тексту у всіх елементів fc_rules на червоний
/*
let m = document.getElementsByClassName('fc_rules');
for (const iterator of m) {
    iterator.style.color = 'red'; 
}
*/