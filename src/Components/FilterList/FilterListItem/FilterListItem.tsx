import React, { useState, useEffect } from "react";

import FilterSwitchButton from "components/FilterList/FilterListItem/FilterListItemSwitchButton";
import FilterApplyButton from "components/FilterList/FilterListItem/FilterListItemApplyButton";
import FilterBox from "components/FilterList/FilterListItem/FilterListItemBox";
import { StyledFilterListItem } from "./FilterListItem.styled";

interface FilterListItemInterface {
  filter: string;
  setCurrentFilters: (e: React.FormEvent<HTMLButtonElement>) => any;
  displayMode: string;
}

export const FilterListItem: React.FC<FilterListItemInterface> = ({
  filter,
  setCurrentFilters,
  displayMode,
}) => {
  const [filterVisible, setFilterVisible] = useState<boolean>(false);
  const [filterApplied, setFilterApplied] = useState<boolean>(false);

  const handleClick = (e) => {
    e.preventDefault();
    setCurrentFilters(e);
    setFilterVisible(!filterVisible);
    setFilterApplied(!filterApplied);
  };

  useEffect(() => {
    if (displayMode === "Filter") {
      setFilterApplied(false);
    }
  }, [displayMode]);
  return (
    <StyledFilterListItem
      filterApplied={filterApplied}
      filterVisible={filterVisible}
      className="filter"
      data-test="filter"
    >
      <FilterSwitchButton
        displayMode={displayMode}
        filter={filter}
        filterApplied={filterApplied}
        filterVisible={filterVisible}
        setFilterVisible={setFilterVisible}
      />
      <FilterBox filter={filter} />
      <FilterApplyButton filter={filter} handleClick={handleClick} />
    </StyledFilterListItem>
  );
};
