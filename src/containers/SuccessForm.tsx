import { Link } from "react-router-dom";
import { PrimaryButton } from "../components/buttons";

const SuccessForm = () => {
  return (
    <form>
      <h1>Account created</h1>
      <p className="announcement">
        Your account has been successfully created, you may now log in to your
        account.
      </p>
      <Link to="/signin">
        <PrimaryButton type="submit">Continue</PrimaryButton>
      </Link>
    </form>
  );
};

export default SuccessForm;
