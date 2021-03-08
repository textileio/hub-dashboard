import styled from "styled-components";
import { useContext } from "react";
import Context from "../store/Context";
import { typescale, primaryFontBold, borderRadius } from "../utils";
import {
  UserCircle,
  ChatAlt,
  DocumentText,
  Bookmark,
} from "@styled-icons/heroicons-solid/";

const HeaderContainer = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  font-size: ${typescale.desktop.medium};
  background-color: ${({ theme }) => theme.neutral100};
  border-bottom: 1px solid ${({ theme }) => theme.neutral300};
  z-index: 1;
`;

const HeaderMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: none;
  margin: 0;
`;

const HeaderMenuItem = styled.li`
  a {
    display: flex;
    align-items: center;
    margin: 0 4px;
    padding: 4px 12px;
    color: ${({ theme }) => theme.neutral1000};
    border-radius: ${borderRadius.default};
    transition: all 0.2s linear;
    svg {
      margin-right: 4px;
      max-height: 20px;
      max-width: 20px;
      color: ${({ theme }) => theme.neutral300};
    }
  }
  :hover {
    svg,
    a {
      color: ${({ theme }) => theme.neutral100};
    }
    a {
      background-color: ${({ theme }) => theme.primaryLight200};
    }
  }
`;

const UserTag = styled.div`
  border-left: 1px solid ${({ theme }) => theme.neutral400};
  margin: 0 0 0 40px;
  align-items: center;
  padding-left: 20px;
  text-align: right;
  display: flex;
  font-family: ${primaryFontBold};
  svg {
    margin-right: 15px;
  }
`;

const UserPhoto = styled(UserCircle)`
  width: 35px;
  height: 35px;
  margin-left: 10px;
  color: ${({ theme }) => theme.primary};
`;

const Header = () => {
  const [state] = useContext(Context);
  return (
    <HeaderContainer>
      <div>{/* <HeaderTitle>activeSection</HeaderTitle> */}</div>
      <HeaderMenu>
        <HeaderMenuItem>
          <a href="https://blog.textile.io/" target="_blank" rel="noreferrer">
            <Bookmark />
            Blog
          </a>
        </HeaderMenuItem>
        <HeaderMenuItem>
          <a href="https://slack.textile.io/" target="_blank" rel="noreferrer">
            <ChatAlt />
            Support
          </a>
        </HeaderMenuItem>
        <HeaderMenuItem>
          <a href="https://docs.textile.io/" target="_blank" rel="noreferrer">
            <DocumentText />
            Documentation
          </a>
        </HeaderMenuItem>

        <UserTag>
          {state.user.sessionInfo?.username ??
            state.user.sessionInfo?.email ??
            "unknown"}
          <UserPhoto />
        </UserTag>
      </HeaderMenu>
    </HeaderContainer>
  );
};

export default Header;
