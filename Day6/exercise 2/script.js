/*
Task:
Whenever you click anywhere on the screen, it will generate random sizes of circles
Between 10px to 200px circles
Green circles: #CCE8CC

Rules:
Don't use SBG and Canvas
Don't play around the colors (next activity?)
*/

var containerElement = document.getElementById("container");

containerElement.addEventListener("click", handleClick);

function handleClick(event) {
    var diameter = Math.floor(Math.random() * 191) + 10; 
    var center_x = event.clientX - diameter/2;
    var center_y = event.clientY - diameter/2;

    var spanElement = document.createElement("span"); // can use img but there are borders
    spanElement.setAttribute("style", `height: ${diameter}px; width: ${diameter}px; background-color: #CCE8CC; border-radius: 50%; position: absolute; top:${center_y}px; left:${center_x}px;`);
    containerElement.appendChild(spanElement);
}

/*
Credits to:
https://www.w3schools.com/howto/howto_css_circles.asp
https://stackoverflow.com/questions/2027657/overlapping-elements-in-css
*/

/*
From Harold:
circle.style.cssText = ; // Ohhhh, so pwede pala 'to
document.body.append(circle);

From Marko:
added console.log('test connection');
added opacity

From Marko and Dether:
added a class for the circle (non-random values like color, position: absolute, etc)
circleDiv.className = 'circle';
circleDiv.style.left = x + 'px'; // Ohhh pwede pala 'to

From Ma'am Ian:
document.addEventListener("DOMContentLoaded", function() {
    // everything else
});
to avoid the need to put the script at the end of the HTML
*/