// є масив -
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];


let favorites = [];
for (const iterator of users) {
    let div = document.createElement('div');
    div.append(Object.values(iterator));
    let button = document.createElement('button');
    button.innerText = 'like';
    button.onclick = function () {
        favorites.push(Object.values(iterator));
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }
    document.body.append(div);
    document.body.append(button);
}
console.log(favorites);

let buttonNextP = document.createElement('a');
buttonNextP.innerText = ('favorites.html');
buttonNextP.href = 'favorites.html';
buttonNextP.target = 'blank';
buttonNextP.style.position = 'absolute';
buttonNextP.style.left = '250px';
document.body.append(buttonNextP);

// створити під кожен об'єкт свій блок з конопкою "додати до улюблених" при натисканні на яку об'єкт потрапляє до масиву favorites улюблених обраних об'єктів в локальному сховищі.
// Створити сторніку favorites.html при переході на яку потрібно вивест в документ всіх обраних на попередньому етапі.