import styled from "styled-components";
import { Switch, Route } from "react-router-dom";

import SignInForm from "../containers/SignInForm";
import SignUpForm from "../containers/SignUpForm";
import ResetPasswordForm from "../containers/ResetPasswordForm";
import SuccessForm from "../containers/SuccessForm";
import FakeTesting from "../containers/FakeTesting";
import { ReactComponent as TextileLogo } from "../assets/textile-logo-h.svg";
import { defaultTheme } from "../utils";

const { neutral100, neutral200, primary } = defaultTheme;

const AccessPageContainer = styled.div`
  display: flex;
`;

const panel = styled.div`
  display: flex;
  width: 50vw;
  height: 100vh;
  padding: 100px;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: center;
  .content {
    max-width: 380px;
  }
`;

const LeftPanel = styled(panel)`
  /*
  /* opacity: 0; */
  animation: scroll 5s linear infinite;
  background: repeating-linear-gradient(
    45deg,
    #f9f9f9,
    #f9f9f9 5%,
    #f6f6f6 5%,
    #f6f6f6 10%
  );
  background-size: 200px 200px;

  align-items: flex-end;
  background-color: ${neutral200};
  h3 {
    margin: 40px 0 20px 0;
    &::before {
      content: "✓  ";
      color: ${primary};
    }
  }
  p {
    margin: 0;
  }
  @keyframes scroll {
    0% {
      background-position: initial;
    }
    100% {
      background-position: 100px 0px;
    }
  }
`;

const RightPanel = styled(panel)`
  background-color: ${neutral100};
`;

const AccessPage = () => {
  return (
    <AccessPageContainer>
      <LeftPanel>
        <div className="content">
          <h2>Tools for developers</h2>
          <p className="announcement">
            Interoperable, open-source, and easy to use tools to build
            unstoppable apps and safe-guard the world's data.
          </p>
          <hr />
          <h3>Create Buckets</h3>
          <p>
            Dynamic content management for teams. Host websites, blogs, and data
            on IPFS.
          </p>
          <h3>Manage ThreadS</h3>
          <p>
            A distributed, scalable, and flexible database solution for
            decentralized applications.
          </p>
          <h3>Access Powergate</h3>
          <p>
            Drop-in Filecoin API and management system for your critical data.
          </p>
        </div>
      </LeftPanel>
      <div />
      <RightPanel>
        <div className="content">
          <TextileLogo />
          <FakeTesting />
          <Switch>
            <Route path="/signin" component={SignInForm} />
            <Route path="/signup" component={SignUpForm} />
            <Route path="/reset" component={ResetPasswordForm} />
            <Route path="/success" component={SuccessForm} />
          </Switch>
        </div>
      </RightPanel>
    </AccessPageContainer>
  );
};

export default AccessPage;
