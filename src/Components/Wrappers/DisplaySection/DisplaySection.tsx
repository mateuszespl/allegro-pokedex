import React from "react";

import PokemonList from "../../PokemonList";
import PaginationSection from "../PaginationSection";
import { StyledDisplaySection } from "./DisplaySection.styled";

export const DisplaySection: React.FC = () => {
  return (
    <StyledDisplaySection className="display" data-test="display">
      <PokemonList />
      <PaginationSection />
    </StyledDisplaySection>
  );
};
