// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
// зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста

// fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json())
// .then(post =>{
//     let popups = document.createElement('div');
//     popups.style.width = '400px';
//     popups.style.height = '150px';
//     popups.style.background = 'red'; 
//     popups.style.position = 'absolute';
//     popups.style.top = '200px';
//     popups.style.left = '500px';
//     popups.style.visibility = 'hidden';
//     document.body.appendChild(popups);
//     for (const iterator of post) {
//         let block = document.createElement('div');
//         let btn = document.createElement('button');
//         btn.innerText = 'кнопкa';
//         for (const key in iterator) {
//             let div = document.createElement('div');
//             div.innerText = iterator[key];
//             block.appendChild(div);
//         }
//         btn.onclick = function () {
//             popups.style.visibility = 'visible';
//             popups.innerText = Object.values(iterator);
//             document.body.style.background = 'gray';
//         }
//         block.appendChild(btn);
//         document.body.appendChild(block);
//         }
// })