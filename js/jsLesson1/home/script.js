/* // ДОМАШНЯ РОБОТА
let q = "hello";
console.log(q);
alert(q);
document.write(q);
let w = "owu";
console.log(w);
alert(w);
document.write(" "+w);
let e = "com";
console.log(e);
alert(e);
document.write(" "+e);
let r = "ua";
console.log(r);
alert(r);
document.write(" "+r);
let t = 1;
console.log(t);
alert(t);
document.write(" "+t);
let y = 10;
console.log(y);
alert(y);
document.write(" "+y);
let u = -999;
console.log(u);
alert(u);
document.write(" "+u);
let i = 123;
console.log(i);
alert(i);
document.write(" "+i);
let o = 3.14;
console.log(o);
alert(o);
document.write(" "+o);
let p = 2.7;
console.log(p);
alert(p);
document.write(" "+p);
let a = 16;
console.log(a);
alert(a);
document.write(" "+a);
let s = true;
console.log(s);
alert(s);
document.write(" "+s);
let d = false;
console.log(d);
alert(d);
document.write(" "+d);
*/


//- Переприсвоїти кожній змінній з завдання значення на довільне.


/*
let q = "hello";
q = "hi";
console.log(q);
alert(q);
document.write(q);
let w = "owu";
w = "okten";
console.log(w);
alert(w);
document.write(" "+w);
let e = "com";
e = "http";
console.log(e);
alert(e);
document.write(" "+e);
let r = "ua";
r = "usa";
console.log(r);
alert(r);
document.write(" "+r);
let t = 1;
t = 900;
console.log(t);
alert(t);
document.write(" "+t);
let y = 10;
y = 20;
console.log(y);
alert(y);
document.write(" "+y);
let u = -999;
u = -555;
console.log(u);
alert(u);
document.write(" "+u);
let i = 123;
i = 321;
console.log(i);
alert(i);
document.write(" "+i);
let o = 3.14;
o = 3.14159265359;
console.log(o);
alert(o);
document.write(" "+o);
let p = 2.7;
p = 50.6;
console.log(p);
alert(p);
document.write(" "+p);
let a = 16;
a = 61;
console.log(a);
alert(a);
document.write(" "+a);
let s = true;
s = false;
console.log(s);
alert(s);
document.write(" "+s);
let d = false;
d = true;
console.log(d);
alert(d);
document.write(" "+d);
*/


//- Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person. (Не об'єкт)

/*
let firstName = "Volodymyr";
let middleName = "Myronovych";
let lastName = "Myskiv";
let person = "firstName, middleName, lastName";
console.log(person);
*/


//- За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".

/*
let name = prompt('Імя');
let middleName = prompt('По-Батькові');
let age = prompt('Років');
alert('Вітаю '+name+' '+middleName+'. Тобі '+age+" років.");
*/

//- За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль. let a = 100; let b = '100'; let c = true;

/*
let a = 100; 
let b = '100'; 
let c = true;
console.log(typeof a, typeof b, typeof c);
*/


//- Визначити відповідний оператор в виразах що б вийшов відповідний результат. В однакових виразах не використовувати однакові оператори!!!
/*
    5 ? 6 -> true
    5 ? 6 -> false
    5 ? 6 -> false
    5 ? 6 -> false
    10 ? 10 -> true
    10 ? 10 -> true
    10 ? 10 -> false
    10 ? 10 -> false
    10 ? 10 -> false
    123 ? '123' -> false
    123 ? '123' -> true
*/

//відповіді
/*
console.log(5 <= 6);
console.log(5 >= 6);
console.log(5 === 6);
console.log(5 == 6);
console.log(10 == 10);
console.log(10 === 10);
console.log(10 < 10);
console.log(10 > 10);
console.log(10 !== 10);
console.log(123 === '123');
console.log(123 == '123');
*/

//- Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?

/*
    let str = "20";
    let a = 5;
    document.write(str + a + "<br/>");  //205 - бо 5 стало строкою... щоб відбулась дія додавання "+str + a + "<br/>""
    document.write(str - a + "<br/>"); //15 - при відніманні значення str стало цифрами
    document.write(str * "2" + "<br/>");//40 - два значення переводяться в цифри
    document.write(str / 2 + "<br/>");//10 - str значення переводяться в цифри
*/
