import React from "react";
import "./Task.scss";

const Task = (props) => {
  const { id, text, date } = props.task;
  return (
    <>
      <div className="task">
        <div className="task__id">{id}</div>
        <div className="task__text">{text}</div>
        <div className="task__date">{date}</div>
        <button
          className={("btn", "btn--done")}
          onClick={() => {
            console.log("done");
          }}
        >
          Zrobione
        </button>
        <button
          className={("btn", "btn--delete")}
          onClick={() => {
            console.log("delete");
          }}
        >
          Usuń
        </button>
      </div>
    </>
  );
};

export default Task;
