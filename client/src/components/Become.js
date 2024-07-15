import React, { useState, useEffect } from 'react';
import axios from 'axios';
import $ from 'jquery';
import './Login.css';
import backgroundImage2 from '../webrestext.jpg';
import Bookingslot from './Bookingslot'

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    email: "",
    phone: "",
    licenseNumber: "",
    qualifications: "",
    experience: "",
    specializations: "",
    previousRoles: "",
    availability: "",
    fees: "",
    paymentMethods: "",
  });


  const [displaySlot, setDisplaySlot] = useState(false);
  const [slotData, setSlotData] = useState({});
  
  const { name ,age,gender,email,phone,licenseNumber,qualifications,experience,specializations,previousRoles,availability,fees,paymentMethods  } = formData;
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const {data}=await axios.post('http://localhost:8080/expert', { ...formData, },{ withCredentials: true });
    
    setFormData({
      ...formData,
      name: "",
    age: "",
    gender: "",
    email: "",
    phone: "",
    licenseNumber: "",
    qualifications: "",
    experience: "",
    specializations: "",
    previousRoles: "",
    availability: "",
    fees: "",
    paymentMethods: "",
    });
    setDisplaySlot(true);  // Add a state variable to control the display of the Slot component
      setSlotData(data);} catch (error) {
        console.error('Error submitting ', error);
      }
  };

  
  return (
    <div className="login-container"  >
      <img src={backgroundImage2} />
      <div className="logoverlay4">
      <div className="login-box3">
    <div className='back'>
 <h2>Counselling Expert Registration</h2>
    
    <div className='reg-container'>
     
      <form onSubmit={handleSubmit}>
        {/* Add input fields for all the details mentioned in the question */}
        <div className='fields'>
          
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          
        <label>Age:</label>
          <input
            type="text"
            name="age"
            value={age}
            onChange={handleInputChange}
          />
        </div>
        <div>
          
        <label>Gender:</label>
          <input
            type="text"
            name="gender"
            value={gender}
            onChange={handleInputChange}
          />
        </div>
        <div>
          
        <label>Email:</label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          
        <label>Phone number:</label>
          <input
            type="text"
            name="phone"
            value={phone}
            onChange={handleInputChange}
          />
        </div>
        <div>  
        <label>License Number:</label>
          <input
            type="text"
            name="licenseNumber"
            value={licenseNumber}
            onChange={handleInputChange}
          />
        </div>
        <div>  
        <label>Qualifications:</label>
          <input
            type="text"
            name="qualifications"
            value={qualifications}
            onChange={handleInputChange}
          />
        </div>
        <div>  
        <label>Experience:</label>
          <input
            type="text"
            name="experience"
            value={experience}
            onChange={handleInputChange}
          />
        </div>
        <div>  
        <label>Specializations:</label>
          <input
            type="text"
            name="specializations"
            value={specializations}
            onChange={handleInputChange}
          />
        </div>
        <div>  
        <label>Previous Roles:</label>
          <input
            type="text"
            name="previousRoles"
            value={previousRoles}
            onChange={handleInputChange}
          />
        </div>
        <div>  
        <label>Availability:</label>
          <input
            type="text"
            name="availability"
            value={availability}
            onChange={handleInputChange}
          />
        </div>
        <div>  
        <label>Fees:</label>
          <input
            type="text"
            name="fees"
            value={fees}
            onChange={handleInputChange}
          />
        </div>
        <div>  
        <label>Payment Methods:</label>
          <input
            type="text"
            name="paymentMethods"
            value={paymentMethods}
            onChange={handleInputChange}
          />
        </div>

        {/* Repeat this pattern for all form fields */}
        {/* ... (other form fields) ... */}
                <button className="become-button" type="submit">
                  Submit
                </button>
      </form>
    </div>
    </div>
    </div>
    </div>
    </div>
  );

}

export default RegistrationForm;
