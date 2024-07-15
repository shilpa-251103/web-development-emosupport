import React from 'react';
import Become from './Become';

import backgroundImage2 from '../webrestext.jpg';
import './Login.css';
// function Bookingslot({ name, age, gender, email, phone, licenseNumber, qualifications, experience, specializations, previousRoles, availability, fees, paymentMethods }) {
//   return (
//     <div className="slot-container">
//       <h2>Counselling Expert Information</h2>
//       <p><strong>Name:</strong> {name}</p>
//       <p><strong>Age:</strong> {age}</p>
//       <p><strong>Gender:</strong> {gender}</p>
//       <p><strong>Email:</strong> {email}</p>
//       <p><strong>Phone number:</strong> {phone}</p>
//       <p><strong>License Number:</strong> {licenseNumber}</p>
//       <p><strong>Qualifications:</strong> {qualifications}</p>
//       <p><strong>Experience:</strong> {experience}</p>
//       <p><strong>Specializations:</strong> {specializations}</p>
//       <p><strong>Previous Roles:</strong> {previousRoles}</p>
//       <p><strong>Availability:</strong> {availability}</p>
//       <p><strong>Fees:</strong> {fees}</p>
//       <p><strong>Payment Methods:</strong> {paymentMethods}</p>
  
    
//     </div>
//   );
// }

// export default Bookingslot;

import  { useState, useEffect } from 'react';
import axios from 'axios';

const Bookingslot = () => {
  const [expertData, setExpertData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/expert'); // Assuming your GET endpoint for fetching expert data
        setExpertData(response.data);
      } catch (error) {
        console.error('Error fetching expert data:', error);
      }
    };

    fetchData();
  }, []); // Run once on component mount

  return (
    <div className="booking-container">
      <h2>Registered Counselling Experts</h2>
      <img src={backgroundImage2} alt="Background" className="background-image" />
      <ul>
        {expertData.map((expert) => (
          <li key={expert._id}>
            <div className="expert-box">
              <strong>Name:</strong> {expert.name}, <strong>Email:</strong> {expert.email}, <strong>Phone:</strong> {expert.phone},
              <strong>Availability:</strong> {expert.availability},<strong>Fees:</strong>{expert.fees},<strong>Specializations:</strong>{expert.specializations},
              <strong>PaymentMethods:</strong> {expert.paymentMethods}
              {/* Add more details as needed */}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Bookingslot;


