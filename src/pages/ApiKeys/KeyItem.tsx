import styled from "styled-components";
import { TertiarySmallButton } from "../../components/Buttons";
import { KeyInfo } from "../../store/State";

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

const KeyItem = ({ key, secret, secure, valid, threads }: KeyInfo) => {
  return (
    <tr>
      <td>{key}</td>
      <td>
        <HiddenKeyContainer>{secret}</HiddenKeyContainer>
      </td>
      <td>{secure.toString()}</td>
      <td>{valid.toString()}</td>
      <td>{threads}</td>
      <ActionsContainer>
        <TertiarySmallButton>Reveal</TertiarySmallButton>
        <TertiarySmallButton>Revoke</TertiarySmallButton>
        <TertiarySmallButton>Export</TertiarySmallButton>
      </ActionsContainer>
    </tr>
  );
};

export default KeyItem;
