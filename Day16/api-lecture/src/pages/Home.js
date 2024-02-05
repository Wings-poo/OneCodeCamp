import React, { useState, useEffect } from 'react'

const Home = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // use async and await because there will be a time difference between us fetching the data and using it
    useEffect (() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://www.boredapi.com/api/activity");
                
                if(!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
    
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

    // 200 to 299 status code means OK
    // if you see in json format, it looks like an object, so use it like an object

    return (
        <div>
            <h1>Welcome to Home Page!</h1>

            {loading && <p>Loading...</p>}

            {error && <p>Error: {error}</p>}

            {!loading && !error && (
                <div>
                    <h1>Loaded Activity!</h1>
                    <p>Activity: {data?.activity}</p>
                    <p>Type: {data?.type}</p>
                    <p>Participants: {data?.participants}</p>
                </div>
            )}
        </div>
    )
}

export default Home
