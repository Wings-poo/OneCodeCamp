import React from 'react'
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Navigation = () => {
    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary navigation">
                <Container>
                    <button><Link to ="/">Home</Link></button>
                    <button><Link to="/ToDoList">To-Do List</Link></button>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navigation
