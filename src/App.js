import React, { Component } from "react";
import "./App.css";
import AddTask from "./components/AddTask/AddTask";
import TaskList from "./components/TaskList/TaskList";
import DoneTasks from "./components/DoneTasks/DoneTasks";

class App extends Component {
  state = {
    tasks: [
      {
        id: 0,
        text: "Pierwsze przykładowe zadanie.",
        date: "2010-06-18",
        important: true,
        done: false,
        finishDate: "",
      },
      {
        id: 1,
        text: "Kolejne przykładowe zadanie.",
        date: "2010-07-08",
        important: true,
        done: false,
        finishDate: "",
      },
      {
        id: 2,
        text: "Jeszcze coś do zrobienia.",
        date: "2011-04-25",
        important: true,
        done: false,
        finishDate: "",
      },
      {
        id: 3,
        text: "To juz wszystko.",
        date: "2011-05-11",
        important: true,
        done: false,
        finishDate: "",
      },
    ],
  };

  doneTask = (id) => {
    const tasks = [...this.state.tasks];
    tasks.forEach((task) => {
      if (task.id === id) {
        task.done = !task.done;
        task.finishDate = new Date().getTime();
      }
    });
    this.setState({
      tasks,
    });
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
        <h1>TODO LIST APP</h1>
        <AddTask />
        <TaskList
          tasks={this.state.tasks}
          doneTask={this.doneTask}
          deleteTask={this.deleteTask}
        />
        <DoneTasks tasks={this.state.tasks} />
      </>
    );
  }
}

export default App;
