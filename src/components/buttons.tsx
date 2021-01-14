import styled from "styled-components";

import { typescale, defaultTheme, primaryFontMedium } from "../utils";

export const Button = styled.button`
  padding: 8px 12px;
  background-color: ${defaultTheme.primary};
  color: ${defaultTheme.neutral100};
  border-radius: 8px;
  border-style: none;
  cursor: pointer;
  font-size: ${typescale.desktop.big};
  font-weight: bold;
  font-family: ${primaryFontMedium};
  transition: 0.3s all;
  &:hover {
    background-color: ${defaultTheme.primaryDark100};
  }
`;

export const PrimaryButton = styled(Button)`
  width: 100%;
  margin-top: 20px;
  padding: 12px 18px;
  font-size: ${typescale.desktop.announcement};
`;
