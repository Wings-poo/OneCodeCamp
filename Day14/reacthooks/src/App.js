//import logo from './logo.svg';
import './App.css';
//import Welcome from './components/Welcome';
import Navigation from './components/Navigation';
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import ContactUs from './pages/ContactUs';

// routes is similar to conditional rendering
// kinda similar to anchor tags

function App() {
    return (
        <Router>
            <div>
                <Navigation/>

                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/ContactUs" element={<ContactUs/>}></Route>
                    <Route path="/About" element={<About/>}></Route>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
