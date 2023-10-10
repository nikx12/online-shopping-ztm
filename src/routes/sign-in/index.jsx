import { useEffect } from "react";
import { auth, signInWithGooglePopup, createUserDocFromAuth, signInWithGoogleRedirect } from "../../utils/firebase/firebase.utils";
import { getRedirectResult } from "firebase/auth";
import SignUpForm from "../sign-up/sign-up-form.component";

const SignIn = () => {
	
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
			console.log(response);
      if (response) { 
        const userDocRef = await createUserDocFromAuth(response.user);
      }
 
    }
 
    _getRedirectResult();
 
	},[]);

	const logGoogleUser = async () => {
		const { user } = await signInWithGooglePopup();
		const userDocRef = await createUserDocFromAuth(user);
	}


	return (
		<div>
			<h1>Sign In component</h1>
			<button onClick={logGoogleUser}>
				Sign In with Google Popup
			</button>
			<button onClick={signInWithGoogleRedirect}>
				Sign In with Google signInWithRedirect
			</button>
			<SignUpForm/>
		</div>
	);
};

export default SignIn;