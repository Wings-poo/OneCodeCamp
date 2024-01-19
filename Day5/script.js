/*
Functions:
- set of code you can reuse
- case sensitive
- first char is letter or $ or _
*/

// function declaration:
// greet - function name
// inside the () - input parameters
// inside the {} - function content
function greet ()
{
    console.log("Hello, welcome to the world of functions!");
}

// calling the function
// inside the () - arguments
greet();

// function declaration
function squareDeclaration (num)
{
    return num * num;
}

// function expression:
// - function assign in a variable
const squareExpression = function (num)
{
    return num * num;
}

// calling them for comparison
console.log("Square (Function Declaration):", squareDeclaration(5));
console.log("Square (Function Expression):", squareExpression(5));

// function declaration vs function expression
// from Marko: for callback - function used as params or define functions conditionally within code blocks
// <forgot to note what ma'am Ian said>
// [me: so recursion needs function expression?]

// function hoisting
// hoisting - move up
// function hoisting - calling a function before it appears in the code
// this is only applicable for function declaration, not function expression/arrow functions (not yet discussed)

sayHello("Harold");

function sayHello (name)
{
    console.log("Hello, Function Hoisting!");
    console.log("Hello, " + name);
}

// anonymous functions
// - functions without a name
// Note to self: there's another way to do anon fcn; search comparison of anon fcn and fcn exp

var test = function ()
{
    console.log("Hello, world!");
}

test();

// function with return value
function sum (a, b)
{
    return a + b;
}

console.log(sum(3, 5));

let result = sum(5, 3);
console.log(result);

// callback is used in synchronous programming
// synch prog - related to control flow

function calculate (num1, num2, operation)
{
    return operation(num1, num2);
}

// callback function
function add (a, b)
{
    return a + b;
}

function subtract (a, b)
{
    return a - b;
}

let result1 = calculate(5, 3, add);
let result2 = calculate(5, 3, subtract);
console.log("Results:", result1, result2);