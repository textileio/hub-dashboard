import { useState, useContext } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { TertiarySmallButton } from "../../components/Buttons";
import { KeyInfo } from "../../store/State";
import Context from "../../store/Context";
import { OrgInterface } from "../../components/Utils";

const HiddenKeyContainer = styled.div`
  filter: blur(4px);
  opacity: 0.7;
  user-select: none;
`;

const ActionsContainer = styled.td`
  button {
    margin-left: 10px;
  }
`;

const KeyItem = ({
  pubKey,
  secret,
  secure,
  valid,
  threads,
}: Omit<KeyInfo, "key"> & { pubKey: string }) => {
  const [visible, setVisible] = useState(false);
  const [state, actions] = useContext(Context);
  const { currentOrganization } = useParams<OrgInterface>();
  const username = state.user.sessionInfo?.username;
  const org =
    currentOrganization === username || username === undefined
      ? ""
      : currentOrganization;
  const handleRevoke = (key: string) => {
    return actions.revokeKey(key, org, (_str, err) => {
      if (err) console.log(err);
    });
  };
  return (
    <tr>
      <td>{pubKey}</td>
      <td>
        {visible ? (
          <span>{secret}</span>
        ) : (
          <HiddenKeyContainer>{secret}</HiddenKeyContainer>
        )}
      </td>
      <td>{secure.toString()}</td>
      <td>{valid.toString()}</td>
      <td>{threads}</td>
      <ActionsContainer>
        <TertiarySmallButton onClick={() => setVisible(!visible)}>
          {visible ? "Hide" : "Show"}
        </TertiarySmallButton>
        <TertiarySmallButton onClick={() => handleRevoke(pubKey)}>
          Revoke
        </TertiarySmallButton>
        {/* <TertiarySmallButton>Export</TertiarySmallButton> */}
      </ActionsContainer>
    </tr>
  );
};

export default KeyItem;
