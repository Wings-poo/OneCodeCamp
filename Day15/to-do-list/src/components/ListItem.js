import React from 'react';
import High from './High';
import Medium from './Medium';
import Low from './Low';

const ListItem = (props) => {
    const highItems = props.list.filter(item => item.priorityLevel === "high");
    const mediumItems = props.list.filter(item => item.priorityLevel === "medium");
    const lowItems = props.list.filter(item => item.priorityLevel === "low");

    function handleDelete (id)
    {
        props.handleDelete(id);   
    } 

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-4">
                    <High items={highItems} handleDelete={handleDelete}/>
                </div>
                <div className="col-4">
                    <Medium items={mediumItems} handleDelete={handleDelete}/>
                </div>
                <div className="col-4">
                    <Low items={lowItems} handleDelete={handleDelete}/>
                </div>
            </div>
        </div>
    )
}

export default ListItem
