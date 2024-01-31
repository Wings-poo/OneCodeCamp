import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Accordion from 'react-bootstrap/Accordion';
import Switch from './Switch';
import Voting from './Voting';

const Exercise2 = (props) => {
    const players = ["", "Red", "Blue", "Yellow", "White", "Black"];
    const currplayer = props.idx;

    const [suspect, setSuspect] = useState("None");
    const [tempSuspect, setTempSuspect] = useState("None");
    const [message, setMessage] = useState("N/A");
    const [tempMessage, setTempMessage] = useState("N/A");

    function handleReport (event)
    {
        event.preventDefault();
        setSuspect(tempSuspect);
        setMessage(tempMessage);
    }

    // To fix: in the form select, it changes the sus and the player when typing
    // Edit: fixed. Moved the Math.Random() to App.js
    return (
        <div>
            <h1>Exercise 2</h1>

            <hr/>
            <Switch color={players[currplayer]}/>
            <hr/>
            
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>EMERGENCY BUTTON</Accordion.Header>
                    <Accordion.Body>
                        <Form onSubmit={handleReport}>
                            <Form.Group className="mb-3">
                                <Form.Label>Who is sus?</Form.Label>
                                <Form.Select onChange={(e) => setTempSuspect(e.target.value)}>
                                    {players.map((player) =>
                                        {
                                            if (player !== players[currplayer])
                                                return (
                                                    <option>{player}</option>
                                                )
                                            else
                                                return null;
                                        }
                                    )}
                                </Form.Select>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Evidence</Form.Label>
                                <br></br>
                                <Form.Control type="textarea" placeholder="Message" className="w-100" onChange={(e) => setTempMessage(e.target.value)}/>
                                <Form.Text className="text-muted">
                                Be careful who you eject.
                                </Form.Text>
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                    <Accordion.Header>REPORT BODY</Accordion.Header>
                    <Accordion.Body>
                        <Form onSubmit={handleReport}>
                            <Form.Group className="mb-3">
                                <Form.Label>Who is sus?</Form.Label>
                                <Form.Select onChange={(e) => setTempSuspect(e.target.value)}>
                                    {players.map((player) =>
                                        {
                                            if (player !== players[currplayer])
                                                return (
                                                    <option>{player}</option>
                                                )
                                            else
                                                return null;
                                        }
                                    )}
                                </Form.Select>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Evidence and Alibi</Form.Label>
                                <br></br>
                                <Form.Control type="textarea" placeholder="Message" className="w-100" onChange={(e) => setTempMessage(e.target.value)}/>
                                <Form.Text className="text-muted">
                                Make sure you have an alibi, lest you may be ejected.
                                </Form.Text>
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            
            <hr/>
        
            <h3>Current Suspect is:</h3>
            <h3>{suspect}</h3>
            <h3>Evidence/Alibi is:</h3>
            <h3>{message}</h3>

            <hr/>
            
            <Voting suspect={suspect}/>
        </div>
    )
}

export default Exercise2
