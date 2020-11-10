import React from 'react';
import './sign-in.scss';
import FormInput from '../form-input/form-input.jsx';
import CustomButton from '../custom-button/custom-button.jsx';
import SignUp from '../sign-up/sign-up.jsx';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils.js';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email :'', password: ''});
        } catch(error) {
            console.log(error);
        }
    };
    
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
                        <CustomButton type="button" buttonType='googleSignIn' onClick={signInWithGoogle}>SIGN IN WITH GOOGLE</CustomButton>
                    </div>
                    
                </form>
            </div>
        )
    }
}

export default SignIn;