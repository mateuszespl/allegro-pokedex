import React from "react";

import { filtersValueType } from "../FilterListItem/FilterListItem";
import { StyledFilterListSubmitButton } from "./FilterListButton.styled";

interface FilterListSubmitButtonInterface {
  filtersValue: filtersValueType;
}

export const FilterListSubmitButton: React.FC<FilterListSubmitButtonInterface> = ({
  filtersValue,
}) => {
  const handleClick = (e) => {
    e.preventDefault();
    console.log(filtersValue);
  };
  return (
    <StyledFilterListSubmitButton
      className="filters__submit"
      onClick={handleClick}
      data-test="filtersSubmitButton"
      filterApplied={true}
      currentFilters={[]}
      disabled={[].length === 0 ? true : false}
    >
      {!true ? "Filtruj" : "Resetuj filtry"}
    </StyledFilterListSubmitButton>
  );
};
