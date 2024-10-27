import React from "react";
import Header from "../Header/Header";
import CreateTask from "../CreateTask";
import AllTask from "../AllTask";

function AdminDashboard({ changeUser }) {
  return (
    <div className="h-screen w-full px-7 py-4">
      <Header changeUser={changeUser} />
      <CreateTask />
      <AllTask />
    </div>
  );
}

export default AdminDashboard;
