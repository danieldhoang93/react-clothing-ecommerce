import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA8XGlPE6NdSI1jYgrYA-4_a4qgXzLRaLU",
    authDomain: "react-clothing-ecommerce-e8e97.firebaseapp.com",
    databaseURL: "https://react-clothing-ecommerce-e8e97.firebaseio.com",
    projectId: "react-clothing-ecommerce-e8e97",
    storageBucket: "react-clothing-ecommerce-e8e97.appspot.com",
    messagingSenderId: "55548816695",
    appId: "1:55548816695:web:daa9032ef2a385e0057eb2"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)
    
    const snapShot = await userRef.get();

    console.log(snapShot);

    //if user doesn't exist, then create it
    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch(error) {
            console.log('error creating user: ', error.message)
        }
    }
    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//google sign on
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

