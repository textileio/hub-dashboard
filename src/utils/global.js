import { createGlobalStyle, css } from "styled-components";
import { typescale, defaultTheme } from "../utils";

const { heading1, heading2, heading3, announcement } = typescale.desktop;
const { neutral200, neutral800, primary, accentC } = defaultTheme;

export const GlobalStyles = createGlobalStyle`${css`
  body {
    font-family: "Biotif Regular";
  }

  ::selection {
    background: ${accentC};
  }

  div {
    box-sizing: border-box;
  }

  input:focus {
    font-family: "Biotif Regular";
    outline: none;
  }
  input:required {
    box-shadow: none;
  }
  input:invalid {
    box-shadow: none;
  }

  a {
    color: ${primary};
    text-decoration: none;
  }

  hr {
    border: 1px solid ${neutral200};
    margin: 40px 0 30px 0;
  }
  b {
    font-family: "Biotif Bold";
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
