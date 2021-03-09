import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import Context from "../store/Context";
import { useClickOutside } from "../hooks/ClickOutside";
import { ReactComponent as ArrowDown } from "../assets/icons/arrow-down-icon.svg";
import { ReactComponent as SettingsIcon } from "../assets/icons/settings-icon.svg";
import { primaryFontBold, typescale, borderRadius, space } from "../utils";
import { ContextOrgButton } from "./Buttons";

const { small } = typescale.desktop;

const OrgSwitchContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  button {
    width: 100%;
  }
`;

const OrganizationListContainer = styled.div`
  position: absolute;
  width: 100%;

  top: 70px;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.neutral100};
  border: 1px solid ${({ theme }) => theme.neutral400};
  border-radius: ${borderRadius.default};
  .selected-organization {
    font-family: ${primaryFontBold};
    color: ${({ theme }) => theme.primary};
    &::before {
      content: "✓";
      color: ${({ theme }) => theme.primary};
      margin-left: 10px;
      margin-right: -20px;
    }
    a:first-child {
      cursor: default;
    }
  }
  a {
    display: block;
    color: ${({ theme }) => theme.neutral1000};
  }
  span {
    padding: ${space[2] + " " + space[3]};
    color: ${({ theme }) => theme.neutral700};
    display: block;
    font-size: ${small};
  }
`;

const OrganizationList = styled.ul`
  border: solid ${({ theme }) => theme.neutral400};
  border-width: 1px 0;
  margin: 0;
  max-height: 400px;
  overflow-y: auto;
`;

const OrganizationItem = styled.li`
  /* height: 52px; */
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:hover:not(.selected-organization) {
    cursor: pointer;
    transition: background-color 0.3s;
    background-color: ${({ theme }) => theme.primaryLight100};
    color: white;
    a {
      color: ${({ theme }) => theme.neutral100};
    }
    svg {
      fill: ${({ theme }) => theme.neutral100};
    }
  }
  svg {
    fill: ${({ theme }) => theme.neutral1000};
  }
`;

const OrgButton = styled(Link)`
  padding: 12px 8px 12px 36px;
  width: auto;
  width: 100%;
  margin: 0;
  overflow: hidden;
`;

const OrgSettings = styled(Link)`
  padding: 5px 15px;
  margin: 0;
`;

const AddOrganizationButton = styled(Link)`
  padding: 15px;
  text-align: center;
  &:hover {
    background-color: ${({ theme }) => theme.neutral300};
  }
`;

const OrganizationSwitch = () => {
  const [state] = useContext(Context);
  const location = useLocation();
  const { visible, setVisible, ref } = useClickOutside(false);

  const handleClick = () => {
    setVisible((prevState: any) => !prevState);
  };

  const username =
    state.user.sessionInfo?.username ??
    state.user.sessionInfo?.email ??
    "unknown";

  return (
    <OrgSwitchContainer>
      <ContextOrgButton onClick={handleClick}>
        Organization
        <ArrowDown />
      </ContextOrgButton>
      {visible ? (
        <OrganizationListContainer ref={ref}>
          <span>Select Organization</span>
          <OrganizationList>
            <OrganizationItem
              className={
                location.pathname.startsWith("/" + username)
                  ? "selected-organization"
                  : ""
              }
              key={username}
            >
              <OrgButton to={"/" + username} onClick={handleClick}>
                {username}
              </OrgButton>
            </OrganizationItem>
            {state.user.orgs?.map((organization) => (
              <OrganizationItem
                className={
                  location.pathname.startsWith("/" + organization.slug)
                    ? "selected-organization"
                    : ""
                }
                key={organization.name}
              >
                <OrgButton to={"/" + organization.slug} onClick={handleClick}>
                  {organization.name}
                </OrgButton>
                <OrgSettings to={"/" + organization.slug + "/editorganization"}>
                  <SettingsIcon />
                </OrgSettings>
              </OrganizationItem>
            ))}
          </OrganizationList>
          <AddOrganizationButton
            onClick={handleClick}
            to={`/${state.user.sessionInfo?.username}/addorganization`}
          >
            Add Organization +
          </AddOrganizationButton>
        </OrganizationListContainer>
      ) : null}
    </OrgSwitchContainer>
  );
};

export default OrganizationSwitch;
