import React from "react";

import { StyledAutocompleteListItem } from "./AutocompleteListItem.styled";

interface AutocompleteListItemInterface {
  autocompleteItem: string;
  searchPokemon: any;
}

export const AutocompleteListItem: React.FC<AutocompleteListItemInterface> = ({
  autocompleteItem,
  searchPokemon,
}) => {
  const handleClick = (e) => {
    e.preventDefault();
    searchPokemon(e.target.value);
  };
  return (
    <StyledAutocompleteListItem
      onClick={handleClick}
      value={autocompleteItem}
      className="autocompleteListItem"
      data-test="autocompleteListItem"
    >
      {autocompleteItem}
    </StyledAutocompleteListItem>
  );
};
