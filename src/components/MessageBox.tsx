import styled from "styled-components";
import { typescale } from "../utils";

const { small } = typescale.desktop;

const MessageBoxContainer = styled.div`
  color: ${({ theme }) => theme.errorDefault};
  font-size: ${small};
  width: 100%;
  padding: 10px;
  background-color: ${({ theme }) => theme.accentA};
  border: 1px dashed ${({ theme }) => theme.errorDefault};
  border-radius: 4px;
  p {
    margin: 0;
  }
`;

interface MessageBoxProps {
  title: string;
  message: string;
  type: "error" | "warning";
}

const MessageBox = ({ title, message, type }: MessageBoxProps) => {
  return (
    <MessageBoxContainer>
      <p>
        {" "}
        <b>{title}: </b> {message}{" "}
      </p>
    </MessageBoxContainer>
  );
};

export default MessageBox;
