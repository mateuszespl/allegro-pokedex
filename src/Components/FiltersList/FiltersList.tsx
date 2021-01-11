import React from "react";

import Filter from "../Filter";
import FiltersSubmitButton from "components/FiltersSubmitButton";
import { StyledFiltersList } from "./FiltersList.styled";

export const FiltersList: React.FC = () => {
  return (
    <StyledFiltersList className="filter__list" data-test="filtersList">
      <Filter filter="Waga" />
      <Filter filter="Wzrost" />
      <Filter filter="Typ" />
      <FiltersSubmitButton />
    </StyledFiltersList>
  );
};
