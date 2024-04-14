import React, { useState } from 'react';
import axios from 'axios';
import config from '../../config';
import { useDispatch } from 'react-redux';
import { useFetchUser } from '../../hooks/usersHooks';
import { json } from 'stream/consumers';
import { useNavigate } from 'react-router-dom';
//import { setAuthentication } from '../../actions/authenticationActions';

interface AuthenticationRequestBody {
  userMail: string;
  password: string;
}

interface AuthenticationResponseBody {
  tokenToReturn: string;
  id: number;
}

const AuthenticationComponent: React.FC = () => {
  const [userMail, setUserMail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const [userId, setUserId] = useState<number | null>(null); 
  
  const navigate = useNavigate();

  const userToReturn = useFetchUser(Number(userId));
  // ...

  //const dispatch = useDispatch();

  // ...

  
  const handleLogin = async () => {
    try {
    const requestBody: AuthenticationRequestBody = {
        userMail,
        password,
    };

    
   

    const response = await axios.post<AuthenticationResponseBody>(`${config.baseURL}/api/authentication/login`, requestBody, {
        validateStatus: (status) => status >= 200 && status < 300,
    });
    // Save token to localStorage
    localStorage.setItem('token', response.data.tokenToReturn);
    localStorage.setItem('userid', response.data.id.toString());
    // Set axios default headers
    
    axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.tokenToReturn}`;

    if (response.status === 200) {
        setToken(response.data.tokenToReturn);
        // console.log(JSON.stringify(response.headers,null,2));
        // console.log(response.headers['userid']);
        setUserId(response.data.id); // this doesn't return the header data 
        //dispatch(setAuthentication({ token: response.data, userId: response.headers['UserId'] ?? '' }));
        if (userToReturn.data) {
          userToReturn.data.userAccountType === 'Owner' 
            ?navigate( '/ownerHomepage' )
            : navigate('/tenantHomepage') ;
        } else {
          console.log('User data not found');
        }
       
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
        
    </div>
);
};

export default AuthenticationComponent;
export {};