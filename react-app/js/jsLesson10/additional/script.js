// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
// При лівому кліку миші вивести в консоль інформацію про блок або елемент на який відбувся клік.
// Інформація яку потрібно вивести: Назва тегу, список класів, список ід, розміри в форматі висота*ширина

// let div = document.createElement('div');
// div.classList = ('first');
// div.setAttribute('id', 1);
// div.innerText = ('nhvfemkcdw, lx nhjbgomkf,lcd');
// div.style.width ='200px';
// div.style.height ='20px';
// document.body.appendChild(div);
// document.onclick = function (e) {
//     console.log('tag', e.target.tagName, ',', 'class', e.target.className, ',', 'id', e.target.id, ',', 'висота', e.target.style.width, ',', 'ширина', e.target.style.height);
    
// };

// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
// При лівому кліку миші  зробить popup (спливаючий блок) в якому буде вся інформація про блок.
// Інформація яку потрібно вивести в popup: Назва тегу, список класів, список ід, розміри в форматі висота*ширина

// let div = document.createElement('div');
// div.classList = ('first');
// div.setAttribute('id', 1);
// div.innerText = ('nhvfemkcdw, lx nhjbgomkf,lcd');
// div.style.width ='200px';
// div.style.height ='20px';
// document.body.appendChild(div);

// let popups = document.createElement('div');
// popups.style.width = '400px';
// popups.style.height = '150px';
// popups.style.background = 'red'; 
// popups.style.position = 'absolute';
// popups.style.top = '200px';
// popups.style.left = '200px';
// popups.style.visibility = 'hidden';
// document.body.appendChild(popups);
// document.onclick = function (e) {
//     popups.style.visibility = 'visible';
//     popups.append('tag ', e.target.tagName + ', ', 'class ', e.target.className + ', ', 'id ', e.target.id + ', ', 'висота ', e.target.style.width + ', ', 'ширина ', e.target.style.height + ' ');
//     document.body.style.background = 'gray';
// };


// -- взять массив пользователей
// let usersWithAddress = [
//                 {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//                 {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
//                 {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
//                 {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
//                 {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
//                 {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
//                 {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
//                 {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
//                 {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
//                 {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//                 {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
//             ];

//             let filterFalse = document.createElement('input');
//             filterFalse.type = 'checkbox';
//             filterFalse.classList = 'filterFalse';
//             document.body.appendChild(filterFalse);

//             let filterAge = document.createElement('input');
//             filterAge.type = 'checkbox';
//             filterAge.classList = 'filterAge';
//             document.body.appendChild(filterAge);

//             let filterKiev = document.createElement('input');
//             filterKiev.type = 'checkbox';
//             filterKiev.classList = 'filterKiev';
//             document.body.appendChild(filterKiev);
            



// - Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ



// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
// Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне

// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.

//  Завдання важке для розуміння, але дуже легке в реалізації. Тут треба буде погуглити
//  *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан