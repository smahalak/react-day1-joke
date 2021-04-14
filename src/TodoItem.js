import React from "react"

function TodoItem(props) {

    const completedStyle = {
        fontStyle: "italic",
        color: "#cdcdcd",
        textDecoration: "line-through"
    }


    return (
        // anytime a checkbox is checked it calls onChange which is receiving the event object; which calls handleChange() and passes this item's id
        <div className="todo-item">
            <input
                type="checkbox"
                checked={props.item.completed}
                onChange={(event) => props.handleChange(props.item.id)} />

            <p style={props.item.completed ? completedStyle : null}>{props.item.text}</p>
        </div>
    )
}

export default TodoItem

