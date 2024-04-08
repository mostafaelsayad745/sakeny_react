import React from 'react'
import { useNavigate } from "react-router-dom";

const Splash1 : React.FC = () => {

const navigate = useNavigate();

return (
    <div>
        <h1>Splash1</h1>
        <button onClick={() => navigate('/Splash2')}>Go to Splash2</button>
    </div>
)
}

export default Splash1
export{};
