import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Eject from './Eject';
import FormGroup from 'react-bootstrap/esm/FormGroup';

// to fix: radio not radioing ;-;
const Voting = (props) => {
    const [vote, setVote] = useState(false);
    const [tempVote, setTempVote] = useState(false);

    function finalVote (event)
    {
        event.preventDefault();
        setVote(tempVote);
    }

    if (props.suspect === "None")
        return null;
    else
        return (
            <div>
                <h3>Will you eject {props.suspect}?</h3>
                <Form onSubmit={finalVote}>
                    <FormGroup>
                        <Form.Check type="radio" onChange={(e) => setTempVote(true)}/>
                        <Form.Label>Yes</Form.Label>
                        <Form.Check type="radio" onChange={(e) => setTempVote(false)}/>
                        <Form.Label>No</Form.Label>
                    </FormGroup>
                    <br/>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>

                <Eject suspect={props.suspect} eject={vote}/>
            </div>
        )
}

export default Voting

// <div key={`default-radio`} className="mb-3">
//                         <Form.Check 
//                             type="radio"
//                             id={`default-radio`}
//                             label={`default radio`}
//                         />
//                     </div>
