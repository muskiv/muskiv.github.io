// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts

// fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json()) 
// .then(users => { 
//     let wrap = document.createElement('div');
//     for (const i of users) {
//         let x = document.createElement('div');
//         x.classList.add('post');
//         x.style.width = '20%';
//         x.style.paddingBottom = '50px';
//         wrap.appendChild(x);
//         for (const key in i) {
//                 let div = document.createElement('div');
//                 div.innerText = i[key];
//                 x.appendChild(div);
//             };
//     };
//     wrap.style.display = 'flex';
//     wrap.style.flexWrap = 'wrap';
//     document.body.appendChild(wrap);
// });

// 2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
// Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

// fetch('https://jsonplaceholder.typicode.com/comments').then(response => response.json())
// .then(users => { 
//     for (const i of users) {
//         let x = document.createElement('div');
//         x.classList.add('comment');
//         for (const key in i) {
//                 let div = document.createElement('div');
//                 div.innerText = i[key];
//                 x.appendChild(div);
//             };
//             document.body.appendChild(x);
//     };
// });