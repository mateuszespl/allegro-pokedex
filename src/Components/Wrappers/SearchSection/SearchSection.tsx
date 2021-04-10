import React from "react";

import SearchInput from "components/SearchBar/SearchBarInput";
import SearchButton from "components/SearchBar/SearchBarButton";
import { StyledSearchSection } from "./SearchSection.styled";

export const SearchSection: React.FC = () => {
  return (
    <StyledSearchSection className="search" data-test="search">
      <form className="search__form">
        <SearchInput />
        <SearchButton />
      </form>
    </StyledSearchSection>
  );
};
