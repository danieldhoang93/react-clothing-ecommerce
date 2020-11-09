import React from 'react';
import './custom-button.scss';

const CustomButton = ({ children, buttonType, ...otherProps }) => (
    <button 
    className={`${buttonType === 'googleSignIn' ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
        {children}
    </button>
)

export default CustomButton;