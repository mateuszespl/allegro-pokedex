import React from "react";

import Filter from "../Filter";

import { StyledFiltersList } from "./FiltersList.styled";

export const FiltersList: React.FC = () => {
  return (
    <StyledFiltersList className="filter__list" data-test="filtersList">
      <Filter filter="Waga" />
      <Filter filter="Wzrost" />
      <Filter filter="Typ" />
      <button>Submit</button>
    </StyledFiltersList>
  );
};
