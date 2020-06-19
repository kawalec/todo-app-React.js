import React, { Component } from "react";
import "./AddTask.scss";
import Task from "../Task/Task";

class AddTask extends Component {
  state = {};
  render() {
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
            ></input>
          </section>
          <section className="form__section-two">
            <label className="form__done-label" htmlFor="done">
              Termin realizacji
            </label>
            <input className="form__done" id="done" type="date"></input>
            <label className="form__important-label" htmlFor="important">
              Ważne
            </label>
            <input
              className="form__important"
              id="important"
              type="checkbox"
            ></input>
            <button className="form__submit-btn">Zapisz</button>
          </section>
        </form>
        <hr />
      </>
    );
  }
}

export default AddTask;
