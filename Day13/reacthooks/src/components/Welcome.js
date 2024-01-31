import React, {useState} from 'react'

// Example 1: basic onClick function
// const Welcome = () => {
//     return (
//         <div>
//             <button onClick={() => window.alert("Hello, Wednesday!")}>Click Me</button>
//         </div>
//     )
// }

// Example 2: using useState and render()
// import ReactDOM from 'react-dom';
// const Welcome = () => {
//     const [position, setPosition] = useState({left: undefined, top: undefined});

//     const moveButton = (event) => {
//         setPosition({
//             left: event.clientX + 1,
//             top: event.clientY + 1
//         });

//         renderApp();
//     }

//     const renderApp = () => {
//         ReactDOM.render(
//             <button onMouseMove={moveButton} style={{left: position.left, top: position.top, position: position.left ? "fixed" : "absolute"}}>Hover Me!</button>, document.getElementById("root")
//         );
//     };

//     return (
//         <>        
//             {renderApp()};
//         </>
//     )
// }

// Example 3: using useState (without render())
// const Welcome = () => {
//     const [isClicked, setIsClicked] = useState(false);
    
//     const handleButtonClick = () => {
//         window.alert("Hello, Amanda!");
//         setIsClicked(!isClicked);
//     }
    
//     // camel case instead of kebab case
//     return (
//         <button onClick={handleButtonClick} style={{backgroundColor: isClicked ? "green" : "blue"}}>Click Me!</button>
//     )
// }

// Example 4: using bootstrap
/*
in the terminal: npm install react-bootstrap bootstrap (caused errors for everyone though, unsure if it worked or just pasting the link worked)
then add this to index.html (in public folder), header:
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossorigin="anonymous"
/>
From Marko: pwedeng update lang ung index.html without installing react-bootstrap
*/
const Welcome = () => {
    const [isClicked, setIsClicked] = useState(false);
    
    const handleButtonClick = () => {
        window.alert("Hello, Amanda!");
        setIsClicked(!isClicked);
    }
    
    // camel case instead of kebab case
    return (
        <button onClick={handleButtonClick} className="btn btn-primary">Click Me!</button>
    )
}

export default Welcome

// Event listeners VS Event handlers
// in DOM: btn.addEventLister(Click, handleEvent)
// in React: onClick = // anonymous function

// Event props vs State
// props is sharable, state is not sharable