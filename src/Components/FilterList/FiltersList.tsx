import React from "react";

import FiltersSubmitButton from "components/FilterList/FilterListSubmitButton";
import FilterListItem from "./FilterListItem";
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
      <ul>
        <FilterListItem filter="Waga" />
        <FilterListItem filter="Wzrost" />
        <FilterListItem filter="Typ" />
        <FiltersSubmitButton />
      </ul>
    </StyledFilterList>
  );
};
