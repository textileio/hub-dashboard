import styled from "styled-components";
import { typescale, primaryFontBold } from "../utils";

const {
  // heading4,
  medium,
} = typescale.desktop;

const HeaderContainer = styled.div`
  font-size: ${medium};
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.neutral300};
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.neutral100};
`;

// const HeaderTitle = styled.span`
//   font-family: ${primaryFontBold};
//   font-size: ${heading4};
// `;

const HeaderMenu = styled.div`
  display: flex;
  ul {
    align-items: center;
    list-style-type: none;
    display: flex;
    margin: 0;
    li {
      margin: 0 10px;
    }
  }
`;

const UserTag = styled.div`
  border-left: 1px solid ${({ theme }) => theme.neutral400};
  margin: 0 40px;
  align-items: center;
  padding-left: 20px;
  text-align: right;
  display: flex;
  svg {
    margin-right: 15px;
    cursor: pointer;
  }
  p {
    margin: 0 0 0 40px;
    &:first-child {
      font-family: ${primaryFontBold};
    }
  }
`;

const UserPhoto = styled.div`
  margin-left: 10px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.primary};
  width: 35px;
  height: 35px;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <div>{/* <HeaderTitle>activeSection</HeaderTitle> */}</div>
      <HeaderMenu>
        <ul>
          <li>
            <a href="https://blog.textile.io/" target="_blank" rel="noreferrer">
              Blog
            </a>
          </li>
          <li>
            <a
              href="https://slack.textile.io/"
              target="_blank"
              rel="noreferrer"
            >
              Support
            </a>
          </li>
          <li>
            <a href="https://docs.textile.io/" target="_blank" rel="noreferrer">
              Documentation
            </a>
          </li>
        </ul>
        <UserTag>
          <div>
            <p>username</p>
          </div>
          <UserPhoto />
        </UserTag>
      </HeaderMenu>
    </HeaderContainer>
  );
};

export default Header;
