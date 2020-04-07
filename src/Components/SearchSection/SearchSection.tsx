import React from "react";
import styled from "styled-components";
import SearchInput from "./SearchInput/SearchInput";
import { SearchButton } from "./SearchButton/SearchButton";

const StyledWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  width: 100%;
  height: 80px;
  background: whitesmoke;
  position: fixed;
`;

export const SearchSection: React.FC = () => {
  return (
    <StyledWrapper>
      <SearchInput />
      <SearchButton />
    </StyledWrapper>
  );
};
