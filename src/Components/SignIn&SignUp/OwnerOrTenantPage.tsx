import React from 'react'
import { useNavigate } from 'react-router-dom';

const OwnerOrTenantPage : React.FC = () => {
    const navigate = useNavigate();
  return (
    <div>
      <h1>OwnerOrTenantPage</h1>
      
      <button onClick={() => navigate('/signupowner')}>Owner</button>
      <button onClick={() => navigate('/signuptenant')}>Tenant</button>
    </div>
  )
}


export default OwnerOrTenantPage
export{};
