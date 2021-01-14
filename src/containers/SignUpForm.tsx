import { useState } from "react";
import { Link } from "react-router-dom";
import FormInput from "../components/form-input";
import { PrimaryButton } from "../components/buttons";
import { useStore } from "../store/Provider";

const SignUpForm = () => {
  const [state, actions] = useStore();
  const [password, setPassword] = useState<string | undefined>();
  const [username, setUsername] = useState<string | undefined>();
  const [email, setEmail] = useState<string | undefined>();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (username && email) actions.signUp(username, email);
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
      {/* <Link to="/success"> */}
      <PrimaryButton type="submit">Create Account</PrimaryButton>
      {/* </Link> */}
      <hr />
      <p>
        Session info: {state.user?.sessionInfo?.session.slice(0, 15)}...
        <br />
        Already have an account? <Link to="/signin">Sign In</Link>
      </p>
    </form>
  );
};

export default SignUpForm;
