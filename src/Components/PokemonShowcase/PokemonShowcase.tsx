import React from "react";

import { StyledPokemonShowcase } from "./PokemonShowcase.styled";

interface PokemonShowcaseInterface {
  pokemonData: {
    name: string;
    sprites: {
      front_default: string;
    };
    id: number;
  };
}

export const PokemonShowcase: React.FC<PokemonShowcaseInterface> = ({
  pokemonData,
}) => {
  const {
    name,
    sprites: { front_default: img },
    id,
  } = pokemonData;
  return (
    <StyledPokemonShowcase pokeId={id} className="showcase">
      <header className="showcase__name">
        <h1>{name.toUpperCase()}</h1>
      </header>
      <div className="showcase__img">
        <img src={img} alt={`${name} avatar`} />
      </div>
    </StyledPokemonShowcase>
  );
};
