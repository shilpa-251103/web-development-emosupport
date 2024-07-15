import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import './Login.css';
import backgroundImage from './webperson.jpg';
import logo from '../weblogo.jpg'
import axios from "axios"
import { ToastContainer, toast } from "react-toastify";


const Login = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputValue;
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
      position: "bottom-left",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:8080/login",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      console.log(data);
      const suc = "loggedIn"
      //const { success, message } = data;
      if (data === suc) {
        window.alert("Successfully Logged in");
        //handleSuccess(message);
        setTimeout(() => {
          navigate("/Afterlogin");
        }, 1000);
      } else {
        window.alert("Invalid credentials");
        //handleError(message);
      }
    } catch (error) {
      window.alert("Error!Invalid credentials");
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
    });

}


  return (
    <div className="login-container"  >
      <img src={backgroundImage} alt="Main_Image" className="image" />
      <div className="logoverlay">
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
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            onChange={handleOnChange}
          />
        </div>
        <button className="login-button" type="submit">Login</button>
        <div className="login-options">
            <p>
              Don't have an account?{' '}
              <span className="signup-link" onClick={() => navigate('/signup')}>
                Signup
              </span>
            </p>
            <p>
              <span className="forgot-password-link">Forgot password?</span>
            </p>
          </div>
      </form>
      <ToastContainer />
      </div>
      </div>
    </div>
  );
};

export default Login;
