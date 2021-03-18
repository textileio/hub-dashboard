import styled, { css } from "styled-components";
import {
  typescale,
  primaryFontMedium,
  space,
  ThemeProps,
  borderRadius,
} from "../utils";

interface DefaultButtonProps {
  small?: boolean;
  big?: boolean;
  icon?: boolean;
  theme?: ThemeProps;
}

export const DefaultButton = styled.button<DefaultButtonProps>`
  padding: 8px 12px;
  color: white;
  background-color: ${({ theme }: DefaultButtonProps) => theme?.primary};
  border-radius: ${borderRadius.default};
  border-style: none;
  cursor: pointer;
  font-size: ${typescale.desktop.medium};
  font-weight: bold;
  font-family: ${primaryFontMedium};
  transition: 0.3s all;
  ${({ small, big }: DefaultButtonProps) =>
    small
      ? css`
          font-size: ${typescale.desktop.small};
          padding: 6px 8px;
          border-radius: 2px;
        `
      : big
      ? css`
          font-size: ${typescale.desktop.big};
          padding: 12px 16px;
        `
      : null}
  ${({ icon }: DefaultButtonProps) =>
    icon
      ? css`
          padding-left: 2rem;
        `
      : null};
`;

export const DefaultPrimaryButton = styled(DefaultButton)`
  background-color: ${({ theme }) => theme.neutral1000};
  color: ${({ theme }) => theme.neutral100};
`;

export const LightButton = styled(DefaultButton)`
  background-color: ${({ theme }) => theme.neutral200};
  color: ${({ theme }) => theme.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
  svg {
    max-width: 15px;
    margin-right: 4px;
  }
`;

export const InvertedDefaultButton = styled(DefaultButton)`
  color: ${({ theme }) => theme.neutral100};
  border: 2px solid ${({ theme }) => theme.neutral100};
  &:hover {
    background-color: ${({ theme }) => theme.primaryLight100};
  }
`;

export const Button = styled.button`
  padding: 8px 12px;
  color: white;
  background-color: ${({ theme }) => theme.primary};
  border-radius: 4px;
  border-style: none;
  cursor: pointer;
  font-size: ${typescale.desktop.big};
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
  font-size: ${typescale.desktop.small};
  &:hover {
    background-color: ${({ theme }) => theme.neutral300};
  }
`;

export const PrimaryButton = styled(DefaultButton)`
  margin-top: 20px;
  padding: 12px 18px;
  font-size: ${typescale.desktop.announcement};
`;

export const PrimaryButtonInverted = styled(Button)`
  margin-top: 20px;
  padding: 12px 18px;
  font-size: ${typescale.desktop.announcement};
  color: ${({ theme }) => theme.primary};
  background-color: ${({ theme }) => theme.neutral100};
  border: 2px solid ${({ theme }) => theme.primary};
  &:hover {
    background-color: ${({ theme }) => theme.primaryLight300};
  }
`;

export const DocsButton = styled(Button)`
  padding: 5px 6px;
  font-family: ${primaryFontMedium};
  background-color: ${({ theme }) => theme.neutral100};
  color: ${({ theme }) => theme.primaryLight100};
  border: 1px solid ${({ theme }) => theme.primaryLight100};
  font-size: ${typescale.desktop.small};
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
