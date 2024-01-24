let i;

const EmitRandomNumber = () => {
    let randomNumber = Math.floor(Math.random() * 101);
    console.log(`Attempt #${i}. EmitRandomNumber is called.`);
    console.log(`Random number generated is ${randomNumber}.`);
    console.log("- - - - -");
    return randomNumber;
}; 

const repeatStepFunction = (callback) => {
    setTimeout (() => {
        console.log("2 seconds have lapsed.");
        callback();
    }, 2000);
};

// traditional callbacks
// do I use for loop??? or just brute-force callbacks?
function fcn1 ()
{
    i = 0;
    repeatStepFunction (() => {
        i++;  
        let x = EmitRandomNumber();
        if (x < 80) {
            repeatStepFunction (() => {
                i++;
                x = EmitRandomNumber();            
                if (x < 80) {
                    repeatStepFunction (() => {
                        i++;
                        x = EmitRandomNumber();                  
                        if (x < 80) {
                            repeatStepFunction (() => {
                                i++;
                                x = EmitRandomNumber();                            
                                if (x < 80) {
                                    repeatStepFunction (() => {
                                        i++;
                                        x = EmitRandomNumber();                                   
                                        if (x < 80) {
                                            repeatStepFunction (() => {
                                                i++;
                                                x = EmitRandomNumber();
                                                if (x < 80) {
                                                    repeatStepFunction (() => {
                                                        i++;
                                                        x = EmitRandomNumber();
                                                        if (x < 80) {
                                                            repeatStepFunction (() => {
                                                                i++;
                                                                x = EmitRandomNumber();
                                                                if (x < 80) {
                                                                    repeatStepFunction (() => {
                                                                        i++;
                                                                        x = EmitRandomNumber();
                                                                        if (x < 80) {
                                                                            repeatStepFunction (() => {
                                                                                i++;
                                                                                x = EmitRandomNumber();
                                                                            });
                                                                        }
                                                                    });
                                                                }
                                                            });
                                                        }
                                                    });
                                                }
                                            });
                                        }
                                    });
                                }
                            });
                        }
                    });
                }
            });
        }
    });
}

const repeatStepPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout (() => {
            console.log("2 seconds have lapsed.");
            resolve();
        }, 2000);
    });
}

function fcn2 () {
    i = 1;
    let x;
    repeatStepPromise ()
        .then( () => {
            x = EmitRandomNumber();
            i++;
        })
        .then( () => {
            if (x < 80) {
                x = EmitRandomNumber();
                i++;
            }
        })
        .then( () => {
            if (x < 80) {
                x = EmitRandomNumber();
                i++;
            }
        })
        .then( () => {
            if (x < 80) {
                x = EmitRandomNumber();
                i++;
            }
        })
        .then( () => {
            if (x < 80) {
                x = EmitRandomNumber();
                i++;
            }
        })
        .then( () => {
            if (x < 80) {
                x = EmitRandomNumber();
                i++;
            }
        })
        .then( () => {
            if (x < 80) {
                x = EmitRandomNumber();
                i++;
            }
        })
        .then( () => {
            if (x < 80) {
                x = EmitRandomNumber();
                i++;
            }
        })
        .then( () => {
            if (x < 80) {
                x = EmitRandomNumber();
                i++;
            }
        })
        .then( () => {
            if (x < 80) {
                x = EmitRandomNumber();
                i++;
            }
        });
}

const repeatStepAwait = () => {
    return new Promise((resolve, reject) => {
        setTimeout (() => {
            console.log("2 seconds have lapsed.");
            resolve();
        }, 2000);
    });
}

const fcn3 = async () => {
    i = 0;
    try {
        let x = 0;
        while ((x < 80) && (i < 10)) {
            await repeatStepAwait();
            i++;
            x = EmitRandomNumber();
        }
    } catch (error) {
        console.log(error);
    };
}

/*
From Marko:
    // pyramid or dome or callback hell
    // promise
    // used recursion inside the promise
    function emitRandomNumber (attempt, maxAttempts, callback) {
        if (attempt > maxAttempts) {
            console.log("Max attempts reached. Exiting.");
            return;
        }
        console.log(`Attempt #${attempt}. EmitRandomNumber is called.`);
        setTimeout(() => {
            console.log("2 seconds have lapsed.");
            const randomNumber = Math.floor(Math.random() * 101);
            console.log("Random number generated is ${randomNumber}");
            if (randomNumber < 80) {
                console.log("- - - - -")
                resolve(emitRandomNumber(attempt + 1, maxAttempts));
            } else {
                console.log("- - - - -");
                console.log("Random number generated is ${randomNumber}!!!")
                console.log("- - - - -");
                resolve("Task completed!");
            }
        }, 2000);
    });

    emitRandomNumber(1, 10)
        .then(result => console.log(result));
        .catch(error => consol.log(error));

    // async
    // wasn't able to copy code

From Dether:
    // callback?
    // used recursion
    function EmitRandomNumber (attempt)
    {
        setTimeout (() => 
        {
            const randomNumber = Math.floor(Math.random() * 101);
            console.log(`Attempt #${attempt}:
2 seconds have lapsed.
Random Number Generated: ${randomNumber}
- - - - -);

            if ((randomNumber < 80) && (attempt < 10)) {
                EmitRandomNumber(attempt + 1);
            } else {
                console.log("Random number is greater than or equal to 80, stopping.");
            }
        }, 2000);
    }

    // promise:
    // was not able to copy

From Dion:
    // also used recursion
    // callback
    function EmitRandomNumber (attempt, maxAttempts, callback) {
        if (attempt > maxAttempts) {
            console.log("Maximum attempts reached.");
            return;
        }

        setTimeout (() => {
            const random = Math.floor(Math.random() * 100) + 1;
            console.log("2 seconds have passed. Generated number is", random);
            if (random <= 80) {
                EmitRandomNumber(attempt + 1, maxAttempts, callback);
            } else {
                console.log("2 seconds have passed. Generated number is", random);
                callback();
            }
        }, 2000);
    }

    EmitRandomNumber(1, maxAttempts, //didn't get to copy)

    // promises
    function EmitRandomNumber (attempt) {
        return new Promise ((resolve, reject) => {
            setTimeout (() => {
                // similar code
                resolve() in else
            })
        })
    }
    
    function runProgram() {
        EmitRandomNumber(1).then(() => {
            console.log("Done");
        });
    }

    // async wait
    function delay (ms) {
        return new Promise (resolve => setTimeout(resolve, ms));
    }

    async function EmitRandomNumber (attempt) {
        await delay(2000);

        const random = Math.floor// blah
        console.log("2 seconds")//blah

        if (random <= 80 && attempt < 10) {
            await EmitRandomNumber(attempt + 1);
        } else {
            if (random > 10) {
                console.log("2 seconds") // blah
            }
        }

        async function runProgram() {
            await
            // didn't get to copy
        }
    }

From Harold:
    // used prev/currtime = Date.now() then currtime - prevtime, so that it's dynamic
    // same for random and again, recursion
    // same for promise, recursion except using a promise
    // async await
    // same as promise except used async and await for the calling of the function
    // I can't read the code ;-;

From LJ:
    // also used recursion
    function EmitRandomNumber (callback, attempts = 1) {
        setTimeout (() => {
            // blah
        })
    }
    EmitRandomNumber ((result) => {
        console.log(result);
    })
*/