import React, { useContext } from "react";
import styled from "styled-components";
import Context from "../store/Context";
import { toastFade, borderRadius } from "../utils";

const ToastBox = styled.div`
  border-radius: ${borderRadius.default};
  position: fixed;
  bottom: 40px;
  right: 40px;
  padding: 8px;
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: 300px;
  pointer-events: none;
  z-index: 9999;
  animation-duration: 5s;
  animation-fill-mode: forwards;
  animation-name: ${toastFade};
  animation-timing-function: linear;
  background-color: ${({ theme }) => theme.neutral100};
`;

const DefaultToast = styled(ToastBox)`
  border: 1px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
`;

const ErrorToast = styled(ToastBox)`
  border: 1px solid ${({ theme }) => theme.errorDefault};
  color: ${({ theme }) => theme.errorDefault};
`;

interface ToastProps {
  kind: "error" | "default";
  message: string;
}

const Toast = ({ message, kind }: ToastProps) => {
  const [, actions] = useContext(Context);
  // Clear any error text after 5 seconds
  // TODO: This isn't really all that safe!
  setTimeout(() => actions.clearError(), 5000);
  switch (kind) {
    case "default": {
      return <DefaultToast>{message}</DefaultToast>;
    }
    case "error": {
      return <ErrorToast>{message}</ErrorToast>;
    }
    default: {
      return null;
    }
  }
};

export default Toast;
