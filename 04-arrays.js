// Defining and assigning values to a array
const heroes = [];
heroes[0] = 'Superman';
heroes[0] = 'Batman';
heroes[1] = 'Wonder Woman';
heroes[2] = 'Flash';
heroes[5] = 'Aquaman';
console.log(heroes)

// Array literals
let avengers = ['Captain America', 'Iron Man', 'Thor', 'Hulk']
console.log(avengers);

// Mixed Array
const mixedArray = [ null, 1, [], 'two', true ]
console.log(mixedArray);

//removing values from arrays
delete avengers[3]
console.log("After deleting: ", avengers);

//destructing arrays
const [x,y] = [10,50]
console.log(x);
console.log(y);

// Arrays and properties
const avengers_assembeled = ['Captain America', 'Iron Man', 'Thor', 'Hulk', 'Black Widow', 'Hawk Eye']
console.log("Lenght of array: ", avengers_assembeled.length);
console.log("Last Element using lenght property: ", avengers_assembeled[avengers_assembeled.length - 1]);

// Data structure method
console.log(avengers_assembeled.pop()); //last element removed
console.log("Avengers assembeled now: ", avengers_assembeled);

console.log(avengers_assembeled.shift()); // first element removed
console.log("Avengers assembeled now: ", avengers_assembeled);

console.log(avengers_assembeled.push('Vision')); // last element added
console.log("Avengers assembeled now: ", avengers_assembeled);

console.log(avengers_assembeled.unshift('Nick Fury')); // First element added
console.log("Avengers assembeled now: ", avengers_assembeled);

// Merging arrays
avengers = avengers.concat(['Black Panther','Spider Man']);
console.log(avengers);

// ... spread opertor
avengers = [...avengers,...['Hulk','Star Lord','Rocket Rakoon']]
console.log("Using spread: ", avengers);

// Array to string
console.log(avengers.join(' & '));

// Slicing and splicing
console.log(avengers_assembeled.slice(2,5));
avengers.splice(3,4,'Nick Fury')
console.log(avengers);

// Reversing the array
avengers_assembeled.sort().reverse();
// avengers_assembeled.reverse();
console.log(avengers_assembeled);

// finding index of item
console.log(avengers_assembeled.indexOf('Hulk'));

// finding whether value exixts or not
console.log(avengers_assembeled.includes('Nick Fury'));


for(const value of avengers){ console.log(value); } 