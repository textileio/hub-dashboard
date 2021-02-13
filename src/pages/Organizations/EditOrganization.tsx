import { useState, FormEvent } from "react";
import styled from "styled-components";
import FormInput from "../../components/FormInput";
import { PrimaryButton, DocsButton } from "../../components/Buttons";
import { useContext } from "react";
import Context from "../../store/Context";
import { useHistory, useParams } from "react-router";
import { OrgInterface } from "../../components/Utils";
import { borderRadius, space } from "../../utils";
import { ReactComponent as DocsIcon } from "../../assets/icons/docs-icon.svg";

const EditOrganizationContainer = styled.div`
  width: 100%;
`;

const OrganizationOptions = styled.div`
  display: flex;
`;

const Panel = styled.div`
  width: 100%;
`;

const RightPanel = styled(Panel)`
  padding-left: ${space[4]};
  margin-left: ${space[4]};
`;

const MemberList = styled.table`
  width: 100%;
  text-align: left;
  /* border: 1px solid ${({ theme }) => theme.primary}; */
  border-radius: ${borderRadius.default};
  th,
  td {
    padding: ${space[1]};
    &:last-child {
      text-align: right;
    }
  }
  td {
    border-top: 1px solid ${({ theme }) => theme.neutral300};
  }
  tr {
    width: 100%;
  }
`;

export const AddOrganization = () => {
  const [orgName, setOrgName] = useState<string>("");
  const [, actions] = useContext(Context);
  const history = useHistory();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    actions.createOrg(orgName, (_orgInfo, err) => {
      if (err) {
        console.error(err);
        return;
      }
      history.push(`../${orgName}`);
    });
  };

  return (
    <EditOrganizationContainer>
      <h1>Add Organization</h1>
      <a
        href="https://docs.textile.io/hub/accounts/#organizations"
        target="_blank"
        rel="noreferrer"
      >
        <DocsButton>
          Learn more about Organizations
          <DocsIcon />
        </DocsButton>
      </a>
      <p>
        Organizations allow multiple developers to work together using shared
        resources. Members of an organization can collaboratively manage,
        create, or remove API keys, and more.
      </p>
      <hr />
      <OrganizationOptions>
        <Panel>
          <h2>Settings</h2>
          <form onSubmit={handleSubmit}>
            <FormInput
              name="orgName"
              type="text"
              label="Organization Name"
              value={orgName}
              onChange={(e) => setOrgName(e.target.value)}
            />
            {/* <FormInput
              name="orgDescription"
              type="text"
              label="Description"
              disabled
            /> */}
            <PrimaryButton type="submit">Add Organization</PrimaryButton>
          </form>
        </Panel>
      </OrganizationOptions>
    </EditOrganizationContainer>
  );
};

export const EditOrganization = () => {
  const [state, actions] = useContext(Context);
  const [emailAddress, setEmailAddress] = useState<string>("");
  const { currentOrganization } = useParams<OrgInterface>();
  const [filteredOrg] =
    state.user.orgs?.filter((org) => org.name === currentOrganization) ?? [];

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    actions.inviteToOrg(emailAddress, currentOrganization, (_invite, err) => {
      console.log(_invite);
      if (err) {
        console.error(err);
        return;
      }
    });
  };
  return (
    <EditOrganizationContainer>
      <h1>Edit Organization</h1>
      <hr />
      <OrganizationOptions>
        <Panel>
          <h2>General Information</h2>
          {/* <FormInput
            name="orgName"
            type="text"
            label="Organization Name"
            value={filteredOrg.name}
          /> */}
          {filteredOrg && filteredOrg.name}
          {/* <FormInput name="orgName" type="text" label="Description" disabled /> */}
          <h3>Add Member</h3>
          <p>Enter your team member's email to send them a new invite.</p>
          <form onSubmit={handleSubmit}>
            <FormInput
              name="newMember"
              type="text"
              label="Email Address"
              value={emailAddress}
              onChange={(e) => setEmailAddress(e.target.value)}
            />
            <PrimaryButton>Send Invite</PrimaryButton>
          </form>
        </Panel>
        <RightPanel>
          <h3>Current Members</h3>
          <MemberList>
            {filteredOrg && (
              <tbody>
                {filteredOrg.members.map((member) => (
                  <tr key={member.key}>
                    <td>{member.username}</td>
                  </tr>
                ))}
              </tbody>
            )}
          </MemberList>
        </RightPanel>
      </OrganizationOptions>
    </EditOrganizationContainer>
  );
};
