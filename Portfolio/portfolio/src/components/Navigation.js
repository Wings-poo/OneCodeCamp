import React from 'react'
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

// <a className="navbar-brand" href="#"><img src="ascend.gif" width = 50px></a> <!--Note to self: change logo-->
const Navigation = () => {
    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active" aria-current="page" href="#">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/About" className="nav-link" href="#about-me">About Me</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Services" className="nav-link" href="#services">Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Projects" className="nav-link" href="#projects">Projects</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Contact" className="nav-link" href="#contact">Contact Me</Link>
                            </li>
                        </ul>
                    </div>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navigation
