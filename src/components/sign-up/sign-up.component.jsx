import React from 'react'

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import './sign-up.styles.scss';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }
    render() { 
        const { displayName, email, password, confirmPassword } = this.state;
        return ( 
            <div className="sign-up">
                <h2 className="title">I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form onSubmit={this.handleSubmit} className="sign-up-form">
                <FormInput
                    type="text"
                    name="displayName"
                    value={displayName}
                    onChange={this.handleChange}
                    label='Display Name'
                    required                
                > </FormInput>
                <FormInput
                    type="email"
                    name="email"
                    value={email}
                    onChange={this.handleChange}
                    label='Email'
                    required                
                ></FormInput>
                <FormInput
                    type="password"
                    name="password"
                    value={password}
                    onChange={this.handleChange}
                    label='Password'
                    required                
                ></FormInput>
                <FormInput
                    type="confirmPassword"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={this.handleChange}
                    label='Confirm Password '
                    required                
                >                    
                    </FormInput>
                    <CustomButton type='submit'>SIGN UP</CustomButton>
                    </form>
            </div>
         );
    }
}
 
export default SignUp;