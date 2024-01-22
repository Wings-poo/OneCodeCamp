let a = 15;
let b = "hello";
let c = function(name = "Dether")
{
    console.log("Hi", name);
    return name.length; 
}

console.log(c()); // "Hi, Dether\n6"
console.log(c("John")); // "Hi John\n4"

const sum = function (a, b)
{
    return a + b;
}

function performOperation (num1, num2, operation)
{
    let result = operation(num1, num2);
    console.log("result is", result);
    return result;
}

performOperation(3, 5, sum);

var obj = {
    name: "Harold",
    age: 39,
    hello: function() {
        console.log("Hello!");
    },
    location: "Caloocan",
    update_location: function(new_location) {
        this.location = new_location;
        console.log("Location has been updated to", new_location);
    }
}

obj.hello();

// this // refers to the properties of the object

obj.celebrate_bday = function ()
{
    this.age++;
    console.log(this.name + " is now " + this.age + " yrs old");
} // can add object new property

obj.celebrate_bday();
obj.update_location("Las Pinas");
console.log(obj.location);

// Get element by ID
var headingElement = document.getElementById("heading"); // callback function
console.log("Element by ID:", headingElement); // should show HTML code in heading
// idk why it's outputing null for me

// Get elements by class name
var textElements = document.getElementsByClassName("text");
console.log("Elements by Class Name:", textElements); // should show collection of output with class name "text"

// Get elements by tag name
var listItems = document.getElementsByTagName("li");
console.log("Elements by Tag Name", listItems);

// Query selector
var containerElement = document.querySelector("#container");
console.log("Query selector:", containerElement); // should show code
// idk why it outputs null for me
// . if class # if ID

// Parent node
var listParent = document.getElementById("list").parentNode;
console.log("Parent node:", listParent);

// Children node
var containerChildren = document.getElementById("container").children;
console.log("Children nodes:", containerChildren);

// Q: why use parentNode and children?
// A: code readability; when element does not exist yet (you just added it in the JS code, not in the default HTML state)

// Previous sibling
var firstListItem = document.querySelector("li");
var previousSibling = firstListItem.previousSibling;
console.log("Previous sibling:", previousSibling);

// Next sibling
var nextSibling = firstListItem.nextSibling;
console.log("Sibling element:", nextSibling);
// or nextElementSibling will also count children

// note: null was solved when I moved the script from header to end of body

// Modifying the inner HTML
headingElement.innerHTML = "Updated content";
console.log("Modified inner HTML:", headingElement);

// Modifying text content
var textElement = document.getElementsByClassName("text")[0]; // you can use index placement if there are multiple elements using that class
textElement.textContent = "New Text";
console.log("New Text:", textElement); 
textElements[0].textContent = "Newer Text";
console.log("New Text:", textElement); 
// textContent vs innerHTML is text specifically targets text

// Setting attribute
var imageElement = document.createElement("img");
imageElement.setAttribute("src", "image.jpg");
console.log("Image element with src attribute:", imageElement);
// still haven't added to the code, but console returns successfully
textElement.appendChild(imageElement); // added by me, works fine

// Modifying styles:
var btnElement = document.getElementById("btn");
btnElement.style.backgroundColor = "blue";
console.log("Modified style:", btnElement);
// me: tried with bootstrap (though that uses class this uses ID, no error; will try when using class)

// Creating and appending elements
var newParagraph = document.createElement("p");
newParagraph.textContent = "This is a new paragraph";
document.getElementById("container").appendChild(newParagraph);

const button = document.getElementById("btn");
button.addEventListener("click", handleClick); // other events: hover, scroll
button.addEventListener("mouseover", handleHover); // me: hover does not work, mouseover does the same thing as click? but only works once

function handleClick(event) {
    console.log("Button is clicked!");
}

function handleHover(event) { // me: does not work
    btnElement.style.backgroundColor = "pink";
    console.log("Button is hovered!");
}

// Other event listeners
// https://www.w3schools.com/jsref/dom_obj_event.asp