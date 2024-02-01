import React from 'react'
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <nav>
                <Link to ="/">Home</Link>
                <Link to="/ContactUs">Contact Us</Link>
                <Link to="/About">About Us</Link>
            </nav>
        </div>
    )
}

export default Navigation
