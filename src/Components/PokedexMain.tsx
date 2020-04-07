import React from "react";
import styled from "styled-components";
import { SearchSection } from "./Wrappers/SearchSection/SearchSection";

const StyledWrapper = styled.main`
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;

export const PokedexMain: React.FC = () => {
  return (
    <StyledWrapper>
      <SearchSection />
    </StyledWrapper>
  );
};
