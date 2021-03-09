// import { Bucket } from "@styled-icons/entypo";
import { useContext } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as TextileLogoVertical } from "../assets/textile-logo-v.svg";
import { TertiarySmallButton } from "../components/Buttons";
import OrganizationSwitch from "../components/OrganizationSwitch";
import Context from "../store/Context";
import { borderRadius, space, typescale } from "../utils";
import { OrgInterface } from "./Utils";
import { Bucket } from "@styled-icons/entypo";
import {
  Collection,
  CreditCard,
  Database,
  Key,
} from "@styled-icons/heroicons-solid/";

const { big } = typescale.desktop;

const SideMenuContainer = styled.div`
  position: sticky;
  top: 0;
  height: 100vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  width: 20%;
  min-width: 280px;
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
`;

const SideMenuNavItem = styled.li`
  a {
    display: flex;
    align-items: center;
    padding: 10px 30px;
    margin-bottom: 5px;
    border-radius: ${borderRadius.default};
    transition: all 0.4s linear;
    color: ${({ theme }) => theme.neutral1000};
    :hover {
      background-color: ${({ theme }) => theme.neutral200};
      color: ${({ theme }) => theme.primary};
    }
    svg {
      max-width: 18px;
      max-height: 20px;
      margin-right: 4px;
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
        <SideMenuNavItem>
          <Link to={`/${match?.params.currentOrganization}`}>
            <Collection />
            Overview
          </Link>
        </SideMenuNavItem>
        <SideMenuNavItem>
          <Link to={`/${match?.params.currentOrganization}/keys`}>
            <Key />
            API Keys
          </Link>
        </SideMenuNavItem>
        <SideMenuNavItem>
          <Link to={`/${match?.params.currentOrganization}/threads`}>
            <Database />
            ThreadDB
          </Link>
        </SideMenuNavItem>
        <SideMenuNavItem>
          <Link to={`/${match?.params.currentOrganization}/buckets`}>
            <Bucket />
            Buckets
          </Link>
        </SideMenuNavItem>
        <SideMenuNavItem>
          <Link to={`/${match?.params.currentOrganization}/billing`}>
            <CreditCard />
            Billing
          </Link>
        </SideMenuNavItem>
      </SideMenuNav>
      <SignOutButton onClick={() => actions.signOut()}>Sign Out</SignOutButton>
    </SideMenuContainer>
  );
};

export default SideMenu;
