import React from "react";
import "./TasksHeader.scss";

const TasksHeader = () => {
  return (
    <>
      <div className="task header">
        <div className="task__id">Id</div>
        <div className="task__text">Zadanie do zrobienia</div>
        <div className="task__date">Termin</div>
        <div className="task__action">Akcje</div>
      </div>
    </>
  );
};

export default TasksHeader;
