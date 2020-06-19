import React from "react";
import "./TaskList.scss";
import Task from "../Task/Task";
import TasksHeader from "../TasksHeader/TasksHeader";

const TaskList = (props) => {
  const tasksList = props.tasks.filter((task) => task.done === false);
  const tasksInProgress = tasksList.map((task) => (
    <Task
      key={task.id}
      task={task}
      doneTask={props.doneTask}
      deleteTask={props.deleteTask}
    />
  ));
  return (
    <>
      <h2>Zadania do zrobienia ({tasksInProgress.length})</h2>
      {tasksInProgress.length > 0 ? (
        <TasksHeader
          labels={["Id", "Zadania do zrobienia", "Termin", "Akcje"]}
        />
      ) : (
        <h3 className="task-list__message">"Brak zadań do wykonania!"</h3>
      )}
      {tasksInProgress}
    </>
  );
};

export default TaskList;
