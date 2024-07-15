import React, { useState ,useEffect} from 'react';
import { Link,useNavigate,useLocation } from 'react-router-dom';
import axios from "axios"
import './components/Login.css';
import backgroundImage2 from './webrestext.jpg';
import logo from './weblogo.jpg'
import Afterlogin from './Afterlogin';


const Result2 = () => {
 
    const location = useLocation();
  const output = location.state ? location.state.output2 : null;

  return(
    <div className="login-container"  >
      <img src={backgroundImage2} alt="Main_Image" className="image" />
      <div className="logoverlay3">
      <div className="login-box2">
<h1>Result</h1>
        <div className="login-heading"><img src={logo} alt="App Logo" className="navbar-logo" /></div>
        
        {/* Display the data from response.data.output here */}
        {output && (
            <div className="outputResult2">
              <p>{output}</p>
              {/* Additional display logic for the specific structure of response.data.output */}
            </div>
          )}
      </div>
      </div>
    </div>
  );
};


export default Result2;