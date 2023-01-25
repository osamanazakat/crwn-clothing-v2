import {
  createUserDocumentFromAuth,
  signInWithGooglePoppup,
} from "../../components/utils/firebase/firebase.utils";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePoppup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign in</h1>
      <button onClick={logGoogleUser}>sign in</button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
