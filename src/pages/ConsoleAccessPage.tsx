import styled from "styled-components";
import FormInput from "../components/form-input";
import { ReactComponent as TextileLogo } from "../assets/textile-logo-h.svg";
import { CardDefault } from "../components/Card";
import { PrimaryButton } from "../components/buttons";

const ConsoleAccessPageContainer = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  height: 100vh;
  .cli-card {
    display: flex;
    align-self: center;
    max-width: 280px;
    flex-direction: column;
  }
`;

const AccessPage = () => {
  return (
    <ConsoleAccessPageContainer>
      <CardDefault className="cli-card">
        <TextileLogo />
        <h3>Sign In</h3>
        <p>Enter the email address associated with your account.</p>
        <form>
          <FormInput name="userEmail" type="email" label="Email Adress" />
          <PrimaryButton type="submit">Sign In</PrimaryButton>
        </form>
      </CardDefault>
    </ConsoleAccessPageContainer>
  );
};

export default AccessPage;
