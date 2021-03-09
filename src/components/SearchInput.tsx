import styled from "styled-components";
import { space, borderRadius, typescale } from "../utils/";
import { Search } from "@styled-icons/heroicons-outline/";

const SearchInputContainer = styled.div`
  align-items: center;
  input {
    padding: ${space[1]};
    padding-left: 40px;
    border-radius: ${borderRadius.default};
    border: 1px solid ${({ theme }) => theme.neutral500};
    font-size: ${typescale.desktop.medium};
    :focus {
      border: 1px solid ${({ theme }) => theme.primary};
    }
  }
`;

const SearchIcon = styled(Search)`
  max-width: 20px;
  margin-right: -20px;
  color: ${({ theme }) => theme.neutral700}; ;
`;

const SearchInput = () => {
  return (
    <SearchInputContainer>
      <input type="search" placeholder="Find Bucket" />
      <SearchIcon />
    </SearchInputContainer>
  );
};

export default SearchInput;
