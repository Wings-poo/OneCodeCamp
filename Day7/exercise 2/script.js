//document.addEventListener("DOMContentLoaded", function() {
    function getRandom (getC = false, max, min)
    {
        if (min > max)
            max = [min, min = max][0];

        if (getC)
            return Math.floor(Math.random() * (max - min + 1)) + min;
        else
            return Math.floor(Math.random() * 1000) + 1;
    }

    let A = 1;
    let B = 10;
    let C = 0;

    function changeValue (targetID)
    {
        console.log(targetID);
        let targetdocument = document.getElementById(targetID);
        
        let randomValue;
        if (targetID == 'C') {
            randomValue = getRandom(true, A, B);
            C = randomValue;
        } else {
            randomValue = getRandom();
            targetdocument.innerHTML = targetID + " = " + randomValue;
            if (targetID == 'A')
                A = randomValue;
            else
                B = randomValue;
        }
    }

    let resultsdoc = document.getElementById("results");
    let guessdoc = document.getElementById("guessbtn");
    guessdoc.addEventListener("click", guess);

    // if form
    function Guess (form)
    {
        let x = form.fname.value;

        console.log(`Correct answer is: ${C}`);

        if (x == C)
            resultsdoc.innerHTML = "Correct!"
        else
            resultsdoc.innerHTML = "Wrong!"
    }

    // if prompt
    function guess ()
    {
        let x = "wrong";
        while (isNaN(parseInt(x)))
            x = prompt("Take a guess (integer)");

        console.log(`Correct answer is: ${C}`);

        if (x == C)
            resultsdoc.innerHTML = "Correct!"
        else
            resultsdoc.innerHTML = "Wrong!"
    }
    
//});