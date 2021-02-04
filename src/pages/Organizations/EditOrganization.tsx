import styled from "styled-components";
import FormInput from "../../components/FormInput";

const EditOrganizationContainer = styled.div`
  width: 100%;
`;

const EditOrganization = () => {
  return (
    <EditOrganizationContainer>
      <h1>Edit Organizations</h1>
      <p>Manage Team Members edit team information and permissions</p>
      <hr />
      <h2>Information</h2>
      <FormInput name="orgName" type="text" label="Organization Name" />
      <FormInput name="orgName" type="text" label="Description" />
    </EditOrganizationContainer>
  );
};

export default EditOrganization;
