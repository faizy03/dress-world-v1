import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  /* Google Redirect Method */
  //   auth,
  //   signInWithGoogleRedirect,
} from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const SignIn = () => {
  
    /* Google Redirect Method */

  //   useEffect(() => {
  //     (async () => {
  //       const response = await getRedirectResult(auth);
  //       if (response) {
  //         const userDocRef = await createUserDocumentFromAuth(response.user);
  //       }
  //     })();

  //     return () => {
  //       // this now gets called when the component unmounts
  //     };
  //   }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      <SignUpForm/>

      {/* Google Redirect Method */}
      {/* <button onClick={signInWithGoogleRedirect}>
        Sign in with Google Redirect
      </button> */}
    </div>
  );
};

export default SignIn;
