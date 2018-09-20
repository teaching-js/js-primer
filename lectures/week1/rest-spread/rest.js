
// [ ... ]
/*

const name = 'Alex';

'Hello' + ' ' + name;

`Hello ${name}`;
*/

const person = {
    name: 'Zain',
    age: 100,
    speed: 7.5
};

const { name: zain_name, age, speed } = person;

console.log(zain_name, age, speed);

function personProcessor({ name, age }) {
    console.log(name, age);
}

personProcessor(person);

function sum(...numbers) {
    numbers.map(console.log);
}

sum(1, 2, 3, 4, 5, 6, 7);

