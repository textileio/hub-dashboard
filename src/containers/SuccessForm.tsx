import { useContext } from "react";
import { Link } from "react-router-dom";

import { PrimaryButton } from "../components/Buttons";
import Context from "../store/Context";

const SuccessForm = () => {
  const [{ user }] = useContext(Context);
  return (
    <form>
      <h1>Account created</h1>
      <p className="announcement">
        Your account has been successfully created, you may now log in to your
        account. Here's your session info: <br />
        {user?.sessionInfo?.session?.slice(0, 15)}...
      </p>
      <Link to="/signin">
        <PrimaryButton type="submit">Continue</PrimaryButton>
      </Link>
    </form>
  );
};

export default SuccessForm;
