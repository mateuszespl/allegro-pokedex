import React from "react";

import SearchInput from "components/SearchInput";
import SearchButton from "components/SearchButton";
import FiltersButton from "components/FiltersButton";
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
