import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  li {
    margin: 5px;
    list-style: none;
  }
`;

const StyledLi = styled.li<{ type: any }>`
  background: ${({ theme, type }) => {
    const index = Object.keys(theme.colors).findIndex(
      (colorKey) => colorKey === type
    );
    const color: any = Object.values(theme.colors)[index];
    return color;
  }};

  padding: 5px 10px;
  border-radius: 15px;
  color: ${({ theme }) => theme.colors.white};
  text-shadow: 1px 1px 1px ${({ theme }) => theme.colors.lightBlack};
  box-shadow: 0px 1px 5px -1px ${({ theme }) => theme.colors.lightBlack};
`;

export interface PokemonDescriptionInterface {
  pokemonData: {
    height: number;
    id: number;
    weight: number;
    types: Array<{
      type: {
        name: string;
      };
    }>;
  };
}

export const PokemonDescription: React.FC<PokemonDescriptionInterface> = ({
  pokemonData,
}) => {
  const { height, weight, types } = pokemonData;
  return (
    <StyledWrapper className="description">
      <li className="description__height">Wzrost: {height}</li>
      <li className="description__weight">Waga: {weight}</li>
      {types.map(({ type }) => (
        <StyledLi type={type.name} className="description__type">
          Typ: {type.name}
        </StyledLi>
      ))}
    </StyledWrapper>
  );
};
