import React, { useState } from 'react'
import ListItem from '../components/ListItem';

const ToDoList = () => {
    const [list, setList] = useState([]);
    const [listItem, setListItem] = useState("");
    const [priorityLevel, setPriority] = useState("");
    const [id, setId] = useState(0);
    
    function updateList (event)
    {
        event.preventDefault();
        if ((listItem !== "") && (priorityLevel !== "")) {
            const newListItem = {listItem, priorityLevel, id}
            list.push(newListItem);
            setId(id + 1);
            setListItem("");
            setList(list);
        } else {
            alert("Please enter a to-do list item and/or priority level")
        }
    }

    function handleDelete (id)
    {
        const newList = list.filter(item => item.id !== id);
        setList(newList);
    }

    return (
        <div>
            <h1>To-Do List</h1>

            <form className="input" onSubmit={updateList} method="GET">
                <input type="text" placeholder="" value={listItem} onChange={(e) => setListItem(e.target.value)}/>
                <br/>

                <label className="prio">Priority Level:</label>
                <input type="radio" name="priority" value="high" onChange={(e) => setPriority(e.target.value)}/>
                <label className="prio">High</label>
                <input type="radio" name="priority" value="medium" onChange={(e) => setPriority(e.target.value)}/>
                <label className="prio">Medium</label>
                <input type="radio" name="priority" value="low" onChange={(e) => setPriority(e.target.value)}/>
                <label className="prio">Low</label>
                <br/>
                
                <button type="submit">Enter</button>
            </form>

            <br/>

            <ListItem list={list} handleDelete={handleDelete}/>
        </div>
    )
}

export default ToDoList
