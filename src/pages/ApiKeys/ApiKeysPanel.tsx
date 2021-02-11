import { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Context from "../../store/Context";
import { KeyType } from "../../store/State";
import { PrimaryButton, DocsButton } from "../../components/Buttons";
import KeyList from "./KeyList";

import { ReactComponent as DocsIcon } from "../../assets/icons/docs-icon.svg";

const ApiKeysPanelContainer = styled.div`
  width: 100%;
`;

class ApiKeysPanel extends Component {
  static contextType = Context;
  // For TS pre-3.7:
  context!: React.ContextType<typeof Context>;
  // For TS 3.7 and above:
  // declare context: React.ContextType<typeof MyContext>;
  ignoreLastFetch = false;

  componentDidMount() {
    // Fetch data initially
    this.fetchKeys();
  }

  fetchKeys() {
    const [state, actions] = this.context;
    actions.fetchKeys(state.user.sessionInfo?.username ?? "", (_keys, err) => {
      if (err && err.message.includes("Invalid session")) {
        actions.signOut();
      }
    });
  }

  render() {
    const [state] = this.context;
    return (
      <ApiKeysPanelContainer>
        <h1>Manage Keys </h1>
        <a
          href="https://docs.textile.io/hub/apis/"
          target="_blank"
          rel="noreferrer"
        >
          <DocsButton>
            Learn more about API Keys
            <DocsIcon />
          </DocsButton>
        </a>
        <p>
          You can access the Hub APIs through the use of API keys:
          <br />
          <b>Account keys</b> grant access to the developer's resources.
          <br />
          <b>User group</b> keys only grant access to new resources for new
          identities.
        </p>

        <br />
        <Link to="editapikey">
          <PrimaryButton>Create Key +</PrimaryButton>
        </Link>
        <hr />
        <h3>Account Keys</h3>
        <KeyList keys={state.user.keys ?? []} typeFilter={KeyType.USER} />
        <h3>User group Keys</h3>
        <KeyList keys={state.user.keys ?? []} typeFilter={KeyType.ACCOUNT} />
      </ApiKeysPanelContainer>
    );
  }
}

export default ApiKeysPanel;
