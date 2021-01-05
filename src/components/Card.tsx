import styled from "styled-components";
import { defaultTheme } from "../utils";

export const CardDefault = styled.div`
  border: 1px solid ${defaultTheme.neutral400};
  background-color: ${defaultTheme.neutral100};
  border-radius: 8px;
  padding: 40px;
`;

export const CardInverted = styled(CardDefault)`
  border: 1px solid ${defaultTheme.neutral900};
  background-color: ${defaultTheme.neutral1000};
  color: ${defaultTheme.neutral100};
  p {
    color: ${defaultTheme.neutral100};
  }
`;
