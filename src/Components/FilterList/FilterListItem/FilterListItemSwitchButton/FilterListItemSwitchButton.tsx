import React from "react";

import { MdKeyboardArrowDown } from "react-icons/md";
import { StyledFilterListItemSwitchButton } from "./FilterListItemSwitchButton.styled";

interface FilterListItemSwitchButtonInterface {
  filterApplied: boolean;
  setFilterVisible: (filterVisible: boolean) => any;
  filterVisible: boolean;
  filter: string;
  displayMode: string;
}

export const FilterListItemSwitchButton: React.FC<FilterListItemSwitchButtonInterface> = ({
  filterApplied,
  setFilterVisible,
  filterVisible,
  filter,
  displayMode,
}) => {
  return (
    <StyledFilterListItemSwitchButton
      displayMode={displayMode}
      filterApplied={filterApplied}
      filterVisible={filterVisible}
      disabled={filterApplied || displayMode === "Filter"}
      onClick={() => setFilterVisible(!filterVisible)}
      className="filter__switch"
    >
      {filter}
      <MdKeyboardArrowDown />
    </StyledFilterListItemSwitchButton>
  );
};
