import React from "react";
import styled from "styled-components";

const BucketTopMenuContainer = styled.ul`
  display: flex;
  width: 100%;
  margin-bottom: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.neutral300};
`;

const BucketMenuItem = styled.li`
  color: ${({ theme }) => theme.neutral700};
  padding: 16px 24px;
  cursor: pointer;
  &.selected {
    font-weight: bold;
    color: ${({ theme }) => theme.neutral1000};
    border-bottom: 3px solid ${({ theme }) => theme.neutral1000};
  }
`;

const BucketTopMenu = () => {
  return (
    <BucketTopMenuContainer>
      <BucketMenuItem className="selected">General</BucketMenuItem>
      <BucketMenuItem>Files</BucketMenuItem>
      <BucketMenuItem>History</BucketMenuItem>
      <BucketMenuItem>Filecoin</BucketMenuItem>
      <BucketMenuItem>Advanced</BucketMenuItem>
    </BucketTopMenuContainer>
  );
};

export default BucketTopMenu;
