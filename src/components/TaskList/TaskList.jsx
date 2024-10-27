import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

function TaskList({ data }) {
  return (
    <div
      className="overflow-x-auto h-[50vh] flex items-center justify-start w-full mt-10 py-5 flex-nowrap gap-9"
      id="task-list"
    >
      {data.tasks.map((element, index) => {
        // Check for task status and render the appropriate component
        // if (element.failed) {
        //   return <FailedTask key={index} data={element} />;
        // } else if (element.completed) {
        //   return <CompleteTask key={index} data={element} />;
        // } else if (element.newTask) {
        //   return <NewTask key={index} data={element} />;
        // } else if (element.active) {
        //   return <AcceptTask key={index} data={element} />;
        // }

        // return null;
        if (element.active) {
          // console.log("All data: ", element.active);
          return <AcceptTask key={index} data={element} />;
        }
        if (element.newTask) {
          console.log(element.newTask);
          return <NewTask key={index} data={element} />;
        }
        if (element.completed) {
          return <CompleteTask key={index} data={element} />;
        }
        if (element.failed) {
          return <FailedTask key={index} data={element} />;
        }
      })}
    </div>
  );
}

export default TaskList;
