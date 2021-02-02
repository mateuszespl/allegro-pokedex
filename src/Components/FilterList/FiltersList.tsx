import React from "react";

import Filter from "components/Filter";
import FiltersSubmitButton from "components/FilterList/FilterListSubmitButton";
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
        <Filter filter="Waga" />
        <Filter filter="Wzrost" />
        <Filter filter="Typ" />
        <FiltersSubmitButton />
      </ul>
    </StyledFilterList>
  );
};
