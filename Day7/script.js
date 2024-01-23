// ECMAScript
// more on ES6: https://www.w3schools.com/js/js_es6.asp

// Recall: Block scope variables
function example ()
{
    var x = 1; // block scope variable. Won't exist outside of example();
    console.log(x);
}
// Purpose: reuse variables when no longer needed

// Template literals
let name = "Amanda"
let age = "18"
// < ES6:
console.log("My name is " + name + " and I am " + age + " years old");
// ES6: string interpolation method
console.log(`My name is ${name} and I am ${age} years old`);
// < ES6: you can't make a multi-line message
// ES6 can ` can handle multi-line message
// Probaby won't use this because you handle this in CSS
/*
let preES6msg = "This is
                    a multi-line
                    message";
*/
let loopholepreES6msg1 = "This is";
let loopholepreES6msg2 = "a  multi-line";
let loopholepreES6msg3 = "message";
let postES6msg = `This is
                    a multi-line
message`; // it will see the tabs

// Arrow functions
// From Marko: shorthand of a function usually used for callbacks
// From w3schools: Arrow functions are not hoisted. They must be defined before they are used.
// Declaration
function squareDeclaration (num)
{
    return num * num;
}
// Arrow
let squareArrow = (num) => num * num;
console.log(squareDeclaration(5));
console.log(squareArrow(5));
// Other example of arrow functions:
let multArrow = (num1, num2) => num1 * num2;
console.log(multArrow(5,2));

// this
// lexical scope - limitation of arrow function
const person = {
    name: "Dion", // key-value pairs
    greetRegular: function () {
        console.log(`Hello ${this.name}`);
    },
    greetArrow: () => {
        console.log(`Hello ${this.name}`);
    }
    // does not work (${this.name} outputs empty string)
}
person.greetRegular();
person.greetArrow();

// Destructuring assignment
const number = [1, 2, 3, 4, 5];
const [a, b, c, d, e] = number;
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

const person2 = {
    name2: "LJ",
    age2: 30,
    country2: "PH"
}
const {name2, age2, country2} = person2; // me: needs to have same var names (undefined otherwise)
console.log(name2);
console.log(age2);
console.log(country2);

// Spread operator
function sum (x, y, z)
{
    return x + y + z;
}
const numbers = [1, 2, 3];
console.log(sum(...numbers)); // ... is the spread. It will understand that you are putting the rest of the content
// instead of putting it as numbers[0], numbers[1], numbers[2]

const grades = {
    math: 94,
    english: 81,
    science: 72,
    pe: 99
}
const grades2 = {
    ...grades, 
    history: 85
    // no need to get grades.math, grades.english, grades.english, grades.pe
}
console.log(grades2);

// Rest operator
function myFunction (firstArg, ...restOfArgs)
{
    console.log(firstArg);
    console.log(restOfArgs);
}
myFunction("one", "two", "three", "four");

// From Marko: spread - you spread the array; rest - you collect them back

/** String methods **/

// split
const message = "Hello, World!";
const words = message.split(','); // parameters: separator character; ',' will not be counted; can be a character that does not exist in the string; case-sensitive
console.log(words);

// includes
const sentence = "The quick brown fox jumps over the lazy dog.";
const containsWord = sentence.includes("fox"); // can put "ps ov"
console.log(containsWord); // true because the word exists in the sentence

// length
const sampleString = "welcome to Modern JS Features!";
const strlength = sampleString.length; // counts white spaces (' ', tab, '\n' as 1 char)
console.log(strlength);

// other methods: https://www.w3schools.com/js/js_string_methods.asp

/** Math methods **/

// max
const maxNumber = Math.max(10, 5, 20);
console.log(maxNumber);

// min
const minNumber = Math.min(10, 5, 20);
console.log(minNumber);

// random
const randomNumber = Math.random(); // randomizes [0, 1)
console.log(randomNumber);

// floor
const roundedDownNumber = Math.floor(3.7);
console.log(roundedDownNumber);

// ceil
const roundedUpNumber = Math.ceil(3.7); // does not follow the .5 rule (closest whole number)
console.log(roundedUpNumber);

// round
const roundedNumber = Math.round(3.4999999); // follows the .5 rule (closest whole number)
console.log(roundedNumber);

// nested math methods
function getRandomInt (min, max)
{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomInt(1.5, 10.456));

// other methods: https://www.w3schools.com/js/js_math.asp