// Problem 1
function print_orders ()
{
    let arrlength = "not an int";
    while (isNaN(parseInt(arrlength)))
        arrlength = prompt("How many orders will you put in? (Int only)");
    
    let str = "<p>Your Orders:</p><ol>";
    for (let i = 1; i <= arrlength; i++) {
        let inputstr = prompt("Order #" + i.toString() + ":");
        str += "<li>" + inputstr + "</li>";
    }
    str += "</ol>";

    str += "<button onclick=\"Clear(1)\" class=\"btn btn-primary\">Clear</button>";

    const prob1id = document.getElementById("prob1");
    prob1id.innerHTML = str;
}
/*
From Marko:
    Document Object Model (DOM)
    added button to run javascript function
    used section (no class or id, just to separate problems?)
    arrow function
    
    for (let value of orders) {
        const liElement = doctument.createElement("li"); // compared to what I did
        liElement.className = 'list-group-item';
        liElement.innerHTML = value;
        ol.appendChild(liElement);
    }
*/

// Problem 2
// does not take into account wrong input (yet) though it just outputs undefined, which is fine... I think?
// case sensitive
function cardValues ()
{
    let cards = {
        "King": 13,
        "Queen": 12,
        "Jack": 11,
        "10": 10,
        "9": 9,
        "8": 8,
        "7": 7,
        "6": 6,
        "5": 5,
        "4": 4,
        "3": 3,
        "2": 2,
        "Ace": 1
    }

    let arrlength = "not an int";
    while (isNaN(parseInt(arrlength)))
        arrlength = prompt("How many cards do you want to know the keys of? (Int only)");
    
    let str = "<p>List of keys in the array:</p><ul>";
    let cardlist = [];
    for (let i = 1; i <= arrlength; i++) {
        let card = prompt("Card #" + i.toString() + ":");
        str += "<li>" + card + "</li>";
        cardlist.push(card);
    }
    str += "</ul>";

    for (let card of cardlist) {
        str += "<p>The value of " + card + " in Pyramid Solitaire is " + cards[card] + ".</p>";
    }

    str += "<button onclick=\"Clear(2)\" class=\"btn btn-primary\">Clear</button>";

    const prob2id = document.getElementById("prob2");
    prob2id.innerHTML = str;
}
// From Dether and LJ: just do K, Q, J, A (like in the picture in the pdf)
// Note to self: try console.log(${variable})

// Problem 3
function karaoke ()
{
    let score = Math.floor(Math.random() * 100) + 1;
    let str = "<h6>Your score is: </h6><h2>" + score + "</h2>";
    
    if (score < 50)
        str += "<h5>Never sing again, ever!</h5>";
    else if (score < 80)
        str += "<h5>Practice more!</h5>";
    else if (score < 95)
        str += "<h5>You're getting better!</h5>";
    else
        str += "<h5>What an excellent singer!</h5>";
    
    str += "<button onclick=\"Clear(3)\" class=\"btn btn-primary\">Clear</button>";

    const prob3id = document.getElementById("prob3");
    prob3id.innerHTML = str;
}

// Problem 4
// Note to self: add pity system? (like in gacha hahaha)
function ballpractice ()
{
    let str = "<p>Practice starts...</p>";

    let success = 0, fail = 0;
    for (let i = 1; i <= 1000; i++) {
        let hit = Math.floor(Math.random() * 2);
        if (hit) {
            success++;
            str += "<p>Attempt #" + i.toString() + " Shooting the ball... Success! ... Got " + success.toString() + "x success and " + fail + "x epic fail(s) so far</p>";
        } else {
            fail++;
            str += "<p>Attempt #" + i.toString() + " Shooting the ball... Epic Fail! ... Got " + success.toString() + "x success and " + fail + "x epic fail(s) so far</p>";
        }
    }

    str += "<p>Practice ended.</p>";
    str += "<button onclick=\"Clear(4)\" class=\"btn btn-primary\">Clear</button>";

    const prob4id = document.getElementById("prob4");
    prob4id.innerHTML = str;
}

// Problem 5
function convert_to_blanks ()
{
    let arrlength = "not an int";
    while (isNaN(parseInt(arrlength)))
        arrlength = prompt("How many lines of blank do you want? (Int only)");
    
    let sample = [];
    for (let i = 1; i <= arrlength; i++) {
        let blank = "blank";
        while (isNaN(parseInt(blank)))
            blank = prompt("How many blanks do you want? (Int only)");
        sample.push(blank);
    }

    let str = "";
    for (let i = 0; i < sample.length; i++) {
        str += "<p>";
        for (let j = 0; j < sample[i]; j++)
            str += "_ ";
        str += "</p>";

        if (sample[i] == 0)
            str += "<br>";
    }

    str += "<button onclick=\"Clear(5)\" class=\"btn btn-primary\">Clear</button>";

    const prob5id = document.getElementById("prob5");
    prob5id.innerHTML = str;
}

// Clear:
function Clear (probnum)
{
    const probid = document.getElementById("prob" + probnum.toString());
    probid.innerHTML = "";
}