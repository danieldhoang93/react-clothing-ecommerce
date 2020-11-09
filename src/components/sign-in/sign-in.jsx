import React from 'react';
import './sign-in.scss';
import FormInput from '../form-input/form-input.jsx';
import CustomButton from '../custom-button/custom-button.jsx';
import SignUp from '../sign-up/sign-up.jsx';
import { signInWithGoogle } from '../../firebase/firebase.utils.js';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({ email: '', password: ''});
    }
    
    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value});
    }

    componentDidMount() {
        console.log(signInWithGoogle);
    }
    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
            

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        label='email'
                        name="email"
                        type='email'
                        value={this.state.email}
                        handleChange={this.handleChange}
                        required
                    />

                    <FormInput 
                        label='password'
                        name="password" 
                        type='password' 
                        value={this.state.password} 
                        handleChange={this.handleChange}
                        required
                    />

                    <div className='buttons'>
                        <CustomButton type='submit'>SIGN IN</CustomButton>
                        <CustomButton buttonType='googleSignIn' onClick={signInWithGoogle}>SIGN IN WITH GOOGLE</CustomButton>
                    </div>
                    
                </form>
            </div>
        )
    }
}

export default SignIn;