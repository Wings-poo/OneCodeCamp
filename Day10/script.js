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

// for (const j = 0; j < N; j++)
//     console.log("third loop", j);

// const arr = [1,2,3];
// console.log(arr);
// arr[0] = 0;
// arr.push(4);
// console.log(arr);

// function sum (x, y, z)
// {
//     console.log(x + y + z);
// }

// var arr = [1,2];
// sum(arr[0], arr[1], arr[2]);
// sum(...arr);

// var newArr = [...arr, 3,4];
// console.log(newArr);

// var obj = {
//     fname: "Amanda",
//     lname: "Lim"
// };

// var newObj = {
//     ...obj,
//     hobby: "Anime"
// };

// console.log(newObj);

// function fcn (...restValues)
// {
//     for (let i = 0; i < restValues.length; i++)
//         console.log(restValues[i]);
// }

// fcn(1,2,3,4);

// “of” operator for for loop

// function fcn (...restValues)
// {
//     for (let i of restValues)
//         console.log(i);
// }

// fcn(1,2,3,4);

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
// }

// fcn();
// fcn("Phoebe");
// fcn("Phoebe", "Buffay");
// fcn1();
// fcn1("Al");
// fcn1("Al", "Leonida");

// Classes
// https://www.w3schools.com/js/js_classes.asp

class person {
    constructor (fname, lname) {
        this.firstName = fname;
        this.lastName = lname;
    }
    ability (hobby) {
        console.log(this.firstName, this.lastName, "like to do", hobby);
    }
}

let Amanda = new person("Amanda", "Lim");
console.log(Amanda);

Amanda.ability("watch anime");

/** Exercise **/

/*
links for methods:
https://www.w3schools.com/js/js_array_methods.asp
https://www.w3schools.com/js/js_string_methods.asp
https://www.w3schools.com/js/js_math.asp
*/