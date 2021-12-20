let container = document.createElement('div');
container.classList.add('container');
container.style.width = '100%';
container.style.height = '100vh';
container.style.display = 'flex';
container.style.flexDirection = 'column';
container.style.alignItems = 'center';

let main = document.createElement('div');
main.classList.add('main');
main.style.paddingTop = '10px';
main.style.paddingRight = '10px';
main.style.paddingBottom = '10px';
main.style.paddingLeft = '10px';
main.style.background = '#c47ff5';

let user = localStorage.getItem("user");
let parsedUser = JSON.parse(user);


let btnBlock = document.createElement('div');
btnBlock.style.width = '100%';



let btn = document.createElement('button');
btn.classList.add('btn');
btn.style.top = '90%';
btn.style.position = 'absolute';
btn.innerText = 'post of current user';

let title = document.createElement('div');
title.classList.add('title');
title.style.width = '100%';
title.style.display = 'flex';
title.style.flexWrap = 'wrap';

function eachRecursive(obj) {
    for (let k in obj) {
        if (typeof obj[k] == "object" && obj[k] !== null) eachRecursive(obj[k]);
        else {
            let div = document.createElement("div");
            div.style.display = 'flex';
            div.style.justifyContent = 'center';

            div.append(obj[k]);
            main.append(div);
        };
    };
};

btn.onclick = function () {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((json) => {
            for (const post of json) {
                let divPost = document.createElement('div');
                divPost.classList.add('divPost');
                divPost.style.marginBottom = '10px';
                divPost.style.marginLeft = '5px';
                divPost.style.marginRight = '5px';
                divPost.style.paddingTop = '5px';
                divPost.style.paddingRight = '5px';
                divPost.style.paddingBottom = '5px';
                divPost.style.paddingLeft = '5px';
                divPost.style.display = 'flex';
                divPost.style.flexWrap = 'wrap';
                divPost.style.flexDirection = 'column';
                divPost.style.justifyContent = 'center';
                divPost.style.alignItems = 'center';
                divPost.style.textAlign = 'center';
                divPost.style.width = '18%';
                divPost.style.background = '#c47ff5';

                let postSend = [];
                let userDetails = document.createElement('a');
                if (post.userId === parsedUser[0]) {
                    divPost.innerText = post.title;
                    userDetails.href = 'post-details.html';
                    userDetails.innerText = `post-details`;
                    userDetails.style.border = 'solid';
                    userDetails.style.paddingLeft = '5px';
                    userDetails.style.paddingRight = '5px';
                    userDetails.style.marginTop = '5px';
                    userDetails.style.textDecoration = 'none';
                    userDetails.style.color = 'black';
                    userDetails.style.background = 'white';

                    userDetails.onclick = function () {
                        postSend.push(...Object.values(post));
                        localStorage.setItem('postSend', JSON.stringify(postSend));
                    };

                    title.append(divPost)
                    divPost.append(userDetails);
                };
            };
        });
    btn.disabled = true;
};

container.append(main);
container.append(btn);
container.append(btnBlock);
document.body.append(container);
document.body.append(title);

eachRecursive(parsedUser);

// post-details.html - блок с информацией про пост вверху. Комментарии - по 4 в ряд.
// Все без исключения элементы, который характеризируют user,post,comment  визуализировать, так, что бы было видно их блоки (дать задний фон + margin. Иными словами - крайне четкая сетка)