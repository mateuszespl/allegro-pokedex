import React from "react";

import PokemonListItemDescription from "./PokemonListItemDescription";
import PokemonListItemShowcase from "./PokemonListItemShowcase";
import PokemonListItemStats from "./PokemonListItemStats";
import { StyledPokemon } from "./PokemonListItem.styled";

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

export const PokemonListItem: React.FC<PokemonInterface> = ({
  pokemonData,
  key,
}) => {
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
          <PokemonListItemShowcase pokemonData={pokemonData} />
          <PokemonListItemDescription pokemonData={pokemonData} />
          <PokemonListItemStats pokemonData={pokemonData} />
        </StyledPokemon>
      )}
    </>
  );
};
