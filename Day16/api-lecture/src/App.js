//import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import Fetch from './pages/Fetch';
import AxiosAPI from './pages/AxiosAPI';

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
                    <Route path="/Fetch" element={<Fetch/>}></Route>
                    <Route path="/AxiosAPI" element={<AxiosAPI/>}></Route>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
