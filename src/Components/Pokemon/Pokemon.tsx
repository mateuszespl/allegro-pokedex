import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { fetchPokemonData } from "../../functions/fetchPokemonDataFunction";
import { PokemonDescription } from "../PokemonDescription/PokemonDescription";
import { PokemonShowcase } from "../PokemonShowcase/PokemonShowcase";
import { PokemonStats } from "../PokemonStats/PokemonStats";

const StyledWrapper = styled.li<{ type1: string; type2: string }>`
  width: 100%;
  display: flex;
  align-items: center;
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
`;

export interface PokemonInterface {
  pokemon: {
    name: string;
  };
  key: number;
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

const Pokemon: React.FC<PokemonInterface> = ({ pokemon, key }) => {
  const [pokemonData, setPokemonData] = useState<
    pokemonDataInterface | undefined
  >(undefined);

  useEffect(() => {
    fetchPokemonData(pokemon.name)
      .then((parsedData) => setPokemonData(parsedData))
      .catch(
        (err) => new Error(`Nie można pobrać danych o ${pokemon.name}. ${err}`)
      );
  }, [pokemon.name]);

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
          id={pokemon.name}
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
