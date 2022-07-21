//1 задание

/* let admin, name;
name = "Джон";
admin = name;
alert (name); */

//2 задание

/* for (let i = 1; i <= 10; i++){
    if (i % 2 == 0)
    {
        alert (i)
    }
} */

//3 задание

/* let i = 1;
while (i <= 10){
    if (i % 2 == 0)
    {
        alert (i);
    }
    i++;
} */

//4 задание

/* let number = 0;
while (number <= 100){
    number = prompt ("Введите число больше 100");
} */

//5 задание

/* let age = prompt ("Введите число");
if (age >= 14 && age <= 90)
{
    alert ("Переменная age входит в диапазон от 14 до 90");
} */

//6 задание

/* let age = prompt ("Введите число");
if (age < 14 || age > 90)
{
    alert ("Переменная age не входит в диапазон от 14 до 90");
} */

//7 задание

/* let age = prompt ("Введите число");
if (!(age >= 14 && age <= 90))
{
    alert ("Переменная age не входит в диапазон от 14 до 90");
} */

/* let age = prompt ("Введите число");
if (!(age < 14 || age > 90))
{
    alert ("Переменная age входит в диапазон от 14 до 90");
} */

//8 задание

/* function makeNegative(num){ 
    if (num > 0) 
    {
        num = num * (-1);
        alert (num);
    }
    else 
    {
        alert (num);
    }
}
makeNegative(1);
makeNegative(-5);
makeNegative(0);
makeNegative(0.12); */

//9 задание

/* function isDivisible (n,x,y) {
    if (n % x == 0 && n % y == 0)
    {
        console.log (true);
    }
    else
    {
        console.log (false);
    } 
}

isDivisible(3, 1, 3);
isDivisible(12, 2, 6);
isDivisible(100, 5, 3);
isDivisible(12, 7, 5); */

//10 задание

function sum (numbers){
let sum = 0;
for (let i = 0; i < numbers.lenght; i++)
{
    sum = sum + numbers[i];
}
    return sum;
}
alert(sum([1, 5.2, 4, 0, -1])); 