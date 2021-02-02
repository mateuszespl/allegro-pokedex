import React, { useState, useEffect } from "react";

import { StyledFilterListSubmitButton } from "./FilterListButton.styled";

interface FilterListSubmitButtonInterface {
  currentFilters: Array<any>;
  filterPokemonList: (
    pokemonDataList: Array<any>,
    currentFilters: Array<any>
  ) => any;
  pokemonDataList: Array<any>;
  displayModeUpdate: (mode: string) => any;
  displayMode: string;
  clearFilters: () => any;
}

export const FilterListSubmitButton: React.FC<FilterListSubmitButtonInterface> = ({
  currentFilters,
  filterPokemonList,
  pokemonDataList,
  displayModeUpdate,
  displayMode,
  clearFilters,
}) => {
  const [filterApplied, setFilterApplied] = useState<boolean>(false);
  const handleClick = (e) => {
    e.preventDefault();
    setFilterApplied(!filterApplied);
    filterPokemonList(pokemonDataList, currentFilters);
    if (displayMode === "Filter") {
      displayModeUpdate("Unset");
      clearFilters();
    } else {
      displayModeUpdate("Filter");
    }
  };

  useEffect(() => {
    if (currentFilters.length === 0) {
      setFilterApplied(false);
    }
  }, [currentFilters.length]);
  return (
    <StyledFilterListSubmitButton
      className="filters__submit"
      onClick={handleClick}
      data-test="filtersSubmitButton"
      filterApplied={filterApplied}
      currentFilters={currentFilters}
      disabled={currentFilters.length === 0 ? true : false}
    >
      {!filterApplied ? "Filtruj" : "Resetuj filtry"}
    </StyledFilterListSubmitButton>
  );
};
