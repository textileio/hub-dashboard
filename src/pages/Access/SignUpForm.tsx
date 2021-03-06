import { useState, useContext } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import FormInput from "../../components/FormInput";
import { PrimaryButton, PrimaryButtonInverted } from "../../components/Buttons";
import Context from "../../store/Context";
import Loader from "../../components/Loader";
import MessageBox from "../../components/MessageBox";

const ButtonsContainer = styled.div`
  display: flex;
  button {
    width: 100%;
    &:first-child {
      margin-right: 20px;
    }
  }
`;

const SignUpForm = () => {
  const [state, actions] = useContext(Context);
  const [username, setUsername] = useState<string | undefined>();
  const [type, setType] = useState<string>("signin");
  const [email, setEmail] = useState<string | undefined>();
  const history = useHistory();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        actions.clearError();
        console.log(type);
        switch (type) {
          case "signup":
            if (username && email) {
              actions.signUp(username, email, (_res, err) => {
                if (err) {
                  return;
                }
                history.push("/");
              });
            }
            break;
          case "signin":
            if (username && email) {
              actions.signIn(username, email, (_res, err) => {
                if (err) {
                  return;
                }
                history.push("/");
              });
            }
            break;
        }
      }}
    >
      <h1>Access your Account</h1>
      <p className="announcement">
        Your gateway to encrypted, resilient, and cross-application data
        storage.
      </p>
      {state.error && (
        <MessageBox type="error" message={state.error} title="Error" />
      )}
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
      {state.loading ? (
        <div style={{ display: "flex" }}>
          <Loader size={60} count={2} speed={2} />
          <div>
            <p className="announcement" style={{ marginLeft: "20px" }}>
              Please check your email...
              <br />
              you should have a confirmation link
            </p>
          </div>
        </div>
      ) : (
        <ButtonsContainer>
          <PrimaryButton type="submit" onClick={() => setType("signin")}>
            Sign In
          </PrimaryButton>
          <PrimaryButtonInverted
            type="submit"
            onClick={() => setType("signup")}
          >
            Sign Up
          </PrimaryButtonInverted>
        </ButtonsContainer>
      )}
    </form>
  );
};

export default SignUpForm;
