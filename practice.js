
/* 
Good old console
console.log("Hello World")
/*

// inline comment hello 

/* this is a 
multiple line
comment */

/*

// Assigning variables
var myName = "Anas"
console.log(myName)

var a = 5;
var b = 10;
var c = "I am a ";

a = a + 1;
b = b + 5;
c = c + " String!"

console.log(a, b, c)
*/

/*

// Math operations
var sum = 10 + 10;
console.log(sum)

var subtract = 20 - 10;
console.log(subtract)

var multiply = 2 * 10;
console.log(multiply)

var division = 20/10; 
console.log(division)

var increment = 1;
increment++;
console.log(increment)

var decrement = 10;
decrement--;
console.log(decrement)

var remainder = 11 % 3;
console.log(remainder)
*/

/*

// Shortened operations
var a = 3;
var b = 17;
var c = 12;

a += 12;
b -= 9;
c *= 7;

console.log(a, b, c)
*/

/**********
var firstName = "Alan";
var lastName = "Turing"
console.log(firstName + " " + lastName)

var myStr1 = "I am a \"double quoted\" string inside double quotes";
var myStr2 = 'I am a "double quoted" string inside single quotes';
var myStr3 = `I am a '"Triple" quoted' string inside back ticks`; 

console.log(myStr1)
console.log(myStr2)
console.log(myStr3)

************/

/***
 
// Escaping Strings
\' Single Quote
\" Double quote
\\ backslash
\n newline
\r carriage return
\t tab
\b backspace
\f form feed

var myStr = "FirstLine\n\t\\SecondLine\nThirdLine"
console.log(myStr)
***/

/***
//concatenating strings
var ourStr = "I come first." + " I come second."
console.log(ourStr)

var ourStr = "I come first."
ourStr += " I come second"
console.log(ourStr)
***/

/***
// Strings and Variables together
var myName = "Anas"
var sentence = "My name is " + myName + ", what's yours?"
console.log(sentence)
***/

/***
//length of a string

var firstNameLength = 0;
var firstName = "Anas"

firstNameLength = firstName.length
console.log(firstNameLength)
***/

/***
//bracket notation

var firstLetterOfFirstName = "";
var firstName = "Anas";

firstLetterOfFirstName = firstName[0]
console.log(firstLetterOfFirstName)
***/ 

/*** 
//bracket notation to find the last letter of a string
var firstName = "Anas";
var lastLetterOfFirstName = firstName[firstName.length - 1]

console.log(lastLetterOfFirstName)
***/

/*** 
// wordBlannks function

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    var result = "";
    result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb + "."
    return result;
}

console.log(wordBlanks("dog", "big", "ran", "quickly"))
console.log(wordBlanks("bike", "slow", "flew", "slowly"))
***/

/*** 
// Arrays

var ourArray = ["John", 23]
console.log(ourArray[0])
***/

/***
// Nested Arrays
var ourArray = [["the universe", 42], ["everything", 101010]]
***/

/*** 
// Accessing Array Data
var ourArray = [50, 60, 70];
var ourData = ourArray[0];
console.log(ourData)
***/

/*** 
// Modifying Arrays with Indexes

var ourArray = [18, 64, 99];
ourArray[1] = 45;
console.log(ourArray)
***/

/***
// Accessing Multiple Dimensional Array

var myArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [[10, 11, 12], 13, 14]];
var myData = myArray[2][1];
console.log(myData)
***/

/*** 
// Printing name and age with template literals

let name = "Anas"
let age = 18
console.log(`My name is ${name} and I am ${age} years old.`)
***/

/*** 
// Trying typeof null, NaN and undefined

console.log(typeof null)
console.log(typeof NaN)
console.log(typeof undefined)
***/

/*** 
// Creating a variable and reassigning it

let hobby = 'Drawing'
hobby = 'Writing'
console.log(hobby)
***/

/*** 
// Creating a grading program
score = 67
if (score >= 90) {
    console.log("A")
} else if (80 <= score && score > 90) {
    console.log("B")
} else if (70 <= score && score > 60) {
    console.log("C")
} else if (60 <= score && score > 50) {
    console.log("D")
} else if (50 <= score && score > 40) {
    console.log("E")
} else {
    console.log("F")
}
***/

/*** 
// comparing '5' to 5
console.log('5' == 5)
console.log('5' === 5)
***/

/*** 
//using a ternary to check if a number is even or odd
let number = 67
property = (number % 2 == 0) ? "Even" : "Odd" ;
console.log(property)
***/

/*** 
//function to convert celcius to fahrenheit

function celsiusToFahrenheit(celsius) {
    return (celsius * (9/5)) + 32
}

celsiusValue = 0
fahrenheitValue = celsiusToFahrenheit(celsiusValue)

console.log(fahrenheitValue)
***/

/*** 
// sum function

function sum(a, b) {
    return a + b
}

sum = sum(10, 12)
console.log(sum)
***/

/*** 
// nested function showing variable scope

function outerFunction() {
    outerVariable = "Hello I am outer variable I can be used inside and outside"
    console.log(outerVariable)
    function innerFunction() {
        innerVariable = "Hello I am inner variable I can only be used in here"
        console.log(innerVariable)
        console.log(outerVariable)
    }

    innerFunction()
}

outerFunction()
***/

/***
// Building a counter closure with increment and getcount

function createCounter() {
    var count = 0;
    return {
        increment() {
            count += 1
        },
        getCount() {
            console.log(count)
        }
    }
}

const counter = createCounter();

counter.getCount()
counter.increment()
counter.getCount()
***/

/***
// Logging a var before declaration to observe hoisting

console.log(variable)
var variable;
variable = 10;
console.log(variable)
***/

/***
// Trying the same thing with let instead

console.log(variable)
let variable;
variable = 10;
console.log(variable)
***/

/*** 
// using map to double all the numbers in [1, 2, 3, 4]

myArray = [1, 2, 3, 4]
doubled = myArray.map(x => x * 2);

console.log(doubled)
***/

/*** 
// Use filter to keep only even numbers

myArray = [1, 2, 3, 4]
filtered = myArray.filter((item) => {
    if (item % 2 == 0) {
        return item
    }
})

console.log(filtered)
***/

/***
//clone an object with {...obj} and modify a property

myObject = {name: "Anas", age: 18, height: 168}
newObject = {...myObject}

newObject.age = 19

console.log(newObject)
***/

/*** 
// print numbers 1 - 10

for (var i = 0; i <= 10 ; i++) {
    console.log(i)
}
***/

/*** 
// Draw triangle pattern with *

star = "*"
for (let i = 0; i < 3; i++) {
    console.log(star)
    star += "*"
}
***/

/***
// Sum all array values manually

let mySum = 0
myArray = [10, 20, 30, 40, 50]
for (let i = 0; i < myArray.length; i++)
    mySum += myArray[i]

console.log(mySum)
***/

/*** 
// Create an HTML file and change the text with JS

const body = document.body 
body.append("Hello World")
***/

/*** 
// Add abutton that changes a div's color on click

const body = document.body;
const newDiv = document.createElement("div");
const newButton = document.createElement("button");
newDiv.style.height = "100px";
newDiv.style.width = "100px";
newDiv.style.backgroundColor = "pink";
newButton.textContent = "Click Me!"
body.append(newDiv)
body.append(newButton)

newButton.onclick = function() {
    newDiv.style.backgroundColor = "green";
}
***/

/*** 
// creating a button that changes background color randomly

function getNewColor() {
    let symbols = '0123456789ABCDEF';
    let color = '#'
    for (let i = 0; i < 6; i++) {
       color += symbols[Math.floor(Math.random() * 16)];
    }
    return color;
}

const body = document.querySelector("body")
const newButton = document.createElement("button")
newButton.style.cursor = "pointer";
newButton.textContent = "click me!";
body.append(newButton)

newButton.addEventListener("click", function(){
    body.style.backgroundColor = getNewColor() 
})
***/

/*** 
//creating a promise-based alternative to setTimeout

function delay(ms) {
    return new Promise(resolve => setTimeout(() => resolve(ms), ms))
}

delay(10000).then(ms => alert(`runs after ${ms/1000} seconds`))
***/

