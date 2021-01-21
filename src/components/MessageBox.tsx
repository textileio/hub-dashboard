import styled from "styled-components";
import { defaultTheme, typescale } from "../utils";

const { small } = typescale.desktop;
const { errorDefault, accentA } = defaultTheme;

const MessageBoxContainer = styled.div`
  color: ${errorDefault};
  font-size: ${small};
  width: 100%;
  padding: 10px;
  background-color: ${accentA};
  border: 1px dashed ${errorDefault};
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
