console.log("My name is Jyoti");

var js = 20;
var js = 30;
console.log(js);
let js1 = 45;
console.log(js1);

for(i=0; i<5; i++)
{
    let x=50;
    js = x;
}
console.log(js);

const rev = 22.7;
console.log(rev);

let name = "Daniel...!!";
let age = "25";
console.log(`Hello ${name} Are you ${age} years old?`);



var a = 10;
var b = 35;
var c = a + b;
var d = a - b;
var e = a * b;
var f = a / b;
var g = a % b;
console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(g);

let nonveg = [];
nonveg[0] = "Chicken tikka roll";
nonveg[1] = "Chicken handi";
nonveg[2] = "Chicken Biryani";
console.log(nonveg);

let veg = ['Mater paneer','palakh paneer','Shahi paneer'];
console.log(veg);



delete veg[1];
console.log("After deleting one item: ",veg);
console.log("Length of array: ", veg.length);

console.log(nonveg.pop());
console.log(nonveg);
console.log(nonveg.shift());
console.log(nonveg);
console.log(nonveg.push('kabaab'));
console.log(nonveg);
console.log(nonveg.unshift('Mutton curry'));
console.log(nonveg);

nonveg = nonveg.concat(['Chicken triple rice','mushroom rice','Chicken Noodles']);
console.log(nonveg);

veg = [...veg,...['pulav','veg dry manchurian','pani puri']];
console.log(veg);
console.log(veg.join(' , '));

console.log(nonveg.slice(1,4));
veg.splice(2,3,"pani puri");
console.log(veg);

veg.sort().reverse();
console.log(veg);

const gap = new Set();
console.log(gap);
gap.add(1).add(2).add(3).add(4).add(5).add(6).add(7).add(8);
console.log(gap);
const numbers = new Set([1,2,3,4]);
console.log(numbers);

const letter = new Set("heyyyy!!!! wassup ???");
console.log(letter);

const sentence = new Set();
sentence.add("hey").add("priya").add("wassup");
console.log(sentence);
console.log(gap.size);
console.log(gap.has('9'));
console.log(gap.has('2'));
sentence.delete("hey");
sentence.clear()
console.log(sentence);

const shoplist = new Set()
shoplist.add("necklace").add("choker").add("rings").add("makeup").add("dresses");
console.log(shoplist);
const shopArray = Array.from(shoplist);
console.log(shopArray);

const duplicate = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 9]; 
const nonDuplicate = [... new Set(duplicate)].sort()
console.log(nonDuplicate);

console.log(shopArray.indexOf('necklace'));
for(const value of veg){ console.log(value); } 

function ships() {
    console.log("ships sail");
}
ships();

const say = function () {
    console.log("Hello Google");
}
say();
const hi = new Function('console.log("hi");');
hi();

const Maths = function (a , b ) {
     return a + b ;
}
let z = Maths (10, 20);
console.log(z);

const maths = function (x, y, ...args) {
    let sum = x + y;
    for (let num of args) {
        sum += num;
    } 
    return sum / 10;
}
console.log(maths(1,2,6,4,8,5,6));

function hello(name = 'jyoti', greeting="hello") { 
    console.log(`${greeting} ${name}`); 
} 
hello()

const world = ( name = 'JYOTI' , greeting = 'Hiii')=>`${greeting} ${name}`;
console.log(world());

const shala = 21;
if (shala < 18) {
    console.log('NOT ELIGIBLE');
}
else 
{
    console.log('ELIGIBLE');
}
const sha = 15;
if (sha < 18) {
    console.log('NOT ELIGIBLE');
}
else 
{
    console.log('ELIGIBLE');
}
const x = 45;
if (x%2 === 0) {
    console.log('x is EVEN');
}
else
{
    console.log('x is ODD');
}
const j = 20;
j%2 === 0 ? console.log('j is even') : console.log('j is an odd');


const Numerals = new Map()
Numerals.set(1,'I').set(2,'II').set(3,'III');
console.log(Numerals);
console.log(Numerals.get(3));
console.log(Numerals.has(10));
console.log(Numerals.size);

