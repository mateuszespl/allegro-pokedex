import React from "react";

import { StyledAutocompleteListItem } from "./AutocompleteListItem.styled";

interface AutocompleteListItemInterface {
  autocompleteItem: string;
  searchPokemon: (pokemonName: string, isCalledAsAutocomplete: boolean) => void;
}

export const AutocompleteListItem: React.FC<AutocompleteListItemInterface> = ({
  autocompleteItem,
  searchPokemon,
}) => {
  const handleClick = (e) => {
    e.preventDefault();
    searchPokemon(e.currentTarget.value, true);
  };
  return (
    <StyledAutocompleteListItem
      onClick={handleClick}
      value={autocompleteItem}
      className="autocompleteListItem"
      data-test="autocompleteListItem"
    >
      <p>{autocompleteItem}</p>
    </StyledAutocompleteListItem>
  );
};
