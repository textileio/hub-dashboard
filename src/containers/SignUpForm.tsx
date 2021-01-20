import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

import FormInput from "../components/FormInput";
import { PrimaryButton } from "../components/Buttons";
import Context from "../store/Context";

const SignUpForm = () => {
  const [, actions] = useContext(Context);
  const [password, setPassword] = useState<string | undefined>();
  const [username, setUsername] = useState<string | undefined>();
  const [email, setEmail] = useState<string | undefined>();
  const history = useHistory();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
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
      <FormInput
        name="password"
        type="password"
        label="Password"
        value={password}
        onChange={({ target: { value } }) => value.length && setPassword(value)}
      />
      {/* <FormInput name="password" type="password" label="Confirm Password" /> */}
      <PrimaryButton type="submit">Create Account</PrimaryButton>
      <hr />
      <p>
        {/* Session info: {state.user?.sessionInfo?.session.slice(0, 15)}... */}
        <br />
        Already have an account? <Link to="/signin">Sign In</Link>
      </p>
    </form>
  );
};

export default SignUpForm;
