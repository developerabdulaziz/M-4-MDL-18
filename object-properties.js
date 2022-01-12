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