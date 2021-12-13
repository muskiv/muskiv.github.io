// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
// кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
// Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста

fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((json) => {
        let popups = document.createElement('div');
        popups.style.width = '150px';
        popups.style.height = '420px';
        popups.style.background = 'red';
        popups.style.position = 'absolute';
        popups.style.left = '200px';
        popups.style.visibility = 'hidden';
        document.body.appendChild(popups);

        let popups2 = document.createElement('div');
        popups2.style.width = '400px';
        popups2.style.height = '150px';
        popups2.style.background = 'blue';
        popups2.style.color = 'white';
        popups2.style.position = 'absolute';
        popups2.style.left = '350px';
        popups2.style.visibility = 'hidden';
        document.body.appendChild(popups2);

        for (const iterator of json) {
            let id = document.createElement('div');
            id.innerText = `id ${iterator.id}`;

            let btn = document.createElement('button');
            btn.innerText = `${iterator.name}`;

            btn.onclick = function () {
                fetch('https://jsonplaceholder.typicode.com/posts')
                    .then((response) => response.json())
                    .then((json) => {
                        for (const j of json) {
                            let btn2 = document.createElement('button');
                            btn2.innerText = 'post';
                            if (iterator.id === j.userId) {
                                let x = document.createElement('div');
                                x.innerText = `Пости юзера id ${j.userId}`;
                                popups.append(x);
                                popups.append(btn2);
                            };

                            popups.style.visibility = 'visible';
                            document.body.style.background = 'gray';

                            btn2.onclick = function () {
                                popups2.innerText = Object.values(j);
                                popups2.style.visibility = 'visible';
                            };
                        };
                    });
            };
            document.body.append(id);
            document.body.append(btn);
        };
    });
