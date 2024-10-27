import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";

function CreateTask() {
  const [userData, setUserData] = useContext(AuthContext);

  const [taskTitle, setTaskTitle] = useState("");
  const [taskAssign, setTaskAssign] = useState("");
  const [taskCategory, setTaskCategory] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const newTask = {
      title: taskTitle,
      description: taskDescription,
      category: taskCategory,
      date: taskDate,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    };

    const updatedData = userData.map((elem) => {
      if (taskAssign === elem.firstName) {
        return {
          ...elem,
          tasks: [newTask, ...elem.tasks],
          taskCounts: {
            ...elem.taskCounts,
            newTask: elem.taskCounts.newTask + 1,
          },
        };
      }
      return elem;
    });

    setUserData(updatedData);
    localStorage.setItem("employees", JSON.stringify(updatedData));

    // Clear the form inputs
    setTaskDescription("");
    setTaskTitle("");
    setTaskCategory("");
    setTaskAssign("");
  };

  return (
    <div className="p-5 mt-2 rounded bg-[#03181f]">
      <form className="flex w-full justify-between" onSubmit={submitHandler}>
        {/* Left Column */}
        <div className="w-[48%]">
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
            <input
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              type="text"
              placeholder="make a UI design"
              className="text-sm py-1.5 px-2 w-full rounded outline-none bg-transparent border-[1px] border-gray-400"
            />
          </div>
          <div className="mt-4">
            <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
            <input
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              type="date"
              className=" custom-date-icon text-sm py-1.5 px-2 w-full rounded outline-none bg-transparent border-[1px] border-gray-400"
            />
          </div>
          <div className="mt-4">
            <h3 className="text-sm text-gray-300 mb-0.5">Assign to</h3>
            <input
              value={taskAssign}
              onChange={(e) => setTaskAssign(e.target.value)}
              type="text"
              placeholder="employee name"
              className="text-sm py-1.5 px-2 w-full rounded outline-none bg-transparent border-[1px] border-gray-400"
            />
          </div>
          <div className="mt-4">
            <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
            <input
              value={taskCategory}
              onChange={(e) => setTaskCategory(e.target.value)}
              type="text"
              placeholder="design, dev, etc"
              className="text-sm py-1.5 px-2 w-full rounded outline-none bg-transparent border-[1px] border-gray-400"
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="w-[48%]">
          <div className="flex flex-col">
            <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
            <textarea
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
              className="w-full h-48 text-sm py-4 px-6 rounded outline-none bg-transparent border-[1px] border-gray-400"
            ></textarea>
          </div>
          <button className=" px-5 rounded text-sm mt-6 w-full py-[7px] bg-gradient-to-r from-teal-700 to-[#08374d] transform transition-transform  duration-300 hover:scale-105">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateTask;
