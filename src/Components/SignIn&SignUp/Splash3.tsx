import React from 'react'
import { useNavigate } from 'react-router-dom';

const Splash3 : React.FC = () => {
    const navigate = useNavigate();
  return (
    <div>
      <h1>Splash3</h1>
      <button onClick={() => navigate('/OwnerOrTenantPage')}>Go to OwnerOrTenantPage</button>
    </div>
  )
}

export default Splash3
export{};