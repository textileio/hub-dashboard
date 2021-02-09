import { useParams } from "react-router";
import styled from "styled-components";

const OverviewTitle = styled.h1`
  span {
    color: ${({ theme }) => theme.primary};
  }
`;

interface ParamTypes {
  currentOrganization: string;
}

const OverviewPage = () => {
  const { currentOrganization } = useParams<ParamTypes>();
  return (
    <div>
      <OverviewTitle>
        <span>{currentOrganization}</span> Overview
      </OverviewTitle>
    </div>
  );
};

export default OverviewPage;
