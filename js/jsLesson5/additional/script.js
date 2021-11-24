// - Дано натуральное число n. Выведите все числа от 1 до n.

/*
let start = 1;
let n = 15;

function numbs(limit) {
    if(start <= limit){
        console.log(start);
        start++;
        numbs(limit);
    }
}

numbs(n);
*/

// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.

/*
let numbs = (a, b)=>{
    if (a < b) {
        for (; a <= b; a++) {
        console.log(a);
        }
    }
    else {
        for (; a >= b; a--) {
            console.log(a);
        }
    }
}

numbs(2, 5);
numbs(11, 8);
*/

// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

/*
 // made with the help of front end developer friends
let array = [9,8,0,4];
let index = 0; // від 0 до 2
function replaceItemByIndex(arr, i) {
	let first = arr[i];
    let second = arr[i+1];

    arr[i] = second;
    arr[i+1] = first;

    console.log(arr);
}

replaceItemByIndex(array, index);
*/

// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]