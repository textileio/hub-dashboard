import styled from "styled-components";
import { ReactComponent as TextileLogoVertical } from "../assets/textile-logo-v.svg";
import { ReactComponent as ArrowDown } from "../assets/icons/arrow-down-icon.svg";
import { defaultTheme, primaryFontBold, typescale } from "../utils";
import { ContextOrgButton } from "./Buttons";

const { neutral400, primary } = defaultTheme;
const { big } = typescale.desktop;

const SideMenuContainer = styled.div`
  height: 100vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  width: 20%;
  min-width: 210px;
  border-right: 2px solid ${neutral400};
  align-items: center;
  .sidemenu-textile-logo {
    margin: 40px 0;
  }
`;

const TextileLogo = styled(TextileLogoVertical)`
  margin: 40px 0;
`;

const SideMenuNav = styled.ul`
  padding: 0;
  font-size: ${big};
  width: 100%;
  list-style-type: none;
  border-top: 1px solid ${neutral400};
  margin-top: 35px;
  padding-top: 35px;
  li {
    padding: 10px 30px;
    margin-bottom: 5px;
    font-family: ${primaryFontBold};
    transition: all 0.3s linear;
    cursor: pointer;
    &:hover {
      color: ${primary};
    }
    &::before {
      content: "◯";
      margin-right: 10px;
    }
  }
`;

const SideMenu = () => {
  return (
    <SideMenuContainer>
      <TextileLogo />
      <ContextOrgButton>
        Organization
        <ArrowDown />
      </ContextOrgButton>
      <SideMenuNav>
        <li>Overview</li>
        <li>Buckets</li>
        <li>Threads</li>
        <li>Billing</li>
        <li>Powergate</li>
        <li>API Keys</li>
      </SideMenuNav>
    </SideMenuContainer>
  );
};

export default SideMenu;
