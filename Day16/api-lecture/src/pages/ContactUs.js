import React, { useState, useEffect } from 'react'
import Axios from 'axios';

const ContactUs = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // no need for await in response.data as well as !response.ok as axios will handle those
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await Axios.get("https://www.boredapi.com/api/activity");

                const result = response.data;
                setData(result);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [])

    return (
        <div>
            <h1>Welcome to Contact Us Page!</h1>

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

export default ContactUs
