// Static:
function Clock (props)
{
    let currDate = new Date();
    let newDate = new Date(currDate);
    newDate.setMinutes(currDate.getMinutes() + parseFloat(props.timeElapsed));
    return (
        <div className="time">
            {newDate.toLocaleString()};
        </div>
    );
    // return currDate.toLocaleTimeString(); // changed for exercise 2
}

// Dynamic (With help from Harold and Dion from presentation)
// import { useState, useEffect } from 'react';

// function Clock ()
// {
//     const [currDate, setTime] = useState(new Date());
    
//     useEffect (() => {
//         const interval = setInterval(() => {
//             setTime(new Date());
//         }, 1000);

//         return () => clearInterval(interval);
//     }, []);

//     return currDate.toLocaleTimeString();
// }

export default Clock

/*
From Harold:
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalID = setInterval(() => {
            setTime(new Date()); //dito nag-update
        }, 1000);
    }

    return time.toLocaleTimeString();
    // di ko nakopya pero siya ung tama as well as Dion
*/

// initial code for dynamic clock (scrapped. just keeping it for reference)
// import { useEffect, useRef } from 'react';

// export default function Clock() {
//     //const [counter, setCounter] = useState(0);
  
//     let currDate = useRef(new Date());

//     useEffect(() => {
//       const interval = setInterval(() => {
//         currDate.current = new Date();
//       }, 1000);
  
//       return () => clearInterval(interval);
//     }, []);
  
//     return (
//         `${currDate.getHours()}:${currDate.getMinutes()}:${currDate.getSeconds()}`
//     );
//   }