import React from "react";
import "./TaskList.scss";
import Task from "../Task/Task";
import TasksHeader from "../TasksHeader/TasksHeader";

const TaskList = (props) => {
  const tasksList = props.tasks.map((task) => (
    <Task
      key={task.id}
      task={task}
      doneTask={props.doneTask}
      deleteTask={props.deleteTask}
    />
  ));

  return (
    <>
      <h2>Zadania do zrobienia:</h2>
      <TasksHeader labels={["Id", "Zadania do zrobienia", "Termin", "Akcje"]} />
      {tasksList}
    </>
  );
};

export default TaskList;
