let deleteBtn = document.createElement('button');
deleteBtn.innerText = 'Видалити все';
document.body.appendChild(deleteBtn);

let div = document.createElement('div');
document.body.appendChild(div);

let localKey = 'products';
let localArr = JSON.parse(localStorage.getItem(localKey));

localArr.forEach(item => {
    let product = document.createElement('div');

    let productName = document.createElement('h1');
    productName.innerText = item.productName;

    let pcs = document.createElement('p');
    pcs.innerText = 'кількість: ' + item.pcs;

    let price = document.createElement('p');
    price.innerText = 'ціна: ' + item.price;

    let img = document.createElement('img');
    img.src = item.img;

    let btn = document.createElement('button');
    btn.innerText = 'Видалити цей товар';

    div.appendChild(product);
    product.append(productName, pcs, price, img, btn);

    let remove = () => {
        let index = localArr.indexOf(item);
        localArr.splice(index, 1);
        localStorage.setItem(localKey, JSON.stringify(localArr));
        product.remove();
    }

    btn.addEventListener('click', () => {
        remove();
    })
})

let deleteAll = () => {
    localStorage.clear();
    div.innerHTML = 'Пусто';
}

deleteBtn.addEventListener('click', () => {
    deleteAll();
})
