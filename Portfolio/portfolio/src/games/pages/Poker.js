import React, { useState, useEffect } from 'react'
import Axios from 'axios';

// won't finish "kemedu" as it is complicated brute-force to compute for pairs, trio, straight, flush, royal flush
const AxiosAPI = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [deckID, setDeckID] = useState(null);
    
    const [startPoker, setStartPoker] = useState(false);
    const [endPoker, setEndPoker] = useState(false);
    const [fold, setFold] = useState(false);
    
    const [tableCards, setTableCards] = useState([]);
    const [currBet, setCurrBet] = useState(0);

    const [yourCards, setYourCards] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await Axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1");

                const result = response.data;
                setData(result);
                setDeckID(result.deck_id);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [])

    const drawinitial = async () => {
        let fetchLink = "https://deckofcardsapi.com/api/deck/" + deckID + "/draw/?count=3"
        try {
            const response = await Axios.get(fetchLink);

            const result = response.data;
            setData(result);
            setTableCards([...tableCards, result.cards[0]["image"], result.cards[1]["image"], result.cards[2]["image"]]);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
            setStartPoker(true);
            drawyourcards();
        }
    };

    const drawyourcards = async () => {
        let fetchLink = "https://deckofcardsapi.com/api/deck/" + deckID + "/draw/?count=3"
        try {
            const response = await Axios.get(fetchLink);

            const result = response.data;
            setData(result);
            setYourCards([...yourCards, result.cards[0]["image"], result.cards[1]["image"]]);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
            setStartPoker(true);
        }
    };

    const bet = async () => {
        let fetchLink = "https://deckofcardsapi.com/api/deck/" + deckID + "/draw/?count=1"
        try {
            const response = await Axios.get(fetchLink);

            const result = response.data;
            setData(result);
            setTableCards([...tableCards, result.cards[0]["image"]]);
            setCurrBet(currBet + 10);

            if (tableCards.length === 4) //idk why 4 instead of 5; I think it's checking the previous data and not the current data
                setEndPoker(true);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
            setStartPoker(true);
        }
    };

    const foldfcn = async () =>
    {
        setEndPoker(true);
        setFold(true);
    }

    return (
        <div>
        
            <h1>Card Game Prototype</h1>

            {loading && <p>Loading...</p>}

            {error && <p>Error: {error}</p>}

            {!loading && !error && (
                <div>
                    <h1>Loaded Deck!</h1>
                    <p>Deck ID: {data?.deck_id}</p>
                    <p>Remaining: {data?.remaining}</p>

                    {!startPoker && <button onClick={drawinitial}>Start Poker</button>}
                    
                    {startPoker && (
                        <div>
                            <p>Table:</p>
                            {tableCards.map((image) => (
                                <img src={image}/>
                            ))}

                            <p>Your Cards:</p>
                            {yourCards.map((image) => (
                                <img src={image}/>
                            ))}

                            <br/>

                            <p>Current Bet: {currBet}</p>
                        </div>
                    )}
                    
                    {startPoker && !endPoker && (
                        <div>
                            <button onClick={bet}>Bet</button>
                            <button onClick={foldfcn}>Fold</button>
                        </div>
                    )}

                    {endPoker && !fold && (
                        <p>You won kemedu</p>
                    )}

                    {fold && (
                        <p>You could have won kemedu but you folded</p>
                    )}
                    
                </div>
            )}
        </div>
    )
}

export default AxiosAPI
