import React, { Component } from "react";
import "./AddTask.scss";
import Task from "../Task/Task";

class AddTask extends Component {
  state = {
    text: "",
    date: new Date().toISOString().slice(0, 10),
    checked: false,
  };

  handleText = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  handleData = (e) => {
    this.setState({
      date: e.target.value,
    });
  };

  handleCheckbox = (e) => {
    this.setState({
      checked: e.target.checked,
    });
  };

  handleClick = (e) => {
    e.preventDefault();
    const { text, date, checked } = this.state;
    const added = this.props.addTask(text, date, checked);
    if (added) {
      this.setState({
        text: "",
        date: new Date().toISOString().slice(0, 10),
        checked: false,
      });
    }
  };

  render() {
    const minDate = new Date().toISOString().slice(0, 10);
    const maxDate = minDate.slice(0, 4) * 1 + 1 + minDate.slice(4, 10);
    return (
      <>
        <h2>Dodaj zadanie</h2>
        <form className="form">
          <section className="form__section-one">
            <label className="form__text-label" htmlFor="text">
              Zadanie:
            </label>
            <input
              className="form__text"
              id="text"
              type="text"
              placeholder="Treść zadania"
              value={this.state.text}
              onChange={this.handleText}
            ></input>
          </section>
          <section className="form__section-two">
            <label className="form__done-label" htmlFor="done">
              Termin realizacji
            </label>
            <input
              className="form__done"
              id="done"
              type="date"
              value={this.state.date}
              min={minDate}
              max={maxDate}
              onChange={this.handleData}
            ></input>
            <label className="form__important-label" htmlFor="important">
              Ważne
            </label>
            <input
              className="form__important"
              id="important"
              type="checkbox"
              checked={this.state.checked}
              onChange={this.handleCheckbox}
            ></input>
            <button className="form__submit-btn" onClick={this.handleClick}>
              Zapisz
            </button>
          </section>
        </form>
        <hr />
      </>
    );
  }
}

export default AddTask;
