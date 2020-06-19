import React from "react";
import "./Task.scss";

const Task = (props) => {
  const { id, text, date, done } = props.task;
  return (
    <>
      <div className="task">
        <div className="task__id">{id}</div>
        <div className="task__text">{text}</div>
        <div className="task__date">{date}</div>
        <button
          className={("btn", "btn--done")}
          onClick={() => props.doneTask(id)}
        >
          {done === false ? "Zrobione" : "Cofnij"}
        </button>
        <button
          className={("btn", "btn--delete")}
          onClick={() => props.deleteTask(id)}
        >
          Usuń
        </button>
      </div>
    </>
  );
};

export default Task;
