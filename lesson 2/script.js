"use strict"

//1)Почему код даёт именно такие результаты?

/*var a = 1, b = 1, c, d;
c = ++a; alert(c); // 2
d = b++; alert(d); // 1
c = (2+ ++a); alert(c); // 5
d = (2+ b++); alert(d); // 4
alert(a); // 3
alert(b); // 3*/

/*-6 строка кода дает результат 2, потому что переменная c равняется переменной a, которая в свою
очередь равняется 1, ++a прибавляет единцу к первоначальному числу и выводит его.
  -7 строка кода дает результат 1, потому что переменная d равняется переменной b, которая в свою 
 очередь равняется 1, b++ прибавляет единицу к первоначальному числу, но выводит число до операции сложения.
  -8 строка кода дает результат 5, потому что переменная а уже имеет значение 2, потому что уже увеличилась
 на 6 строке, и сейчас увеличивается повторно, выражение равно 2 + 3 = 5.
  -9 строка кода дает результат 4, потому что переменная b, так же имеет значение 2, но постфиксный инкремент
хоть и прибавляет единицу, выводит первоначальное число, выражение равно 2 + 2 = 4. 
  -10 строка кода дает результат 3, потому что изначальная переменная а = 1 увеличилас на 2 раза, при помощи
 префиксной формыю
  -11 строка кода дает результат 3, потому что изначальная переменная b = 1, увеличилась на 2 раза.
*/


//2) Чему будет равен x в примере ниже?
/*var a = 2;
var x = 1 + (a *= 2)*/
 // Пример ниже равен 5

 /*3)Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. 
Затем написать скрипт, который работает по следующему принципу:
если a и b положительные, вывести их разность;
если а и b отрицательные, вывести их произведение;
если а и b разных знаков, вывести их сумму;
 */ 

 /*let a = 10;

 let b = 5;

 if(a >= 0 && b >= 0) {
 	alert("Разность чисел: " + (a-b)) ;
 }else if (a < 0 && b < 0) {
 	alert("Произведение чисел: " + (a*b));
 }else if (Math.sign(a) !== Math.sign(b)) {
 	alert ("Сумма чисел: " + (a + b));
 }else {
 	alert ("Nothing");
 }
 */

 /*4) Присвоить переменной а значение в промежутке [0..15]. 
 С помощью оператора switch организовать вывод чисел от a до 15.
 */

 /*let a = +prompt("Введите число от 1 до 15", "[0....15]")

 switch(a) {
 	case 1:
 		alert("Число номер: 1");
 		break;
 	case 2:
 		alert("Число номер: 2");
 		break;
 	case 3:
 		alert("Число номер: 3");
 		break;
 	case 4:
 		alert("Число номер: 4");
 		break;
 	case 5:
 		alert("Число номер: 5");
 		break;
 	case 6:
 		alert("Число номер: 6");
 		break;
 	case 7:
 		alert("Число номер: 7");
 		break;
 	case 8:
 		alert("Число номер: 8");
 		break;
 	case 9:
 		alert("Число номер: 9");
 		break;
 	case 10:
 		alert("Число номер: 10");
 		break;
 	case 11:
 		alert("Число номер: 11");
 		break;
 	case 12:
 		alert("Число номер: 12");
 		break;
 	case 13:
 		alert("Число номер: 13");
 		break;
 	case 14:
 		alert("Число номер: 14");
 		break;
 	case 15:
 		alert("Число номер: 15");
 		break;
 }
 */

 /* 5)Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. 
 Обязательно использовать оператор return
 */
/*
 function plus (x, y) {
 	return x + y;
 }

 function minus (x, y) {
 	return x - y;
 }

 function divide (x , y) {
 	return x / y;
 }

 function mult (x , y) {
 	return x * y;
 }
*/

/* 6)Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов,
operation – строка с названием операции. 
В зависимости от переданного значения операции выполнить одну из арифметических операций (использовать функции из пункта 5) 
и вернуть полученное значение (использовать switch).
*/
/*
function mathOperation(arg1, arg2, operation) {
	switch(operation) {
		case "Сумма":
			return arg1 + arg2;
			break;
	    case "Вычетание":
			return arg1 - arg2;
			break;
		case "Умножение":
			return arg1 * arg2;
			break;
		case "Деление":
			return arg1 / arg2;
			break;
	}
}
*/

/**7)Сравнить null и 0. Попробуйте объяснить результат.
*/
/*Ответ: результат false. В нестрогом равенстве значение null и underfined действует особое правило:
эти значени ни к чему не приводятся, они равны друг другу и не равны ничему другому. 
Поэтому null == 0 ложно.
*/

/**С помощью рекурсии организовать функцию возведения числа в степень. 
Формат: function power(val, pow), где val – заданное число, pow – степень
*/
/*
function paw(val, pow) {
	if (pow == 1){
		return val;
	} else {
		return val * paw(val, pow - 1);
	}
}

alert( paw(2, 3) );
*/