import { Link } from "react-router-dom";
import styled from "styled-components";
import OrganizationSwitch from "../components/OrganizationSwitch";
import { ReactComponent as TextileLogoVertical } from "../assets/textile-logo-v.svg";
import { primaryFontBold, typescale } from "../utils";

const { big } = typescale.desktop;

const SideMenuContainer = styled.div`
  height: 100vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  width: 20%;
  min-width: 210px;
  border-right: 1px solid ${({ theme }) => theme.neutral300};
  background-color: ${({ theme }) => theme.neutral100};
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
  border-top: 1px solid ${({ theme }) => theme.neutral400};
  margin-top: 35px;
  padding-top: 35px;
  li {
    padding: 10px 30px;
    margin-bottom: 5px;
    font-family: ${primaryFontBold};
    transition: all 0.3s linear;
    cursor: pointer;
    &:hover {
      color: ${({ theme }) => theme.primary};
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
      <Link to="/">
        <TextileLogo />
      </Link>
      <OrganizationSwitch />
      <SideMenuNav>
        <li>
          <Link to="/">Overview</Link>
        </li>
        <li>Buckets</li>
        <li>Threads</li>
        <li>Billing</li>
        <li>Powergate</li>
        <li>
          <Link to="/keys">API Keys</Link>
        </li>
      </SideMenuNav>
    </SideMenuContainer>
  );
};

export default SideMenu;
