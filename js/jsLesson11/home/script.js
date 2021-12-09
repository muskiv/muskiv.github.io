// -створити форму з інпутами для name та age.
// При відправці форми записати об'єкт в localstorage

// let form = document.createElement('form'); 

// let inputName = document.createElement('input');
// inputName.type = 'name';

// let inputAge = document.createElement('input');
// inputAge.type = 'age';

// let button = document.createElement('button');
// button.innerText = ('Відправляємо');


// form.append(inputName, inputAge, button);
// document.body.appendChild(form);

// button.onclick = function () {
//     localStorage.setItem(inputName.value, inputAge.value);
// };

// -створити форму з інпутами для model,type та volume автівки.
// при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.

// let form = document.createElement('form'); 

// let inputModel = document.createElement('input');
// let inputType = document.createElement('input');
// let inputVolume = document.createElement('input');
// let button = document.createElement('button');
// button.innerText = ('Відправити');


// form.append(inputModel, inputType,  inputVolume, button);
// document.body.appendChild(form);

// button.onclick = function () {
//     let array = [];
//     array.push(inputModel.value, inputType.value, inputVolume.value);
//     localStorage.setItem('array', JSON.stringify(array));
// };