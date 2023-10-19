import { useEffect } from "react";
import { auth, createUserDocFromAuth } from "../../utils/firebase/firebase.utils";
import { getRedirectResult } from "firebase/auth";
import SignUpForm from "../../components/sign-up/sign-up-form.component";
import SignInForm from "../../components/sign-in/sign-in-form.component";
import {AuthenticatonContainer} from './authentication.styles';

const Authentication = () => {
	
	// useEffect(async () => {
	// 	const response = await getRedirectResult(auth);
	// 	console.log(response);
	// 	if (response) { 
	// 		    const userDocRef = await createUserDocFromAuth(response.user);
	// 	}

	// }, []);
	useEffect(() => {
		async function _getRedirectResult() {
 
      const response = await getRedirectResult(auth);
			// console.log(response);
      if (response) { 
        const userDocRef = await createUserDocFromAuth(response.user);
      }
 
    }
 
    _getRedirectResult();
 
	},[]);

	// const logGoogleUser = async () => {
	// 	const { user } = await signInWithGooglePopup();
	// 	const userDocRef = await createUserDocFromAuth(user);
	// }


	return (
		<AuthenticatonContainer>
			<SignInForm />
			<SignUpForm/>
		</AuthenticatonContainer>
	);
};

export default Authentication;