import { Link } from "react-router-dom";

import FormInput from "../../components/FormInput";
import { PrimaryButton } from "../../components/Buttons";

const ResetPasswordForm = () => {
  return (
    <form>
      <h1>Reset Password</h1>
      <p className="announcement">
        Enter the email address associated with your account and we'll send you
        a link to reset your password.
      </p>
      <hr />
      <FormInput name="userEmail" type="email" label="Email Adress" />
      <PrimaryButton type="submit">Reset Password</PrimaryButton>
      <hr />
      <p>
        Otherwise return to <Link to="/signin">Sign In</Link> or{" "}
        <Link to="/signup">Sign Up</Link>
      </p>
    </form>
  );
};

export default ResetPasswordForm;
