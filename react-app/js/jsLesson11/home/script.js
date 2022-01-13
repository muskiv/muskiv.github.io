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


// let model = document.forms.carForm.model; 
//     let type = document.forms.carForm.type; 
//     let volume = document.forms.carForm.volume; 
//     let btnCar = document.getElementById('btnCar'); 
//     let item = 'keyCar'; 
 
//     let saveCar = (modelCar, typeCar, volumeCar) => { 
//         let newArr = JSON.parse(localStorage.getItem(item)) || []; 
 
//         newArr.push({modelCar, typeCar, volumeCar}) 
//         localStorage.setItem(item, JSON.stringify(newArr)); 
//     }; 
 
//     btnCar.onclick = () => { 
//         saveCar(model.value, type.value, volume.value); 
//     }

//     let form = document.createElement('form'); 

// let inputModel = document.createElement('input');
// let inputType = document.createElement('input');
// let inputVolume = document.createElement('input');
// let button = document.createElement('button');
// button.innerText = ('Відправити');
// let item = 'keyCar';

// form.append(inputModel, inputType,  inputVolume, button);
// document.body.appendChild(form);

// let saveCar = (inputModel, inputType, inputVolume) => {
//     let newArr = JSON.parse(localStorage.getItem(item)) || [];
//     newArr.push({inputModel, inputType, inputVolume});
//     localStorage.setItem(item, JSON.stringify(newArr));
// };

// button.onclick = function () {
//     saveCar(inputModel.value, inputType.value, inputVolume.value);
// };