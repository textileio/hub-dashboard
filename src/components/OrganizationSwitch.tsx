import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Context from "../store/Context";
import { useLocation } from "react-router-dom";
import { ReactComponent as ArrowDown } from "../assets/icons/arrow-down-icon.svg";
import { ReactComponent as SettingsIcon } from "../assets/icons/settings-icon.svg";

import { primaryFontBold, typescale, borderRadius, space } from "../utils";
import { ContextOrgButton } from "./Buttons";

const { small } = typescale.desktop;

const OrganizationSwitchContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  button {
    width: 100%;
  }
`;

const OrganizationList = styled.div`
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
      content: "✓  ";
      color: ${({ theme }) => theme.primary};
      margin-right: ${space[1]};
    }
  }
  a {
    display: block;
    color: ${({ theme }) => theme.neutral1000};
    margin: ${space[2]};
  }
  span {
    padding: ${space[2] + " " + space[3]};
    color: ${({ theme }) => theme.neutral700};
    display: block;
    font-size: ${small};
  }
  ul {
    border: solid ${({ theme }) => theme.neutral400};
    border-width: 1px 0;
    margin: 0;
    li {
      padding: ${space[2] + " " + space[3]};
      display: flex;
      height: 52px;
      box-sizing: border-box;
      align-items: center;
      &:hover:not(.selected-organization) {
        cursor: pointer;
        transition: background-color 0.3s;
        background-color: ${({ theme }) => theme.primaryLight100};
        color: white;
        svg {
          fill: ${({ theme }) => theme.neutral100};
        }
      }
      svg {
        fill: ${({ theme }) => theme.neutral1000};
      }
      a {
        margin: 0;
        display: inline-block;
        margin-left: auto;
      }
    }
  }
`;

const OrganizationSwitch = () => {
  const [state] = useContext(Context);
  const [OrgSwitchIsOpen, setOrgSwitchIsOpen] = useState<boolean>(false);
  const location = useLocation();

  const username =
    state.user.sessionInfo?.username ??
    state.user.sessionInfo?.email ??
    "unknown";

  return (
    <OrganizationSwitchContainer>
      <ContextOrgButton
        onClick={() => {
          setOrgSwitchIsOpen(!OrgSwitchIsOpen);
        }}
      >
        {}Organization
        <ArrowDown />
      </ContextOrgButton>
      {OrgSwitchIsOpen ? (
        <OrganizationList>
          <span>Select Organization</span>
          <ul>
            <li
              className={
                location.pathname.startsWith("/" + username)
                  ? "selected-organization"
                  : ""
              }
              key={username}
            >
              <Link to={"/" + username}>{username}</Link>
            </li>
            {state.user.orgs?.map((organization) => (
              <li
                className={
                  location.pathname.startsWith("/" + organization.name)
                    ? "selected-organization"
                    : ""
                }
                key={organization.slug}
              >
                <Link to={"/" + organization.name}>{organization.name}</Link>
                <Link to={"/" + organization.name + "/editorganization"}>
                  <SettingsIcon />
                </Link>
              </li>
            ))}
          </ul>
          <Link to={`/${state.user.sessionInfo?.username}/editorganization`}>
            Add Organization +
          </Link>
        </OrganizationList>
      ) : null}
    </OrganizationSwitchContainer>
  );
};

export default OrganizationSwitch;
