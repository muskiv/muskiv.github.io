
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

/*
function automobile(car, model, year, maxSpeed, engineCapacity) {
    this.car = car;
    this.model = model;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineCapacity = engineCapacity;
//============================================================================================================
    this.drive = function () {
    console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`);
    };
    this.info = function () {
        console.log(`Car - ${this.car}, Model - ${this.model}, Year - ${this.year}, MaxSpeed - ${this.maxSpeed}, EngineCapacity - ${this.engineCapacity},`);
    };
    this.increaseMaxSpeed = function (newSpeed) {
        console.log(`Прокачали двигун до максимума ${this.maxSpeed + newSpeed}`);
    };
    this.changeYear = function (newValue) {
        this.year = newValue;
        console.log(`Взяли новеньку з салону ${this.year}`);
    };
    this.addDriver = function (driver) {
        this.addDriver = driver;
        console.log(`Водій ${this.addDriver}`);
    };
};

let myCar = new automobile('Ford', 'Focus', 2017, 192, '2.0 L');


console.log(myCar);
myCar.drive();
myCar.info();
myCar.increaseMaxSpeed(48);
myCar.changeYear(2021);
myCar.addDriver('Володимир');
*/

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car



// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
