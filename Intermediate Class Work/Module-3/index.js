const doubleQuotes = "string that can include 'single quotes'"

const singleQuotes = 'string that can include "double quotes"'

const backTicks = `string that can include varibles - ${singleQuotes}`

console.log(singleQuotes)

console.log("" + 1 + 0)

console.log("" -1 + 0)

console.log(true + false)

console.log(!true)

function checkAge
function checkAge(age) {
    if (age >= 18) {
        return 'adult';
    }
    return 'non-adult';
}
console.log(checkAge(21))
console.log(checkAge(13))

const sayHiArrow = () => console.log('Hi')

const phone = {
    model: 'iphone 11',
    color: 'black',
    storage: 500
    make: 'iphone'
}
if (phone.color) console.log(`My ${phone.model}`)
if (phone.storage) {
    console.log(`My ${phone.make} has ${phone.storage}GB`)
}

let goal = 6;
for (let i=1; i < goal; i++) {
    console.log(`Iteration ${i} of ${goal}`)
}

for (let key in phone) {
    console.log('key: ' + key)
}

console.log('hello'); console.log('world');

let one = 1;
let two = 2;
let three = 3;
console.log(one + two - three * two / one); 


one = one + 1; 
one += 1; 
one++;

two = two - 1; 
two -= 1; 
two--; 

let age;
let nullAge = null;
console.log(`${age} == ${nullAge} ? ${age == nullAge}`) 
console.log(`${age} === ${nullAge} ? ${age === nullAge}`)

