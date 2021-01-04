import React, { useEffect } from "react";

import AutocompleteList from "../AutocompleteList";
import { StyledSearchInput } from "./SearchInput.styled";

interface SearchInputInterface {
  searchInputValue: string;
  handleChange: () => any;
  updateAutocompleteList: () => any;
  autocompleteList: Array<any>;
  filterSectionVisible: boolean;
}

export const SearchInput: React.FC<SearchInputInterface> = ({
  searchInputValue,
  handleChange,
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
        onChange={handleChange}
        value={searchInputValue}
        placeholder="Wpisz nazwę pokemona."
      />
      <AutocompleteList autocompleteList={autocompleteList} />
    </StyledSearchInput>
  );
};
