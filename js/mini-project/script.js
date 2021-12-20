let containet = document.createElement('div');
containet.style.display = 'flex';
containet.style.flexWrap = 'wrap';
containet.style.justifyContent = 'space-evenly';



fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((json) => {
        let user = [];
        for (const iterator of json) {
            let a = document.createElement('a');
            a.href = 'user-details.html';
            a.innerText = 'user-details';
            a.style.border = 'solid';
            a.style.paddingLeft = '5px';
            a.style.marginTop = '10px';
            a.style.textDecoration = 'none';
            a.style.color = 'black';
            a.style.width = '80px';
            a.style.background = 'white';

            let id = document.createElement('div');
            id.innerText = `${iterator.id} ${iterator.name}`;
            id.style.width = '34%';
            id.style.height = '100px';
            id.style.display = 'flex';
            id.style.flexWrap = 'wrap';
            id.style.flexDirection = 'column';
            id.style.alignContent = 'center';
            id.style.alignItems = 'center';
            id.style.justifyContent = 'center';
            id.style.marginBottom = '10px';
            id.style.marginLeft = '5px';
            id.style.marginRight = '5px';
            id.style.background = '#c47ff5';

            a.onclick = function () {
                user.push(...Object.values(iterator));
                localStorage.setItem('user', JSON.stringify(user));
            }

            id.append(a);
            containet.append(id);
            document.body.append(containet);
        };
    });

// В index.html
// 1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users

// 2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.

// 3 Добавить каждому блоку кнопку/ссылку , при клике на которую происходит переход на страницу user-details.html, которая имеет детальную информацию про объект на который кликнули

// На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.

// 5 авДобить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)

// 6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html, которая имеет детальную информацию про текущий пост.

// На странице post-details.html:
// 7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.

// 8 Ниже информации про пост, вывести все комментарии текущего поста (эндпоинт для получения информации - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)

// Стилизация проекта -
// index.html - все блоки с user - по 2 в ряд. кнопки/ссылки находяться под информацией про user.
// user-details.html - блок с информацией про user вверху страницы. Кнопка ниже, на 90% ширины страницы, по центру.
// блоки с краткой информацией про post - в ряд по 5 объектов.
// post-details.html - блок с информацией про пост вверху. Комментарии - по 4 в ряд.
// Все без исключения элементы, который характеризируют user,post,comment  визуализировать, так, что бы было видно их блоки (дать задний фон + margin. Иными словами - крайне четкая сетка)