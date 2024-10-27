import React, { useState, useEffect } from "react";

function Header({ data, changeUser }) {
  const [username, setUsername] = useState("");

  // Use useEffect to update the username when `data` changes
  useEffect(() => {
    if (!data) {
      setUsername("Admin");
    } else {
      setUsername(data.firstName);
    }
  }, [data]);
  // Dependency on `data`, update when `data` changes

  const logoutHandler = () => {
    localStorage.setItem("loggedInUser", "");
    changeUser("");
  };

  return (
    <div className="flex justify-between items-end">
      <h1 className="text-lg">
        Hello, <br />
        <span className="text-2xl font-semibold">{username} 👋</span>
      </h1>
      <button
        className="text-[#ffffff] py-1.5 px-5 text-[15px] font-semibold rounded-md bg-gradient-to-r from-red-500 to-red-900 transform transition-transform duration-300 hover:scale-105"
        onClick={logoutHandler}
      >
        Log Out
      </button>
    </div>
  );
}

export default Header;
