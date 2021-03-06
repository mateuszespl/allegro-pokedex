import React from "react";

import { StyledPokemonListItemShowcase } from "./PokemonListItemShowcase.styled";

interface PokemonListItemShowcaseInterface {
  pokemonData: {
    name: string;
    sprites: {
      front_default: string;
    };
    id: number;
    types: Array<{
      type: {
        name: string;
      };
    }>;
  };
}

export const PokemonListItemShowcase: React.FC<PokemonListItemShowcaseInterface> = ({
  pokemonData,
}) => {
  const {
    name,
    sprites: { front_default: img },
    id,
    types,
  } = pokemonData;
  return (
    <StyledPokemonListItemShowcase
      type={types[0].type.name}
      pokeId={id}
      className="showcase"
    >
      <span>#{id}</span>
      <div className="showcase__img">
        {img && <img src={img} alt={`${name} avatar`} />}
      </div>
      <header className="showcase__name">
        <h1>{name.toUpperCase()}</h1>
      </header>
    </StyledPokemonListItemShowcase>
  );
};
