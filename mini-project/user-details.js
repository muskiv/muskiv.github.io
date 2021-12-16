
let user = localStorage.getItem("user");
let parsedUser = JSON.parse(user);

function eachRecursive(obj) {
    for (let k in obj) {
        if (typeof obj[k] == "object" && obj[k] !== null) eachRecursive(obj[k]);
        else {
            let div = document.createElement("div");
            div.append(obj[k]);
            document.body.append(div);
        }
    }
}

eachRecursive(parsedUser);

// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html, которая имеет детальную информацию про текущий пост.