import React from "react";
import styled from "styled-components";
import SearchInput from "./../../SearchInput/SearchInput";
import SearchButton from "./../../SearchButton/SearchButton";
import FiltersButton from "../../FiltersButton/FiltersButton";

const StyledWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80px;
  padding: 0 20px;

  .search__form {
    display: flex;
    position: relative;
    z-index: 2;
    width: 650px;
  }
`;

export const SearchSection: React.FC = () => {
  return (
    <StyledWrapper className="search">
      <form className="search__form">
        <SearchInput />
        <SearchButton />
        <FiltersButton />
      </form>
    </StyledWrapper>
  );
};
