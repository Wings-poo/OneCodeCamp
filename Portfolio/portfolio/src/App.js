//import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Navigation from './components/Navigation';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Services from './pages/Services';

function App() {
    return (
        <Router>
            <div className="App">
                <Navigation/>

                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/Contact" element={<Contact/>}></Route>
                    <Route path="/About" element={<About/>}></Route>
                    <Route path="/Projects" element={<Projects/>}></Route>
                    <Route path="/Services" element={<Services/>}></Route>
                </Routes>

                <Footer/>
            </div>
        </Router>
    );
}

export default App;
