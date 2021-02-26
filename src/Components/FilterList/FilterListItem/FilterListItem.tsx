import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { StyledFilterListItem } from "./FilterListItem.styled";

interface FilterListItemInterface {
  pokemonType: string;
  filterPokemons: (pokemonType: string) => void;
}

export const FilterListItem: React.FC<FilterListItemInterface> = ({
  pokemonType,
  filterPokemons,
}) => {
  const [clicked, setClicked] = useState(false);
  const history = useHistory();

  const handleClick = (e) => {
    e.preventDefault();
    setClicked(!clicked);
    filterPokemons(pokemonType);
    history.push("/");
  };
  return (
    <StyledFilterListItem className="filter" data-test="filter">
      <button value={pokemonType} onClick={handleClick}>
        {pokemonType}
      </button>
    </StyledFilterListItem>
  );
};
