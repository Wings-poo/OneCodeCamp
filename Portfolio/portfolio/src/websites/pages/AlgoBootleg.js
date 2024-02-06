import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Axios from 'axios';

// does not work because they are not "proper" APIs which returns a response
const AlgoBootleg = () => {
    const [username, setUsername] = useState("");
    const [website, setWebsite] = useState("Online Judge");
    const CPwebsites = ["Online Judge", "Project Euler", "Atcoder"];
    const [solved, setSolved] = useState(-1);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    function checkUserData (event)
    {
        event.preventDefault();
        if (website === "Online Judge")
            getOJ();
        else if (website === "Project Euler")
            getPE();
        else if (website === "Atcoder")
            getAtc();
    }

    //943742
    async function getOJ ()
    {
        let fetchLink = "https://uhunt.onlinejudge.org/api/subs-user/" + username;
        try {
            const response = await Axios.get(fetchLink);

            const result = response.data;
            setSolved(result); // to change to countuniqueifs
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    async function getPE ()
    {
        let fetchLink = "https://projecteuler.net/profile/" + username + ".txt";
        try {
            const response = await Axios.get(fetchLink,
                {headers: {'Accept': 'text/html'},
                responseType: 'document'}
            );

            const result = response.data;
            setSolved(result); // to change to split ',' then get second to last?
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    async function getAtc ()
    {
        let fetchLink = "https://kenkoooo.com/atcoder/atcoder-api/v3/user/ac_rank?user=" + username;
        try {
            const response = await Axios.get(fetchLink);

            const result = response.data;
            setSolved(result["count"]);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h1>Check your stats</h1>
            <Form onSubmit={checkUserData}>
                <Form.Group className="mb-3">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Username/UserID" className="w-100" onChange={(e) => setUsername(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Which website</Form.Label>
                    <Form.Select onChange={(e) => setWebsite(e.target.value)}>
                        {CPwebsites.map((player) =>
                            <option>{player}</option>
                        )}
                    </Form.Select>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Check
                </Button>
            </Form>

            {loading && <p>Loading...</p>}

            {error && <p>Error: {error}</p>}

            {!loading && !error && (
                <p>Problems Solved: {solved}</p>
            )}
        </div>
    )
}

export default AlgoBootleg
