import React from "react";

import FiltersList from "components/FiltersList";
import { StyledFilterList } from "./FiltersList.styled";

interface FilterListInterface {
  filterSectionVisible: boolean;
}

export const FilterList: React.FC<FilterListInterface> = ({
  filterSectionVisible,
}) => {
  return (
    <StyledFilterList
      className="filters"
      data-test="filters"
      filterSectionVisible={filterSectionVisible}
    >
      <ul></ul>
      <FiltersList />
    </StyledFilterList>
  );
};
