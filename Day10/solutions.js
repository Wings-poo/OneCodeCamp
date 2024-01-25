// exercise 1
var firstInput = prompt();
let secondInput = prompt();
const thirdInput = prompt();

let arr = [firstInput, secondInput, thirdInput];
let newArr = [1, ...arr, 5];

function restFcn (newArr, ...restOfValues)
{
    let correct = true;

    for (let i = 0; i < newArr.length; i++) {
        console.log(newArr[i], restOfValues[i]);
        if (newArr[i] != restOfValues[i])
            correct = false;
    }
    
    if (correct)
        console.log("correct");
    else
        console.log("wrong");
}

restFcn(newArr, 1, firstInput, secondInput, thirdInput, 5);

// exercise 2
const arrA = [10,11,12,13,14,15];
const arrB = [5,5,6,6,7,7];
const quotients = [];

let div = (a, b, primeA = false) => {
    if (!primeA)
        quotients.push(a/b);
};

for (let i = 0; i < arrA.length; i++) {
    if ((arrA[i] != 11) && (arrA[i] != 13))
        div(arrA[i], arrB[i]);
    else
        div(arrA[i], arrB[i], true);
}

console.log(quotients);

// exercise 3
class grades {
    constructor (mathGrades, historyGrades, scienceGrades, healthGrades, codingGrades) {
        this.math = mathGrades;
        this.history = historyGrades;
        this.science = scienceGrades;
        this.health = healthGrades;
        this.coding = codingGrades;
    }
    computeGWA () {
        return ((this.math + this.history + this.science + this.health + this.coding)/5);
    }
}

let studentGrades = new grades(95, 75, 89, 45, 100);
console.log(studentGrades.computeGWA());