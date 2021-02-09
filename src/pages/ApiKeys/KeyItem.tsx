import styled from "styled-components";
import { TertiarySmallButton } from "../../components/Buttons";

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

interface KeyItemProps {
  publicKey: string;
  secretKey: string;
  secure: boolean;
  valid: boolean;
  threads: number;
}

const KeyItem = ({
  publicKey,
  secretKey,
  secure,
  valid,
  threads,
}: KeyItemProps) => {
  return (
    <tr>
      <td>{publicKey}</td>
      <td>
        <HiddenKeyContainer>{secretKey}</HiddenKeyContainer>
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
