import React from 'react'
import { useNavigate } from 'react-router-dom';

const Splash2 :  React.FC = () => {
    const navigate = useNavigate();
  return (
    <div>
      <h1>Splash2</h1>
      <button onClick={() => navigate('/Splash3')}>Go to Splash3</button>
    </div>
  )
}

export default Splash2
export{};