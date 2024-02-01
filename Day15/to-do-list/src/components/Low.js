import React from 'react'

const Low = (props) => {
    return (
        <div>
            {props.items.map((item) => (
                <div className="low listitems">
                    <p key={item.id}>{item.listItem}</p>
                    <button className="btn-done" onClick={() => props.handleDelete(item.id)}>Done</button>
                </div>
            ))}
        </div>
    )
}

export default Low
