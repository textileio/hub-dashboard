import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";

import { PrimaryButton } from "../components/Buttons";

const SuccessForm = () => {
  const [{ sessionInfo }] = useCookies();
  return (
    <form>
      <h1>Account created</h1>
      <p className="announcement">
        Your account has been successfully created, you may now log in to your
        account. Here's your session info: <br />
        {JSON.stringify(sessionInfo)}...
      </p>
      <Link to="/signin">
        <PrimaryButton type="submit">Continue</PrimaryButton>
      </Link>
    </form>
  );
};

export default SuccessForm;
