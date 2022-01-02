// - Імітуємо наповнення інтернет магазину товарами :
// Створити форму з наступними полями :
// - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись (preventDefault)
// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
// До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар

let form = document.forms['f1'];
let {name, pcs, price, img} = form;

let localKey = 'products';
let save = (productName, pcs, price, img) => {
    let localArr = JSON.parse(localStorage.getItem(localKey)) || [];
    let productObj = {productName, pcs, price, img};
    productObj.id = localArr[localArr.length - 1]?.id + 1 || 1 ;
    localArr.push(productObj);
    localStorage.setItem(localKey, JSON.stringify(localArr));
};

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    save(name.value, pcs.value, price.value, img.value);
    name.value = '';
    pcs.value = '';
    price.value = '';
    img.value = '';
})