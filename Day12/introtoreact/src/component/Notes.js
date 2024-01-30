import React from 'react'
// remember to import whatever component you will be needing. Make sure the source path is correct!
// if in same folder, './filename' (no need for .js if it is a JS file)
// if in folder inside where the file is in, './components/filename'
// if in folder "one step" away from the current folder (e.g. from components folder to assets then images folder), '../assets/images/image.png'
import Welcome from './Welcome' // example

// class attribute should be "className" (Perhaps to avoid confusion with the class variable)

const Notes = () => {
    const users = ["Harold", "Marko", "Amanda", "Dion"];
    return (
        <div className="notes">
            <Welcome users={users}/>
        </div>
    )
}

export default Notes // do not forget! this will export your function back to the code calling it (through import (so think of it as import-export pair))