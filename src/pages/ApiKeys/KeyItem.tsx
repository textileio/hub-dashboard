import styled from "styled-components";
import { TertiarySmallButton } from "../../components/Buttons";

const HiddenKeyContainer = styled.div`
  filter: blur(4px);
  opacity: 0.7;
`;

interface KeyItemProps {
  publicKey: string;
  secretKey: string;
  type: "account" | "usergroup";
  secure: boolean;
  valid: boolean;
  threads: number;
}

const KeyItem = ({
  publicKey,
  secretKey,
  type,
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
      <td>{type}</td>
      <td>{secure.toString()}</td>
      <td>{valid.toString()}</td>
      <td>{threads}</td>
      <td>
        <TertiarySmallButton>Reveal</TertiarySmallButton>
        <TertiarySmallButton>Revoke</TertiarySmallButton>
        <TertiarySmallButton>Export</TertiarySmallButton>
      </td>
    </tr>
  );
};

export default KeyItem;
