function addTwoNumbers(number1, number2) {
    console.log(number1, number2);
    var total = number1 + number2;
    return total;
}


var firstNumber = 50;
var SecondNumber = 80;
// addTwoNumbers(firstNumber, SecondNumber);
var result = addTwoNumbers(SecondNumber, firstNumber);
console.log('result value:', result);
// addTwoNumbers(21, 59);


function multipleTwoNumbers(num1, num2) {
    console.log(num1, num2);
    var result = num1 * num2;
    return result;

}

var total = multipleTwoNumbers(5, 100);
console.log('total after multiplication', total);

function biogKora(a, b) {
    var c = a - b;
    return c;
}
var biog = biogKora(60, 80);
console.log('bad dewn lagbo', biog);

function vagKora(nmbr1, nmbr2) {
    var result = nmbr1 / nmbr2;
    return result
}
var total = vagKora(120, 50);
console.log(total);