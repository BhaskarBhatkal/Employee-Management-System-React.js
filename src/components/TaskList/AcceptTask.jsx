import React from "react";

function AcceptTask({ data }) {
  return (
    <div className="flex-shrink-0 w-[300px] bg-[#21426e] h-full rounded-xl px-5 py-3 flex flex-col justify-between">
      <div>
        <div className="py-3 flex justify-between items-center">
          <h3 className="bg-red-600 text-sm px-3 rounded py-1 font-semibold">
            High
          </h3>
          <h4 className="text-sm font-semibold">{data.date}</h4>
        </div>
        <h2 className="mt-1.5 text-xl font-bold">
          <u>{data.title}</u>
        </h2>
        <p className="mt-2 text-sm">{data.description}</p>
      </div>
      <div className="flex justify-between mt-2">
        <button className="bg-[#6bc56b] px-2 py-1 text-sm font-semibold rounded text-[black] ">
          Mark As Completed
        </button>
        <button className="bg-[#df5151] px-2 py-1 text-sm font-semibold rounded text-[black]">
          Mark As Failed
        </button>
      </div>
    </div>
  );
}

export default AcceptTask;
