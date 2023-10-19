import { useState } from "react";
import { 
    createAuthUserWithEmailAndPassword,
    createUserDocFromAuth
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import { SignUpContainer } from './sign-up-form.styles';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };


const SignUpForm = () => {
    const [formFields, setFormFields ] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;
    
    const handleChange = (event) => {
        const { name, value} = event.target;
        setFormFields({
            ...formFields,
            [name]: value,
        })
    }
    const resetFormFields = () => {
        setFormFields(defaultFormFields);
      };
    
    const handleSubmit = async (event) => {
        event.preventDefault();
    
        const { password, confirmPassword } = formFields;
        if(password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        try{
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocFromAuth(user, { displayName });
            // console.log({user});
            resetFormFields();
        } catch(error) {
            if(error.code === 'auth/email-already-in-use'){
                alert('Email is already in use!');
            } else {
                console.log('user creation encountered an error', error);
            }
        }
    }
    return (
        <SignUpContainer>
            <h2>Don't have an account?</h2>
            <h2>Sign up with your email and password</h2>
            <form onSubmit={handleSubmit}>
                <FormInput type="text" required
                    label="Display Name"
                    name="displayName"
                    value={displayName}
                    onChange={handleChange}
                />
                <FormInput type="email" required
                    label="Email"
                    onChange={handleChange}
                    name="email"
                    value={email}
                />
                <FormInput type="password" required
                    label="Password"
                    onChange={handleChange}
                    name="password"
                    value={password}
                />
                <FormInput type="password" required
                    label="Confirm Password"
                    onChange={handleChange}
                    name="confirmPassword"
                    value={confirmPassword}
                />
                <Button type="submit">Sign Up</Button>
            </form>
        </SignUpContainer>
    )
};

export default SignUpForm;