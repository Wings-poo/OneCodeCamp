import React from 'react'
import { useState } from 'react';

const Click = () => {
    const [clicks, setClick] = useState(0);

    function handleClick ()
    {
        setClick(clicks + 1);
    }
    
    return (
        <div>
            <button onClick={handleClick}>Click Me</button>
            <h1>Total no of clicks: {clicks}</h1>
        </div>
    );
}

export default Click
