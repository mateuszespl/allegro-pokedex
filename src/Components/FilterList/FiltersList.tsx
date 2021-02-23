import React, { useState } from "react";

import FiltersSubmitButton from "components/FilterList/FilterListSubmitButton";
import FilterListItem from "./FilterListItem";
import { StyledFilterList } from "./FiltersList.styled";

interface FilterListInterface {
  filterSectionVisible: boolean;
}

export const FilterList: React.FC<FilterListInterface> = ({
  filterSectionVisible,
}) => {
  const [filtersValue, setFiltersValue] = useState({
    type: "",
    height: 0,
    weight: 0,
  });
  return (
    <StyledFilterList
      className="filters"
      data-test="filters"
      filterSectionVisible={filterSectionVisible}
    >
      <ul>
        <FilterListItem
          handleChange={setFiltersValue}
          filtersValue={filtersValue}
          filter="Waga"
        />
        <FilterListItem
          handleChange={setFiltersValue}
          filtersValue={filtersValue}
          filter="Wzrost"
        />
        <FilterListItem
          handleChange={setFiltersValue}
          filtersValue={filtersValue}
          filter="Typ"
        />
        <FiltersSubmitButton filtersValue={filtersValue} />
      </ul>
    </StyledFilterList>
  );
};
