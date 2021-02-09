import styled from "styled-components";
import { PrimaryButton } from "../../components/Buttons";
import { space } from "../../utils";

const OrganizationCardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${({ theme }) => theme.neutral400};
  border-radius: 4px;
  padding: ${space[3]};
  margin-bottom: ${space[2]};
  h5 {
    margin: 0;
  }
  button {
    max-width: 140px;
    margin: 0;
  }
`;

const OrgAvatar = styled.div`
  background-color: lightgray;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  margin-right: ${space[3]};
`;

interface OrganizationCardProps {
  orgName: string;
  userRole?: string;
  memberCount?: number;
}

const OrganizationCard = ({
  orgName,
  userRole,
  memberCount,
}: OrganizationCardProps) => {
  return (
    <OrganizationCardContainer>
      <OrgAvatar />
      <h5>{orgName}</h5>
      <div>
        {userRole ? (
          <>
            Role: <b> {userRole}</b>
          </>
        ) : null}
      </div>

      {userRole ? (
        <>
          <div>
            Members: <b> {memberCount}</b>
          </div>
          <PrimaryButton>Edit</PrimaryButton>
        </>
      ) : null}
    </OrganizationCardContainer>
  );
};

export default OrganizationCard;
