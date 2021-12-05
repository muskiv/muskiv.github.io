// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

// let form = document.createElement('form');
// let form2 = document.createElement('form');

//     let input = document.createElement('input');
//     input.setAttribute('name', 'input');

//     let input2 = document.createElement('input');
//     input2.setAttribute('name', 'input2');

//         form.appendChild(input);
//         form.appendChild(input2);

//     let input3 = document.createElement('input');
//     input3.setAttribute('name', 'input3');

//     let input4 = document.createElement('input');
//     input4.setAttribute('name', 'input4');

//         form2.appendChild(input3);
//         form2.appendChild(input4);

// let button = document.createElement('button');
// button.innerText = ('Enter');
// button.addEventListener('click', function (){
//     console.log(form.input.value);
//     console.log(form.input2.value);
//     console.log(form2.input3.value);
//     console.log(form2.input4.value);
// });

// document.body.appendChild(form);
// document.body.appendChild(form2);
// document.body.appendChild(button);

// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)  

// let input = document.createElement('input');
// input.type = ('text');
// let input2 = document.createElement('input');
// input2.type = ('text');
// let input3 = document.createElement('input');
// input3.type = ('text');
// let button = document.createElement('button');
//     button.innerText = ('конвертувати в таблицю');

//     button.addEventListener('click', function () {
//         let table = document.createElement('table');
//         let txt = input3.value;
//         let tr = input.value;
//         let td = input2.value;
//         for (let i = 0; i < tr; i++) {
//             let tr = document.createElement('tr');
//             for (let j = 0; j < td; j++) {
//                 let td = document.createElement('td');
//                 td.append(txt);
//                 tr.append(td);
//                 table.append(tr);
//             }
//         }
//         document.body.appendChild(table);
//     });

// document.body.appendChild(input);
// document.body.appendChild(input2);
// document.body.appendChild(input3);
// document.body.appendChild(button);


// - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
// Перевірку робити при натисканні на кнопку

// let array = ['бляха', 'дідько', 'холера'];
// let input = document.createElement('input');
// input.type = ('text');
// let btn = document.createElement('button');
// btn.innerText = ('filter');
// btn.onclick = function () {
//     for (const iterator of array) {
//         if (input.value == iterator) {
//             alert('НУ ТИ І БИДЛО...');
//         };
//     };
// };
// document.body.appendChild(input);
// document.body.appendChild(btn);


// - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Потрібно перевіряти чи не містить ціле речення в собі погані слова.
// Кинути алерт з попередженням у випадку якщо містить.
// Перевірку робити при натисканні на кнопку

// let array = ['бляха', 'дідько', 'холера'];
// let input = document.createElement('input');
// input.type = ('text');
// let btn = document.createElement('button');
// btn.innerText = ('filter');
// btn.onclick = function () {
//     for (const iterator of array) {
//         if (input.value.includes(iterator)) {
//             alert('НУ ТИ І БИДЛО...');
//         };
//     };
// };
// document.body.appendChild(input);
// document.body.appendChild(btn);