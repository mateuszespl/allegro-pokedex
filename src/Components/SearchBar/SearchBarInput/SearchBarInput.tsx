import React from "react";

import AutocompleteList from "components/AutocompleteList";
import { StyledSearchBarInput } from "./SearchBarInput.styled";

interface SearchBarInputInterface {
  searchInputValue: string;
  searchInputChange: (e: React.FormEvent) => void;
  autocompleteList: string[];
  filterSectionVisible: boolean;
}

export const SearchBarInput: React.FC<SearchBarInputInterface> = ({
  searchInputValue,
  searchInputChange,
  autocompleteList,
  filterSectionVisible,
}) => {
  return (
    <StyledSearchBarInput
      autocompleteList={autocompleteList}
      className="search__input"
    >
      <input
        disabled={filterSectionVisible}
        type="text"
        name="Search"
        onChange={searchInputChange}
        value={searchInputValue}
        placeholder="Wpisz nazwę pokemona."
      />
      <AutocompleteList autocompleteList={autocompleteList} />
    </StyledSearchBarInput>
  );
};
