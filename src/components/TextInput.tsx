import styled from "styled-components";
import { space, borderRadius } from "../utils";

export const TextInput = styled.input`
  padding: ${space[2]};
  margin-top: ${space[1]};
  border-radius: ${borderRadius.default};
  border: 1px solid ${({ theme }) => theme.neutral500};
  width: 100%;
  box-sizing: border-box;
`;
