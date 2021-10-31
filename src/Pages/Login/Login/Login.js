import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../Hooks/useAuth';

const Login = () => {
    const { signInUsinGoogle } = useAuth()
    const location = useLocation()
    const history = useHistory()
    const redirect_uri = location.state?.from || '/home'
    const handleGoogleLogin = () => {
        signInUsinGoogle()
            .then(result => {
                history.push(redirect_uri)
            })
    }
    return (
        <div>
            <h2>Please Login</h2>
            <button onClick={handleGoogleLogin}>Google Sing In</button>
        </div>
    );
};

export default Login;