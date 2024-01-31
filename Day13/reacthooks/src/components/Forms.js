import React from 'react'
import { useState } from 'react';

// to fix: does not update printing of contacts
const Forms = () => {
    const [contacts, setContacts] = useState({
        "Amanda": "amanda@example.com"
    });
    const [name, setName] = useState("name");
    const [email, setEmail] = useState("email");

    function handleContacts (event)
    {
        event.preventDefault();
        const newcontacts = contacts;
        newcontacts[name] = email;
        setContacts(newcontacts);
        console.log(contacts);
    }

    return (
        <div>
            <form onSubmit={handleContacts}>
                <label>Name</label>
                <input type="text" name="fname" value={name} onChange={(e) => setName(e.target.value)}/>
                <br/>
                <label>E-mail</label>
                <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <br/>
                <input type="submit" value="Submit"/>
            </form>

            {Object.keys(contacts).map((user, index) => {
                return (
                    <div key={index}>
                        <p>{user}: {contacts[user]}</p>
                    </div>
                );
            })}
        </div>
    )
}

export default Forms

/*
from Harold:
    contacts.map(user, index) keme (di ko nakopya ;-;)
from Marko:
    key="index"
        {contact.name}, {contact.email}"
*/