import React, { Component } from "react";
import "./App.css";
import AddTask from "./components/AddTask/AddTask";
import TaskList from "./components/TaskList/TaskList";
import DoneTasks from "./components/DoneTasks/DoneTasks";

class App extends Component {
  counter = 5;
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
        important: false,
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
        important: false,
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
        if (task.finishDate === "") {
          task.finishDate = new Date().getTime();
        } else {
          task.finishDate = "";
        }
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

  addTask = (text, date, checked) => {
    const task = {
      id: this.counter,
      text,
      date,
      important: checked,
      done: false,
      finishDate: "",
    };
    this.counter++;

    this.setState((prevState) => ({
      tasks: [...prevState.tasks, task],
    }));

    return true;
  };

  render() {
    console.log(this.counter);
    return (
      <div className="todo-app">
        <h1>TODO LIST APP</h1>
        <AddTask addTask={this.addTask} />
        <TaskList
          tasks={this.state.tasks}
          doneTask={this.doneTask}
          deleteTask={this.deleteTask}
        />
        <DoneTasks
          tasks={this.state.tasks}
          doneTask={this.doneTask}
          deleteTask={this.deleteTask}
        />
      </div>
    );
  }
}

export default App;
