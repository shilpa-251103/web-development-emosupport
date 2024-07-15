import React from 'react';
import { BrowserRouter , Route,Routes} from 'react-router-dom';
import './App.css'; // Import your CSS file
import image from './webperson.jpg'
import logo from './weblogo.jpg'
import chat from './webchat4.jpg'
import Login from './components/Login';
import Community from './components/Community';


function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <img src={logo} alt="App Logo" className="navbar-logo" />
        <div className="left-options">
          <a href="/community">Community</a>
          <div class="dropdown">
            <button class="dropbtn">Consult Experts</button>
            <div class="dropdown-content">
              <a href="/login">Booking Slot</a>
              <a href="/expert">Become an Expert</a>
            </div>
        </div>
        <div class="dropdown">
            <button class="dropbtn">For Business</button>
            <div class="dropdown-content">
              <a href="/parental">Parental access</a>
              <a href="/educationa">Educational institutions</a>
            </div>
            </div>
          <a href="/about">About</a>
        </div>
        <div className="right-options">
        <a href="/login">
          <button>Login</button>
          </a>
        </div>
      </nav>

      <main className="main-content">
        <div className="center-content">
          <div className="image-container">
            <img src={image} alt="Main_Image" className="image" />
            
            <div className="overlay">
              <p>Know yourself better through your social media</p>
              <p>Click to get started on your journey</p>
            </div>
          </div>

          <a href="/chat" className="image-button">
              <img src={chat} alt="Button" className="chatbot"/>
            </a>
            <a href="/login">
          <button className="get-started-button">Get Started</button>
          </a>
        </div>
      </main>
    </div>
  );
}

export default App;
