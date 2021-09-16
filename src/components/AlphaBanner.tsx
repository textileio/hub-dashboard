import styled from "styled-components";
import { ExclamationCircle } from "@styled-icons/heroicons-solid/";

const BannerContainer = styled.div`
  position: sticky;
  top: 0;
  text-align: center;
  padding: 10px 20px;
  font-size: 1em;
  background-color: ${({ theme }) => theme.neutral300};
  border-bottom: 1px solid ${({ theme }) => theme.neutral300};
  z-index: 100;
  width: 100%;
`;

const HeaderMenu = styled.span`
  color: ${({ theme }) => theme.errorDefault};
  transition: all 0.2s linear;
  svg {
    margin-right: 4px;
    max-height: 20px;
    max-width: 20px;
    color: ${({ theme }) => theme.errorDefault};
  }
`;

const Banner = () => (
  <BannerContainer>
    <HeaderMenu>
      <ExclamationCircle />
      This dashboard is an experimental work in progress! If you want to use the
      full (stable) product, download →{" "}
      <a
        href="https://docs.textile.io/hub/accounts/"
        rel="noreferrer"
        target="_blank"
      >
        the Hub CLI
      </a>
      .
    </HeaderMenu>
  </BannerContainer>
);

export default Banner;
