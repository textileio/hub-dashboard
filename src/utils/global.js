import { createGlobalStyle, css } from "styled-components";
import { typescale, defaultTheme } from "../utils";

const { heading1, heading2, heading3, announcement } = typescale.desktop;
const { neutral200, neutral800, primary } = defaultTheme;

export const GlobalStyles = createGlobalStyle`${css`
  body {
    font-family: "Biotif Regular";
  }

  input:focus {
    font-family: "Biotif Regular";
    outline: none;
  }
  a {
    color: ${primary};
    text-decoration: none;
  }

  hr {
    border: 1px solid ${neutral200};
    margin: 40px 0 30px 0;
  }

  h1 {
    font-size: ${heading1};
    font-family: "Biotif Bold";
  }
  h2 {
    font-size: ${heading2};
    font-family: "Biotif Bold";
  }
  h3 {
    font-size: ${heading3};
    font-family: "Biotif Bold";
  }
  .announcement {
    font-size: ${announcement};
    color: ${neutral800};
  }
  .text-align-right {
    text-align: right;
  }
`}`;
