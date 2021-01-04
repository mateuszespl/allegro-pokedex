import React from "react";

import SearchInput from "./../../SearchInput";
import SearchButton from "./../../SearchButton";
import FiltersButton from "../../FiltersButton";
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
