var greet = function ()
{
    console.log("Greetings.");
}

greet();

let add = function (a, b)
{
    return a + b;
}

let sum = add(5, 3);
console.log(sum);

const multiply = function (a, b)
{
    return a * b;
}

let product = multiply(4,2);
console.log(product);

let isEven = function (num)
{
    return (num%2 == 0);
}

let even = isEven(6);
console.log(even);

let square = function (num)
{
    return num * num;
}

let squaredValue = square(3);
console.log(squaredValue);

let fullName = function (firstName, lastName)
{
    return firstName + " " + lastName;
}

let name = fullName("John", "Doe");
console.log(name); // note: name is a standard name (ksksks) in old JS, just deprecated. maybe try to avoid using this as a variable name

let capitalize = function (str)
{
    return str.toUpperCase();
}
// From Dether: check if input is string so it doesn't return an error

let capitalizedString = capitalize("javascript");
console.log(capitalizedString);