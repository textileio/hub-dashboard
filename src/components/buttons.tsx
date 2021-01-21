import styled from "styled-components";
import { typescale, defaultTheme, primaryFontMedium } from "../utils";

const { big, announcement } = typescale.desktop;
const {
  primary,
  neutral100,
  neutral300,
  neutral1000,
  primaryDark100,
} = defaultTheme;

export const Button = styled.button`
  padding: 8px 12px;
  background-color: ${primary};
  color: ${neutral100};
  border-radius: 8px;
  border-style: none;
  cursor: pointer;
  font-size: ${big};
  font-weight: bold;
  font-family: ${primaryFontMedium};
  transition: 0.3s all;
  &:hover {
    background-color: ${primaryDark100};
  }
`;

export const PrimaryButton = styled(Button)`
  width: 100%;
  margin-top: 20px;
  padding: 12px 18px;
  font-size: ${announcement};
`;

export const ContextOrgButton = styled(PrimaryButton)`
  color: ${neutral1000};
  background-color: ${neutral100};
  border: 1px solid ${neutral100};
  svg {
    margin-left: 8px;
    width: 12px;
    height: 12px;
  }
  &:hover {
    color: ${primary};
    background-color: ${neutral100};
    border: 1px solid ${neutral300};
  }
`;
