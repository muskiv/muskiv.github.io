let postSend = localStorage.getItem("postSend");
let parsedPostSend = JSON.parse(postSend);

let main = document.createElement('div');
main.classList.add('main');
main.style.width = '100%';
main.style.display = 'flex';
main.style.flexDirection = 'column';
main.style.alignItems = 'center';

let postBlock = document.createElement('div');
postBlock.classList.add('postBlock');
postBlock.style.width = '50%';
postBlock.style.display = 'flex';
postBlock.style.flexDirection = 'column';
postBlock.style.alignItems = 'center';
postBlock.style.paddingTop = '5px';
postBlock.style.paddingBottom = '5px';
postBlock.style.textAlign = 'center';
postBlock.style.background = '#34ebeb';

let btn = document.createElement('button');
btn.classList.add('btn');
btn.innerText = 'comments';
btn.style.marginTop = '25px';

let comments = document.createElement('div');
comments.classList.add('comments');
comments.style.width = '100%';
comments.style.display = 'flex';
comments.style.alignItems = 'center';
comments.style.flexWrap = 'wrap';

function eachRecursivePost(obj) {
    for (let q in obj) {
        if (typeof obj[q] == "object" && obj[q] !== null) eachRecursive(obj[q]);
        else {
            let div = document.createElement("div");
            div.append(obj[q]);
            postBlock.append(div);
        };
    };
};

btn.onclick = function () {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then((response) => response.json())
        .then((json) => {
            for (const coment of json) {
                let divComments = document.createElement('div');
                divComments.classList.add('divComments');
                divComments.style.width = '23%';
                divComments.style.marginTop = '20px';
                divComments.style.marginLeft = '5px';
                divComments.style.marginRight = '5px';
                divComments.style.paddingTop = '5px';
                divComments.style.paddingRight = '5px';
                divComments.style.paddingBottom = '5px';
                divComments.style.paddingLeft = '5px';
                divComments.style.display = 'flex';
                divComments.style.flexWrap = 'wrap';
                divComments.style.justifyContent = 'center';
                divComments.style.alignItems = 'center';
                divComments.style.textAlign = 'center';

                divComments.style.background = '#34ebeb';

                if (coment.postId === parsedPostSend[0]) {
                    divComments.innerText = Object.values(coment);
                    comments.append(divComments);
                };
            };
        });
    btn.disabled = true;
};


main.append(postBlock);
main.append(btn);
main.append(comments);
document.body.append(main);

eachRecursivePost(parsedPostSend);