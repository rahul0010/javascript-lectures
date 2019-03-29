function sayHello() {
    console.log("Hello");
}

const greet = function () {
    console.log("good morning");
}

const hi = new Function('console.log("hi");');

const addition = function (a, b) {
    return a + b;
}

function howdy() { return 'Howdy World!'; }

sayHello();
let y = addition(10, 20);
console.log(y);

const mean = function (a, b, ...args) {
    let sum = a + b;
    for (let num of args) {
        sum += num;
    }
    return sum / 10;
}

console.log(mean(1, 2, 4, 2, 7, 9));

function hello(name = 'World', greeting="Bonjour!") { 
    console.log(`${greeting} ${name}`); 
} 
hello()


// arrow function
const greetings = (name = 'World', greeting="Bonjour!") => `${greeting} ${name}`;  

console.log(greetings());

callBeforeDeclaration();

function callBeforeDeclaration() {
    console.log("called before declaration");
}

const dancing = () => {
    console.log("He is dancing");
}

const sing = (song, dance) =>
{
    console.log(`He is singing a ${song}` );
    dance();
}

sing('abcd', dancing);


const colors = ['Red', 'Green', 'Blue'] 
colors.forEach( (color,i) => console.log(`Color at position ${i} is ${color}`) )

let by2 = [1,2,3].map( x => 2 * x); 
console.log(by2);

let sumOfArray = [1,2,3].reduce( (x,y) => x+y); 
console.log(sumOfArray)

let even = [1,2,3,4,5,6,7,8,9,10].filter(x => x%2 === 0); 
console.log(even);
