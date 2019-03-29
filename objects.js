const superman = {
    name: 'Superman',
    'real name': 'Clark Kent',
    height: 75,
    weight: 235,
    hero: true,
    villain: false,
    allies: ['Batman', 'Supergirl', 'Superboy'],
    fly() { return 'Up, up and away!'; }
};

console.log(superman.allies);
console.log(superman.fly());
console.log(superman["real name"]);

const spiderman = new Object();

const name = 'Iron Man';
const realName = 'Tony Stark';
// long way 
// const ironMan = { name: name, realName: realName }; 
// short ES6 way 
const ironMan = { name, realName };
console.log(ironMan.name);


const jla = { superman: { realName: 'Clark Kent' }, batman: { realName: 'Bruce Wayne' }, wonderWoman: { realName: "Diana Prince" }, flash: { realName: 'Barry Allen' }, aquaman: { realName: 'Arthur Curry' }, }
console.log(jla.superman.realName);

const dice = { sides: 6, roll() { return Math.floor(this.sides * Math.random()) + 1; } }

const batman = '{"name": "Batman","real name": "Bruce Wayne","height": 74, "weight": 210, "hero": true, "villain": false, "allies": ["Robin","Batgirl","Superman"]}'
console.log(JSON.parse(batman));


const wonderWoman = { name: 'Wonder Woman', 'real name': 'Diana Prince', height: 72, weight: 165, hero: true, villain: false, allies: ['Wonder Girl', 'Donna Troy', 'Superman'], lasso: function () { console.log('You will tell the truth!'); } } 
console.log(JSON.stringify(wonderWoman));
console.log(Math.PI);
