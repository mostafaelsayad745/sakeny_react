import React, { useEffect } from 'react';
import logo from '../../main/logo192.png'
import { useNavigate } from 'react-router-dom';


const Entry: React.FC = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const timer = setTimeout(() => {
            
            navigate('/splash1');
        }, 5000); // 5 seconds

        // This will clear Timeout when component unmount (like componentWillUnmount)
        return () => {
            clearTimeout(timer);
        };
    }, []);

    return (
        <header className='row mb-4'>
            <div className='col-5'>
                <img src={logo} className='logo' alt='logo'></img>
            </div>
        </header>
    );
};

export default Entry;