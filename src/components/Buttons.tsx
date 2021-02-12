import styled from "styled-components";
import { typescale, primaryFontMedium, space } from "../utils";

const { big, small, announcement } = typescale.desktop;

export const Button = styled.button`
  padding: 8px 12px;
  color: white;
  background-color: ${({ theme }) => theme.primary};
  border-radius: 4px;
  border-style: none;
  cursor: pointer;
  font-size: ${big};
  font-weight: bold;
  font-family: ${primaryFontMedium};
  transition: 0.3s all;
  &:hover {
    background-color: ${({ theme }) => theme.primaryDark100};
  }
`;

export const TertiarySmallButton = styled(Button)`
  color: ${({ theme }) => theme.neutral800};
  background-color: ${({ theme }) => theme.neutral100};
  border: 1px solid ${({ theme }) => theme.neutral800};
  padding: ${space[1]};
  font-size: ${small};
  &:hover {
    background-color: ${({ theme }) => theme.neutral300};
  }
`;

export const PrimaryButton = styled(Button)`
  margin-top: 20px;
  padding: 12px 18px;
  font-size: ${announcement};
`;
export const PrimaryButtonInverted = styled(Button)`
  margin-top: 20px;
  padding: 12px 18px;
  font-size: ${announcement};
  color: ${({ theme }) => theme.primary};
  background-color: ${({ theme }) => theme.neutral100};
  border: 2px solid ${({ theme }) => theme.primary};
  &:hover {
    background-color: ${({ theme }) => theme.primaryLight300};
  }
`;

export const ContextOrgButton = styled(PrimaryButton)`
  color: ${({ theme }) => theme.neutral1000};
  background-color: ${({ theme }) => theme.neutral100};
  border: 1px solid ${({ theme }) => theme.neutral100};
  svg {
    margin-left: 8px;
    width: 12px;
    height: 12px;
    stroke: ${({ theme }) => theme.neutral1000};
  }
  &:hover {
    svg {
      stroke: ${({ theme }) => theme.primary};
    }
    color: ${({ theme }) => theme.primary};
    background-color: ${({ theme }) => theme.neutral100};
    /* border: 1px solid ${({ theme }) => theme.neutral300}; */
  }
`;

export const DocsButton = styled(Button)`
  padding: 5px 6px;
  font-family: ${primaryFontMedium};
  background-color: ${({ theme }) => theme.neutral100};
  color: ${({ theme }) => theme.primaryLight100};
  border: 1px solid ${({ theme }) => theme.primaryLight100};
  font-size: ${small};
  display: flex;
  align-items: center;
  svg {
    margin-left: 10px;
    width: 20px;
    height: 20px;
    fill: ${({ theme }) => theme.primaryLight100};
  }
  &:hover {
    background-color: ${({ theme }) => theme.neutral100};
    border: 1px solid ${({ theme }) => theme.primaryDark100};
    color: ${({ theme }) => theme.primaryDark100};
    svg {
      fill: ${({ theme }) => theme.primaryDark100};
    }
  }
`;
