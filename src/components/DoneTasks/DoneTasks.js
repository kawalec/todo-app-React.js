import React from "react";
import "./DoneTasks.scss";
import Task from "../Task/Task";
import TasksHeader from "../TasksHeader/TasksHeader";

const DoneTasks = (props) => {
  const tasksList = props.tasks.filter((task) => task.done === true);
  const tasksDone = tasksList.map((task) => (
    <Task
      key={task.id}
      task={task}
      doneTask={props.doneTask}
      deleteTask={props.deleteTask}
    />
  ));
  return (
    <>
      <h2>Zrobione zadania:</h2>
      <TasksHeader
        labels={["Id", "Zrealizowane zadania", "Zrealizowane", "Akcje"]}
      />
      {tasksDone}
    </>
  );
};

export default DoneTasks;
