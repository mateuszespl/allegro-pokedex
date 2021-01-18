import React from "react";

import FiltersList from "components/FiltersList";
import { StyledWFiltersSection } from "./FiltersSection.styled";

interface FiltersSectionInterface {
  filterSectionVisible: boolean;
}

export const FiltersSection: React.FC<FiltersSectionInterface> = ({
  filterSectionVisible,
}) => {
  return (
    <StyledWFiltersSection
      className="filters"
      data-test="filters"
      filterSectionVisible={filterSectionVisible}
    >
      <FiltersList />
    </StyledWFiltersSection>
  );
};
