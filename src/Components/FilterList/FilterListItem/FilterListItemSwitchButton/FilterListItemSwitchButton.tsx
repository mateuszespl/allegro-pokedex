import React from "react";

import { MdKeyboardArrowDown } from "react-icons/md";
import { StyledFilterListItemSwitchButton } from "./FilterListItemSwitchButton.styled";

interface FilterListItemSwitchButtonInterface {
  setFilterVisible: (filterVisible: boolean) => void;
  filterVisible: boolean;
  filter: string;
}

export const FilterListItemSwitchButton: React.FC<FilterListItemSwitchButtonInterface> = ({
  setFilterVisible,
  filterVisible,
  filter,
}) => {
  return (
    <StyledFilterListItemSwitchButton
      filterVisible={filterVisible}
      onClick={() => setFilterVisible(!filterVisible)}
      className="filter__switch"
    >
      {filter}
      <MdKeyboardArrowDown />
    </StyledFilterListItemSwitchButton>
  );
};
