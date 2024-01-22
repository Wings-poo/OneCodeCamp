/*
Task:
continuation of exercise 2
make bubbles shrink over time
change color depending on button
white button to clear everything
black border per button for indicator
*/

var containerElement = document.getElementById("container");
containerElement.addEventListener("click", handleClick);

// color changer and reset
var buttonElement = document.getElementsByClassName("button");
for (let i = 0; i < buttonElement.length; i++) {
    buttonElement[i].addEventListener("click", buttonClick);
    if (buttonElement[i].id != "reset")
        buttonElement[i].style.backgroundColor = buttonElement[i].id; // surprisingly does not commit an error for reset, but might as well separate it
}

var prevColorId = document.getElementById("reset");
var currColorId = document.getElementById("reset");
currColorId.style.border = "5px solid black";
var color = false;

function buttonClick (event)
{
    prevColorId.style.border = "3px solid black";
    currColorId = document.getElementById(event.target.id);
    currColorId.style.border = "5px solid black";
    prevColorId = currColorId;

    if (event.target.id == "reset") {
        color = false;
        resetScreen();
    } else
        color = event.target.id;
}

// circle maker

function handleClick (event)
{
    var diameter = Math.floor(Math.random() * 191) + 10; 
    var center_x = event.clientX - diameter/2;
    var center_y = event.clientY - diameter/2;

    var spanElement = document.createElement("span"); // can use img but there are borders
    spanElement.className = 'circle';
    spanElement.style.top = center_y + 'px';
    spanElement.style.left = center_x + 'px';

    if (color)
        spanElement.style.backgroundColor = color;
    
    setInterval ( function() {
        if (diameter) {
            spanElement.style.height = diameter + 'px';
            spanElement.style.width = diameter + 'px';
            diameter -= 1;
        }
    }, 100);
        
    var opacity = Math.random();
    if (opacity < 0.5)
        opacity += 0.25; // it's difficult to see lower opacity
    spanElement.style.opacity = opacity;

    containerElement.appendChild(spanElement);
}

// reset screen
function resetScreen ()
{
    containerElement.innerHTML = "";
}

/*
Credits to:
https://stackoverflow.com/questions/19655189/javascript-click-event-listener-on-class
https://stackoverflow.com/questions/48239/getting-the-id-of-the-element-that-fired-an-event
https://stackoverflow.com/questions/15687152/javascript-change-variable-gradually-over-five-seconds
https://www.w3schools.com/css/css3_colors.asp
*/
/*
From Harold:
function shrinkCircle() {
    newSize = size - 1;
    if (newSize) {
        newRadius = newSize/2;
        width, left, top // adjust
        requestAnimationFrame(shrinkCircle);
    } else
        document.body.removeChild(circle)
}

requestAnimationFrame(shrinkCircle);  
// https://www.w3schools.com/jsref/met_win_requestanimationframe.asp

From Marko:
added hex chooser
<input type="color" id="favcolor" name="favcolor" value="#FAB039">
addEventListener("input", fcn())
selectedColor = colorPicker.value;
// wasn't able to copy the code ;-;

added hover
#pink:hover, #blue:hover, #purple:hover, #reset:hover {
    transform: scale(1.2);
}

circles float (thru CSS)
@keyframes floatAndShrink {
    0% {
        transform: translateY(0) scale(1); // 100%
        opacity: 1; // 100%
    }
    100% {
        transform: translateY(-500px) scale(0);
        opacity: 0;
    }
}

*/