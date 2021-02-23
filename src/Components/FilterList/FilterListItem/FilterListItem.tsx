import React, { useState } from "react";

import FilterSwitchButton from "components/FilterList/FilterListItem/FilterListItemSwitchButton";
import FilterBox from "components/FilterList/FilterListItem/FilterListItemBox";
import { StyledFilterListItem } from "./FilterListItem.styled";

export type filtersValueType = {
  type: string;
  weight: number;
  height: number;
};

interface FilterListItemInterface {
  filter: string;
  handleChange: (filters: filtersValueType) => void;
  filtersValue: filtersValueType;
}

export const FilterListItem: React.FC<FilterListItemInterface> = ({
  filter,
  filtersValue,
  handleChange,
}) => {
  const [filterVisible, setFilterVisible] = useState(false);
  return (
    <StyledFilterListItem
      filterVisible={filterVisible}
      className="filter"
      data-test="filter"
    >
      <FilterSwitchButton
        filter={filter}
        filterVisible={filterVisible}
        setFilterVisible={setFilterVisible}
      />
      <FilterBox
        filtersValue={filtersValue}
        filter={filter}
        handleChange={handleChange}
      />
    </StyledFilterListItem>
  );
};
