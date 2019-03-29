// Sets are used to store unique values
// defining sets
const list = new Set();
console.log(list);
list.add(1).add(2).add(3).add(4).add(1);
console.log(list);

// defining sets using array literals
const numbers = new Set([1,2,3,4]);
console.log(numbers);

// using strings for sets
const letters = new Set('hello world');
console.log(letters);

const words = new Set().add('the').add('quick').add('brown').add('fox');
console.log(words);

// sets methods
const jla = new Set().add('Superman').add('Batman').add('Wonder Woman');
console.log(jla);
console.log(jla.size);  // return no of elements in set
console.log(jla.has('Green Lantern'));     // return true or false if element exists
console.log(jla[0]);    // undefined since sets does not have index notations

// deleting values from sets
jla.delete('Superman'); // deletes single values that has passed to the method
console.log(jla);

jla.clear() // clears the set
console.log(jla);





