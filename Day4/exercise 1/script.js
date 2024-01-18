/*
ACTIVITY:
1) Create a program that prints all the even numbers from 1 to 1000. Use the standard for loop for this exercise and don't create any arrays.
2) Create a program that prints the arithmetic progression starting at 8 and going up to 1000.
3) Create a program that counts from 1 to 1000. As it loops through each number, have your program generate the number and a message saying whether it's a multiple of 3 or not.
*/

function fcn1 ()
{
    let i = 2;
    do {
        console.log(i);
        i += 2
    } while (i <= 1000);
}

function fcn2 (a, b)
{
    let i = a;
    while (i <= b) {
        console.log(i);
        i += a;
    }
        
    /*
        // prints arithmetic sum/series instead of arithmetic progression
        for (let i = 8; i <= 1000; i++) {
            let arithsum = (i / 2) * (2 + ((i - 1) * 1));
            console.log(arithsum);
        }
        // could also simply do sum = (8*9/2) then sum += i (init i = 0)
    */
}

// From Marko: console.log("Counting by 8 starting with: ${i}"); // just noting the syntax. though this is in node.js

function  fcn3 ()
{
    for (let i = 1; i <= 1000; i++) {
        if (i%3)
            console.log(i);
        else
            console.log(i, "fizz");
    }
}