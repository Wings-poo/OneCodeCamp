import React, { useState, useEffect } from 'react';
//import Button from 'react-bootstrap/Button';

const Welcome = () => {
    const [count, setCount] = useState(0);

    // does not work :) it works without the [] though
    useEffect(() => {
        console.log("You clicked the button!");
        return () => {
            console.log("You're done clicking");
        }
    }, []);

    // you may use <div></div> or just <></> as long as there is only one outermost/parent tag pair
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click Me!</button>
        </div>
    )
}

export default Welcome
