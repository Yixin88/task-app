import React, { Component } from "react";
import uniqid from "uniqid";
import Overview from "./components/Overview";


class App extends Component {
  constructor() {
    super()

    this.state = {
      task: {
        text: '',
        id: uniqid(),
        number: 1,
      },
      tasks: [],
    }
  }

  handleChange = (e) => {
    this.setState({
      task: {
        text: e.target.value,
        id: this.state.task.id,
        number: this.state.task.number
      }
    })
  }

  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: {
        text: '',
        id: uniqid(),
        number: this.state.task.number + 1,
      },
    })
  }

  deleteElememt = (e) => {
    e.preventDefault();
    this.setState({tasks: this.state.tasks.filter(function(task) { 
      console.log(e.target.getAttribute("id"))
      return task.id !== e.target.getAttribute("id")
    })});
  }

  render() {
    const {task, tasks} = this.state;

    return (
      <div>
        <form>
          <label htmlFor="taskInput">Enter task</label>
          <input type="text" id="taskInput" onChange={this.handleChange} value={task.text}/>
          <button type="submit" onClick={this.onSubmitTask}>Add Task</button>
          <Overview tasks={tasks} delete={this.deleteElememt}/>
        </form>
      </div>
    );
  }

}

export default App;
