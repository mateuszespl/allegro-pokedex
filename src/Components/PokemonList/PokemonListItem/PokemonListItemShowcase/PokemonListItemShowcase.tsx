import React from "react";

import { StyledPokemonListItemShowcase } from "./PokemonListItemShowcase.styled";

interface PokemonListItemShowcaseInterface {
  pokemonData: {
    name: string;
    sprites: {
      front_default: string;
    };
    id: number;
  };
}

export const PokemonListItemShowcase: React.FC<PokemonListItemShowcaseInterface> = ({
  pokemonData,
}) => {
  const {
    name,
    sprites: { front_default: img },
    id,
  } = pokemonData;
  return (
    <StyledPokemonListItemShowcase pokeId={id} className="showcase">
      <header className="showcase__name">
        <h1>{name.toUpperCase()}</h1>
      </header>
      <div className="showcase__img">
        {img && <img src={img} alt={`${name} avatar`} />}
      </div>
    </StyledPokemonListItemShowcase>
  );
};
