import React from 'react'
import { Link } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';
import Poker from '../games/pages/Poker';

const Projects = () => {
    function gotoPoker ()
    {
        return <Poker/>
    }

    return (
        <div>
            <h1>Projects Portfolio</h1>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Games</Accordion.Header>
                    <Accordion.Body>
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Itch.io Games</Accordion.Header>
                                <Accordion.Body>
                                    <iframe frameborder="0" src="https://itch.io/embed/2326298" width="552" height="167"><a href="https://wings-poo.itch.io/zombuddies-daycare-a-relaxing-undead-playtime">ZomBuddies' Daycare: A Relaxing Undead Playtime by Wings-poo</a></iframe>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <Accordion>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>ReactJS Games</Accordion.Header>
                                <Accordion.Body>
                                    <button className="btn btn-link"><Link to="/games/Poker">Poker</Link></button>
                                    <br/>
                                    <button className="btn btn-link"><Link to="/websites/PokemonBattle">Pokemon Battle</Link></button>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                    <Accordion.Header>Websites</Accordion.Header>
                    <Accordion.Body>
                        <button className="btn btn-link"><Link to="/websites/AlgoBootleg">Algo Bootleg Website</Link></button>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            
        </div>
    )
}

export default Projects
