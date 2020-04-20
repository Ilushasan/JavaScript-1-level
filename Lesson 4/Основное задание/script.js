'use strict'
// Написать функцию, преобразующую число в объект. 
//Передавая на вход число от 0 до 999, мы должны получить на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни.

let userNumber = +prompt('Введите число от 0 до 999');

let digit = {
    units: 0,
    tens: 0,
    hundreds: 0,
};


function lalala() {
    function fits() { //Проверка числа на целочисленность
        if (Number.isInteger(userNumber)) {
            return userNumber;
        } else {
            return false;
        }
    }
    if (fits() <= 9) {
        digit.units = fits();
        console.log(digit);
    } else if (fits() <= 99) {
        digit.units = Math.floor(fits() % 10);
        digit.tens = Math.floor(fits() / 10 % 10);
        console.log(digit);
    } else if (fits() <= 999) {
        digit.units = Math.floor(fits() % 10);
        digit.tens = Math.floor(fits() / 10 % 10);
        digit.hundreds = Math.floor(fits() / 100 % 10);
        console.log(digit);
    }
}

lalala();






