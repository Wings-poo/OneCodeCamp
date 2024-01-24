let time = 0;
let valid = false;

function getTime (form)
{
    time = form.fname.value;
    
    let timeValidityDoc = document.getElementById("timeValidity");

    if ((time >= 1) && (time <= 60)) {
        valid = true;
        if (time > 1)
            timeValidityDoc.innerHTML = `Timer set to ${time} minutes`;
        else
            timeValidityDoc.innerHTML = `Timer set to ${time} minute`;
    } else {
        valid = false;
        timeValidityDoc.innerHTML = "Invalid Time";
    }

    resetTimer();
}

function timer ()
{
    return new Promise((resolve, reject) => {
        setTimeout (() => {
            resolve();
        }, 1000);
    });
}

let timerrunning = false;
let index = 0;
//var tictoc;
async function startTimer()
{
    try {
        let timerDoc = document.getElementById("timer");

        if (!valid) {
            timerDoc.innerHTML = "Time invalid. Cannot start timer";
            await timer();
            timerDoc.innerHTML = `00:00`;
        } else {
            if (!timerrunning) {
                timerrunning = true;
                let currmin = time - 1;
                let currsec = 59;

                while (currmin || currsec) {
                    if (!currmin && (currsec < 10)) {
                        timerDoc.className = "rise-shake";
                    }
                        
                    timerDoc.innerHTML = ("0" + currmin).slice(-2) + ":" + ("0" + currsec).slice(-2);
                    await timer();
                    currsec--;

                    if (currsec < 0) {
                        currmin--;
                        currsec = 59;
                    }

                    if (!valid)
                        break;
                }

                timerDoc.className = "";

                if (!currmin && !currsec)
                    timerDoc.innerHTML = "Time's Up!";   
                
                /*tictoc = setInterval(() => {
                    if (currtime > 1) {
                        currtime -= 1;
                        timerDoc.innerHTML = currtime;
                    } else {
                        timerrunning = false;
                        timerDoc.innerHTML = "Time's Up!";
                        clearInterval(tictoc);
                    }
                }, 1000);*/

                timerrunning = false;
            }
        }
    } catch (error) {
        console.log(error);
    };
}

function resetTimer ()
{
    if (valid) {
        valid = false;

        setTimeout (() => {
            valid = true;
        }, 1000);
    }

    let timerDoc = document.getElementById("timer");
    timerDoc.innerHTML = `00:00`;

    //clearInterval(tictoc);
    //startTimer();
}

/*
References:
// not used in final output: https://stackoverflow.com/questions/109086/stop-setinterval-call-in-javascript
// for formatting numbers: https://stackoverflow.com/questions/8043026/how-to-format-numbers-by-prepending-0-to-single-digit-numbers
*/

// Meme timer: (modified; copied from: https://github.com/GoulartNogueira/BadUI/blob/master/Phone-Slider-Selector/BadUIPhone.html)
var slider = document.getElementById("slider");
var angleSlider = document.getElementById("angleSlider");
var timeDisplay = document.getElementById("timeDisplay");
var advancedModeCheckbox = document.getElementById("advancedMode");
var angle = 0;
var speed = 0;
var friction = 0.99;
var value = Number(slider.value);

// Apply Physics rule to update value based on angle and speed
function updateTime () {
    // Get angle and speed from sliders
    angle = Number(angleSlider.value);
    value = Number(slider.value)
    // Speed is based on angle
    speed += Math.sin(angle * Math.PI / 180);
    // Friction
    speed *= friction;

    if (angle != 0)
        value += Math.round(speed);

    // Bounce off edges, inverting speed
    if (value > slider.max) {
        value = slider.max;
        speed *= -1;
    } else if (value < slider.min) {
        value = slider.min;
        speed *= -1;
    }
    slider.value = value;
    timeDisplay.innerHTML = value;
}

// Continuous update
setInterval(updateTime, 10);

// Advanced Mode
advancedModeCheckbox.addEventListener("change", function() {
    if (this.checked) {
        // Show advanced controls
        document.getElementById("angleSlider").style.display = "block";
        slider.style.width = '100%';
    } else {
        // Hide advanced controls
        document.getElementById("angleSlider").style.display = "none";
        slider.style.width = '197px';
        angleSlider.style.display = 'none';
        speed = 0;
        angleSlider.value = 0;
        slider.style.transform = 'rotate(0deg)';
    }
});

slider.oninput = function () {
    speed = 0;
};

angleSlider.oninput = function () {
    angle = Number(angleSlider.value);
    slider.style.transform = 'rotate(' + angle + 'deg)';
};

/*
From LJ:
    // no submit time, just start timer
    // updateTime()
    // used setInterval()
    // prompt for wrong input

From Harold:
    // changed UI (border for whole div, background, rounded edges, boxes for enter time and start/reset)
    // used reset to reset the input
    // no submit time, just start timer
    // prompt for wrong input

From Marko:
    // changed UI (border, background, rounded edges, font size)
    // start is where he inputs the time; prompt for time
    // prompt for wrong input
    // updateTimerDisplay()
    // ${String(minutes).padStart(2, '0'))}
    
From Dion:
    // used timerInterval (idk why (I can't see if he used setInterval))
    // * 60 then % 60, so that the if condition is just totalSeconds
    // end of startTimer() while loop await new Promise(resolve => setTimeout(resolve, 1000));

From Dether:
    // changed UI (border, background, rounded edges, font size, font)
    // start, reset, stop (clearInterval)
    // isNaN(parseInt(inputElement.value, 10)) // for decimals/whole number
    // alert for wrong input
    // setInterval
    // updateTimerDisplay()
    // padZero (self-code)
    // initially used callback
*/