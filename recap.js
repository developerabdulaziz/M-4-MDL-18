// variable
var favouriteBook = '4 hour work week';


// array
var bookList = ['positioning', 'hooked', 'start with why', 'shoe dog'];

// shoe dog koi nmbr position ase
var shoeDogIndex = bookList.indexOf('shoe dog');
console.log(shoeDogIndex);

// booklist a dori 3 nmbr position change korbo
bookList[3] = 'Story Brand';
console.log(bookList);

// booklist a jodi notun boi seser dike add/remove korar jonno push/pop use hoi
bookList.push('Small Giants');
console.log(bookList);

bookList.pop();
console.log(bookList);

// booklist a jodi surur dike add/remove korar jonno shift=remove hoi / unshift=add hoi 
bookList.shift();
console.log(bookList);

bookList.unshift('Harry Potter');
console.log(bookList);

//  conditional  if/else
if (bookList[2] == 'hooked') {
    console.log('I am hooked');
}
else {
    console.log('I am not hook');
}

// while loop
// var i = 1;
// while (i < 15) {
//     console.log(i);
//     console.log('looping looping looping');
//     i++;
//     console.log(i);
// }
var roastGiven = 3;
while (roastGiven < 7) {
    console.log('roast dan plz!!');
    roastGiven++;
    console.log(roastGiven);
}

var i = 0;
while (i < 15) {
    console.log('samne douraite thak');
    i++;
    console.log(i);
}
// for loop
for (var i = 0; i < 15; i++) {
    console.log(i);
}