import { useContext } from "react";
import styled from "styled-components";
import Context from "../../store/Context";
import { PrimaryButton } from "../../components/Buttons";
import KeyList from "./KeyList";

const ApiKeysPanelContainer = styled.div`
  width: 100%;
`;

const ApiKeysPanel = () => {
  const [state] = useContext(Context);

  return (
    <ApiKeysPanelContainer>
      <h1>Manage Keys</h1>
      <p>These keys will allow you to authenticate API requests.</p>
      <PrimaryButton>Add Key +</PrimaryButton>
      <hr />
      <KeyList keys={state.fakeKeys} />
    </ApiKeysPanelContainer>
  );
};

export default ApiKeysPanel;
