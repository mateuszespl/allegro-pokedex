import React from "react";
import styled from "styled-components";
import { SearchSection } from "./Wrappers/SearchSection/SearchSection";
import DisplaySection from "./Wrappers/DisplaySection/DisplaySection";
import FiltersSection from "./Wrappers/FiltersSection/FiltersSection";

const StyledWrapper = styled.main`
  position: relative;
  width: 100vw;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.lightGrey};
`;

export const PokedexMain: React.FC = () => {
  return (
    <StyledWrapper id="main" className="main">
      <SearchSection />
      <FiltersSection />
      <DisplaySection />
    </StyledWrapper>
  );
};
