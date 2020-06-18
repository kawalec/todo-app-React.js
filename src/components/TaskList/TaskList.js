import React from "react";
import Task from "../Task/Task";
import "./TaskList.scss";
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
      <TasksHeader />
      {tasksList}
    </>
  );
};

export default TaskList;
