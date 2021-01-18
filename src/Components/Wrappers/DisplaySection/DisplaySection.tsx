import React from "react";

import PokemonList from "components/PokemonList";
import PaginationSection from "components/Wrappers/PaginationSection";
import { StyledDisplaySection } from "./DisplaySection.styled";

export const DisplaySection: React.FC = () => {
  return (
    <StyledDisplaySection className="display" data-test="display">
      <PokemonList />
      <PaginationSection />
    </StyledDisplaySection>
  );
};
