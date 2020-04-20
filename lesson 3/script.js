'use strict'
//1)С помощью цикла while вывести все простые числа в промежутке от 0 до 100
let prime = 1;
let naturalNumber = [];

   while (prime <= 100) {
       if (prime == 1) {
           naturalNumber.push(1)
        } else {
            let result = 2;
            let i = 2;
            while (prime % i !== 0 ){
                i += 1;
                result +=1;
                } 
            if (result == prime) {
                naturalNumber.push(result);
            }
        }
        prime += 1;
    }
naturalNumber.shift();
console.log(naturalNumber);
console.log('--------------------------------------------------');

//2) С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. 
//Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.
//3)Товары в корзине хранятся в массиве. Задачи:
//  a)Организовать такой массив для хранения товаров в корзине;

let basket = [ ["Штаны" , 2000], ["Куртка", 5000], ["Рубашка", 1200], ["Шляпа", 900], ["Футболка", 1100] ];

//b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины

function countBasketPrice(basket) {
let sum = 0;

   	for(let i = 0; i < basket.length; i++) {
   			sum = sum + basket[i][1];
   	}
   	return sum;
}
  
console.log("Сумма корзины: " + countBasketPrice(basket));

console.log('--------------------------------------------------');
//4)Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла.
for( let i = 0; i <= 9; console.log(i++));

console.log('--------------------------------------------------');

//5)Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:

let pyramid = "";

for( let x = 0; x < 20; x++) {
	pyramid = pyramid + "x";
	console.log(pyramid);
}



