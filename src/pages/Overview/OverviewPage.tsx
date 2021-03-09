import { useContext } from "react";
import { Redirect, useParams } from "react-router";
import styled from "styled-components";
import Toast from "../../components/Toast";
import { OrgInterface } from "../../components/Utils";
import Context from "../../store/Context";
import { Card } from "../../components/Card";
import { DefaultButton } from "../../components/Buttons";

const OverviewContainer = styled.div``;

const OverviewTitle = styled.h1`
  span {
    color: ${({ theme }) => theme.primary};
  }
`;

const Command = styled.span`
  background-color: ${({ theme }) => theme.accentA};
  padding: 4px 10px;
  color: ${({ theme }) => theme.neutral1000};
  border-radius: 4px;
`;

const Step = styled.span`
  margin-right: 10px;
  color: ${({ theme }) => theme.primary};
  border: 1px solid ${({ theme }) => theme.primary};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  min-width: 35px;
  width: 35px;
  height: 35px;
  border-radius: 50%;
`;

const UsefulLinks = styled.ol`
  padding: 0;
  list-style-type: none;
  width: 100%;
  li {
    display: flex;
    align-items: center;
    margin: 15px 0;
    width: 100%;
  }
`;

const MemberList = styled.ul`
  li {
    margin: 20px;
    list-style-type: initial;
  }
`;

const OverviewPage = () => {
  const [state] = useContext(Context);
  const { currentOrganization } = useParams<OrgInterface>();
  const username = state.user.sessionInfo?.username;
  const [filteredOrg] =
    state.user.orgs?.filter((org) => org.slug === currentOrganization) ?? [];

  return (
    <OverviewContainer>
      <Toast
        message={"Welcome to " + currentOrganization + "'s organization panel"}
        kind="default"
      />
      <Card>
        <h3>New to textile?</h3>
        <p>
          Textile is a set of open source tools that provide a decentralized
          database, IPFS-based storage, content hosting, and more over Libp2p,
          IPFS, and Filecoin.
        </p>
        <DefaultButton>Follow the Docs</DefaultButton>
      </Card>
      <OverviewTitle>
        <span>{currentOrganization ?? username}</span> Overview
      </OverviewTitle>
      <p className="announcement">
        <b>Next Steps:</b>
      </p>
      <UsefulLinks>
        <li>
          <Step>1</Step>
          <div>
            Download the{" "}
            <a
              href="https://docs.textile.io/hub/accounts/"
              rel="noreferrer"
              target="_blank"
            >
              Hub CLI →
            </a>
          </div>
        </li>
        <li>
          <Step>2</Step>
          <div>
            Use <Command>hub login</Command> to get started.ac
          </div>
        </li>
        <li>
          <Step>3</Step>
          <div>
            Read the{" "}
            <a href="https://docs.textile.io/" rel="noreferrer" target="_blank">
              docs →{" "}
            </a>{" "}
            and start building!
          </div>
        </li>
      </UsefulLinks>
      {username && filteredOrg ? (
        <div>
          <h2>Organization Members</h2>
          <MemberList>
            {filteredOrg.members.map((member) => (
              <li key={member.key}>{member.username}</li>
            ))}
          </MemberList>
        </div>
      ) : username === undefined ? null : username !== currentOrganization &&
        state.user.orgs ? (
        <Redirect to="/notfound" />
      ) : null}
    </OverviewContainer>
  );
};

export default OverviewPage;
