import React from "react";
import {
  StyledLi,
  StyledPokemonListItemDescription,
} from "./PokemonListItemDescription.styled";

interface PokemonListItemDescriptionInterface {
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

export const PokemonListItemDescription: React.FC<PokemonListItemDescriptionInterface> = ({
  pokemonData,
}) => {
  const { height, weight, types } = pokemonData;
  return (
    <StyledPokemonListItemDescription className="description">
      <li className="description__height">Height: {height / 10}m</li>
      <li className="description__weight">Weight: {weight / 10}kg</li>
      {types.map(({ type }) => (
        <StyledLi
          type={type.name}
          key={type.name}
          className="description__type"
        >
          {type.name.toUpperCase()}
        </StyledLi>
      ))}
    </StyledPokemonListItemDescription>
  );
};
