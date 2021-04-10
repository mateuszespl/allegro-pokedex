import React from "react";
import { FaFilter } from "react-icons/fa";

import { StyledSearchBarFilterButton } from "./SearchBarFilterButton.styled";

interface SearchBarFilterButtonInterface {
  setFilterSectionVisibility: () => any;
  searchInputValue: string;
}

export const SearchBarFilterButton: React.FC<SearchBarFilterButtonInterface> = ({
  setFilterSectionVisibility,
  searchInputValue,
}) => {
  const handleClick = (e) => {
    e.preventDefault();
    setFilterSectionVisibility();
  };
  return (
    <StyledSearchBarFilterButton
      disabled={searchInputValue.length !== 0 ? true : false}
      onClick={handleClick}
      data-test="filtersButton"
    >
      <FaFilter />
    </StyledSearchBarFilterButton>
  );
};
