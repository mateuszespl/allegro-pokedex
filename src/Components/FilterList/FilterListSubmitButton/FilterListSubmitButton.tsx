import React from "react";

import { filtersValueType } from "../FilterListItem/FilterListItem";
import { StyledFilterListSubmitButton } from "./FilterListButton.styled";

interface FilterListSubmitButtonInterface {
  filtersValue: filtersValueType;
  filterPokemons: (filters: filtersValueType) => void;
}

export const FilterListSubmitButton: React.FC<FilterListSubmitButtonInterface> = ({
  filtersValue,
  filterPokemons,
}) => {
  const handleClick = (e) => {
    e.preventDefault();
    filterPokemons(filtersValue);
  };
  return (
    <StyledFilterListSubmitButton
      className="filters__submit"
      onClick={handleClick}
      data-test="filtersSubmitButton"
      filterApplied={true}
      currentFilters={[]}
      disabled={[1].length === 0 ? true : false}
    >
      {!true ? "Filtruj" : "Resetuj filtry"}
    </StyledFilterListSubmitButton>
  );
};
