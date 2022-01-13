// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".

// let x = document.createElement('div');
// x.setAttribute('id', 'text');
// x.innerText = 'ewfrdhbnjk';
// document.body.appendChild(x);
// let button = document.createElement('button');
// document.body.appendChild(button);
// button.onclick = function () {
//     x.innerText = '';
// }

// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.


// let button = document.createElement('button');
// document.body.appendChild(button);
// button.onclick = function () {
//     this.style.display = 'none';
// }

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача.

// let txt = document.createElement('div');
// txt.innerText = ('Скільки років')
// let input = document.createElement('input');
// input.type = ('text')
// input.classList = ('age')
// let button = document.createElement('button')
// button.innerText = ('Enter')
// button.onclick = function () {
//     if (input.value < 18) {
//         txt.innerText = ('Друже, ти не повнолітній, йди дивись мульки')
//     } 
//     else if (input.value >= 18){
//         txt.innerText = ('Ласкаво просимо')
//     }
//     else {
//         txt.innerText = ('че???')
//     }
// }
// document.body.appendChild(txt)
// document.body.appendChild(input)
// document.body.appendChild(button)


// - Создайте меню, которое раскрывается/сворачивается при клике

// let menu = document.createElement('div');
// menu.innerText = ('menu');
// let ul = document.createElement('ul');
// let li = document.createElement('li');
// li.innerText = ('dfbgfbf');
// let li2 = document.createElement('li');
// li2.innerText = ('vdf');
// let li3 = document.createElement('li');
// li3.innerText = ('grg');
// ul.appendChild(li);
// ul.appendChild(li2);
// ul.appendChild(li3);
// document.body.appendChild(menu);
// document.body.appendChild(ul);

// menu.addEventListener('click', function () {
//     if (ul.style.display == 'block') {
//         ul.style.display = 'none'
//     }
//     else{
//         ul.style.display = 'block';
//     }
// });


// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// Вывести список комментариев в документ, каждый в своем блоке.
//  Добавьте каждому комментарию по кнопке для сворачивания его body.

// let list = [
//     {name: 'Олег', comment: 'Го на лижі'},
//     {name: 'Уляна', comment: 'Купи котам корм'},
//     {name: 'Назар', comment: 'Ти читав сьогодні?'},
//     {name: 'Ання', comment: 'Не час помирати'},
//     {name: 'Володя', comment: 'Спати хочу'},
// ];

// let div = document.createElement('div');
// for (const iterator of list) {
//     let name = document.createElement('h4');
//     name.innerText = iterator.name;
//     div.appendChild(name);

//     let comment = document.createElement('p');
//     comment.innerText = iterator.comment;
//     div.appendChild(comment);

//     let button = document.createElement('button');
//     button.innerText = ('скрити коммент');
//     div.appendChild(button);

//     button.onclick = function () {
//         comment.style.display = 'none';
//     }
// }

// document.body.appendChild(div);