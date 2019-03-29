// Converting sets to arrays
const shoppingSet = new Set().add('Apples').add('Bananas').add('Beans');
console.log(shoppingSet);

// by using spread operator
const shoppingArray = [...shoppingSet]
console.log(shoppingArray);

// by using from method
const shoppingArrayNew = Array.from(shoppingSet);
console.log(shoppingArrayNew);

// extracting unique values from an array
const duplicate = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 9]; 
const nonDuplicate = [... new Set(duplicate)].sort()
console.log(nonDuplicate);
