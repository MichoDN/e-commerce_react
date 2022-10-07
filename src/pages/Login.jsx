import React from 'react';
import { useSelector } from 'react-redux';
import LogoutCard from '../components/LogoutCard';
import LoginCard from '../components/LoginCard'

const Login = () => {
    const isLogged = useSelector(state => state.isLogged)
    return (
        <div className='login_comp-container'>
            {
                isLogged ?
                    (
                        <LogoutCard/>
                    ) : (
                        <LoginCard/>
                    )
            }
        </div>
    );
};

export default Login;