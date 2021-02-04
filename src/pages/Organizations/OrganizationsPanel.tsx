import styled from "styled-components";
import { PrimaryButton } from "../../components/Buttons";
import OrganizationCard from "./OrganizationCard";

const OrganizationsPanelContainer = styled.div``;

const OrganizationsPanel = () => {
  return (
    <OrganizationsPanelContainer>
      <h1>Manage your Organizations</h1>
      <p>
        Organizations allow multiple developers to work together using shared
        resources. Members of an organization can collaboratively manage,
        create, or remove API keys, and more.
      </p>
      <PrimaryButton>Create New Organization +</PrimaryButton>
      <hr />
      <h3>Organizations List</h3>
      <OrganizationCard
        orgName="organization"
        userRole="Admin"
        memberCount={8}
      />
      <OrganizationCard
        orgName="organization"
        userRole="Admin"
        memberCount={8}
      />
    </OrganizationsPanelContainer>
  );
};

export default OrganizationsPanel;
