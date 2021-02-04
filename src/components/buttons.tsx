import styled from "styled-components";
import { typescale, defaultTheme, primaryFontMedium, space } from "../utils";

const { big, small, announcement } = typescale.desktop;
const {
  primary,
  neutral100,
  neutral300,
  neutral800,
  neutral1000,
  primaryDark100,
} = defaultTheme;

export const Button = styled.button`
  padding: 8px 12px;
  color: white;
  background-color: ${primary};
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

export const TertiarySmallButton = styled(Button)`
  color: ${neutral800};
  background-color: ${neutral100};
  border: 1px solid ${neutral800};
  padding: ${space[1]};
  font-size: ${small};
  &:hover {
    background-color: ${neutral300};
  }
`;

export const PrimaryButton = styled(Button)`
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
    /* border: 1px solid ${neutral300}; */
  }
`;
