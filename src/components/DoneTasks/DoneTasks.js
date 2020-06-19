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
      <h2>Ostatnio zrobione zadania ({tasksDone.length})</h2>
      {tasksDone.length > 0 ? (
        <TasksHeader
          labels={["Id", "Zrealizowane zadania", "Zrealizowane", "Akcje"]}
        />
      ) : (
        <h3 className="task-list__message">"Brak zrealizowanych zadań!"</h3>
      )}
      {tasksDone.slice(0, 10)}
    </>
  );
};

export default DoneTasks;
