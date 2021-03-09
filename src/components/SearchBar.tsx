import styled from "styled-components";
import { space, borderRadius, typescale } from "../utils";
import { Search } from "@styled-icons/heroicons-outline/";

const SearchBarContainer = styled.div`
  align-items: center;
  display: flex;
  input {
    padding: ${space[1]};
    padding-left: 35px;
    border-radius: ${borderRadius.default};
    border: 1px solid ${({ theme }) => theme.neutral500};
    font-size: ${typescale.desktop.medium};
    display: flex;
    :focus {
      border: 1px solid ${({ theme }) => theme.primary};
    }
  }
`;

const SearchBarIcon = styled(Search)`
  max-width: 20px;
  left: 45px;
  position: absolute;
  color: ${({ theme }) => theme.neutral700}; ;
`;

const SearchBar = () => {
  return (
    <SearchBarContainer>
      <SearchBarIcon />
      <input type="search" placeholder="Find Bucket" />
    </SearchBarContainer>
  );
};

export default SearchBar;
