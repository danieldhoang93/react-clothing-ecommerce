import React from 'react';
import './login.scss';
import SignIn from '../../components/sign-in/sign-in.jsx';
import SignUp from '../../components/sign-up/sign-up.jsx';

const LoginPage = () => (
    <div className='login'>
        <SignIn/>
        <SignUp/>
    </div>
)

export default LoginPage;