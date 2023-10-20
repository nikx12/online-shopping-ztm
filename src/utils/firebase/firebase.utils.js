import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
} from 'firebase/auth';
import {
	getFirestore,
	doc,
	getDoc,
	setDoc,
	collection,
	writeBatch,
	query,
	getDocs,
} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUK6sCixlSPDPuei-ofxi8DQwbAv6NNSw",
  authDomain: "online-shopping-db-ac939.firebaseapp.com",
  projectId: "online-shopping-db-ac939",
  storageBucket: "online-shopping-db-ac939.appspot.com",
  messagingSenderId: "720977528702",
  appId: "1:720977528702:web:0532be86952b62e2c3552f"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
	prompt: "select_account"
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);


export const db = getFirestore();

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const batch = writeBatch(db);
  const collectionRef = collection(db, collectionKey);
  
  objectsToAdd.forEach((object) => {
     const docRef = doc(collectionRef, object.title.toLowerCase());
     batch.set(docRef, object);
  });

  await batch.commit();
  console.log('done');
};

export const getCategoriesAndDocuments = async () => {
	const collectionRef = collection(db, 'categories');
	const q = query(collectionRef);
  
	const querySnapshot = await getDocs(q);
	const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
	  const { title, items } = docSnapshot.data();
	  acc[title.toLowerCase()] = items;
	  return acc;
	}, {});
  
	return categoryMap;
  };

export const createUserDocFromAuth = async(userAuth, additionalInfo) => {

	if (!userAuth) return;
	const userDocRef = doc(db, 'users', userAuth.uid);
	// console.log(userDocRef);

	const userSnapshot = await getDoc(userDocRef);
	// console.log(userSnapshot.exists());

	if(!userSnapshot.exists()) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await setDoc(userDocRef, {
				displayName,
				email,
				createdAt,
				...additionalInfo,
			});
		} catch(err) {
			console.log('error creating the user', err.message);
		}

	}
	return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
	if (!email || !password) return;
  
	return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInUserWithEmailAndPassword = async (email, password) => {
	if (!email || !password) return;
  
	return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);