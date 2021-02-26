import React from "react";

import FilterListItem from "./FilterListItem";
import { StyledFilterList } from "./FiltersList.styled";

interface FilterListInterface {
  filterSectionVisible: boolean;
}

export const FilterList: React.FC<FilterListInterface> = ({
  filterSectionVisible,
}) => {
  const pokemonTypes = [
    "water",
    "poison",
    "grass",
    "fire",
    "bug",
    "flying",
    "normal",
    "electric",
    "ground",
    "fairy",
    "fighting",
    "psychic",
    "rock",
    "steel",
    "ghost",
    "ice",
    "dark",
    "dragon",
  ];
  return (
    <StyledFilterList
      className="filters"
      data-test="filters"
      filterSectionVisible={filterSectionVisible}
    >
      <ul>
        {pokemonTypes.map((pokemonType) => (
          <FilterListItem pokemonType={pokemonType} key={pokemonType} />
        ))}
      </ul>
    </StyledFilterList>
  );
};
