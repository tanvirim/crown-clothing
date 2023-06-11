import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCXuOur3xdAIw8ydx6XPLX1P7-yNeDHD3g",
  authDomain: "crown-clothing-web-app-6dca8.firebaseapp.com",
  projectId: "crown-clothing-web-app-6dca8",
  storageBucket: "crown-clothing-web-app-6dca8.appspot.com",
  messagingSenderId: "816703458577",
  appId: "1:816703458577:web:278d823cd3c4828c2610b0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error created the user", error.message);
    }
  }

  return userDocRef;
};
