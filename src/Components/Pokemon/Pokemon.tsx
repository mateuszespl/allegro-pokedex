import React from "react";

import { PokemonDescription } from "../PokemonDescription/PokemonDescription";
import { PokemonShowcase } from "../PokemonShowcase/PokemonShowcase";
import { PokemonStats } from "../PokemonStats/PokemonStats";
import { StyledPokemon } from "./Pokemon.styled";

interface PokemonInterface {
  key: number;
  pokemonData: pokemonDataInterface;
}

interface pokemonDataInterface {
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

export const Pokemon: React.FC<PokemonInterface> = ({ pokemonData, key }) => {
  return (
    <>
      {pokemonData && (
        <StyledPokemon
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
        </StyledPokemon>
      )}
    </>
  );
};
