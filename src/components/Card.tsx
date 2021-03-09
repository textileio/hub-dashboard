import styled from "styled-components";
import { borderRadius, space } from "../utils";

export const Card = styled.div`
  color: ${({ theme }) => theme.neutral100};
  margin-top: 100px;
  padding: ${space[4]};
  border-radius: ${borderRadius.default};
  background-color: ${({ theme }) => theme.primary};
  box-shadow: 0px 2px 4px rgba(102, 51, 153, 0.08),
    0px 4px 8px rgba(138, 75, 175, 0.16);
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
  max-width: 50%;
  :hover {
    box-shadow: 0px 4px 16px rgba(102, 51, 153, 0.08),
      0px 8px 24px rgba(138, 75, 175, 0.16);
  }
  h3 {
    color: ${({ theme }) => theme.neutral100};
    margin-top: 10px;
  }
`;
