import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Axios from 'axios';

const PokemonBattle = () => {
    const [start, setStart] = useState(false);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [pokemon, setPokemon] = useState("");
    const [pokemonData, setPokemonData] = useState([]);

    const [enemyPokemonData, setEnemyPokemonData] = useState([]);
    const [enemyError, setEnemyError] = useState(null);
    const [enemyLoading, setEnemyLoading] = useState(true);

    function startBattle (event)
    {
        event.preventDefault();
        getPokemon();
        getEnemyPokemon();
        setStart(true);
    }

    async function getPokemon ()
    {
        let fetchLink = "https://pokeapi.co/api/v2/pokemon/" + pokemon;
        try {
            const response = await Axios.get(fetchLink);

            const result = response.data;
            setPokemonData(result);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }

    async function getEnemyPokemon ()
    {
        //while (error) get random number cuz i'm pretty sure pokemon id are not 1-1000 or whatever
        let enemyPokemon = Math.floor(Math.random() * 1000) + 1;
        let fetchLink = "https://pokeapi.co/api/v2/pokemon/" + enemyPokemon;
        try {
            const response = await Axios.get(fetchLink);

            const result = response.data;
            setEnemyPokemonData(result);
        } catch (error) {
            setEnemyError(error.message);
        } finally {
            setEnemyLoading(false);
        }
    }

    return (
        <div>
            <h1>Pokemon Battle</h1>

            {!start && (
                <div>
                    <Form onSubmit={startBattle}>
                        <Form.Group className="mb-3">
                            <Form.Label>Choose your Pokemon</Form.Label>
                            <Form.Control type="text" placeholder="Pikachu" className="w-100" onChange={(e) => setPokemon(e.target.value)}/>
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            I choose You!
                        </Button>
                    </Form>
                </div>
            )}

            {start && loading && enemyLoading && <p>Loading...</p>}

            {start && error && enemyError && <p>Error: {error}, {enemyError}</p>}

            {start && !loading && !error && !enemyLoading && !enemyError && (
                <div>
                    <p>your pokemon is {pokemonData?.name}</p>
                    <img src={pokemonData?.sprites["front_default"]} alt="pokemon image"/>
                    <p>your enemy pokemon is {enemyPokemonData?.name}</p>
                    <img src={enemyPokemonData?.sprites["front_default"]} alt="pokemon image"/>
                </div>
            )}
        </div>
    )
}

// to add: stats and atk/def keme (di ako actually marunong mag-pokemon so ako na mag-imbento)

export default PokemonBattle
