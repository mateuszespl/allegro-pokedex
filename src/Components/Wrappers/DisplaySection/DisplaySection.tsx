import React from "react";
import styled from "styled-components";
import PokemonList from "../../PokemonList/PokemonList";
import PaginationSection from "../PaginationSection/PaginationSection";

const StyledWrapper = styled.section`
  width: 850px;
  padding: 50px;
  border-radius: 50px;
  margin: 0 0 50px 0;
  background: ${({ theme }) => theme.colors.darkWhite};
  position: relative;
`;

const DisplaySection: React.FC = () => {
  return (
    <StyledWrapper className="display">
      <PokemonList />
      <PaginationSection />
    </StyledWrapper>
  );
};

export default DisplaySection;
