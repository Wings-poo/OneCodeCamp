// Exercise 1:
var greet = function (Name)
{
    console.log("Greetings,", Name);
}

greet("Amanda");

// Exercise 2:
let add = function (a, b)
{
    return a + b;
}

console.log(add(5, 7));

// Exercise 3:
function isEven (num)
{
    if (num%2)
        return false;

    return true;
}

for (let i = 0; i <= 10; i++) {
    let num = Math.floor(Math.random() * 100) + 1;
    console.log("Is", num, "even?", isEven(num));
}

// Exercise 4:
var globalVar = "banana";

function changeVar ()
{
    var globalVar = "apple"; // let or var works fine
    console.log(globalVar);
}

changeVar();
console.log(globalVar);
// answer: the function prioritizes the variable with a block scope before a global scope
// answer: the variable declared within the function does not exist outside of the function

// Exercise 5:
hoistedFunction();

function hoistedFunction ()
{
    console.log("Hoisted Function");
}
// answer: a function can be hoisted/called prior to declaration. This only works for function declarations and not function expressions.

// Exercise 6:
function mathOperation (a, b, operation)
{
    console.log(operation(a, b));
}

/*
function add (a, b) // already defined above in exercise 2
{
    return a + b;
}
*/

function subtract (a, b)
{
    return a - b;
}

function multiply (a, b)
{
    return a * b;
}

function divide (a, b)
{
    return a / b;
}

mathOperation(1234, 5678, add);
mathOperation(1234, 5678, subtract);
mathOperation(1234, 5678, multiply);
mathOperation(1234, 5678, divide);

// Exercise 7:
// I don't understand
function counter ()
{

}
// every time you invoke counter() (you can change the counter function name) 
// counter1(); // should output 1
// counter2(); // should output 2?
/*
solution:
function counter() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
}
*/

// Exercise 8:
function applyFunction (fcn, arr)
{
    let newarr = [];
    for (let i = 0; i < arr.length; i++)
        newarr.push(fcn(arr[i]));
}

function fcn (num)
{
    return num * num;
}

console.log(applyFunction([1, 2, 3, 4, 5]));

// Exercise 9:
// I don't understand
/*function getUserData ()
{

}*/
// expecting an asynch function
/*
From Dether:
    function getUserData (callback)
    {
        setTimeout(function(){
            const user = {
                name: "John",
                age: 30
            } callback(user);
        }, 1000); // setTimout 1000ms won't get triggered after 1000ms
    }

    getUserData (function(user){
        console.log("User Data: ", user);
    })
*/