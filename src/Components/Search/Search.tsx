import React from "react";

import SearchInput from "components/Search/SearchInput";
import SearchButton from "components/Search/SearchButton";
import FilterListButton from "components/FilterListButton";
import { StyledSearch } from "./Search.styled";

interface SearchInterface {}

export const Search: React.FC<SearchInterface> = () => {
  return (
    <StyledSearch>
      <form className="search__form">
        <SearchInput />
        <SearchButton />
        <FilterListButton />
      </form>
    </StyledSearch>
  );
};
