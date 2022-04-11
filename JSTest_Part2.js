/////////Циклы while и for

//task 1
// /При помощи цикла for выведите чётные числа от 2 до 10.
{
  for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
      alert(i);
    }
  }
}

//task 2
//Перепишите код, заменив цикл for на while, без изменения поведения цикла.
//for (let i = 0; i < 3; i++) {
//  alert( `number ${i}!` );
//}
{
  let i = 0;
  while (i < 3) {
    alert(`number ${i}!`);
    i++;
  }
}


//task 3
// Напишите цикл, который предлагает prompt ввести число, большее 100. Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.
// Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100, либо не нажмёт кнопку Отмена (ESC).
// Предполагается, что посетитель вводит только числа. Предусматривать обработку нечисловых строк в этой задаче необязательно.
{
  while (true) {
    let message = +prompt("Введите число:", "5");

    if (message > 100 || message == null) {
      break;
    }
  }
}


//task 4
// Натуральное число, большее 1, называется простым, если оно ни на что не делится, кроме себя и 1.
// Другими словами, n > 1 – простое, если при его делении на любое число кроме 1 и n есть остаток.
// Например, 5 это простое число, оно не может быть разделено без остатка на 2, 3 и 4.
// Напишите код, который выводит все простые числа из интервала от 2 до n.
// Для n = 10 результат должен быть 2,3,5,7.
// P.S. Код также должен легко модифицироваться для любых других интервалов.

{
  let interval = prompt("Введите конец интервала:", "10");

  nextstap:
  for (let i = 2; i <= interval; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        continue nextstap;
      }
    }
    alert(`Простое число: ${i}!`);
  }

}

////////////switch


//task 1
// Напишите if..else, соответствующий следующему switch:
// {
//   switch (browser) {
//     case 'Edge':
//       alert("You've got the Edge!");
//       break;

//     case 'Chrome':
//     case 'Firefox':
//     case 'Safari':
//     case 'Opera':
//       alert('Okay we support these browsers too');
//       break;

//     default:
//       alert('We hope that this page looks ok!');
//   }
// }

{
  let browser = prompt("Введите браузер", "Edge");
  if (browser == 'Edge') {
    alert("You've got the Edge!");
  }
  else if (browser == 'Chrome' || browser == 'Firefox' || browser == 'Safari' || browser == 'Opera') {
    alert('Okay we support these browsers too');
  }
  else {
    alert('We hope that this page looks ok!');
  }
}

//task 2
//Перепишите код с использованием одной конструкции switch:
// const number = +prompt('Введите число между 0 и 3', '');
//
// if (number === 0) {
//   alert('Вы ввели число 0');
// }
//
// if (number === 1) {
//   alert('Вы ввели число 1');
// }
//
// if (number === 2 || number === 3) {
//   alert('Вы ввели число 2, а может и 3');
// }

{
  const number = +prompt('Введите число между 0 и 3', '');
  switch (number) {
    case 0:
      alert('Вы ввели число 0');
      break;
    case 1:
      alert('Вы ввели число 1');
      break;
    case 2:
    case 3:
      alert('Вы ввели число 2, а может и 3');
      break;
    default: alert('Это какое то другое число');
  }
}
