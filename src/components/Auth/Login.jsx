import React, { useState } from "react";

function Login({ handleLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };
  return (
    <div className="flex h-screen w-screen justify-center items-center">
      <div className="border-2 border-emerald-700 p-20 rounded-lg">
        <form
          onSubmit={submitHandler}
          className="flex flex-col p-1 items-center justify-center"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Your Email"
            className=" border-2 border-emerald-400  rounded-full text-lg px-5 py-2 outline-none bg-transparent text-[white] mx-4 my-3 placeholder:text-[16px] w-full"
          />
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Your Password"
            className=" border-2 border-emerald-400  rounded-full text-lg px-5 py-2 outline-none bg-transparent text-[white] mx-4 my-3 placeholder:text-[16px] w-full"
          />
          <button
            type="submit"
            className="bg-emerald-600 font-semibold  py-2 px-10 text-[17px] rounded-full mt-7"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
