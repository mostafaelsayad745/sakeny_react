import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useNavigation } from 'react-router-dom';
import axios from 'axios';
import { UserForCreationDto } from '../../Types';
import config from '../../config';

const Signup: React.FC = () => {
  const [user, setUser] = useState<UserForCreationDto>({
    userName: '',
    userPassword: '',
    userFullName: '',
    userEmail: '',
    userNatId: '',
    userGender: '',
    userAge: 0,
    userInfo: '',
    userAddress: '',
    userAccountType: ''
  });

  const history = useHistory();
  const navigation = useNavigation();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${config.baseURL}/api/users`, user);
      const verificationCode = response.headers['x-verification-code'];
      if (verificationCode) {
        // Navigate to the verification code component
        navigation('/verification', { verificationCode });
      } else {
        // Navigate to the login page
        history.push('/login');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="userName">Username:</label>
          <input
            type="text"
            id="userName"
            name="userName"
            value={user.userName}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="userPassword">Password:</label>
          <input
            type="password"
            id="userPassword"
            name="userPassword"
            value={user.userPassword}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="userFullName">Full Name:</label>
          <input
            type="text"
            id="userFullName"
            name="userFullName"
            value={user.userFullName}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="userEmail">Email:</label>
          <input
            type="email"
            id="userEmail"
            name="userEmail"
            value={user.userEmail}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="userNatId">National ID:</label>
          <input
            type="text"
            id="userNatId"
            name="userNatId"
            value={user.userNatId}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="userGender">Gender:</label>
          <input
            type="text"
            id="userGender"
            name="userGender"
            value={user.userGender}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="userAge">Age:</label>
          <input
            type="number"
            id="userAge"
            name="userAge"
            value={user.userAge}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="userInfo">Info:</label>
          <textarea
            id="userInfo"
            name="userInfo"
            value={user.userInfo}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="userAddress">Address:</label>
          <textarea
            id="userAddress"
            name="userAddress"
            value={user.userAddress}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="userAccountType">Account Type:</label>
          <input
            type="text"
            id="userAccountType"
            name="userAccountType"
            value={user.userAccountType}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
export {}