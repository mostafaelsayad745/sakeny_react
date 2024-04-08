import React from 'react'
import { useNavigate } from 'react-router-dom';

const OwnerOrTenantPage : React.FC = () => {
    const navigate = useNavigate();
  return (
    <div>
      <h1>OwnerOrTenantPage</h1>
      <button onClick={() => navigate('/signup')}>Owner</button>
      <button onClick={() => navigate('/signup')}>Tenant</button>
    </div>
  )
}

export default OwnerOrTenantPage
export{};
