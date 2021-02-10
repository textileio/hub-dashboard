import styled from "styled-components";
import SignUpForm from "./SignUpForm";
import { ReactComponent as TextileLogo } from "../../assets/textile-logo-h.svg";
import { fadeIn, hexOpacity } from "../../utils";

import Loader from "../../components/Loader";

const AccessPageContainer = styled.div`
  display: flex;
`;

const panel = styled.div`
  @media (max-width: 768px) {
    width: 100%;
    padding: 40px;
    margin: 40px 0;
    align-items: center;
    height: auto;
  }
  display: flex;
  width: 50vw;
  height: 100vh;
  padding: 100px;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: center;
  .content {
    max-width: 380px;
    animation: ${fadeIn} 0.5s;
  }
`;

const LeftPanel = styled(panel)`
  @media (max-width: 768px) {
    display: none;
  }
  background-size: 200px 200px;
  align-items: flex-end;
  background-color: ${({ theme }) => theme.neutral100 + hexOpacity[7]};
  h3 {
    margin: 40px 0 20px 0;
    &::before {
      content: "✓  ";
      color: ${({ theme }) => theme.primary};
    }
  }
  p {
    margin: 0;
  }
`;

const RightPanel = styled(panel)`
  background-color: ${({ theme }) => theme.neutral100};
`;

const BackgroundContainer = styled.div`
  z-index: -1;
  position: fixed;
  transform: rotate(180deg);
  right: 50%;
`;

const AccessPage = () => {
  return (
    <AccessPageContainer>
      <LeftPanel>
        <BackgroundContainer>
          <Loader size={2500} count={16} speed={6} />
        </BackgroundContainer>
        <div className="content">
          <h2>Tools for developers</h2>
          <p className="announcement">
            Interoperable, open-source, and easy to use tools to build
            unstoppable apps and safe-guard the world's data.
          </p>
          <h3>Hosted Infrastructure</h3>
          <p>
            Use our kick ass infrastructure that includes{" "}
            <a href="https://ipfs.io/" rel="noreferrer" target="_blank">
              IPFS{" "}
            </a>
            and{" "}
            <a href="https://filecoin.io/" rel="noreferrer" target="_blank">
              Filecoin
            </a>{" "}
            network management, scaling, and more.
          </p>
          <h3>Flexible Tooling</h3>
          <p>
            Build with the IPFS gateway, IPNS publishing, object storage in
            Buckets, offline messaging with Mailboxes, and dynamic databases
            over Threads.
          </p>
          <h3>The Best Community</h3>
          <p>
            Join 1000s of developers building with Textile. We're here to help
            and just a chat away on our{" "}
            <a
              href="https://slack.textile.io/"
              rel="noreferrer"
              target="_blank"
            >
              community forum
            </a>
            .
          </p>
        </div>
      </LeftPanel>
      <div />
      <RightPanel>
        <div className="content">
          <TextileLogo />
          <SignUpForm />
        </div>
      </RightPanel>
    </AccessPageContainer>
  );
};

export default AccessPage;
