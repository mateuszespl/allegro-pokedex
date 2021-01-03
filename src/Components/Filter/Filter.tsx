import React, { useState, useEffect } from "react";

import FilterBox from "../FilterBox";
import { FilterSwitchButton } from "../FilterSwitchButton/FilterSwitchButton";
import { FilterApplyButton } from "../FilterApplyButton/FilterApplyButton";
import { StyledFilter } from "./Filter.styled";

interface FilterInterface {
  filter: string;
  setCurrentFilters: (e: React.FormEvent<HTMLButtonElement>) => any;
  displayMode: string;
}

export const Filter: React.FC<FilterInterface> = ({
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
    <StyledFilter
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
    </StyledFilter>
  );
};
