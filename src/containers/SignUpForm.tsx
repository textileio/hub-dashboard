import { useState, useContext } from "react";
import { useHistory } from "react-router";

import FormInput from "../components/FormInput";
import { PrimaryButton } from "../components/Buttons";
import Context from "../store/Context";
import Loader from "../components/Loader";

const SignUpForm = () => {
  const [, actions] = useContext(Context);
  const [username, setUsername] = useState<string | undefined>();
  const [loading, setLoading] = useState<boolean | false>();
  const [email, setEmail] = useState<string | undefined>();
  const history = useHistory();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setLoading(true);
        if (username && email)
          actions.signUp(username, email, () => history.push("/success"));
      }}
    >
      <h1>Create your Account</h1>
      <p className="announcement">
        Create encrypted, resilient, and cross-application data storage in
        seconds.
      </p>
      <hr />
      <FormInput
        name="userEmail"
        type="email"
        label="Email Adress"
        value={email}
        onChange={({ target: { value } }) => value.length && setEmail(value)}
      />
      <FormInput
        name="userName"
        type="text"
        label="Username"
        value={username}
        onChange={({ target: { value } }) => value.length && setUsername(value)}
      />
      {loading ? (
        <div style={{ display: "flex" }}>
          <Loader size={60} count={2} speed={2} />
          <div>
            <p className="announcement" style={{ marginLeft: "20px" }}>
              Creating Account... Please Wait
            </p>
          </div>
        </div>
      ) : (
        <PrimaryButton type="submit">Create Account</PrimaryButton>
      )}
    </form>
  );
};

export default SignUpForm;
