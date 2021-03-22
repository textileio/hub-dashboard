import { useState } from "react";
import styled from "styled-components";
import { Copy } from "@styled-icons/boxicons-regular";
import { borderRadius, space } from "../utils";

const CodeInputContainer = styled.div`
  padding: ${space[1]};
  cursor: pointer;
  margin: ${space[1]} 0;
  border-radius: ${borderRadius.default};
  border: 1px solid ${({ theme }) => theme.neutral400};
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  overflow: hidden;
  :hover {
    svg {
      transition: all 0.2s linear;
      color: ${({ theme }) => theme.neutral1000};
    }
  }
`;

const CodeContainer = styled.div``;

const CopyButton = styled.div`
  display: flex;
  svg {
    margin-right: ${space[1]};
    max-width: 24px;
    color: ${({ theme }) => theme.neutral500};
  }
`;

interface CodeInputProps {
  code: string;
}

export const CodeInput = ({ code }: CodeInputProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleClick = () => {
    navigator.clipboard.writeText(code);
    setIsVisible(!isVisible);
    setTimeout(() => {
      setIsVisible(isVisible);
    }, 1000);
  };

  return (
    <CodeInputContainer onClick={handleClick}>
      <CopyButton>
        <Copy />
      </CopyButton>
      <CodeContainer>
        <code>{isVisible ? "Copied to Clipboard!" : code}</code>
      </CodeContainer>
    </CodeInputContainer>
  );
};
