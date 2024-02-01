import React from 'react'

const Medium = (props) => {
    return (
        <div>
            {props.items.map((item) => (
                <div className="medium listitems">
                    <p key={item.id}>{item.listItem}</p>
                    <button className="btn-done" onClick={() => props.handleDelete(item.id)}>Done</button>
                </div>
            ))}
        </div>
    )
}

export default Medium
