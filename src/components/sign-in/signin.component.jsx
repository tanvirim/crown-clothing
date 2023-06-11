import React from "react";

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const Signin = () => {
  const logGoogleuser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  return (
    <div>
      <button onClick={logGoogleuser}> signin with google</button>
    </div>
  );
};

export default Signin;
