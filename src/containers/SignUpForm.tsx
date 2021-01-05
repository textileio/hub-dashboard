import { Link } from "react-router-dom";
import FormInput from "../components/form-input";
import { PrimaryButton } from "../components/buttons";

const SignUpForm = () => {
  return (
    <form>
      <h1>Create your Account</h1>
      <p className="announcement">
        Create encrypted, resilient, and cross-application data storage in
        seconds.
      </p>
      <hr />
      <FormInput name="userEmail" type="email" label="Email Adress" />
      <FormInput name="userName" type="text" label="Username" />
      <FormInput name="password" type="password" label="Password" />
      <FormInput name="password" type="password" label="Confirm Password" />
      <Link to="/success">
        <PrimaryButton type="submit">Create Account</PrimaryButton>
      </Link>
      <hr />
      <p>
        Already have an account? <Link to="/signin">Sign In</Link>
      </p>
    </form>
  );
};

export default SignUpForm;
