import { useContext } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import styled from "styled-components";
import OrganizationSwitch from "../components/OrganizationSwitch";
import { ReactComponent as TextileLogoVertical } from "../assets/textile-logo-v.svg";
import { primaryFontBold, typescale, space } from "../utils";
import { TertiarySmallButton } from "../components/Buttons";
import Context from "../store/Context";
import { OrgInterface } from "./Utils";

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

const SignOutButton = styled(TertiarySmallButton)`
  border: 1px solid ${({ theme }) => theme.neutral300};
  width: 100%;
  margin-top: auto;
  margin-bottom: ${space[4]};
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
  const match = useRouteMatch<OrgInterface>("/:currentOrganization");
  const [, actions] = useContext(Context);
  return (
    <SideMenuContainer>
      <Link to="/">
        <TextileLogo />
      </Link>
      <OrganizationSwitch />
      <SideMenuNav>
        <li>
          <Link to={`/${match?.params.currentOrganization}`}>Overview</Link>
        </li>
        <li>
          <Link to={`/${match?.params.currentOrganization}/keys`}>
            API Keys
          </Link>
        </li>
      </SideMenuNav>
      <SignOutButton onClick={() => actions.signOut()}>Sign Out</SignOutButton>
    </SideMenuContainer>
  );
};

export default SideMenu;
