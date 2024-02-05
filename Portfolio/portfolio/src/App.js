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
import Poker from './games/pages/Poker';
import AlgoBootleg from './websites/pages/AlgoBootleg';
import PokemonBattle from './websites/pages/PokemonBattle';

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
                    <Route path="/games/Poker" element={<Poker/>}></Route>
                    <Route path="/websites/AlgoBootleg" element={<AlgoBootleg/>}></Route>
                    <Route path="/websites/PokemonBattle" element={<PokemonBattle/>}></Route>
                </Routes>

                <Footer/>
            </div>
        </Router>
    );
}

export default App;

/*
From Dion:
    moving when hovering
    gif? or animated jumbotron
    spotify playlist
    // used a template
    https://yonx44.github.io/portfolio/
From Dether:
    Logo on top left then collapsible nav on top right
    clickable to mail ung contact
    dapat nasa public ung logo
*/