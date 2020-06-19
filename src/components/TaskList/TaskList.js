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
      <h2>Zadania do zrobienia:</h2>
      <TasksHeader labels={["Id", "Zadania do zrobienia", "Termin", "Akcje"]} />
      {tasksInProgress}
    </>
  );
};

export default TaskList;
