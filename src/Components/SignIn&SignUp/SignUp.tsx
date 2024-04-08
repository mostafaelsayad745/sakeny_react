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
  const [image, setImage] = useState<File | null>(null);


  const navigate = useNavigation();
  const history = useHistory();
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setImage(event.target.files[0]);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      // Save the user data in local storage to use it later
      localStorage.setItem('user', JSON.stringify(user));
      history.push('/VerificationPage');
    } catch (error) {
      console.error('Error saving user data to local storage:', error);
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <form > 
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
        {/* <div>
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
        </div> */}
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
        <div>
          <label htmlFor="userImage">Profile Image:</label>
          <input
            type="file"
            id="userImage"
            name="userImage"
            onChange={handleImageChange}
          />
        </div>
        <button type="button" onClick={handleSubmit}>Signup</button>
      </form>
    </div>
  );
};

export default Signup;
export {}