import React from "react";

const Overview = (props) => {
    const { tasks } = props

    return(
        <ul>
            {tasks.map((task) => {
                console.log(task)
                return <li key={task.id}>Task {task.number} {task.text} <button id={task.id} className="delete" onClick={props.delete}>Remove</button> </li>
            })}
        </ul>
    )
}

export default Overview;