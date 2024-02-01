import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import ToDoList from './pages/ToDoList';

function App() {
    return (
        <Router>
            <div>
                <Navigation/>

                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/ToDoList" element={<ToDoList/>}></Route>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
