import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


function Signup() {
  // State variables for each field
  const [Name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  // Event handlers to update state
  const handleFirstNameChange = (e) => {
    setName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setUserName(e.target.value);
  };

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
    if (!Name || !userName || !email || !password) {
      setError("All fields are required!");
      return;
    }

    axios
      .post("http://localhost:5020/api/user/register", {
        Name,
        userName,
        email,
        password,
      })
      .then((res) => {
        console.log(res.data);
        navigate("login");
      })
      .catch((err) => {
        alert(`Error: ${err}`);
      });

    setName("");
    setUserName("");
    setEmail("");
    setPassword("");
    setError("");
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
              Sign up to Dribbble
            </h3>
            <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
              <div className="mb-4 md:flex md:justify-between">
                <div className="mb-4 md:mr-2 md:mb-0 w-full lg:w-5/12">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="firstName"
                  >
                    First Name
                  </label>
                  <input
                    className={`w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline`}
                    id="firstName"
                    type="text"
                    placeholder="First Name"
                    value={Name}
                    onChange={handleFirstNameChange}
                  />
                </div>
                <div className="md:ml-2 w-full lg:w-5/12">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="lastName"
                  >
                    Username
                  </label>
                  <input
                    className={`w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline`}
                    id="lastName"
                    type="text"
                    placeholder="Last Name"
                    value={userName}
                    onChange={handleLastNameChange}
                  />
                </div>
              </div>
              <div className="mb-4">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className={`w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline`}
                  id="email"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
              <div className="mb-4 md:flex md:justify-between">
                <div className="mb-4 md:mr-2 md:mb-0 w-full lg:w-5/12">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    className={`w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline`}
                    id="password"
                    type="password"
                    placeholder="6+ characters"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                </div>
              </div>
              {error && <div className="text-red-500 mb-4">{error}</div>}
              <div className="mb-4">
                <input
                  className="mr-2 w-4 leading-tight"
                  id="agreeConditions"
                  type="checkbox"
                  // Add any necessary event handlers if needed
                />
                <label
                  className="text-sm  text-gray-800"
                  htmlFor="agreeConditions"
                >
                  Creating an account means you're okay with our{" "}
                  <span className="text-blue-500">
                    Terms of Service, Privacy Policy,{" "}<br/> 
                  </span>
                   and our default{" "}
                  <span className="text-blue-500">Notification Setting</span>
                </label>
              </div>
              <div className="mb-6 mt-10">
                <button
                  className="w-60 px-4 py-2 font-bold text-white bg-pink-500 rounded-xl hover:bg-pink-400 focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={handleSubmit}
                >
                  Create Account
                </button>
              </div>
              <div className="mb-4">
                
                <label
                  className="text-xs  text-gray-500"
                  htmlFor="agreeConditions"
                >
                  This site is protected by reCAPTCHA and the Google{" "}<br/>
                  <span className="text-blue-500">
                    Privacy Policy{" "}
                  </span>
                   and {" "}
                  <span className="text-blue-500">Teams of Service</span>{" "}apply
                </label>
              </div>
              
              <hr className="mb-6 border-t" />
              <div className="text-center">
                <a
                  className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                  href="#"
                >
                  Forgot Password?
                </a>
              </div>
              <div className="text-center">
                <Link
                  className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                  to="/login"
                >
                  Already a member? Sign in!
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
