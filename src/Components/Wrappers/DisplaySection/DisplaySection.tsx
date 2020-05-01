import React from "react";
import styled from "styled-components";
import PokemonList from "../../PokemonList/PokemonList";
import PaginationSection from "../PaginationSection/PaginationSection";

const StyledWrapper = styled.section`
  width: 850px;
  padding: 50px;
  border-radius: 50px;
  margin: 0 0 20px 0;
  background: ${({ theme }) => theme.colors.darkWhite};
  position: relative;

  ${({ theme }) => theme.media.tablet} {
    width: 600px;
  }

  ${({ theme }) => theme.media.smallTablet} {
    width: 470px;
  }

  ${({ theme }) => theme.media.largeMobile} {
    width: 360px;
    padding: 15px 20px;
  }

  ${({ theme }) => theme.media.mobile} {
    width: 300px;
    padding: 10px 15px;
  }
`;

const DisplaySection: React.FC = () => {
  return (
    <StyledWrapper className="display" data-test="display">
      <PokemonList />
      <PaginationSection />
    </StyledWrapper>
  );
};

export default DisplaySection;
