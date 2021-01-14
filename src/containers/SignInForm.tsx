import { Link } from "react-router-dom";

import FormInput from "../components/FormInput";
import { PrimaryButton } from "../components/Buttons";

const SignInForm = () => {
  return (
    <form>
      <h1>Sign in to your account</h1>
      <p className="announcement">
        Create encrypted, resilient, and cross-application data storage in
        seconds.
      </p>
      <hr />
      <FormInput name="userEmail" type="email" label="Email Adress" />
      <FormInput name="password" type="password" label="Password" />
      <p className="text-align-right">
        <Link to="/reset">Forgot Pasword?</Link>
      </p>
      <Link to="/success">
        <PrimaryButton type="submit">Continue</PrimaryButton>
      </Link>
      <hr />
      <p>
        Dont have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </form>
  );
};

export default SignInForm;
