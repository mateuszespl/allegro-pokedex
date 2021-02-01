import React from "react";

import SearchInput from "components/Search/SearchInput";
import SearchButton from "components/Search/SearchButton";
import FiltersButton from "components/FilterListButton";
import { StyledSearchSection } from "./SearchSection.styled";

export const SearchSection: React.FC = () => {
  return (
    <StyledSearchSection className="search" data-test="search">
      <form className="search__form">
        <SearchInput />
        <SearchButton />
        <FiltersButton />
      </form>
    </StyledSearchSection>
  );
};
