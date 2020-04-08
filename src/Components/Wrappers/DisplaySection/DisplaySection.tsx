import React from "react";
import styled from "styled-components";
import PokemonList from "../../PokemonList/PokemonList";

const StyledWrapper = styled.section`
  margin: 100px 0 0 0;
`;

export interface DisplaySectionInterface {}

const DisplaySection: React.FC<DisplaySectionInterface> = () => {
  return (
    <StyledWrapper className="display">
      <PokemonList />
    </StyledWrapper>
  );
};

export default DisplaySection;
