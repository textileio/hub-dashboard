import { useContext } from "react";
import { Link } from "react-router-dom";
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
      <Link to="/editapikey">
        <PrimaryButton>Add Key +</PrimaryButton>
      </Link>
      <hr />
      <h2>Account Keys</h2>
      <KeyList keys={state.fakeKeys} typeFilter="usergroup" />
      <h2>User group Keys</h2>
      <KeyList keys={state.fakeKeys} typeFilter="account" />
    </ApiKeysPanelContainer>
  );
};

export default ApiKeysPanel;
