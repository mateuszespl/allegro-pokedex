import React from "react";

import SearchInput from "components/SearchBar/SearchBarInput";
import SearchButton from "components/SearchBar/SearchBarButton";
import { StyledSearchBar } from "./SearchBar.styled";

export const SearchBar: React.FC = () => {
  return (
    <StyledSearchBar>
      <form className="search__form">
        <SearchInput />
        <SearchButton />
      </form>
    </StyledSearchBar>
  );
};
