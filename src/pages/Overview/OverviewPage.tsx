import { useParams } from "react-router";
import styled from "styled-components";
import { useContext } from "react";
import Context from "../../store/Context";

const OverviewTitle = styled.h1`
  span {
    color: ${({ theme }) => theme.primary};
  }
`;

interface ParamTypes {
  currentOrganization: string;
}

const OverviewPage = () => {
  const [state] = useContext(Context);
  const { currentOrganization } = useParams<ParamTypes>();
  return (
    <div>
      <OverviewTitle>
        <span>{currentOrganization ?? state.user.sessionInfo?.username}</span>{" "}
        Overview
      </OverviewTitle>
    </div>
  );
};

export default OverviewPage;
