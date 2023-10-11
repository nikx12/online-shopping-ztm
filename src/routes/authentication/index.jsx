import { useEffect } from "react";
import { auth, createUserDocFromAuth } from "../../utils/firebase/firebase.utils";
import { getRedirectResult } from "firebase/auth";
import SignUpForm from "../../components/sign-up/sign-up-form.component";
import SignInForm from "../../components/sign-in/sign-in-form.component";
import './authentication.styles.scss';

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
			console.log(response);
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
		<div className="authentication-container">
			<SignInForm />
			{/* <button onClick={logGoogleUser}>
				Sign In with Google Popup
			</button>
			<button onClick={signInWithGoogleRedirect}>
				Sign In with Google signInWithRedirect
			</button> */}
			<SignUpForm/>
		</div>
	);
};

export default Authentication;