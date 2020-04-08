import React from "react";
import styled from "styled-components";
import { SearchSection } from "./Wrappers/SearchSection/SearchSection";
import DisplaySection from "./Wrappers/DisplaySection/DisplaySection";

const StyledWrapper = styled.main`
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;

export const PokedexMain: React.FC = () => {
  return (
    <StyledWrapper className="main">
      <SearchSection />
      <DisplaySection />
    </StyledWrapper>
  );
};
