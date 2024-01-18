/*
ACTIVITY
1) Create a program that prints the arithmetic series or sum of the sequence of values in the array "numbers". Your "numbers" array should contain the following sequence: 2, 5, 8, 11, 14.

let numbers = [2, 5, 8, 11, 14];

2) Create a program that prints the mean of the values in the array called "numbers". Array "numbers" should have the following values: 13, 143, 88, 65, 120.

let numbers = [13, 143, 88, 65, 120];

3) Create an array that inclusively contains all even numbers between 0 to 100.
*/

console.log("Problem 1");

function fcn1 () // Wrong interpretation: Just all the numbers, then the sum (wrong use of "or" and "arithmetic series")
{
    let numbers = [2, 5, 8, 11, 14];

    for (let i = 0; i < numbers.length; i++) {
        let arithsum = (numbers[i] / 2) * (2 + ((numbers[i] - 1) * 1));
        console.log("Arithmetic series up to", numbers[i], "=", arithsum);
    }
}

fcn1();

/*
    From LJ:
        for (const num of numbers)
            sum += num
        console.log(numbers);
        console.log(sum);

    From Dether:
        console.log(numbers.toString());
        console.log(sum);
*/

console.log("\nProblem 2");

function fcn2 ()
{
    let numbers = [13, 143, 88, 65, 120];

    let sum = 0;
    for (let i = 0; i < numbers.length; i++)
        sum += numbers[i];

    let mean = sum/numbers.length;
    console.log("Mean of numbers =", mean);
}

fcn2();

console.log("\nProblem 3");

var ans = Array.from(Array(100/2 + 1).keys(), (_ , i) => i*2);
console.log(ans);

/*
Problem 4: (Optional)
Guess the Secret Number Game
a) Declare a variable named secretNumber and assign it a random integer between 1 and 10
b) Declare a variable named attempts and set it to 0. This variable will keep track of the number of attempts made by the player.
c) Declare a variable named guessedNumber to store the player's guesses.
d) Display a welcome message to the player using console.log().
e) Start a do-while loop to repeatedly ask the player for their guess until they guess the number.
f) Inside the loop, prompt the player to enter their guess using prompt() function and store it in the guessedNumber variable.
g) Use an if statement to check if the guessedNumber is lower than the secretNumber.
h) If it is lower, display the message "Too low! Try again." using console.log()
i) Use an if statement to check if the guessedNumber is higher than the secretNumber.
j) If it is higher, display the message "Too high! Try again." using console.log().
k) Use an else statement to handle the case when the guessedNumber matches the secretNumber.
l) Display the message "Congratulations! You guessed the correct number: [secretNumber]" using console.log().
m) Display the message "It took you [attempts] attempts." to let the player know how many attempts they took.
n) Increment the attempts variable by 1.
o) Repeat steps 7-11 until the guessedNumber matches the secretNumber.
*/

function fcn4 ()
{
    console.log("Welcome to the Secret Number Game");

    let secretNumber = Math.floor(Math.random() * 10) + 1;
    let attempts = 0;

    let guessedNumber = 0;
    let notAngry = -1;
    while (true && (notAngry != 2)) {

        do {
            guessedNumber = prompt("Guess a number between 1 to 10");
            if (!(guessedNumber >= 1 && guessedNumber <= 10)) {
                switch (notAngry) {
                    case -1:
                        console.log("...Please read the instruction...");
                        break;
                    case 0:
                        console.log("AGAIN. READ THE INSTRUCTION.");
                        break;
                    default:
                        console.log("You did not read the instruction >:( Go away")
                }
                notAngry++;
            }
        } while (!(guessedNumber >= 1 && guessedNumber <= 10) && (notAngry != 2));

        attempts++;

        if (notAngry != 2) {
            notAngry = -1;
            if (guessedNumber < secretNumber)
                console.log("Too low! Try again.");
            else if (guessedNumber > secretNumber)
                console.log("Too high! Try again.");
            else {
                console.log("Congratulations! You guessed the correct number:", secretNumber);
                break;
            }
        } else
            console.log("Kicking you out of the game...");
    }

    if (guessedNumber == secretNumber)
        console.log("It took you", attempts, "attempts.");
}

/*
    From Marko:
    let r1 = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    }};
    parseInt(guessedNumber)
    if (>)
        askForGuess
    else if (<)
        askForGuess
    else
        r1.close
*/

// From Ma'am Ian: We want our codes to be dynamic