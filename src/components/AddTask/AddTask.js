import React, { Component } from "react";
import "./AddTask.scss";
import Task from "../Task/Task";

class AddTask extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="form">Dodaj zadanie</div>
        <hr />
      </>
    );
  }
}

export default AddTask;
