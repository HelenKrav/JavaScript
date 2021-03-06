//task 1
// Следующая функция возвращает true, если параметр age больше 18.
// В ином случае она задаёт вопрос confirm и возвращает его результат.

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Родители разрешили?');
//   }
// }
// Перепишите функцию, чтобы она делала то же самое, но без if, в одну строку.

// Сделайте два варианта функции checkAge:

// 1)Используя оператор ?
// 2)Используя оператор ||

{
function checkAge(age) {
    return (age > 18) ? true : confirm('Родители разрешили?');
}

function checkAge1(age) {
    return (age > 18) || confirm('Родители разрешили?');
}
}


//task 2 
// Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.

// Пример вызовов:

// min(2, 5) == 2
// min(3, -1) == -1
// min(1, 1) == 1
{
 function min(a,b)
 {
     if(a<b)
     {
         return a;
    }
    else 
    {
        return b;
    }
 }

 alert(min(29,5));
}



//task 3

// Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.

// pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27
// pow(1, 100) = 1 * 1 * ...* 1 = 1
// Создайте страницу, которая запрашивает x и n, а затем выводит результат pow(x,n).

// P.S. В этой задаче функция обязана поддерживать только натуральные значения n, т.е. целые от 1 и выше.
{
function pow(x,n)
{
    if (n<1)
    {
        return alert("n<1");
    }
    else 
    {
        return x**n;
    }

}

let x = +prompt("Enter x:", "5");
let n = +prompt("Enter n:",  "2");

alert(pow(x,n));
}


//task 4
// Замените код Function Expression стрелочной функцией:

// function ask(question, yes, no) {
//   if (confirm(question)) yes()
//   else no();
// }

// ask(
//   "Вы согласны?",
//   function() { alert("Вы согласились."); },
//   function() { alert("Вы отменили выполнение."); }
// );

let ask = confirm("Вы согласны?") ? () => alert("Вы согласились.") : () => alert("Вы отменили выполнение.");

ask();
