import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import './Login.css';
import backgroundImage from './webperson.jpg';
import logo from '../weblogo.jpg'

const Signup = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });
  const { email, password, username } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:8080/signup",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      const suc = "signed up";
      //const { success, message } = data;
      if (data===suc) {
        //handleSuccess(message);
        window.alert("Successfully Signed up");
        setTimeout(() => {
          navigate("/Afterlogin");
        }, 1000);
      } else {
        window.alert("Signup failed");
        //handleError(message);
      }
    } catch (error) {
      window.alert("Error in signup process");
      console.log(error);
      
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
      username: "",
    });
  };

  return (
    <div className="login-container">
       <img src={backgroundImage} alt="Main_Image" className="image" />
      <div className="signoverlay">
      <div className="login-box">
        <h1 className="login-heading"><img src={logo} alt="App Logo" className="navbar-logo" /></h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            onChange={handleOnChange}
          />
        </div>
        <div>
          <label htmlFor="email">Username</label>
          <input
            type="text"
            name="username"
            value={username}
            placeholder="Username"
            onChange={handleOnChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            onChange={handleOnChange}
          />
        </div>
        <button className="login-button" type="submit">Submit</button>
        <span>
          Already have an account? <Link to={"/login"}>Login</Link>
        </span>
      </form>
      <ToastContainer />
    </div>
    </div>
    </div>
  );
};

export default Signup;

