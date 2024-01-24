// JS runs your code top to bottom
/*
console.log("first");
console.log("second");
console.log("third");
*/

// Async JS
/*
console.log("first");

setTimeout (() => {
    console.log("third");
}, 2000);

console.log("second");
*/

/*
const getData = (callback) => {
    setTimeout (() => {
        const data = "This is a data";
        callback(data);
    }, 2000);
};

const processData = (data) => {
    console.log("Processing data", data);
};

getData(processData);
*/

/*
// calback hell
const step1 = (callback) => {
    setTimeout (() => {
        console.log("Step 1 complete");
        callback();
    }, 1000);
};

const step2 = (callback) => {
    setTimeout (() => {
        console.log("Step 2 complete");
        callback();
    }, 1000);
};

const step3 = (callback) => {
    setTimeout (() => {
        console.log("Step 3 complete");
        callback();
    }, 1000);
};

// nested callback (hell)
step1(() => {
    step2 (() => {
        step3 (() => {
            console.log("All steps complete");
        });
    });
});
// it is difficult to determine what will happen since there are multiple timeouts
// Note to self: study more
*/

/*
// Promises
const step1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout (() => {
            console.log("Step 1 complete");
            resolve();
        }, 1000);
    });
}

const step2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout (() => {
            console.log("Step 2 complete");
            resolve();
        }, 1000);
    });
}

const step3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout (() => {
            console.log("Step 3 complete");
            resolve();
        }, 1000);
    });
}

// chaining promises
step1()
    .then(step2)
    .then(step3)
    .then(() => {
        console.log("All steps complete");
    })
    .catch((error) => {
        console.log(error);
    });
// similar to callback hell but is more readable
// Note to self: study more
*/

// async/await
const step1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout (() => {
            console.log("Step 1 complete");
            resolve();
        }, 1000);
    });
}

const step2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout (() => {
            console.log("Step 2 complete");
            resolve();
        }, 1000);
    });
}

const step3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout (() => {
            console.log("Step 3 complete");
            resolve();
        }, 1000);
    });
}

// async and await are newer than callbacks and promises
// closer to other languages which are async (C++ and Java)
const performSteps = async () => {
    try {
        await step1(); // await imitates the setTimeout
        await step2();
        await step3();
        console.log("All steps complete");
    } catch (error) {
        console.log(error);
    };
}

performSteps();
// Note to self: study more

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
//https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
