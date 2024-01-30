//import VSTi from './assets/images/DSP7_VSTi_GUI.png';
import './App.css';
import Post from './component/Post'

function App() {
    return (
        <div className="App">
            <Post name="Clover" timeElapsed="0" msg="Hello everyone, would you like to play music with me for the animals?"/>
            <Post name="Icicle Yeti" timeElapsed="1" msg="That sounds fun!"/>
            <Post name="Rockstar" timeElapsed="2" msg="Of course! Let's make them reach their Candy Jelly Sugar Dash dream!"/>
            <Post name="Creme Brulee" timeElapsed="3" msg="Sorry, I have a performance coming soon so I have to practice."/>
            <Post name="Rockstar" timeElapsed="4" msg="That's okay, Creme Brulee Cookie! Make sure to bring your audience to rocker's high!"/>
            <Post name="Clover" timeElapsed="5" msg="I see. Good luck Creme Brulee Cookie!"/>
            <Post name="Creme Brulee" timeElapsed="7" msg="I'm playing classical music. Not Rock. But thank you, Rockstar Cookie. Thank you Clover Cookie."/>
            <Post name="Icicle Yeti" timeElapsed="8" msg="Awww, Creme Brulee Cookie won't be coming with us :("/>
            <Post name="Icicle Yeti" timeElapsed="9" msg="Anyway! Anyway! Let's sing, let's sing!"/>
            <Post name="Icicle Yeti" timeElapsed="17" msg="" audio="true"/> 
        </div>
    );
}

export default App;

/** Exercise 2 **/
/*
From Marko:
    Used .json file for array/object (has id, username, message)

*/

/** Exercise 1 **/
// import Clock from './component/Clock';

// function App() {
// return (
//     <div className="App">
//         <h1>Hello, world!</h1>
//         <h2>
//             It is <Clock/>.
//         </h2>
//         {/*
//         <!-- react text: 4 -->
//             "It is "
//             <!-- /react text -->
//             <!-- react text: 5 -->
//             <Clock/>
//             <!-- /react text -->
//             <!-- react text:  -->
//             "."
//             <!-- /react text -->
//         <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//         Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//         className="App-link"
//         href="https://reactjs.org"
//         target="_blank"
//         rel="noopener noreferrer"
//         >
//         Learn React
//         </a>
//         </header> */}
//     </div>
// );
// }

// export default App;
