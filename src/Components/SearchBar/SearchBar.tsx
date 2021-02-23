import React from "react";

import SearchInput from "components/SearchBar/SearchBarInput";
import SearchButton from "components/SearchBar/SearchBarButton";
import SearchBarFilterButton from "./SearchBarFilterButton";
import { StyledSearchBar } from "./SearchBar.styled";

interface SearchBarInterface {}

export const SearchBar: React.FC<SearchBarInterface> = () => {
  return (
    <StyledSearchBar>
      <form className="search__form">
        <SearchInput />
        <SearchButton />
        <SearchBarFilterButton />
      </form>
    </StyledSearchBar>
  );
};
