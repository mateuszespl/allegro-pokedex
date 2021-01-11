import React from "react";
import { FaFilter } from "react-icons/fa";

import { StyledFiltersButton } from "./FiltersButton.styled";

interface FiltersButtonInterface {
  setFilterSectionVisibility: () => any;
  filtersCount: number;
  searchInputValue: string;
}

export const FiltersButton: React.FC<FiltersButtonInterface> = ({
  setFilterSectionVisibility,
  filtersCount,
  searchInputValue,
}) => {
  const handleClick = (e) => {
    e.preventDefault();
    setFilterSectionVisibility();
  };
  return (
    <StyledFiltersButton
      disabled={searchInputValue.length !== 0 ? true : false}
      filtersCount={filtersCount}
      onClick={handleClick}
      data-test="filtersButton"
    >
      <FaFilter />
    </StyledFiltersButton>
  );
};
