import React, { useEffect, useState } from "react";

import PokemonListItemDescription from "./PokemonListItemDescription";
import PokemonListItemShowcase from "./PokemonListItemShowcase";
import PokemonListItemStats from "./PokemonListItemStats";
import { StyledPokemon } from "./PokemonListItem.styled";
import { fetchPokemonData } from "functions/fetchPokemonDataFunction";

interface PokemonInterface {
  key: number;
  name: string;
  url: string;
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
  name: pokemonName,
}) => {
  useEffect(() => {
    // @ts-ignore
    fetchPokemonData(pokemonName).then((data) => setPokemonData(data));
  }, [pokemonName]);
  const [pokemonData, setPokemonData] = useState(undefined);
  return (
    <>
      {pokemonData && (
        <StyledPokemon
          key={pokemonName}
          type1={pokemonData.types[0].type.name}
          type2={pokemonData.types[1] && pokemonData.types[1].type.name}
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
