const n = 1.23456;
console.log(n.toFixed(2))
console.log(n.toPrecision(10))

const hello = 'hello world'
console.log(hello.toUpperCase())
console.log(hello.endsWith('world'))
console.log(hello.toLowerCase())
console.log(hello.endsWith('hello'))

const user = {
    name: 'john',
    toString() {
        return this.name
    }
}
console.log("user: " + user);

const apple = {
    name: 'Apple',
    category: 'Granny Smith',
    price: 1.2,
    valueOf() {
        return this.price;
    }
}
console.log(apple * 2)

const billion1 = 1000000000
const billion2 = 1_000_000_000
const billion3 = 1e9

console.log(billion1 === billion2)

const arr1 = new Array(1,2,3);
const arr2 = [1, 2, 3];

console.log(arr1)
console.log(arr2)

const fruits = ['Apple', 'Orange', 'Pear']
const lastFruit = fruits.pop()
console.log(fruits);
console.log(lastFruit);

fruits.push('Banana')
console.log(fruits)

const firstFruit = fruits.shift()
console.log(firstFruit);
console.log(fruits);

fruits.unshift('banana')
console.log(fruits)

const fruits1 = ['Apple', 'Orange', 'Pear']
const fruits2 = fruits1

fruits1.push('Banana')
console.log(fruits2)

console.log('fruit at index 0: ' +fruits1[0])

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

console.log(matrix[1][1])

const numbers = [1, 2, 3]
const string = ["one", "two", "three"]
const empty = []

console.log('numbers: ' + numbers)
console.log('string: ' + string)
console.log('empty: ' + empty)

const spliceArray = ["I", "study", "Javascript", "right", "now"]
const removed = spliceArray.splice(0, 3, "Lets", "dance")
console.log(removed)
console.log(spliceArray)

const now = new Date()
console.log(now)

console.log(+now)

const epoch = new Date(0)

const jan2_1970 = new Date(1000 * 60 * 60 * 24)

console.log(epoch)

console.log(jan2_1970)

const christmas = new Date('2024-12-25')
console.log(christmas)

const nyeUTC = new Date('2024-12-31 23:59:59+00:00')
console.log(nyeUTC)

const boxingDay = new Date(2024, 12, 25)
console.log(boxingDay)

const rememberanceDay = new Date(2024, 10, 11, 11, 11)
// console.log(rememberanceDay)

console.log(rememberanceDay.getFullYear())
console.log(rememberanceDay.getMonth())
console.log(rememberanceDay.getHours())
console.log(rememberanceDay.getMilliseconds())
console.log(rememberanceDay.getTimezoneOffset())

const christmas = new Date('2024-12-25')

console.log(christmas.toLocaleDateString())

console.log(christmas.toLocaleDateString('KO-KR',{timeZone:'asia/seoul'}))

const student = {
    name: 'Json',
    age: 28,
    courses: ['HTML','CSS','Javascript'],
    occupation: null
}
console.log(student)

console.log(JSON.stringify(student))

const book = {
    title: "Gone with the wind",
    printTitle(){
        console.log(this.title)
    },
    releaseDate: undefined
}
console.log(JSON.stringify(book))

const room = {
    number: 23
}

const meetup = {
    title: "Strategy Conference"
    participants: 
}

