import React from "react";
import styled from "styled-components";
import Filter from "../Filter/Filter";
import FiltersSubmitButton from "../FiltersSubmitButton/FiltersSubmitButton";

const StyledWrapper = styled.ul`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const FiltersList = () => {
  return (
    <StyledWrapper className="filter__list" data-test="filtersList">
      <Filter filter="Waga" />
      <Filter filter="Wzrost" />
      <Filter filter="Typ" />
      <FiltersSubmitButton />
    </StyledWrapper>
  );
};
