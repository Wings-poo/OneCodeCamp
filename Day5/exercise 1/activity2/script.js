function isEven (num)
{
    return (num%2 == 0);
}

for (let i = 0; i <= 10; i++) {
    console.log("Is", i, "even?", isEven(i));
}

function multiply (a, b)
{
    return a * b;
}

while (true) {
    a = prompt("enter a non-negative number");
    if (a < 0)
        break;

    b = prompt("enter a non-negative number");
    if (b < 0)
        break;
    
    console.log(multiply(a,b));
}
// From Dether: check if Int: parseInt(prompt())
/*
From Marko:
    Used readline (for NodeJS), however this is asynch so it poses a problem
    JS is asynchronous
    readline waits for input leading to asynch?
    used async and await and Promise
    used parseFloat(num) if isNaN(parsedNum), break
    // Note to self: try to see code on github (it's a bit long)
*/

function reverseString (str)
{
    return str.split("").reverse().join("");
}

console.log(reverseString("hello"));

function countVowels (str)
{
    let numVowels = 0;
    for (let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase();
        if ((char == 'a') || (char == 'e') || (char == 'i') || (char == 'o') || (char == 'u'))
            numVowels++;
        //if ((char == 'A') || (char == 'E') || (char == 'I') || (char == 'O') || (char == 'U'))
        //    numVowels++;
    }
    return numVowels;
}
/*
From Dether:
    var vowel = /[aeiou]/ig; // From Ma'am Ian: regular expression (RegEx)
    var vowelMatches = word.match(vowel); // From Marko: ternary
    return vowelMatches ? vowelMatches.length : 0;
*/
/*
From Marko:
    const vowels = "aeiouAEIOU";
    let count = 0;
    for (let index of str) { 
        if (vowels.includes(index))
            count++;
    }
    return count;
*/

console.log(countVowels("JavaScript"));

function findMax (arr)
{
    /*let max = 0; // assumption is inputs are positive numbers
    for (let i = 0; i < arr.length; i++)
        if (max < arr[i])
            max = arr[i];
    return max;*/
    return Math.max.apply(Math, arr);
}
// from Dether: Math.max(...arr);
// From Marko: ... is spread, Math.max won't read array

console.log(findMax([4, 9, 2, 7, 5]));

function calculateFactorial (num)
{
    let fact = 1;
    for (let i = 1; i <= num; i++)
        fact *= i;
    return fact;
}
// From Dether: added case for negative numbers (no factorial)
// From Marko: used recursion

console.log(calculateFactorial(5));

function isPalindrome (str)
{
    for (let i = 0, j = str.length - 1; i <= j; i++, j--)
        if (str[i] != str[j])
            return false;
    return true;
}
/*
From Dether:
    var cleanWord = word.replace(/^a-zA-Z0-9)/g,'').toLowerCase(); // RegEx
    return cleanWord === cleanWord.split('');
    reverse().join('');
*/
/*
From Marko:
    const reversedStr = reverseString(str);
    return (str == reversedStr); // reverseString is a function from previous step
*/

console.log(isPalindrome("level"));

function sumArray (arr)
{
    let sum = 0;
    for (let i = 0; i < arr.length; i++)
        sum += arr[i];
    return sum;
}
/*
From Marko:
    numbers.reduce((sum, num) => sum + num, 0);
    // two parameters sum + num is what it does, 0 is index
    // (sum is container, num is element)
    // or // (let num of numbers) sum += num
*/

console.log(sumArray([1, 2, 3, 4, 5]));

function capitalizeFirstLetter (str)
{
    return str.charAt(0).toUpperCase() + str.slice(1);
}
// From Dether: check if string so it doesn't return an error

console.log(capitalizeFirstLetter("javascript"));

function filterEvenNumbers (arr)
{
    let newarr = [];
    for (let i = 0; i < arr.length; i++)
        if (arr[i]%2 == 0)
            newarr.push(arr[i]);
    return newarr;
}
/*
From Dether:
    var evenNumbers = arr.filter.(function (number) {
        return number % 2 === 0;
    });

    return evenNumbers;
*/
/*
From Marko:
    const filterEvenNumbers = numbers => filterEvenNumbers.filter(num => num % 2 == 0);
    // this is an array function
*/

console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
