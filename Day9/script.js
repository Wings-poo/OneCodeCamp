/* Variables:
> let and const keywords
> ... Operator (spread and rest)
*/

// var N = 3;

// for (var i = 0; i < N; i++)
//     console.log("first loop", i);

// console.log(i);

// for (let j = 0; j < N; j++)
//     console.log("second loop", j);

// // console.log(j);

// for (let j = 0; j < N; j++) {
//     const k = 5;
//     console.log("third loop", j);
// }

// console.log(k);

// function sum (x, y, z)
// {
//     console.log(x + y + z);
// }

// let arr = [1,2];
// sum(arr[0], arr[1], arr[2]);
// sum(...arr);

// let newArr = [...arr,3,4];
// console.log(newArr);

// let obj = {
//     fname: "Amanda",
//     lname: "Lim"
// };

// let newObj = {
//     ...obj,
//     hobby: "Watching anime"
// };

// console.log(newObj);

// function fcn (firstValue, ...restOfValues)
// {
//     console.log(firstValue);
//     console.log(restOfValues);
// }

// fcn(1,2,3,4);

// function fcn1 (...restOfValues)
// {
//     for (let x of restOfValues)
//         console.log(x);
// }

// fcn1(1,2,3,4);

/* Functions
> Arrow Functions
> Default Parameters
*/

// function fcn (fname = "Amanda", lname = "Lim")
// {
//     console.log("I am", fname, lname);
// }

// let fcn1 = (fname = "Amanda", lname = "Lim") => {
//     console.log("I am", fname, lname);
// };

// fcn();
// fcn("Ian");
// fcn("Ian", "Gervacio");
// fcn1();
// fcn1("Dion");
// fcn1("Dion", "Elliot");

// function boolfcn (a, b, cond = "true")
// {
//     if (cond)
//         console.log(a + b);
//     else
//         console.log(a * b);
// }

// boolfcn(1,2);
// boolfcn(1,2,false);

//let sum = (a,b) => a + b;
//console.log(sum(1,2));

// Classes
// https://www.w3schools.com/js/js_classes.asp

// class person {
//     constructor (fname, lname) {
//         this.firstName = fname;
//         this.lastName = lname;
//     }
//     ability (hobby) {
//         console.log(this.firstName, this.lastName, "can do", hobby);
//     }
// }

// let Amanda = new person("Amanda", "Lim");
// console.log(Amanda);

// Amanda.ability("competitive programming");

// let Amanda1 = {
//     firstName: "Amanda",
//     lastName: "Lim",
//     ability: console.log(this.firstName, this.lastName, "can do hobby")
// };

// console.log(Amanda1);

// exercise

/* (new) Array methods
> Array.from()
> Array.find()
> Array.findIndex()
https://www.w3schools.com/js/js_array_methods.asp
*/

/* (new) String methods
> String.includes()
> String.startsWith()
> String.endsWith()
https://www.w3schools.com/js/js_string_methods.asp
*/

/* (new) Math methods
> Math.trunc()
> Math.sign()
> Math.cbrt()
> Math.log2()
> Math.log10()
https://www.w3schools.com/js/js_math.asp
*/

/* (new) Global methods
> isFinite()
> isNaN()
*/

/* Variables:
> let and const keywords
> ... Operator (spread and rest)
*/

// var N = 3;

// for (var i = 0; i < 3; i++)
//     console.log("first for loop", i);

// console.log(i);

// for (let j = 0; j < N; j++)
//     console.log("second for loop", j);

// // console.log(j);

// N = 5;

// for (let i = 0; i < N; i++)
//     console.log("third for loop", i);

//for (const j = 0; j < N; j++)
//    console.log("fourth for loop", j);

// spread
// function sum (x, y, z)
// {
//     return x + y + z;
// }

// let arr = [1,2];
// console.log(sum(arr[0], arr[1], arr[2]));
// console.log(sum(...arr));

// let newArr = [arr[0], arr[1], 3, 4];
// let newerArr = [...arr, 3, 4];
// console.log(newArr);
// console.log(newerArr);

// let obj = {
//     fname: "Amanda",
//     lname: "Lim"
// };
// let newobj = {
//     ...obj,
//     age: 100
// };
// console.log(newobj);

// // rest 
// function print (firstValue, ...restOfValues)
// {
//     console.log(firstValue);
//     console.log(restOfValues);
// }

// print(1,2,3,4);

// function fcn (...inputValues)
// {
//     for (let x of inputValues)
//         console.log(x);
// }
// fcn(1,2,3,4,5);

// From Marko: spread - you spread the array; rest - you collect them back

// “of” operator for for loop

/* Functions
> Arrow Functions
> Default Parameters
*/

// const sum = (x,y) => x + y;
// console.log(sum(1,2));

// sum = (x,y) => x * y;
// console.log(sum(1,2));

// function fcn (a = "first", b = "last")
// {
//     console.log(a,b);
// }

// fcn();
// fcn("second");
// fcn("second", "third");

// const fcn = (x = 2, y = 3) => console.log(x * y);
// fcn();
// fcn(3);
// fcn(4,5);

// Classes
// https://www.w3schools.com/js/js_classes.asp

// class person {
//     constructor (fname, lname) {
//         this.firstName = fname;
//         this.lastName = lname;
//     }
//     ability (hobby) {
//         console.log(this.firstName, this.lastName, "can do", hobby);
//     }
// }

// let me = new person("Amanda", "Lim");
// console.log(me);
// me.ability("competitive programming");

// let test = {
//     "a": 1,
//     "b": 2,
//     "c": console.log("hi")
// };

// test["c"];

/* (new) Array methods
> Array.from()
> Array.find()
> Array.findIndex()
https://www.w3schools.com/js/js_arrays.asp
*/

// let str = "aoiknxcjlf";
// let arrStr = Array.from(str);
// console.log(str);
// console.log(arrStr);

// function fcn (value)
// {
//     return value == 'b';
// }

// console.log(arrStr.findIndex(fcn));

/* (new) String methods
> String.includes()
> String.startsWith()
> String.endsWith()
https://www.w3schools.com/js/js_strings.asp
*/

// let str = "A101";
// console.log(str.includes("sos"));
// console.log(str.startsWith("A"));
// console.log(str.endsWith("p"));

/* (new) Math methods
> Math.trunc()
> Math.sign()
> Math.cbrt()
> Math.log2()
> Math.log10()
https://www.w3schools.com/js/js_math.asp
*/

// console.log("floor", Math.floor(-4.99999999999));
// console.log("ceil", Math.ceil(4.00000001));
// console.log("round 4.1", Math.round(4.1));
// console.log("round 4.9", Math.round(4.9));
// console.log("round 4.5", Math.round(4.5));
// console.log("trunc 4.1", Math.trunc(4.1));
// console.log("trunc 4.9", Math.trunc(-4.9));
// console.log("trunc 4.5", Math.trunc(4.5));

// console.log(Math.sign(-24));
// console.log(Math.sign(0));
// console.log(Math.sign(5));

// console.log(Math.cbrt(8));
// console.log(Math.cbrt(9));

// console.log(Math.log2(8));
// console.log(Math.log2(9));

// console.log(Math.ceil(Math.log10(-127)));

/* (new) Global methods
> isFinite()
> isNaN()
*/

// console.log(isFinite(10));
// console.log(isFinite(10/0));
// console.log(isNaN(14));
// console.log(isNaN("kajsjflk"));

// let x = prompt("input a number");

// if (isNaN(parseInt(x)))
//     console.log("The inputted number is a number");
// else
//     console.log("not a number");
