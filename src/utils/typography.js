import { css } from "styled-components";
import BiotifRegular from "../assets/fonts/biotif-regular.otf";
import BiotifMedium from "../assets/fonts/biotif-medium.otf";
import BiotifBold from "../assets/fonts/biotif-bold.otf";

export const primaryFont = "Biotif Regular";
export const primaryFontBold = "Biotif Bold";
export const primaryFontMedium = "Biotif Medium";

// FONT SIZE TYPESCALE
export const typescale = {
  desktop: {
    // headings
    heading1: "3rem",
    heading2: "2.4rem",
    heading3: "2rem",
    heading4: "1.5rem",
    heading5: "1.25rem",
    // common
    announcement: "1.15rem",
    big: "1rem",
    medium: "0.9rem",
    small: "0.8rem",
  },
};

// FONT FACE DEFINITIONS
export const fontFaces = css`
  @font-face {
    font-family: "Biotif Regular";
    src: local("Biotif Regular"), url(${BiotifRegular}) format("truetype");
  }
  @font-face {
    font-family: "Biotif Bold";
    src: local("Biotif Bold"), url(${BiotifBold}) format("truetype");
  }
  @font-face {
    font-family: "Biotif Medium";
    src: local("Biotif Medium"), url(${BiotifMedium}) format("truetype");
  }
`;
