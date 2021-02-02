import React from "react";

import { StyledFilterListItemApplyButton } from "./FilterListItemApplyButton.styled";

interface FilterListItemApplyButtonInterface {
  filter: string;
  handleClick: (e: React.FormEvent<HTMLButtonElement>) => any;
}

export const FilterApplyButton: React.FC<FilterListItemApplyButtonInterface> = ({
  filter,
  handleClick,
}) => {
  return (
    <StyledFilterListItemApplyButton
      value={filter}
      onClick={handleClick}
      className="filter__button"
      data-test="filterApplyButton"
    >
      Zastosuj filtr
    </StyledFilterListItemApplyButton>
  );
};
