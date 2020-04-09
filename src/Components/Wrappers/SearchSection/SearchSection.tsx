import React from "react";
import styled from "styled-components";
import SearchInput from "./../../SearchInput/SearchInput";
import SearchButton from "./../../SearchButton/SearchButton";

const StyledWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  width: 100%;
  height: 80px;
  background: ${({ theme }) => theme.colors.white};
  position: fixed;

  .search__form {
    display: flex;
  }
`;

export const SearchSection: React.FC = () => {
  return (
    <StyledWrapper className="search">
      <form className="search__form">
        <SearchInput />
        <SearchButton />
      </form>
    </StyledWrapper>
  );
};
