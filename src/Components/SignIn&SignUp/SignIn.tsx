import React, { useState } from 'react';
import axios from 'axios';
import config from '../../config';

interface AuthenticationRequestBody {
  userMail: string;
  password: string;
}

const AuthenticationComponent: React.FC = () => {
  const [userMail, setUserMail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const [userId, setUserId] = useState('');

  const handleLogin = async () => {
    try {
    const requestBody: AuthenticationRequestBody = {
        userMail,
        password,
    };

    const response = await axios.post<string>(`${config.baseURL}/api/authentication/login`, requestBody, {
        validateStatus: (status) => status >= 200 && status < 300,
    });

    if (response.status === 200) {
        setToken(response.data);
        setUserId(response.headers['UserId'] ?? ''); // this doesn't return the header data 
    } else {
        console.log(response.data);
    }
    } catch (error) {
      console.log(error);
    }
  };

return (
    <div>
        <label htmlFor="userMail">Email</label>
        <input type="text" id="userMail" value={userMail} onChange={(e) => setUserMail(e.target.value)} />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleLogin}>Login</button>
        <p>Token: {token}</p>
        <p>UserId: {userId}</p>
    </div>
);
};

export default AuthenticationComponent;
export {};