import React from "react";

function TaskListNumber({ data }) {
  return (
    <div className="flex justify-between gap-5 mt-4 screen">
      <div className=" w-[40%] bg-teal-600  rounded-xl px-10 py-8 ">
        <h2 className="text-3xl font-semibold">{data.taskCounts.newTask}</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
      <div className=" w-[40%] bg-cyan-600  rounded-xl px-10 py-8">
        <h2 className="text-3xl font-semibold">{data.taskCounts.completed}</h2>
        <h3 className="text-xl font-medium">Completed Task</h3>
      </div>
      <div className=" w-[40%] bg-sky-700  rounded-xl px-10 py-8">
        <h2 className="text-3xl font-semibold">{data.taskCounts.active}</h2>
        <h3 className="text-xl font-medium">Accepted Task</h3>
      </div>
      <div className=" w-[40%] bg-[#b11004e5]  rounded-xl px-10 py-8">
        <h2 className="text-3xl font-semibold">{data.taskCounts.failed}</h2>
        <h3 className="text-xl font-medium">Failed Task</h3>
      </div>
    </div>
  );
}

export default TaskListNumber;
