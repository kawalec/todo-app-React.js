import React from "react";
import "./TasksHeader.scss";

const TasksHeader = (props) => {
  return (
    <>
      <div className="task header">
        <div className="task__id">{props.labels[0]}</div>
        <div className="task__text">{props.labels[1]}</div>
        <div className="task__date">{props.labels[2]}</div>
        <div className="task__action">{props.labels[3]}</div>
      </div>
    </>
  );
};

export default TasksHeader;
