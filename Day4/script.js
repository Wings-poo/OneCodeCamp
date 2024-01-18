// variable declarations
// naming convention of variables: first char is alphabetical, $ or _
/*
    From Marko:
    var - var has function scope, which means it is only scoped within the function where it is declared.
    let - let has block scope, which means it is scoped within the block (enclosed by curly braces) where it is declared.
    const - constant
    From Ma'am Ian:
    var - global scope
    let - block scope
    const - constant
*/

var example; // can declare without value
const example1 = 2; // const always need a value (because it's constant, it can't be empty)
// declaration <const example1> initialization <= 2>

{
    let example2 = 0;
}
// cannot use example2 here because it's outside the block

// Number - integers, floats // ako nagsulat ng floats
let age = 25;
let float = 1.5;
console.log(typeof float); // prints "number"
// String - text
let name = "John"; // can use '' or ""
// Boolean - T/F
let isStudent = true;
// Undefined
let city; // undefined is no value assigned upon declaration
console.log(typeof city); // prints "undefined"
// Null
let car = null;
console.log(typeof car); // prints "object"

/*
Object Types:
    Object - {}
    Array - []
    Date - represents a specific moment in time
    RegEx - Regular Expressions; pattern matching within strings
    Function - reusable blocks of code
*/

/*
Operators:
    Logical &&, ||, !
    Arithmetic
    Unary +, -, ++, --
    Assignment =, +=, -=, *=, /=, %=
    // Relational
    // Wala bang bitwise?
*/

/*
JS Expressions:
    Putting operators in use
*/

let x = 5;
let y = 2;
let sum = x + y;
console.log("Hello " + "World"); // concatenation
var a = true;
var b = false;
console.log(a && b); // output false (from Marko)
var c;
console.log(c = "banana"); // outputs "banana" (experiment from me); cannot declare var inside of log

// Function Call Expressions
function myFunction(num1, num2) { // (num1, num2) parameters
    console.log(num1 + num2);
}
myFunction(30,10); // (30, 10) arguments

// Control Flow
// Conditionals
// if statement
let temperature = "25";
if (temperature < 0) {
    console.log("It's freezing");
} else if (temperature >= 0 && temperature < 20) {
    console.log("It's cold outside");
} else {
    console.log("It's a warm day");
}
// switch statement
let day = "Monday";
switch (day) {
    case "Monday":
        console.log("It's the start of the week");
        break;
    case "Friday":
        console.log("It's the end of the week");
        break;
    default:
        console.log("It's a regular day");
}

// Loops
// for loop
for (let i = 1; i <= 5; i++) {
    console.log("Count: ", i);
}
// while loop
let count = 1;
while (count <= 5) {
    console.log("Count: ", count);
    count++;
}
// do-while loop
let  i = 1;

do {
  console.log(i);
  i++;
} while (i <= 5);

// Array - group of values
let fruits = ["apple", "banana", "orange", "mango"];
// indices start with 0
console.log(fruits); // prints whole array along with length and prototype (Note to self: research on this)
console.log(fruits[0]);
console.log(fruits[fruits.length - 1]);
console.log(fruits[-1]); // outputs undefined (not like python (iirc python outputs last element with that))
// more on arrays: https://www.w3schools.com/js/js_array_methods.asp
// my experiment:
const exp = [1,"one",1.0,true]; // yep, this works
console.log(exp); // prints [1, 'one', 1, true]
console.log(exp.toString()); // prints "1,one,1,true"
console.log(exp.at(1)); // prints 'one'
console.log(exp.join("-")); // prints "1-one-1-true"
console.log(exp.pop()); // prints true // pop_back()
console.log(exp); // prints [1, 'one', 1]
exp.push(true); // push_back(true)
console.log(exp); // prints [1, 'one', 1, true]
console.log(exp.shift()); // prints 1 // pop_front()
console.log(exp); // prints ['one', 1, true]
exp.unshift(1); // push_front(1)
console.log(exp); // prints [1, 'one', 1, true]
exp[exp.length] = "another one" // push_back("another one")
console.log(exp); // prints [1, 'one', 1, true, 'another one']
exp[exp.length - 1] = "another 1"
console.log(exp); // prints [1, 'one', 1, true, 'another 1']
delete exp[0]; // Warning ! Using delete() leaves undefined holes in the array. Use pop() or shift() instead.
console.log(exp[0]); // undefined
// and a lot more OwO
/*
from geeksforgeeks:
// ??? initiate empty const and change its values???
    const evenNumbers = []; 
    for (let i = 2; i <= 10; i += 2) {
        evenNumbers.push(i);
    }
    console.log("Even numbers: " + evenNumbers);
*/

// Object - associative array (in other languages), dictionary (python), hash // I think better term is struct (C++)
var teacher = {name: "Amanda", city: "Las Pinas", gender: "female", subjects: []};
console.log(teacher); // prints whole object with prototype
console.log(teacher.name);
console.log(teacher.city);
console.log(teacher.gender);
teacher.name = "Dion";
console.log(teacher.name);
console.log(teacher.subjects);

// ';' isn't required anymore, just used for good practice
