import React from "react";

import { StyledFilterApplyButton } from "./FilterApplyButton.styled";

interface FilterApplyButtonInterface {
  filter: string;
  handleClick: (e: React.FormEvent<HTMLButtonElement>) => any;
}

export const FilterApplyButton: React.FC<FilterApplyButtonInterface> = ({
  filter,
  handleClick,
}) => {
  return (
    <StyledFilterApplyButton
      value={filter}
      onClick={handleClick}
      className="filter__button"
      data-test="filterApplyButton"
    >
      Zastosuj filtr
    </StyledFilterApplyButton>
  );
};
