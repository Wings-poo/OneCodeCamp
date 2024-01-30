import React from 'react'

// we used .map() to spread out the users array
// use props.users to access the object/variable

const Welcome = (props) => {
    return (
        <div>
            <h1>Welcome, users!</h1>
            <ul>
                {props.users.map((user) => (
                    <li key={user}>{user}</li>
                ))}
            </ul>
        </div>
    )
}

export default Welcome
