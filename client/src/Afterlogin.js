import React, { useState } from 'react';
import { BrowserRouter , Route,Routes ,Link , useNavigate} from 'react-router-dom';
import './App.css'; // Import your CSS file
import axios from 'axios';
import image from './webperson.jpg'
import logo from './weblogo.jpg'
import chat from './webchat4.jpg'
import prof from './webprof.jpg'
import Login from './components/Login';
import Community from './components/Community';
import { useEffect } from 'react';
import Result from './Result';



const Afterlogin = () => {
  const navigate = useNavigate();
    const [context1, setContext1] = useState('');
    const [context2, setContext2] = useState('');
    
  const [emotionalAnalysis1, setEmotionalAnalysis1] = useState('');
  const [emotionalAnalysis2, setEmotionalAnalysis2] = useState('');

  const submitContext1 = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/Afterlogin", {
        context1: context1,
      });
      console.log("inside");

      // Extract and set the emotional analysis results from the response
      setEmotionalAnalysis1(response.data.output);
      navigate("/Result", { state: { output: response.data.output } });

    } catch (error) {
      console.log(error);
    }
  };

  const submitContext2 = async (e) => {
    e.preventDefault();
    console.log("context2");

    try {
      const response = await axios.post("http://localhost:8080/Afterlogin", {
        context2: context2,
      });

      // Extract and set the emotional analysis results from the response
      setEmotionalAnalysis2(response.data.output2);
      navigate("/Result2", { state: { output2: response.data.output2 } });


    } catch (error) {
      console.log(error);
    }
  };

    const [showExpertOptions, setShowExpertOptions] = useState(false);

    const toggleExpertOptions = () => {
      setShowExpertOptions(!showExpertOptions);
    };


  return (
    <div className="App">
      <nav className="navbar">
        <img src={logo} alt="App Logo" className="navbar-logo" />
        <div className="left-options">
        <a href="/community">Community</a>
        <div class="dropdown">
            <button class="dropbtn">Consult Experts</button>
            <div class="dropdown-content">
              <a href="/bookingslot">Booking Slot</a>
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
        <a href="/prof" className="right-options">
              <img src={prof} alt="Button" className="profile"/>
            </a>

      </nav>




      <main className="main-content">
      <div className="center-content">
  <div className="image-container">
    <img src={image} alt="Main_Image" className="image" />

    <div className="overlay-top">
      <div className="emotional-analysis">
        <h1 className="emotional-analysis-title">
          Emotional Analysis using text
        </h1>
        <form method="POST" action="{{url_for('Afterlogin')}}">
        <input
          type="text"
          placeholder="context"
          name='a'
          value={context1}
          onChange={(e) => setContext1(e.target.value)}
        />
          <button className="emo-analysis-top" input type="submit" 
                  onClick={submitContext1}>
            Do Analysis
          </button>
          </form>
      </div>
      </div>
      
      <div className="overlay-bottom">
      <div className="emotional-analysis">
        <h1 className="emotional-analysis-title">
          Analysis of Youtube video
        </h1>
        <form method="POST">
        <input
          type="text"
          placeholder="Enter the video Id"
          value={context2}
          onChange={(e) => setContext2(e.target.value)}
        />
          <button className="emo-analysis-bottom" input type="submit" onClick={submitContext2}>
            Do Analysis
          </button>
          </form>
      </div>
    </div>
  </div>
  </div>

      </main>
    </div>
  );
} ;

export default Afterlogin;