document.addEventListener("DOMContentLoaded", function() {
    let squareArrow = (num) => {
        console.log(num * num);
    }
    // From Marko: num**2 // ooh, there's the ** operator from python (not discussed before)

    squareArrow(5);

    let name = "Amanda";
    let age = "18";
    console.log(`Welcome! My name is ${name} and I am ${age} years old`);

    let person = {
        firstName: "Amanda",
        lastName: "Lim"
    }
    let {firstName, lastName} = person;
    console.log(`I am ${firstName} ${lastName}`);

    let arr1 = [1, 2, 3, 4];
    let arr2 = [5, 6, 7, 8, 9];
    console.log(arr1);
    console.log(arr2);
    arr1.push(...arr2);
    console.log(arr1);
    // From everyone: newArray = [...arr1, ...arr2]
    // From Marko: spread - you spread the array; rest - you collect them back

    function area (l = 1, w = 1)
    {
        console.log(l * w);
    }
    area();
    area(5, 2);
    // From LJ: area(4) // outputs 4 (it changed the l variable)
});