
// - Дано список імен.
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

/*
let n1 = 'Harry..Potter';
let n2 = 'Ron---Whisley';
let n3 = 'Hermione__Granger';
let normName =(str , symbol)=>{
    console.log(str.replaceAll(symbol, ' ').replace(/\s+/, ' '));
};

normName(n1,'.');
normName(n2,'-');
normName(n3,'_');
*/

// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

/*
let generatorArray = (rando)=> {
    let z = [];
    for (let i= 0; i < rando; i++) {
        z[i] = Math.round(Math.random()*100);
    }
    return z;
}

console.log(generatorArray(5));
*/

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort

/*
let generatorArray = (rando)=> {
    let z = [];
    for (let i= 0; i < rando; i++) {
        z[i] = Math.round(Math.random()*100);
    }
    return z.sort();
}

console.log(generatorArray(5));
*/

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа

/*
let generatorArray = (rando)=> {
    let z = [];
    for (let i= 0; i < rando; i++) {
        z[i] = Math.round(Math.random() *100);
    }
    console.log(z.filter(z=> z % 2 === 0));
}

console.log(generatorArray(5));
*/

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

/*
let generatorArray = (rando)=> {
    let z = [];
    for (let i= 0; i < rando; i++) {
        z[i] = Math.round(Math.random() *100);
    }
    console.log(z.map(value => value.toString()));
}

generatorArray(5);
*/

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]

/*
let nums = [11,21,3];
let sortNums=(arr, direction)=>{
    let z=[];
if (direction === 'ascending') {
    z = arr.sort((a1, a2) => a1 - a2);
}
else if (direction === 'descending') {
    z = arr.sort((a1, a2) => a2 - a1);
}
return z;
}

console.log(sortNums(nums,'ascending'));
console.log(sortNums(nums, 'descending'));
*/

// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//  -- відсортувати його за спаданням за monthDuration
//  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

/*
let coursesAndDurationArray = [
        {title: 'JavaScript Complex', monthDuration: 5},
        {title: 'Java Complex', monthDuration: 6},
        {title: 'Python Complex', monthDuration: 6},
        {title: 'QA Complex', monthDuration: 4},
        {title: 'FullStack', monthDuration: 7},
        {title: 'Frontend', monthDuration: 4}
    ];

    console.log(coursesAndDurationArray.sort((a,b)=> b.monthDuration - a.monthDuration))
//==============================================================================================================
let limit = coursesAndDurationArray.filter(function (limit) {
        if (limit.monthDuration > 5) {
            return limit;
        }
    });
    console.log(limit);
*/


// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]

/*
let cutString=(str, n)=>{
    let substrings =[];
    for (; str.length;) {
        substrings.push(str.substring(0, n));
        str = str.slice(n);
    };
    console.log(substrings);
    
};
cutString('наслаждение',3);
*/
