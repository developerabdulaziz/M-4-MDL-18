

var skyColor = 'white';

var phones = ['iphone', 'shaomi', 'samsung', 'lg', 'htc'];
phones[3] = 'walton';

// check oppo not exists in an array
if (phones.indexOf('oppo') == -1) {
    console.log('opps! amir khan oppo is missing');

}

// if lg is available
if (phones.indexOf('lg') != -1) {
    console.log('Lg is available now');
}

// loop
var num = 0;
while (num <= 10) {
    console.log('jante hobe sobkisui');
    num++
}

for (var i = 0; i < phones.length; i++) {
    console.log('ki ki phone ase diye de amk');
}

// function

function addThreeNumbers(number1, number2, number3) {
    var total = number1 + number2 + number3;
    return total;
}

var nmbr1 = 50;
var nmbr2 = 80;
var result = addThreeNumbers(nmbr1, nmbr2);
// addThreeNumbers(87, 41, 56);




// =============== object =============
var computer = {
    price: 20000,
    Storage: '156gb',
    color: 'black',
    processor: 'intel i5'

};
// sompurno object output dekhanor khetre
console.log(computer);

// r jodi property er man dekhate chai sekhetre
console.log(computer.processor);

// r jodi object er property er man set korte chai
computer.color = 'yellow';
console.log(computer);

// different ways to set a value of an object property
//  one way
var priceProperty = "price";
computer[priceProperty] = 9600;

// two way
computer.price = 22000;

// three way
computer["price"] = 60000;

console.log(computer);