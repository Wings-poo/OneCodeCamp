class Person {
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }
}

class Prosecutor extends Person {
    prosecute (defendant, Case) {
        defendant.Case = Case;        
    }
}

class Defendant extends Person {
    constructor (name, age, Case = "None") {
        super(name, age);
        this.Case = Case;
    }
}

class Case { // assumes non-error causing input (i.e. days < 31/30/29; months < 12)
    constructor (title, years, months, days, minAge, maxAge) {
        this.title = title;
        this.imprisonmentTerm = {
            years: years,
            months: months,
            days: days
        };
        this.ageLimit = {
            minAge: minAge,
            maxAge: maxAge
        };
    }

    computeReleaseDate () {
        let currDate = new Date();

        let monthName = {
            0: "January",
            1: "February",
            2: "March",
            3: "April",
            4: "May",
            5: "June",
            6: "July",
            7: "August",
            8: "September",
            9: "October",
            10: "November",
            11: "December"
        };

        let endDate = {
            0: 31,
            1: 28,
            2: 31,
            3: 30,
            4: 31,
            5: 30,
            6: 31,
            7: 31,
            8: 30,
            9: 31,
            10: 30,
            11: 31
        }

        let releaseDate = currDate.getDate() + this.imprisonmentTerm.days;
        let releaseMonth = currDate.getMonth() + this.imprisonmentTerm.months;
        let releaseYear = currDate.getFullYear() + this.imprisonmentTerm.years;
        
        // leap year
        if (releaseYear%4 == 0) {
            if (releaseYear%100 == 0) {
                if (releaseYear%400 == 0)
                    endDate[1]++;
            } else
                endDate[1]++;
        }
        
        if (releaseDate > endDate[releaseMonth]) {
            releaseDate -= endDate[releaseMonth];
            releaseMonth++;
        }

        if (releaseMonth == 12) {
            releaseYear++;
            releaseMonth = 0;
        }

        return (releaseDate.toString() + " " + monthName[releaseMonth] + " " + releaseYear.toString());
    }
}
/*
From Marko:
    new Date(releaseYear, releaseMonth, releaseDate); // no maths or if-else
    // outputs the correct answer

From Harold:
    release.setFullYear(releaseYear);
    etc.

date.toDateString();

Me: Lesson learned... study Date() method
*/

class TrialCourt {
    initiateTrial (defendant, prosecutor) {
        if (this.getVerdict(defendant))
            console.log(`Trial:
            Name: ${defendant.name}
            Age: ${defendant.age} year(s) old
            Case Title: ${defendant.Case.title}
            Filed By: ${prosecutor.name}
            Verdict: GUILTY
            Release Date: ${defendant.Case.computeReleaseDate()}`);
        else
            console.log(`Trial:
            Name: ${defendant.name}
            Age: ${defendant.age} year(s) old
            Case Title: ${defendant.Case.title}
            Filed By: ${prosecutor.name}
            Verdict: NOT GUILTY`);
    }

    getVerdict (defendant) { // added prosecutor to get Case details
        if ((defendant.age >= defendant.Case.ageLimit.minAge) && (defendant.age <= defendant.Case.ageLimit.maxAge)) 
            return true;
        else
            return false;
    }
}

let trialCourt = new TrialCourt();

let case1 = new Case("Malicious Mischief", 3, 3, 3, 18, 75);
let prosecutor1 = new Prosecutor("John", 30);
let defendant1 = new Defendant("Girlie", 5);

prosecutor1.prosecute(defendant1, case1);
trialCourt.initiateTrial(defendant1, prosecutor1);

let case2 = new Case("Malicious Mischief", 3, 3, 3, 18, 75);
let prosecutor2 = new Prosecutor("John", 30);
let defendant2 = new Defendant("Onel", 25);

prosecutor2.prosecute(defendant2, case2);
trialCourt.initiateTrial(defendant2, prosecutor2);