import React from "react";
import styled from "styled-components";
import PokemonList from "../../PokemonList/PokemonList";
import PaginationSection from "../PaginationSection/PaginationSection";

const StyledWrapper = styled.section`
  margin: 0 80px;
  border-radius: 50px;
  padding: 0 0 40px 0;
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
