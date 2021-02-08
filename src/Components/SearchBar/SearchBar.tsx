import React from "react";

import SearchInput from "components/SearchBar/SearchBarInput";
import SearchButton from "components/SearchBar/SearchBarButton";
import FilterListButton from "components/FilterList/FilterListButton";
import { StyledSearchBar } from "./SearchBar.styled";

interface SearchBarInterface {}

export const SearchBar: React.FC<SearchBarInterface> = () => {
  return (
    <StyledSearchBar>
      <form className="search__form">
        <SearchInput />
        <SearchButton />
        <FilterListButton />
      </form>
    </StyledSearchBar>
  );
};
