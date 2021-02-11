import styled from "styled-components";
import FormInput from "../../components/FormInput";
import {
  PrimaryButton,
  DocsButton,
  TertiarySmallButton,
} from "../../components/Buttons";
// import { useContext } from "react";
// import Context from "../../store/Context";
// import { useParams } from "react-router";
// import { OrgInterface } from "../../components/Utils";
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

const EditOrganization = () => {
  // const [state] = useContext(Context);
  // const { currentOrganization } = useParams<OrgInterface>();
  // const [filteredOrg] =
  //   state.user.orgs?.filter((org) => org.name === currentOrganization) ?? [];
  return (
    <EditOrganizationContainer>
      <h1>Edit Organizations</h1>
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
          <h2>General Information</h2>
          <FormInput name="orgName" type="text" label="Organization Name" />
          <FormInput name="orgName" type="text" label="Description" disabled />
          <h3>Add Member</h3>
          <p>Manage Team Members edit team information and permissions</p>
          <FormInput name="newMember" type="text" label="Email Address" />
          <PrimaryButton>Send Invite</PrimaryButton>
        </Panel>
        <RightPanel>
          <h3>Current Members</h3>
          <MemberList>
            <thead>
              <tr>
                <th>name</th>
                <th>actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>email-malio@email.com</td>
                <td>
                  <TertiarySmallButton>Remove</TertiarySmallButton>
                </td>
              </tr>
              <tr>
                <td>email-malio@email.com</td>
                <td>
                  <TertiarySmallButton>Remove</TertiarySmallButton>
                </td>
              </tr>
              <tr>
                <td>email-malio@email.com</td>
                <td>
                  <TertiarySmallButton>Remove</TertiarySmallButton>
                </td>
              </tr>
              <tr>
                <td>email-malio@email.com</td>
                <td>
                  <TertiarySmallButton>Remove</TertiarySmallButton>
                </td>
              </tr>
            </tbody>
          </MemberList>
        </RightPanel>
      </OrganizationOptions>
    </EditOrganizationContainer>
  );
};

export default EditOrganization;
