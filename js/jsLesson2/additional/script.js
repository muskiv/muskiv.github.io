// - Нам дано масив друзів let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"];
// Потрібно зробити перевірку якщо кількість елементів у масиві більше або дорівнює 3, то виводиться повідомлення про те, що це великий масив, в якому  3 і більше елементи.
// Інакше слід вивести на екран повідомлення про те, що це маленький масив, в якому менше 3-х елементів.

/*
let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"];
if (friends.length > 3)
{
    alert('великий масив')
}
else if (friends.length < 3)
{
    alert('маленький масив')
}else{
    alert('це 3')
}
*/

// - Маємо 3 числа і між ним  нам потрібно знайти те що посередині. 
// Знайти, яке з них є середнім (більше одного, але менше за інше).
// Перевірити, чи знаходиться перше число між двома іншими.

/*
let q = 1;
let c = 7;
let r = 5;

if (q < c && q > r || q > c && q < c)
{
    console.log(q);
}
else if(r < c && r > q || r > c && r < q)
{
    console.log(r);
}
else if(c < r && c > q || c > r && c < q)
{
    console.log(c);
}
else{
    console.log(error);
}
*/


//   



//  - Маємо будь яке число від -100 , 0 , +100 потрібно перевірити яким є число: позитивним, негативним або нулем напишіть це тернарним оператором

/*
let numbers = -100;

if(numbers > 0 && numbers <=100)
{
    console.log('позитивним');
}
else if(numbers === 0)
{
    console.log('нулем');
}
else if(numbers < 0 && numbers >= -100)
{
    console.log('негативним');
}
else
{
    console.log('error');
}
*/