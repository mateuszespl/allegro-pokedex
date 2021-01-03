import React from "react";

import { MdKeyboardArrowDown } from "react-icons/md";
import { StyledFilterSwitchButton } from "./FilterSwitchButton.styled";

interface FilterSwitchButtonInterface {
  filterApplied: boolean;
  setFilterVisible: (filterVisible: boolean) => any;
  filterVisible: boolean;
  filter: string;
  displayMode: string;
}

export const FilterSwitchButton: React.FC<FilterSwitchButtonInterface> = ({
  filterApplied,
  setFilterVisible,
  filterVisible,
  filter,
  displayMode,
}) => {
  return (
    <StyledFilterSwitchButton
      displayMode={displayMode}
      filterApplied={filterApplied}
      filterVisible={filterVisible}
      disabled={filterApplied || displayMode === "Filter"}
      onClick={() => setFilterVisible(!filterVisible)}
      className="filter__switch"
    >
      {filter}
      <MdKeyboardArrowDown />
    </StyledFilterSwitchButton>
  );
};
