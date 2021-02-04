import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Context from "../store/Context";
import { ReactComponent as ArrowDown } from "../assets/icons/arrow-down-icon.svg";
import {
  defaultTheme,
  primaryFontBold,
  typescale,
  borderRadius,
  space,
} from "../utils";
import { ContextOrgButton } from "./Buttons";

const {
  neutral100,
  neutral400,
  neutral700,
  neutral1000,
  primary,
  primaryLight100,
} = defaultTheme;
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
  background-color: ${neutral100};
  border: 1px solid ${neutral400};
  border-radius: ${borderRadius.default};
  .selected-organization {
    font-family: ${primaryFontBold};
    color: ${primary};
    &::before {
      content: "✓  ";
      color: ${primary};
    }
  }
  a {
    display: block;
    color: ${neutral1000};
    margin: ${space[2]};
  }
  span {
    padding: ${space[2] + " " + space[3]};
    color: ${neutral700};
    display: block;
    font-size: ${small};
  }
  ul {
    border: solid ${neutral400};
    border-width: 1px 0;
    margin: 0;
    li {
      padding: ${space[2] + " " + space[3]};
      &:hover:not(.selected-organization) {
        cursor: pointer;
        transition: background-color 0.3s;
        background-color: ${primaryLight100};
        color: white;
      }
    }
  }
`;

const OrganizationSwitch = () => {
  const [state] = useContext(Context);
  const [OrgSwitchIsOpen, setOrgSwitchIsOpen] = useState<boolean>(false);

  return (
    <OrganizationSwitchContainer>
      <ContextOrgButton
        onClick={() => {
          setOrgSwitchIsOpen(!OrgSwitchIsOpen);
        }}
      >
        Organization
        <ArrowDown />
      </ContextOrgButton>
      {OrgSwitchIsOpen ? (
        <OrganizationList>
          <span>Select Organization</span>
          <ul>
            <li>username</li>
            {state.fakeOrganizations.map((organization) => (
              <li
                key={organization.publicKey}
                className="selected-organization"
              >
                {organization.name}
              </li>
            ))}
          </ul>
          <Link to="/organizations">Manage Organizations</Link>
        </OrganizationList>
      ) : null}
    </OrganizationSwitchContainer>
  );
};

export default OrganizationSwitch;
