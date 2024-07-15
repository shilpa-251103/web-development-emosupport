// App.js
/*
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
      <BrowserRouter>
    <div className="App">
      <nav className="navbar">
        <img src={logo} alt="App Logo" className="navbar-logo" />
        <div className="left-options">
          <a href="/community">Community</a>
          <a href="/consult">Consult Experts</a>
          <a href="/business">For Business</a>
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
              <p>This is some text on the image.</p>
              <p>More text goes here.</p>
            </div>
          </div>

          <a href="/chat" className="image-button">
              <img src={chat} alt="Button" className="chatbot"/>
            </a>

          <button className="get-started-button">Get Started</button>
        </div>
      </main>
    </div>
    
      <Routes>
        <Route exact path="/login" element={<Login />}/>
        <Route exact path="/community" element={<Community />}/>
        </Routes>

  </BrowserRouter>
  );
}

export default App;
*/

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AppContent from './Appcontent';

import Login from './components/Login';
import Community from './components/Community';
import Bookingslot from './components/Bookingslot'; 
import Become from './components/Become'; // Import AppContent
import Signup from './components/Signup';
import Afterlogin from './Afterlogin';
import Result from './Result';
import Result2 from './Result2';
function MainApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppContent />} />
        <Route path="/login" element={<Login />} />
        <Route path="/community" element={<Community />} />
        <Route path="/bookingslot" element={<Bookingslot />} />
        <Route path="/expert" element={<Become />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Afterlogin" element={<Afterlogin />} />
        <Route path="/Result" element={<Result />} />
        <Route path="/Result2" element={<Result2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default MainApp; 
