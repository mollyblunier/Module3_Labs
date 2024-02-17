//1. 
function ucFirstLetters(str){
    let newString = '';
    let words = str.split(' ');

    for (let word of words){
        if (newString.length !=0) newString += ' '
        newString += word.charAt(0).toUpperCase() + word.substring(1)
        }
        return newString;
}

console.log(ucFirstLetters("los angeles"))

//2. 
function truncate(str,max){
    if (str.length > max)
    {
        return str.substring(0, max) + '...';
    }
    else {
        return str;
    }
}

function truncate2(str, max){
    return (str.length > max) ? str.substring(0, max) +
}


//3. 

const animals = ['Tiger', 'Giraffe'];
animals.push('Cow', 'Dog');
animals.unshift('Cat', 'Lion');
animals.sort();

function replaceMiddleAnimal(newValue) {
    let halfway = animals.length / 2;
    animals[halfway] = newValue
}

function findMatchingAnimals(beginsWith) {
    return animals
}

animals.sort() 
console.log(animals) 
function replaceMiddleAnimal(newValue) { 
let halfway = animals.length / 2; 
animals[halfway] = newValue 
} 
console.log(animals) 
function findMatchingAnimals(beginsWith) { 
return animals.filter(animal => 
animal.toLowerCase().startsWith(beginsWith.toLowerCase())) 
} 
console.log(findMatchingAnimals('C'))


//4. 

function camelCase(cssProp) { 
    let words = cssProp.split('-'); 
    let camelString = '';
    words.forEach(word => { 
    if (camelString.length == 0) { 
    //don't capitalize the first word 
    camelString = word; 
    } 
    else { 
    camelString += word.charAt(0).toUpperCase() + word.substring(1) 
    } 
    }); 
    return camelString; 
    } 
    const camelCase2 = (cssProp) => { 
    let camelString = ''; 
    for (let word of cssProp.split('-')) {  
    camelString += (camelString.length == 0) ? word : word.charAt(0).toUpperCase() +  word.substring(1); 
    } 
    return camelString; 
    } 
    console.log(camelCase('margin-left')) 
    console.log(camelCase2('background-image')) 
    console.log(camelCase('display')) 

//7. 
const books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
    { id: 3, title: '1984', author: 'George Orwell', year: 1949 },
    { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
    { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
    ];

    function getBookTitle(bookId){
        return
    }

// 9 .
let salaries = {
    "Timothy" : 35000,
    "David" : 25000,
    "Mary" : 55000,
    "Christina" : 75000,
    "James" : 43000
    };

function sumSalaries(salaries){
    console.log(sum)
}

function topEarner(salaries){
    return Math.max(salaries)
}