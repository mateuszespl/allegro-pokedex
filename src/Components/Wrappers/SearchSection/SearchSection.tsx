import React from "react";

import SearchInput from "components/Search/SearchInput";
import SearchButton from "components/Search/SearchButton";
import FilterListButton from "components/FilterList/FilterListButton";
import { StyledSearchSection } from "./SearchSection.styled";

export const SearchSection: React.FC = () => {
  return (
    <StyledSearchSection className="search" data-test="search">
      <form className="search__form">
        <SearchInput />
        <SearchButton />
        <FilterListButton />
      </form>
    </StyledSearchSection>
  );
};
