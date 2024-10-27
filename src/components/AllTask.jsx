import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

function AllTask() {
  const [userData, setUserData] = useContext(AuthContext);
  return (
    <div className="bg-[#1a404d] p-3 rounded mt-3   ">
      <div className="bg-[#062f3c] py-1.5 px-2 flex justify-between rounded mt-2 font-mono text-[18px]">
        <h2 className="w-1/5  px-3 py-1.5 font-semibold">Employee Name</h2>
        <h3 className="w-1/5  px-3 py-1.5 font-semibold">New Task</h3>
        <h5 className="w-1/5  px-3 py-1.5 font-semibold">Active Task</h5>
        <h5 className="w-1/5  px-3 py-1.5 font-semibold">Completed</h5>
        <h5 className="w-1/5  px-3 py-1.5 font-semibold">Failed</h5>
      </div>
      <div className="h-[60%]">
        {userData.map((elem, i) => (
          <div
            className="bg-[#052731] py-1 px-4 flex justify-between rounded p-3 mt-2 "
            key={i}
          >
            <h2 className="w-1/5  px-3 py-1 text-[#0dd8df] font-bold">
              {elem.firstName}
            </h2>
            <h3 className="w-1/5  px-3 py-1 text-[#a6a6fc] font-bold">
              {elem.taskCounts.newTask}
            </h3>
            <h5 className="w-1/5  px-4 py-1 text-[#fdfd0dd7] font-bold">
              {elem.taskCounts.active}
            </h5>
            <h5 className="w-1/5  px-5 py-1 text-[#81f181] font-bold">
              {elem.taskCounts.completed}
            </h5>
            <h5 className="w-1/5  px-6 py-1 text-[red] font-bold">
              {elem.taskCounts.failed}
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllTask;
