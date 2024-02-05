import React, { useState, useEffect } from 'react'

const Fetch = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Heads heads up: useEffect runs twice on mount in React 18 but only in dev mode. They say this is to help with debugging (but it's actually just a bit confusing). See here: beta.reactjs.org/reference/react/useEffect#usage 
    useEffect (() => {
        let name = prompt("Enter your name");
        let fetchLink = "https://api.agify.io/?name=" + name;
        
        const fetchData = async () => {
            try {
                const response = await fetch(fetchLink);

                if (!response.ok)
                    throw new Error (`HTTP error! Status: ${response.state}`);

                const result = await response.json();
                setData(result);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Guess your Age!</h1>

            {loading && <p>Loading...</p>}
            
            {error && <p>Error: {error}</p>}

            {!loading && !error && (
                <div>
                    <p>Your name is {data?.name}</p>
                    <p>I guess that your age is...</p>
                    <h2>{data?.age}</h2>
                </div>
            )}

        </div>
    )
}

export default Fetch
