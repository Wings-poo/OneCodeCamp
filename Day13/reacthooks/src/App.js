//import logo from './logo.svg';
import './App.css';
//import Click from './components/Click';
import Forms from './components/Forms';
//import Welcome from './components/Welcome';
//import Switch from './components/Switch';
//import Exercise2 from './components/Exercise2';

function App() {
    //const currplayer = Math.floor(Math.random() * 5) + 1;
    //<Exercise2 idx={currplayer}/>
    return (
        <div className="App">
            <Forms/>
        </div>
    );
}

export default App;

/*
Exercise 2:
From Harold:
    Conditional Rendering (enter/pic change)
    Modal (alert?)
From Dion:
    Conditional Rendering (dark mode, light mode)
    Card
    Pagination (didn't work yet *go go go!*)
    Forms
From Harold:
    - reverted to earlier version para wala ung errors; pero sa index pa rin nilagay ung cdn
    - andaming vulnerabilities kaya nag-revert
    - react is sensitive kaya mag-ingat
    API (inspo-quotes)
    Conditional Rendering (one will get new quote, the other will make it glow)
From Ma'am Ian:
    Try to make App.js as clean as possible, put CSS code to .css
*/