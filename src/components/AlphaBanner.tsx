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
      The Hub Dashboard is an Alpha experiment. Expect bugs, missing features,
      breaking changes, and issues... but have fun!
    </HeaderMenu>
  </BannerContainer>
);

export default Banner;
