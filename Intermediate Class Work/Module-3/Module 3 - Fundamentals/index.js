//"" + 1 + 0 // answer : 10
// "" - 1 + 0 // answer : -1
//true + false //answer : 1
// !true // answer : not true
// 6 / "3" // answer : 2
// "2" * "3" // answer : 6
// 4 + 5 + "px" // answer : 9px
// "$" + 4 + 5 // answer :$45 

/*why does 4 + 5 “px” = 9px
but “$” + 4 + 5 = $45*/

// "4" - 2 // answer : 2
//"4px" - 2 // answer : Nan because it cannot be converted
// " -9 " + 5 // answer : -95
// " -9 " - 5 // answer : -14
// null + 1 // answer : 1
// undefined + 1 // answer : NaN
// undefined == null // answer : true
// undefined === null // answer : false
// " \t \n" - 2 // answer : -2

// 2.

// let three = "3"
// let four = "4"
// let thirty = "30"

// //what is the value of the following expressions?

// let addition = three + four // 34 concatenated 
// let addition2 = Number(3) + Number(4) // 7
// let multiplication = three * four // 12
// let division = three / four // .75
// let subtraction = three - four // -1
// let lessThan1 = three < four // true
// let lessThan2 = thirty < four // wrong because it is alphabetically before
// let lessThan2_fixed = Number(thirty) < Number(four) 

// console.log(addition2)

// // 3. 
// if (0) console.log('#1 zero is true') // doesn't print
// if ("0") console.log('#2 zero is true') // prints #2 zero is true
// if (null) console.log('null is true') // false does not print
// if (-1) console.log('negative is true') // prints negative is true
// if (1) console.log('positive is true') // prints postive is true

// 4. 
// let a = 2, b = 3;
// let result = `${a} + ${b} is `;
// if (a + b < 10) {
// result += 'less than 10';
// } else {
// result += 'greater than 10';
// }

// console.log(result)

// 5. 
// function getGreeting(name) {
//     return 'Hello ' + name + '!';
//     }

// const getGreeting1 = function(name) {
//     return 'Hello ' + name + "!";
// }

// const getGreeting2 = (name) => "Hello " + name + "!";

// console.log(getGreeting1('Molly Blunier'))



// 7. 

// const basketballGame = {
//     score: 0,
//     foul: 0,
//     freeThrow() {
//     this.score++;
//     return this;
//     },

//     basket() {
//     this.score += 2;
//     return this;
//     },

//     threePointer() {
//     this.score += 3;
//     return this;
//     },

//     foul(){
//         this.fouls++;
//         return this;
//     },

//     halfTime () {
//         console.log('Halftime score is '+this.score+' ('+this.fouls+' fouls).');
//         return this;
//     },
//     fullTime () {
//         console.log('Final score is '+this.score+' ('+this.fouls+' fouls).');
//     }
//     }
//     //modify each of the above object methods to enable function chaining as below:
//     basketballGame.basket().foul().freeThrow().freeThrow().basket().threePointer().halfTime().fullTime();

//     return this;


//8. 

// const sydney = {
//     name: 'Sydney',
//     population: 5_121_000,
//     state: 'NSW',
//     founded: '26 January 1788',
//     timezone: 'Australia/Sydney'
// }

// function printCityProps(cityObj) {
//     for (cityProp in cityObj) {
//         console.log(cityProp + ' = ' + cityObj[cityProp])
//     }
// }

// printCityProps(sydney)

// 9.

// let teamSports = ['Hockey', 'Cricket', 'Volleyball'];
// let moreSports = teamSports
// moreSports.push('Basketball');
// moreSports.unshift('Football');
// console.log(teamSports)

// let dog1 = 'Bingo';
// let dog2 = dog1
// dog2 = 'Remi';
// console.log(dog1)
// console.log(dog2)

// let cat1 = { name: 'Fluffy', breed: 'Siberian' };
// let cat2 = cat1 
// cat1.name = 'Piper';
// console.log(cat1.name)
// console.log(cat1)

// 10. 

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     this.human = true;
//     this.canDrive = () => this.age >=16
//     this.cannotDrive = () => this.age < 16
//     }

// let person1 = new Person('John', 30)
// let person2 = new Person('Molly', 26)



// class PersonClass {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//         this.human = true;
//     }
//     canDrive(){
//         return this.age >= 16;
// }

// }

// let person3 = new Person('Jake', 27)

// console.log(person1)
// console.log(person2)
// console.log(person3)

// if (person1.canDrive()) console.log(person1.name + ' is '+person1.age+' and is old enough to drive')
// if (person2.canDrive()) console.log(person2.name + ' is '+person2.age+' and is old enough to drive')
// if (person3.canDrive()) console.log(person3.name + ' is '+person3.age+' and is old enough to drive')