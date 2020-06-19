import React from "react";
import "./DoneTasks.scss";
import Task from "../Task/Task";
import TasksHeader from "../TasksHeader/TasksHeader";

const DoneTasks = (props) => {
  const doneTasks = props.tasks.map((task) => (
    <Task key={task.id} task={task} />
  ));
  return (
    <>
      <h2>Zrobione zadania:</h2>
      <TasksHeader
        labels={["Id", "Zrealizowane zadania", "Zrealizowane", "Akcje"]}
      />
      {doneTasks}
    </>
  );
};

export default DoneTasks;