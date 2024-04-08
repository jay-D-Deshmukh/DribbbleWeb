import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  // State variables for email and password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  // Event handlers to update state
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!email || !password) {
      setError("Email and password are required!");
      return;
    }

    // Login logic
    axios
  .post("http://localhost:5020/api/user/login", {
    email,
    password,
  })
  .then((res) => {
    
    // setToken(token);
    navigate("/profile"); // Redirect to dashboard on successful login
  })
  .catch((err) => {
    setError("Invalid email or password");
  });
  };

  return (
    <div className="">
      <div className="h-screen flex justify-center">
        <div className="w-full xl:w-4/4 lg:w-12/12 flex flex-col  lg:flex-row">
          <div
            className="w-full lg:w-5/12 bg-cover "
            style={{
              backgroundImage:
                "url('https://img.freepik.com/free-vector/multitasking-concept-illustration-character_23-2148403717.jpg?w=740&t=st=1712472382~exp=1712472982~hmac=939341035c1ef384299a62336c8080c244d2a61eeeae4ed3e10c51d61cf7bfca')",
            }}
          ></div>
          <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
            <h3 className="py-4 text-3xl text-center font-bold text-gray-800">
              <span className="inline-block">Login to Your Account</span>
            </h3>
            <div className="flex justify-center"> {/* Centering container */}
              <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className={`w-full md:w-64 px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline`}
                    id="email"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleEmailChange}
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    className={`w-full md:w-64 px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline`}
                    id="password"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                </div>
                {error && <div className="text-red-500 mb-4">{error}</div>}
                <div className="mb-6 mt-10">
                  <button
                    className="w-48 px-4 py-2 font-bold text-white bg-pink-500 rounded-xl hover:bg-pink-400 focus:outline-none focus:shadow-outline"
                    type="button"
                    onClick={handleSubmit}
                  >
                    Login
                  </button>
                </div>
                <div className="text-center">
                  <Link
                    className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                    to="/"
                  >
                    Create an account
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
