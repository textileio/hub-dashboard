import styled from "styled-components";
import { Beaker } from "@styled-icons/heroicons-solid/";

const BannerContainer = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  padding: 10px 20px;
  font-size: 1em;
  background-color: ${({ theme }) => theme.neutral300};
  border-bottom: 1px solid ${({ theme }) => theme.neutral300};
  z-index: 100;
`;

const HeaderMenu = styled.span`
  margin: auto auto;
  display: flex;
  color: ${({ theme }) => theme.primary};
  transition: all 0.2s linear;
  svg {
    margin-right: 4px;
    max-height: 20px;
    max-width: 20px;
    color: ${({ theme }) => theme.primary};
  }
`;

const Banner = () => (
  <BannerContainer>
    <HeaderMenu>
      <Beaker />
      This dashboard is an experimental work in progress! If you want to use the
      full (stable) product, download the{" "}
      <a
        href="https://docs.textile.io/hub/accounts/"
        rel="noreferrer"
        target="_blank"
      >
        Hub CLI →
      </a>
      .
    </HeaderMenu>
  </BannerContainer>
);

export default Banner;
