import React, { Component } from "react";
import "./App.css";
import AddTask from "./components/AddTask/AddTask";
import TaskList from "./components/TaskList/TaskList";

class App extends Component {
  state = {
    tasks: [
      {
        id: 0,
        text: "Pierwsze przykładowe zadanie.",
        date: "2010-06-18",
        important: true,
        active: true,
        finishDate: "2010-06-10",
      },
      {
        id: 1,
        text: "Kolejne przykładowe zadanie.",
        date: "2010-07-08",
        important: true,
        active: true,
        finishDate: "2010-07-01",
      },
      {
        id: 2,
        text: "Jeszcze coś do zrobienia.",
        date: "2011-04-25",
        important: true,
        active: true,
        finishDate: "2011-04-17",
      },
      {
        id: 3,
        text: "To juz wszystko.",
        date: "2011-05-11",
        important: true,
        active: true,
        finishDate: "2011-05-10",
      },
    ],
  };

  doneTask = (id) => {
    console.log("done - " + id);
  };

  deleteTask = (id) => {
    let tasks = [...this.state.tasks];
    tasks = tasks.filter((task) => task.id !== id);
    this.setState({
      tasks,
    });
  };

  render() {
    return (
      <>
        <h1>TODO APP</h1>
        <AddTask />
        <TaskList
          tasks={this.state.tasks}
          doneTask={this.doneTask}
          deleteTask={this.deleteTask}
        />
      </>
    );
  }
}

export default App;
