import React from "react";
import styled from "styled-components";
import Filter from "../Filter/Filter";

const StyledWrapper = styled.ul`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const FiltersList = () => {
  return (
    <StyledWrapper className="filter__list">
      <Filter filter={"Waga"} />
      <Filter filter={"Wzrost"} />
      <Filter filter={"Typ"} />
    </StyledWrapper>
  );
};
