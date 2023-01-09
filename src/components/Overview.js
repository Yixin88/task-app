import React from "react";

const Overview = (props) => {
    const { tasks } = props

    return(
        <ul>
            {tasks.map((task) => {
                console.log(task)
                return <li key={task.id}>Task {task.number} {task.text}</li>
            })}
        </ul>
    )
}

export default Overview;