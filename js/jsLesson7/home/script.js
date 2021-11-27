// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

/*
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let arreyUser = [
    new User(1, 'Volodymyr', 'Myskiv', '****@gmail.com', 380960000000),
    new User(2, 'Ivan', 'Rak', '****@gmail.com', 380960000100),
    new User(3, 'oleg', 'Bok', '****@gmail.com', 380960000200),
    new User(4, 'Vitalk', 'Rik', '****@gmail.com', 380960000030),
    new User(5, 'Olia', 'Ikra', '****@gmail.com', 380960000040),
    new User(6, 'Vitia', 'Luss', '****@gmail.com', 380960000050),
    new User(7, 'Vova', 'Bog', '****@gmail.com', 380960060000),
    new User(8, 'Bogdan', 'Skif', '****@gmail.com', 380960000700),
    new User(9, 'Uliana', 'Loz', '****@gmail.com', 380960000900),
    new User(10, 'Kate', 'Zorro', '****@gmail.com', 380960000420)
]

console.info(arreyUser)
*/
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

/*
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let arreyUser = [
    new User(1, 'Volodymyr', 'Myskiv', '****@gmail.com', 380960000000),
    new User(2, 'Ivan', 'Rak', '****@gmail.com', 380960000100),
    new User(3, 'oleg', 'Bok', '****@gmail.com', 380960000200),
    new User(4, 'Vitalk', 'Rik', '****@gmail.com', 380960000030),
    new User(5, 'Olia', 'Ikra', '****@gmail.com', 380960000040),
    new User(6, 'Vitia', 'Luss', '****@gmail.com', 380960000050),
    new User(7, 'Vova', 'Bog', '****@gmail.com', 380960060000),
    new User(8, 'Bogdan', 'Skif', '****@gmail.com', 380960000700),
    new User(9, 'Uliana', 'Loz', '****@gmail.com', 380960000900),
    new User(10, 'Kate', 'Zorro', '****@gmail.com', 380960000420)
]

console.info(arreyUser.filter(arreyUser => arreyUser.id %2 ===0))
*/

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

/*
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let arreyUser = [
    new User(68, 'Volodymyr', 'Myskiv', '****@gmail.com', 380960000000),
    new User(2, 'Ivan', 'Rak', '****@gmail.com', 380960000100),
    new User(53, 'oleg', 'Bok', '****@gmail.com', 380960000200),
    new User(1, 'Vitalk', 'Rik', '****@gmail.com', 380960000030),
    new User(4, 'Olia', 'Ikra', '****@gmail.com', 380960000040),
    new User(6, 'Vitia', 'Luss', '****@gmail.com', 380960000050),
    new User(7, 'Vova', 'Bog', '****@gmail.com', 380960060000),
    new User(21, 'Bogdan', 'Skif', '****@gmail.com', 380960000700),
    new User(3, 'Uliana', 'Loz', '****@gmail.com', 380960000900),
    new User(10, 'Kate', 'Zorro', '****@gmail.com', 380960000420)
];

console.info(arreyUser.sort((a, b)=> a.id - b.id));
*/

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

/*
class Client{
    constructor(id, name, surname , email, phone, order){
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let arreyClient = [
    new Client(68, 'Volodymyr', 'Myskiv', '****@gmail.com', 380960000000, ['sdvf', 'avddb','sdv']),
    new Client(2, 'Ivan', 'Rak', '****@gmail.com', 380960000100, ['sdvf', 'avddb']),
    new Client(53, 'oleg', 'Bok', '****@gmail.com', 380960000200, ['sdvf', 'avddb']),
    new Client(1, 'Vitalk', 'Rik', '****@gmail.com', 380960000030, ['sdvf', 'avddb','sdvf', 'avddb']),
    new Client(4, 'Olia', 'Ikra', '****@gmail.com', 380960000040, ['sdvf', 'avddb']),
    new Client(6, 'Vitia', 'Luss', '****@gmail.com', 380960000050, ['sdvf', 'avddb','sdv']),
    new Client(7, 'Vova', 'Bog', '****@gmail.com', 380960060000, ['sdvf', 'avddb','sdvf', 'avddb']),
    new Client(21, 'Bogdan', 'Skif', '****@gmail.com', 380960000700, ['sdvf', 'avddb','sdvf', 'avddb']),
    new Client(3, 'Uliana', 'Loz', '****@gmail.com', 380960000900, ['sdvf', 'avddb','sdv']),
    new Client(10, 'Kate', 'Zorro', '****@gmail.com', 380960000420, ['sdvf', 'avddb','sdvf', 'avddb'])
];

console.info(arreyClient);
*/


// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

/*
class Client{
    constructor(id, name, surname , email, phone, order){
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let arreyClient = [
    new Client(68, 'Volodymyr', 'Myskiv', '****@gmail.com', 380960000000, ['sdvf', 'avddb','sdv']),
    new Client(2, 'Ivan', 'Rak', '****@gmail.com', 380960000100, ['sdvf', 'avddb']),
    new Client(53, 'oleg', 'Bok', '****@gmail.com', 380960000200, ['sdvf', 'avddb']),
    new Client(1, 'Vitalk', 'Rik', '****@gmail.com', 380960000030, ['sdvf', 'avddb','sdvf', 'avddb']),
    new Client(4, 'Olia', 'Ikra', '****@gmail.com', 380960000040, ['sdvf', 'avddb']),
    new Client(6, 'Vitia', 'Luss', '****@gmail.com', 380960000050, ['sdvf', 'avddb','sdv']),
    new Client(7, 'Vova', 'Bog', '****@gmail.com', 380960060000, ['sdvf', 'avddb','sdvf', 'avddb']),
    new Client(21, 'Bogdan', 'Skif', '****@gmail.com', 380960000700, ['sdvf', 'avddb','sdvf', 'avddb']),
    new Client(3, 'Uliana', 'Loz', '****@gmail.com', 380960000900, ['sdvf', 'avddb','sdv']),
    new Client(10, 'Kate', 'Zorro', '****@gmail.com', 380960000420, ['sdvf', 'avddb','sdvf', 'avddb'])
];

console.info(arreyClient.sort((a, b) => a.order.length - b.order.length));
*/