let bday = "NULL";
let birthYear = "NULL", birthMonth = "NULL", birthDate = "NULL";

// if form
function getBday (form)
{
    bday = form.fname.value;
    if (typeof bday == 'undefined')
        bday = "NULL";
    console.log(bday);
    [birthYear, birthMonth, birthDate] = bday.split('-');
    console.log(birthYear, birthMonth, birthDate);

    const currDate = new Date();
    let bdaydoc = document.getElementById("bday");
    if ((currDate.getMonth() + 1) == birthMonth && currDate.getDate() == birthDate)
        bdaydoc.innerHTML = "HAPPY BIRTHDAY!";
    else
        bdaydoc.innerHTML = "";
}

function getBdayBtn ()
{
    let valid = true;
    
    bday = prompt("Enter Bday (MM/DD/YYYY)");
    [birthMonth, birthDate, birthYear] = bday.split('/');
    
    console.log(birthYear, birthMonth, birthDate);
    
    // parsing if valid
    if ((typeof birthYear == 'undefined') || (typeof birthMonth == 'undefined') || (typeof birthDate == 'undefined'))
        valid = false;
    else if ((birthYear.length != 4) || (birthMonth.length != 2) || (birthDate.length != 2))
        valid = false;
    else if (isNaN(parseInt(birthYear)) || isNaN(parseInt(birthMonth)) || isNaN(parseInt(birthDate)))
        valid = false;
    else {
        birthYear = parseInt(birthYear);
        birthMonth = parseInt(birthMonth);
        birthDate = parseInt(birthDate);

        const currDate = new Date();

        // check if date is before current date
        if (birthYear > currDate.getFullYear())
            valid = false;
        else if ((birthYear == currDate.getFullYear()) && (birthMonth > (currDate.getMonth() + 1)))
            valid = false;
        else if ((birthYear == currDate.getFullYear()) && (birthMonth == (currDate.getMonth() + 1)) && (birthDate > currDate.getDate()))
            valid = false;

        // check if date is valid (i.e. days are correct per month)
        let daylimit = {
            1: 31,
            2: 28,
            3: 31,
            4: 30,
            5: 31,
            6: 30,
            7: 31,
            8: 31,
            9: 30,
            10: 31,
            11: 30,
            12: 31
        }

        // leap year
        if (birthYear%4 == 0) {
            if (birthYear%100 == 0) {
                if (birthYear%400 == 0)
                    daylimit[2]++;
            } else
                daylimit[2]++;
        }

        if ((birthMonth < 1) || (birthMonth > 12))
            valid = false;
        else if ((birthDate < 1) || (birthDate > daylimit[birthMonth]))
            valid = false;
    }

    let doc = document.getElementById("printAge");
       
    if (!valid) {
        bday = "NULL";
        doc.innerHTML = "Invalid Birthday";
    } else {
        doc.innerHTML = "";
    }
}

function getAge ()
{
    if (bday != "NULL") {
        const currDate = new Date();

        var age = currDate.getFullYear() - birthYear;
        if ((currDate.getMonth() + 1) < birthMonth)
            age--;
        else if (((currDate.getMonth() + 1) == birthMonth) && (currDate.getDate() < birthDate))
            age--;

        let doc = document.getElementById("printAge");
       
        if (age >= 0)
            doc.innerHTML = age;
        else
            doc.innerHTML = "Invalid Birthday";
    } else
        console.log("Error");
}



