import React from "react";
import { FaFilter } from "react-icons/fa";

import { StyledFilterListButton } from "./FilterListButton.styled";

interface FilterListButtonInterface {
  setFilterSectionVisibility: () => any;
  filtersCount: number;
  searchInputValue: string;
}

export const FilterListButton: React.FC<FilterListButtonInterface> = ({
  setFilterSectionVisibility,
  filtersCount,
  searchInputValue,
}) => {
  const handleClick = (e) => {
    e.preventDefault();
    setFilterSectionVisibility();
  };
  return (
    <StyledFilterListButton
      disabled={searchInputValue.length !== 0 ? true : false}
      filtersCount={filtersCount}
      onClick={handleClick}
      data-test="filtersButton"
    >
      <FaFilter />
    </StyledFilterListButton>
  );
};
