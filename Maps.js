const romanNumerals = new Map(); 
romanNumerals.set(1,'I'); 
romanNumerals.set(2,'II').set(3,'III').set(4,'IV').set(5,'V'); 
console.log(romanNumerals);

// Retrieving values
console.log(romanNumerals.get(3));

console.log(romanNumerals.has(6));

// creating maps using arrays
const heroes = new Map([ ['Clark Kent','Superman'], ['Bruce Wayne', 'Batman'] ]); 
console.log(heroes);

// Lenght of a Map
console.log(heroes.size);

