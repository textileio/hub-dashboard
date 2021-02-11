import { createGlobalStyle, css } from "styled-components";
import { typescale, fontFaces } from "../utils";

const { announcement } = typescale.desktop;

const baseStyles = css`
  html {
    font-size: 16px;
    box-sizing: border-box;
  }

  div {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background-color: ${({ theme }) => theme.neutral100};
  }

  *:focus {
    outline: 0 !important;
  }

  hr {
    border: 1px solid ${({ theme }) => theme.neutral200};
    margin: 40px 0 30px 0;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }

  ::selection {
    background: ${({ theme }) => theme.accentC};
  }

  ul {
    padding-left: 0;
    li {
      list-style: none;
    }
  }

  input {
    &:focus {
      outline: none;
    }
    &:required {
      box-shadow: none;
    }
    &:invalid {
      box-shadow: none;
    }
  }

  a {
    color: ${({ theme }) => theme.primary};
    text-decoration: none;
  }

  .announcement {
    font-size: ${announcement};
    color: ${({ theme }) => theme.neutral800};
  }
  .text-align-right {
    text-align: right;
  }
`;

// DEFAULT TYPOGRAPHY STYLES
const fontDefaults = css`
  html,
  body,
  buttons,
  input,
  textarea,
  etc {
    color: ${({ theme }) => theme.neutral1000};
    font-family: "Biotif Regular", "Segoe UI", "Roboto";
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  p {
    line-height: ${typescale.desktop.heading4};
  }

  b {
    font-family: "Biotif Medium";
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-family: "Biotif Bold";
    color: ${({ theme }) => theme.neutral1000};
  }
  h1 {
    font-size: ${typescale.desktop.heading1};
  }
  h2 {
    font-size: ${typescale.desktop.heading2};
  }
  h3 {
    font-size: ${typescale.desktop.heading3};
  }
  h4 {
    font-size: ${typescale.desktop.heading4};
  }
  h5 {
    font-size: ${typescale.desktop.heading5};
  }
  input:focus {
    font-family: "Biotif Regular";
    outline: none;
  }
`;

export const GlobalStyles = createGlobalStyle`
  /* GENERAL IMPORTS */
  ${baseStyles}
  ${fontFaces}
  ${fontDefaults}
`;
