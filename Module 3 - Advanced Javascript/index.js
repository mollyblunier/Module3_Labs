// let globalVariableCat = 'cat';

// function myFunction(){
//     let localVariableDog = 'dog'
//     return localVariableDog;
// }

// let dog = myFunction();
// console.log(dog);
// console.log(globalVariableCat)

// function makeAdder(x) {
//     return function adder(y){
//         return x+y+y
//     }
// }

// const add5 = makeAdder (5);
// const add6 = makeAdder (6);

// console.log(add5(10))

// function makeHeading(hTag){
//     return function(title){
//         return `<${hTag}>${title}<${hTag}>`
//     }
// }

// const getH1 = makeHeading('h1')
// console.log( getH1('Heading 1'))

// const getH2 = makeHeading('h2')
// console.log( getH2('Heading 2'))

// function sayHiDefn() { console.log('Hi (function definition');}
// const sayHiExpn = function() {console.log('Hi (function expression');}
// const sayHiArrow = () => {console.log('Hi (arrow function)');}

// console.log(sayHiDefn.name)
// console.log(sayHiArrow.name)
// console.log(sayHiExpn.name)

// function oneParam(a) {
//     console.log('this function has a single parameter: '+a)
// }

// function twoParams(a,b) {
//     console.log(`this function has two parameters: ${a} and${b}`)
// }

// function manyParams (a,b, ...extras) {
//     console.log(`this function has unlimited parameters: ${a} and ${b} and ${extras}`)
// }

// console.log(oneParam.length)
// console.log(twoParams.length)
// console.log(manyParams.length)

// function sayHi() {
//     console.log('Hi');
//     sayHi.counter++;
// }
// sayHi.counter = 0
// sayHi()
// sayHi()
// console.log( `Called ${sayHi.name} ${sayHi.counter} times`)

// function printMessage(msg){
//     console.log(`message: ${msg}`)
// }

// let timerId = setTimeout(printMessage, 1000, 'prints after 1 sec')

// let cancelledTimerId = setTimeout (printMessage, 1000)
// clearTimeout (cancelledTimerId)

// setTimeout( => console.log('log statement inside arrow function', 500))

// setTimeout ( () => console.log("first message"), 5000);
// setTimeout ( () => console.log("second message"), 3000);
// setTimeout ( () => console.log("third message"), 1000);

// let tickId = setInterval( () => console.log('tick'),2000 )
// setTimeout( () => clearInterval(tickId), 10*1000)

// function repeatInterval(delay, limit){
//     let counter = 1;
//     let intervalTimer = setInterval(function repeatThis(){
//         console.log('repeatInterval: repeated '+counter+' of '+limits+' times');
//         if (counter == limits) clearInterval(intervalTimer);
//         counter++;
//     }, delay)
// }

// repeatInterval(2000, 10)

// function repeatTimeout(delay, limit)
// {
//     let counter = 1;
//     setTimeout(function repeatThis(current){
//         console.log('repeatTimeout: repeated '+current+' of '+limit+' times');
//         if (current < limit) setTimeout(repeatThis, delay, current +1)},
//         delay, counter);
// }

// repeatTimeout(2000, 10);

// function Product(name, price) {
//     this.name = name;
//     this.price = price;
//     this.salePrice = price * .9; // 10% off
//     }
//     function Food(name, price) {
//     Product.call(this, name, price); // inherits from Product with custom context
//     this.category = 'food';
//     }
//     const cheese = new Food('cheese', 5);
//     console.log(`${cheese.name} is a ${cheese.category} and costs $${cheese.price} ($${cheese.salePrice} on sale)`);

// const user = {
//     name: 'John',
//     sayHi() {
//     console.log(`Hi, ${this.name}`)
//     }
//     }
//     user.sayHi() // called directly, works! Hi, John
//     setTimeout(user.sayHi, 1000) // passed as reference, fails! Hi, undefined

// const user = {
//     name: 'John',
//     sayHi() {
//     console.log(`Hi, ${this.name}`)
//     }
//     }
//     setTimeout( function() { user.sayHi(); }, 1000 ) // works! Hi, John
//     setTimeout( () => user.sayHi(), 1000 ) // same as above, arrow function (more common)

// const user = {
//     name: 'John',
//     sayHi() {
//     console.log(`Hi, ${this.name}`)
//     }
//     }
//     const boundSayHi = user.sayHi.bind(user) // new function reference with user context explicitly bound
//     setTimeout( boundSayHi, 1000 ) // works! Hi, John

// a class is like a template or blueprint


// class ExampleClass {
//     // each instance of the class will have any properties
//     prop1 = 'value1';
//     prop2 = 'value2';
//     constructor() {
//     // constructor function creates a new instance of this class
//     }
//     method1() {}}
//     // methods are functions of the class

// class activity

// function sayHiDefn() { console.log('Hi (function definition)'); }
// const sayHiExpn = function() { console.log('Hi (function expression)'); }
// const sayHiArrow = () => console.log('Hi (arrow function)');
// //.name property exists as a built-in default property for all functions
// console.log(sayHiDefn.name) // sayHiDefn - uses explicit function name
// console.log(sayHiExpn.name) // sayHiExpn - figures out name from context
// console.log(sayHiArrow.name) // sayHiArrow - figures out name from context


// function makePizza(step1) {
//     console.log(step1);
//   }
//   makePizza('Started preparing pizza...')

//   function makePizza(step2){
//     console.log(step2);
//   }
//   makePizza('Made the base')

//   function makePizza(step3){
//     console.log(step3);
//   }
//   makePizza('Added the sauce')

//   step4 = () => {
//     return "Cooked the piza";
//   }

function startPreparing(){
    console.log('Started preparing pizza...');
    setTimeout(makeBase, 1000);
}

function makeBase(){
    console.log('made the base');
    setTimeout(addSauceandCheese, 2000);
}

const addSauceandCheese = function(){
    console.log('Added the sauce and cheese');
    setTimeout(addToppings,3000);
}

let addToppings = () => {
    console.log('added the pizza toppings');
    setTimeout(cookPizza, 4000);
}

function cookPizza(){
    console.log('cooked the pizza');
    setTimeout(pizzaReady, 5000);
}

function pizzaReady(){
    console.log('pizza is ready')
}

startPreparing();