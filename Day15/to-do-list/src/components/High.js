import React from 'react'

const High = (props) => {
    return (
        <div>
            {props.items.map((item) => (
                <div className="high listitems">
                    <p key={item.id}>{item.listItem}</p>
                    <button className="btn-done" onClick={() => props.handleDelete(item.id)}>Done</button>
                </div>
            ))}
        </div>
    )
}

export default High
