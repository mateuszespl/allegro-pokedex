import React from "react";
import styled from "styled-components";
import { PokemonDescription } from "../PokemonDescription/PokemonDescription";
import { PokemonShowcase } from "../PokemonShowcase/PokemonShowcase";
import { PokemonStats } from "../PokemonStats/PokemonStats";

const StyledWrapper = styled.li<{ type1: string; type2: string }>`
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-around;
  margin: 10px 0;
  border-radius: 45px;
  padding: 20px;
  background: ${({ theme, type1, type2 }) => {
    if (type2 !== undefined) {
      const index1 = Object.keys(theme.colors).findIndex(
        (colorKey) => colorKey === type1
      );
      const color1: any = Object.values(theme.colors)[index1];
      const index2 = Object.keys(theme.colors).findIndex(
        (colorKey) => colorKey === type2
      );
      const color2: any = Object.values(theme.colors)[index2];
      return `linear-gradient(45deg, ${color1}, ${color2})`;
    } else {
      const index1 = Object.keys(theme.colors).findIndex(
        (colorKey) => colorKey === type1
      );
      const color1: any = Object.values(theme.colors)[index1];
      return color1;
    }
  }};
  box-shadow: 0px 0px 3px 3px ${({ theme }) => theme.colors.lightBlack};

  ${({ theme }) => theme.media.tablet} {
    flex-wrap: wrap;
  }
`;

export interface PokemonInterface {
  key: number;
  pokemonData: pokemonDataInterface;
}

export interface pokemonDataInterface {
  name: string;
  height: number;
  id: number;
  weight: number;
  sprites: {
    front_default: string;
  };
  types: Array<{
    type: {
      name: string;
    };
  }>;
  stats: Array<{
    base_stat: number;
    stat: {
      name: string;
    };
  }>;
}

const Pokemon: React.FC<PokemonInterface> = ({ pokemonData, key }) => {
  return (
    <>
      {pokemonData ? (
        <StyledWrapper
          key={key}
          type1={pokemonData.types[0].type.name}
          type2={
            pokemonData.types[1] ? pokemonData.types[1].type.name : undefined
          }
          className={`pokemon`}
          id={pokemonData.name}
        >
          <PokemonShowcase pokemonData={pokemonData} />
          <PokemonDescription pokemonData={pokemonData} />
          <PokemonStats pokemonData={pokemonData} />
        </StyledWrapper>
      ) : undefined}
    </>
  );
};

export default Pokemon;
