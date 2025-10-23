
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