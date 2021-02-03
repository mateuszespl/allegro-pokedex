import React, { useEffect } from "react";

import AutocompleteList from "components/AutocompleteList";
import { StyledSearchInput } from "./SearchInput.styled";

interface SearchInputInterface {
  searchInputValue: string;
  searchInputChange: () => any;
  updateAutocompleteList: () => any;
  autocompleteList: string[];
  filterSectionVisible: boolean;
}

export const SearchInput: React.FC<SearchInputInterface> = ({
  searchInputValue,
  searchInputChange,
  updateAutocompleteList,
  autocompleteList,
  filterSectionVisible,
}) => {
  useEffect(() => {
    updateAutocompleteList();
  }, [searchInputValue]);
  return (
    <StyledSearchInput
      autocompleteList={autocompleteList}
      className="search__input"
    >
      <input
        disabled={filterSectionVisible}
        type="text"
        onChange={searchInputChange}
        value={searchInputValue}
        placeholder="Wpisz nazwę pokemona."
      />
      <AutocompleteList autocompleteList={autocompleteList} />
    </StyledSearchInput>
  );
};
