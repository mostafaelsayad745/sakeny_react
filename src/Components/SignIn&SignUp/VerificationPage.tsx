import React, { useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import axios from 'axios';
import config from '../../config';

const VerificationPage: React.FC = () => {
  const location = useLocation();
  const history = useHistory();
  const [verificationCode, setVerificationCode] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (verificationCode) {
      try {
        const user = JSON.parse(localStorage.getItem('user') || '{}');
        const response = await axios.post(`${config.baseURL}/api/users`, user);
        console.log('User data saved successfully:', response.data);
        localStorage.removeItem('user'); // Clear user data from local storage after saving
        
        // Navigate to the login page or any other page as needed
        history.push('/login');
      } catch (error) {
        console.error('Error saving user data:', error);
      }
    } else {
      console.log('Please enter the verification code');
    }
    
  };

  return (
    <div>
      <h2>Verification</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="verificationCode">Verification Code:</label>
          <input
            type="text"
            id="verificationCode"
            value={verificationCode}
            onChange={(e) => setVerificationCode(e.target.value)}
          />
        </div>
        <button type="submit">Submit Verification Code</button>
      </form>
    </div>
  );
};

export default VerificationPage;
